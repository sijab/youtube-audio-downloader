const youTubeUrlValidation = (url) => {
    const reg = new RegExp("^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+", "gm");
    return reg.test(url);
}

export default youTubeUrlValidation;