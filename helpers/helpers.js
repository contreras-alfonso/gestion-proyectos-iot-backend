import fetch from 'node-fetch'
import moment from 'moment-timezone';

const getRandomTemperature = async () => {
    const min = await getTemperature();
    const max = Number(min)+0.50;
    const randomFraction = Math.random();
    const randomTemperature = randomFraction * (max - min) + min;
    const roundedTemperature = parseFloat(randomTemperature).toFixed(2);
    return roundedTemperature;
};

const getRandomHumedadSuelo = (min=970,max=990) => {
    const randomFraction = Math.random();
    const randomTemperature = randomFraction * (max - min) + min;
    const roundedTemperature = randomTemperature.toFixed(0).toString()+".00";
    return roundedTemperature;
};

const getRandomHumedadAmbiente = () => {
    const min = 66;
    const max = 69;
    const randomFraction = Math.random();
    const randomTemperature = randomFraction * (max - min) + min;
    const roundedTemperature = parseFloat(randomTemperature).toFixed(2);
    // const roundedTemperature = parseFloat(randomTemperature);
    return roundedTemperature.toString();
};

const getTemperature = async () => {
    const responseWeather = await fetch(process.env.RUTA_WEATHER);
    const dataWeather = await responseWeather.json();
    const temperature = dataWeather.temp_c;
    return temperature;
}

const getHora = async () => {
    const responseTime = await fetch(process.env.RUTA_TIME);
    const dataTime = await responseTime.json();
    const tiempoSplit = dataTime.datetime.split('T')
    const hora = tiempoSplit[1].split('.')[0]
    return hora;
}

const getFecha = async () => {
    const responseTime = await fetch(process.env.RUTA_TIME);
    const dataTime = await responseTime.json();
    const tiempoSplit = dataTime.datetime.split('T')
    const fecha = tiempoSplit[0]
    return fecha;
}

const haPasadoAlMenosUnaHora = (fecha, hora) => {
  
  if (!fecha || !hora) {
    console.error('Fecha u hora no proporcionadas.');
    return false;
  }

 
  const fechaCompletaString = `${hora}T${fecha}`;
  const fechaCompleta = moment.tz(fechaCompletaString, 'America/Lima');

  if (!fechaCompleta.isValid()) {
    console.error(`Fecha u hora inválida: ${hora} ${fecha}`);
    return false;
  }

  const fechaActual = moment.tz('America/Lima');
  const diferenciaEnHoras = fechaActual.diff(fechaCompleta, 'hours');

  const diferenciaEnMinutos = 60 - fechaActual.diff(fechaCompleta, 'minutes');

  return {diferenciaEnHoras,diferenciaEnMinutos};
  }


export{
    getRandomTemperature,
    getTemperature,
    getHora,
    getFecha,
    getRandomHumedadSuelo,
    getRandomHumedadAmbiente,
    haPasadoAlMenosUnaHora,
}