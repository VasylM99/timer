import React, {Component} from 'react'
import Timer from './timer'

class NewTime extends Component {
        
        
        render(){
            return(
                <div>
                    <Timer time={60000} step = {1} onTick={(state) => console.log('(step(1))' +state)} autostart={true} />   
                    
                    <Timer time={60000} step = {2} onTick={(state) => console.log('(step(2))' +state)} autostart={true} />   
                </div> 
            )
  
    }
}  

export default NewTime;