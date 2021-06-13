function binaryClock(time) {
    let binaryTime = [], length = [2, 4, 0, 3, 4, 0, 3, 4], result = [];
    time.split('').forEach((digit, index) => {
        if (digit != ':') {
            binaryTime.push((+digit).toString(2).padStart(length[index], 0));
        }
    })
    
    binaryTime = binaryTime.map(val => val.padStart(4, " "))
    for (let i = 0; i < 4; i++) {
        result.push(binaryTime.map(val => val[i]))
    }
    console.log(result)
    result = result.map(row => row.reduce((pas, cur) => cur != " " ? (pas + cur) : (pas)))
    console.log(result)
}
binaryClock("18:57:31")
binaryClock("10:31:00")

module.exports = {
    binaryClock
}