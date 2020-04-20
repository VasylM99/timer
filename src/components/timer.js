import React, {Component} from 'react'
import './style.css'

class Timer extends Component {
    state = {
        count : Math.round(this.props.time/1000),
        start : true,
        step : this.props.step,
        width : 100,
        change : (100/(Math.round(this.props.time/1000))),
        autostart : this.props.autostart
    }



startTime = () => {
    this.setState({
        start : true,
    })
};

pauseTime = () => {
    this.setState({
        start : false,
    })
};

changeTime = () => {
    this.setState({ 
        count : this.state.count-this.state.step
    })
};

changeWidth = () => {
    this.setState({
        width : (this.state.width - this.state.change*this.state.step)
    })
};

componentDidMount () {
    if (this.state.autostart===true) {
        this.startTime();
        setInterval(()=>{
            if (this.state.start) {
                if (this.state.count!==0 && this.state.count >=0) {
                    this.startTime();
                    this.props.onTick('Залишилось часу '+this.state.count)
                    this.changeWidth();
                    this.changeTime();
                }else{
                    this.props.onTick('Час вийшов')
                    this.pauseTime();
                    this.setState({
                        width : 100,
                        count : Math.round(this.props.time/1000),
                        start : true,
                    })
                    
                    
                }
            }
        }, this.state.step*1000);    
    }
    
}


render() {
    return(
        <div className='wrapper'>
               <div>
                    <button className='button' onClick={this.startTime}>
                        Start
                    </button>
                    <button className='button' onClick={this.pauseTime}>
                        Pause
                    </button>
                </div>
                <div className='time'>
                    {this.state.count}
                </div>
                
                
                <div className='row' style={{width : this.state.width + '%'}}></div>
        </div>
    )}
};


export default Timer;