import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData} from './api/index';
import styles from './App.module.css';



class App extends React.Component {
  state = {
    data: {},
    
    country:'',
  }
     
  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }
 
  handleCountryChange = async (country) => {
    const data =  await fetchData(country);
   // console.log(country)
    this.setState({ data, country: country });
  }

  render() {
    const { data } = this.state;
    const {country}=this.state;
 
    
    return (
     
        <div ><h2 align="left">COVID-19 Cases</h2>
         <div className={styles.container}>
         <CountryPicker handleCountryChange={this.handleCountryChange}  />
        <Cards data={data}  />
           
        <Chart data={data} country={country}  /> 
        </div>
      </div>
    );
  }
}

export default App;