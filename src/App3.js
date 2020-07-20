import React, { Component } from 'react'
import Image from './images/Vishesh.jpg'
import Styles from './App3.module.css'
 class App3 extends Component {
    render() {
        return (
            <div>
                <h2>Developer Information</h2>
                <p className={Styles.img} >
                <img src={Image} alt="Developer"  height="500 px" width="400px"  ></img>
                <article className={Styles.art}>
                <h2 >NAME:Vishesh Goyal</h2>
                <h2>College : Indian Institute Of Information Technology,Sonepat(Mentor:NIT-KKR)</h2>
                <h4>(2018-2022)</h4>
                
                <h2 >Contact Details:</h2>
                <h3>Gmail: "vishesh_21812004@nitkkr.ac.in"</h3>
                <h3>Linkedin: "https://www.linkedin.com/in/vishesh-goyal-0575221a0/" </h3>
                </article>
                </p>
            </div>
        )
        }
    }
export default App3;