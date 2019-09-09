var number = function (busStops) {
    let people = busStops[0][0]
    for (let i = 1; i < busStops.length; i++) {
        people += busStops[i][0]
        people -= busStops[i][1]
    }
    return people
}

console.log(number)