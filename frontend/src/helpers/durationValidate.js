const videoLengthValidate = (duration) => {

    const part = duration.split(":");
    let first = parseInt(part[0], 10);
    let second = parseInt(part[1], 10);
    let third = parseInt(part[2], 10);

    if(first < 10) first = ("0" + first).slice(-2);
    if(second < 10) second = ("0" + second).slice(-2);
    if(third < 10) third = ("0" + third).slice(-2);
    
    if(isNaN(third)) return [first, second].join(":");
    else return [first, second, third].join(":");
}

export default videoLengthValidate;