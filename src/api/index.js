import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
       
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};


export const fetchNews = async () => {
  try {
    const  {data:{news}}= await axios.get(`https://cryptic-ravine-96718.herokuapp.com`);
      console.log(news)
    return news;
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);
      
    return countries;
  } catch (error) {
    return error;
  }
};
