import React from 'react'
import Style from'./News.module.css'
function News({data}) {
    
    return (
        <div className={Style.div1}>
            <p className={Style.p}>{data.title}
            </p>
            <button className={Style.b} ><a href={data.link} target="_blank"  rel="noopener noreferrer" >More Info</a></button>
            
        </div>
    )
}

export default News

