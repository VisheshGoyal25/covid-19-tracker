import React, { Component } from 'react';
import Image from './images/COVID-19.png';
 class App2 extends Component {
    render() {
        return (
            <div>
                <div ><h2>Home</h2></div>
             <p>  <b> Coronavirus disease 2019 (COVID-19)</b> is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). It was first identified in December 2019 in Wuhan, Hubei, China, and has resulted in an ongoing pandemic. The first confirmed case has been traced back to 17 November 2019 in Hubei. As of 18 July 2020, more than 14.1 million cases have been reported across 188 countries and territories, resulting in more than 597,000 deaths. More than 7.92 million people have recovered.

Common symptoms include fever, cough, fatigue, shortness of breath, and loss of smell and taste. While the majority of cases result in mild symptoms, some progress to acute respiratory distress syndrome (ARDS) possibly precipitated by cytokine storm, multi-organ failure, septic shock, and blood clots.The time from exposure to onset of symptoms is typically around five days, but may range from two to fourteen days.
The virus is primarily spread between people during close contact, most often via small droplets produced by coughing, sneezing, and talking. The droplets usually fall to the ground or onto surfaces rather than travelling through air over long distances. Transmission may also occur through smaller droplets that are able to stay suspended in the air for longer periods of time.
 Less commonly, people may become infected by touching a contaminated surface and then touching their face.</p>
<p align ="center"><img src={Image} alt="COVID-19" /></p>
<h2>Discription:</h2>
<p>Here you will easily find the latest corona cases of the any country You want .<br />The Satistics are well shown using the Pie Chart which
    helps you to get a clear picture regarding to the current situation of that country.<br />
    Along with this you can easily check out latest news regading the covid-19.
</p>
 </div>
        )
    }
}

export default App2
