const getRandomTemperature = (min, max) => {
    const randomFraction = Math.random();
    const randomTemperature = randomFraction * (max - min) + min;
    const roundedTemperature = parseFloat(randomTemperature.toFixed(2));
  
    return roundedTemperature;
};

export default getRandomTemperature