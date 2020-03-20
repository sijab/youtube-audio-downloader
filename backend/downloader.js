const ytdl = require("ytdl-core");
const fs = require("fs-extra");
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);


const getVideoInfo = (url) => {
    return new Promise((resolve, reject) => {
        ytdl.getInfo(url, (err, info) => {
            if (err) reject(err);
            else resolve({
                id: info.video_id,
                title: info.title,
                thumbnail: info.player_response.videoDetails.thumbnail.thumbnails[3].url,
                duration: info.player_response.videoDetails.lengthSeconds,
                url: url
            })
        })
    })
}

const downloader = async (url_tab) => {
    const makeFolder = () => {
        fs.removeSync("./audioFiles/");
        
        if(!fs.existsSync("./audioFiles/")) {
            fs.mkdirSync("./audioFiles/");
        }
    }

    makeFolder();

    const getAudioTitle = (adr) => {
        const promiseArray = [];
        for (let i = 0; i < adr.length; i++) {
            promiseArray.push(
                new Promise((resolve, reject) => {
                    ytdl.getInfo(adr[i], (err, info) => {
                        if (err) reject(err);
                        else resolve(info.title);
                    })
                })
            )
        }
        return Promise.all(promiseArray);
    }

    const downloadAudio = async (tab) => {
        const audioTitleTab = await getAudioTitle(tab);

        return new Promise((resolve, reject) => {
            for (let i = 0; i < tab.length; i++) {
                const stream = ytdl(tab[i], { 
                    quality: 'highestaudio' 
                })
        
            const start = Date.now();
            ffmpeg(stream)
                .audioBitrate(128)
                .save(`${__dirname}/audioFiles/${audioTitleTab[i]}.mp3`)
                .on('end', () => {
                    console.log(`\ndone, thanks - ${(Date.now() - start) / 1000}s`);
                    if(i == audioTitleTab.length - 1) resolve(true);
            });
            }
        })
    }

    const makeZipPath = async (tab) => {
        const downloadEnd = await downloadAudio(tab);
        let zipArray = [];

        return new Promise((resolve, reject) => {
            if(downloadEnd) {
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
    
    const zipPath = await makeZipPath(url_tab);
    return zipPath;
}

module.exports = {
    getVideoInfo,
    downloader
}
