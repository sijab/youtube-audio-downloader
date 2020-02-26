const youtubedl = require("youtube-dl");
const fs = require("fs");
const extractAudio = require("ffmpeg-extract-audio");
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require("fluent-ffmpeg");

ffmpeg.setFfmpegPath(ffmpegPath);

const getVideoInfo = (url) => {
    return new Promise((resolve, reject) => {
        youtubedl(url, (err, info) => {
            if (err) reject(err);
            else resolve({
                id: info.id,
                title: info.title,
                thumbnail: info.thumbnail,
                duration: info.duration,
                url: url
            })
        })
    })
}


const downloader = async (url_tab) => {

    const getVideoTitle = (adr) => {
        const promiseArray = [];
        for (let i = 0; i < adr.length; i++) {
            promiseArray.push(
                new Promise((resolve, reject) => {
                    youtubedl(adr[i], (err, info) => {
                        if (err) reject(err);
                        else resolve(info.title);
                    })
                })
            )
        }
        return Promise.all(promiseArray);
    }

    const downloadAndConvertAudio = async () => {
        const tab = await getVideoTitle(url_tab);

        return new Promise((resolve, reject) => {
            tab.forEach((value, index, array) => {
                const video = youtubedl(url_tab[index], ['--format=18']);
    
                video.pipe(fs.createWriteStream(`${__dirname}/download/${value}.mp4`, { flags: 'a' }))
    
                video.on('end', function () {
                    extractAudio({
                        input: `${__dirname}/download/${value}.mp4`,
                        output: `${__dirname}/audioFiles/${value}.mp3`
                    }).then(() => {
                        fs.unlinkSync(`${__dirname}/download/${value}.mp4`);
                        console.log(`${__dirname}/audioFiles/${value}.mp3 is converted     ${index}`);
                        if (index === array.length - 1) resolve(true);
                    });
                })
            })
        })
    }

    const makeZipPath = async () => {
        const downloadEnd = await downloadAndConvertAudio();
        let zipArray = [];

        return new Promise((resolve, reject) => {
            if(!!downloadEnd) {
                fs.readdir(`${__dirname}/audioFiles`, (err, files) => {
                    if(err) throw err;
    
                    zipArray = files.map(file => {
                        return {
                            path: `${__dirname}/audioFiles/${file}`, name: `/MP3/${file}`
                        }
                    })
                    resolve(zipArray);
                })
            }
        })
    }
    
    
    const zipPath = await makeZipPath();
    
    return new Promise((resolve) => {
        resolve(zipPath);
    })

}

module.exports = {
    getVideoInfo,
    downloader
}
