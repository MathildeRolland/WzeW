/* eslint-disable linebreak-style */
/* eslint-disable indent */
export const convertDatetimeToHour = (dt) => {
    const date = new Date(dt * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();

    const formatedTime = `${hours}:${minutes.substr(-2)}`;
    return formatedTime;
};

export const getNextTwelveHoursWeathers = (hourlyWeatherArr) => {
    let index = 0;

    // Return new array with an unique index
    const indexedHourlyArray = hourlyWeatherArr.map(
        (element) => {
            index += 1;
            return {
            id: index,
            temp: element.temp,
            time: convertDatetimeToHour(element.dt),
            icon: `http://openweathermap.org/img/w/${element.weather[0].icon}.png`,
            humidity: element.humidity,
            };
        },
    );

    // Only retrieve the 12 first hours forecast
    const twelveIndexedHours = [];
    for (let i = 0; i < 12; i += 1) {
        twelveIndexedHours.push(indexedHourlyArray[i]);
    }

    return twelveIndexedHours;
};
