import React,{useState} from 'react'
import './nav.css'
import Image from './images/image.png';
import App from './App.js'
import App1 from './App1.js'
import App2 from './App2.js'
import App3 from './App3.js'
function Main() {
          const [Page, setPage] = useState(<App2 />)
    return (
        <div >
            <div ><img src={Image} alt="COVID-19"  /> </div>
            <i><h2>This too shall pass: Stay home stay safe</h2></i>
            <nav className="navbar"> 
       <ul className="nav-links">
       <li className="nav-link " onClick={()=>setPage(<App2 />)}> Home </li>
        <li className="nav-link" onClick={()=>setPage(<App />)}> COVID-19 Cases</li>
        <li className="nav-link " onClick={()=>setPage(<App1 />)}>Latest  News</li>
        
        <li className="nav-link" onClick={()=>setPage(<App3 />)}>Developer Info</li>
       </ul>
       </nav>
           {Page }
        </div>
    )
}

export default Main
