const videoLengthValidate = (seconds) => {
    return new Date(0, 0, 0, 0, 0, seconds, 0).toString().split(" ")[4];
}

export default videoLengthValidate;