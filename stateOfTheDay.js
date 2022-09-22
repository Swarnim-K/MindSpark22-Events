const timeOfTheDay = new Date()
const hourOFTheDay = timeOfTheDay.getHours()

const stateOfTheDay = function () {
    if (hourOFTheDay >= 6 && hourOFTheDay <= 17) {
        return "Morning";
    } else if (hourOFTheDay > 17 && hourOFTheDay <= 19) {
        return "Evening";
    } else if (hourOFTheDay > 19 && hourOFTheDay <= 24) {
        return "Night";
    } else if (hourOFTheDay >= 0 && hourOFTheDay < 6) {
        return "Night";
    }
}

// console.log(stateOfTheDay());
module.exports = stateOfTheDay;