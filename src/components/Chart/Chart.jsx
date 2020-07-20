import React  from 'react';
import { Pie} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

  const PieChart = (
    confirmed ? (
      <Pie
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
             label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: true },
     
          title: { display: true, text:( country!=='') ? ("Current statistics in "+country):("Global statistics") },
        }}
      />
    ) : null
  );

  

  return (
    <div className={styles.container}>
      {
       PieChart 
      }
    </div>
  );
};

export default Chart;
