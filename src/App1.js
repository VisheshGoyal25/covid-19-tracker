import React, { Component } from 'react'
import News from './components1/News'
import { fetchNews} from './api/index';
import {BeatLoader} from 'react-spinners';
 class App1 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              data:[],
              loading:true
         }
     }
    async componentDidMount ()
     { 
          const data=await fetchNews();
          this.setState({
              data,
              loading:false
          })
        
       
        //console.log(this.state.data)
     }
    render() {
        
        const {data,loading}=this.state
        return (
            <div>
                <div ><h2>Latest News</h2></div>
                <article align="center"><BeatLoader loading={loading} /></article>
                 {data.map((pdata,i)=> <News data={pdata} id ={i} />)}
            </div>
        )
    }
}

export default App1
