const youtubedl = require("youtube-dl");
const fs = require("fs");
const extractAudio = require("ffmpeg-extract-audio");
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require("fluent-ffmpeg");
const fetch = require("node-fetch");

ffmpeg.setFfmpegPath(ffmpegPath);



const url_tab = [
    "https://www.youtube.com/watch?v=OHU80BsabxQ",
    "https://www.youtube.com/watch?v=wGNCNMf8SWw"
];

const getVideoInfo = (url) => {
    return new Promise((resolve, reject) => {
        youtubedl.getInfo(url, (err, info) => {
            if(err) reject(err);
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


const downloader = () => {

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


        tab.forEach((value, index, array) => {
            const video = youtubedl(url_tab[index], ['--format=18']);

            let pos = 0;
            let progress = 0;
            let size = 0;

            video.on('info', function (info) {
                size = info.size;

            })

            video.on('data', (chunk) => {
                pos += chunk.length;
                if (size) {
                    progress = ((pos / size) * 100).toFixed(2);
                }
                console.log(`${__dirname}/download/${value}.mp4 ${progress}`);
            })

            video.pipe(fs.createWriteStream(setPath("/download", value, "mp4"), { flags: 'a' }))

            video.on('end', function () {
                extractAudio({
                    input: setPath("/download", value, "mp4"),
                    output: setPath("/audioFiles", value, "mp3")
                }).then(() => {
                    fs.unlinkSync(setPath("/download", value, "mp4"));
                    console.log(`${__dirname}/audioFiles/${value}.mp3 is converted     ${index}`);
                });
            })

        })

    }

    downloadAndConvertAudio();

}

module.exports = {
    getVideoInfo,
    downloader
}
