import React, { Component } from 'react';
import { Icon, Button } from 'antd';
// import  './style.css';
import style from './style.css';

export default class pageSeven extends Component {
    state={
        animate: 0,
        oldAnimate: 0,
    }

    componentDidMount() {
        setInterval( () => { 
            const { animate } = this.state;
            if( animate > -1000){
              this.setState({animate: animate - 200 })
            } else {
              this.setState({ animate: 0})
            }
        }, 100);
    }
    
    componentWillUnmount(){
        const { timer } = this.state;
        clearInterval(timer);
    }

    upAct=()=>{
        let { animate = 0 } = this.state;
        this.setState({oldAnimate: animate}); // 旧的偏移量
        const picNum = -1000;
        if( animate > picNum){
            animate -= 500;
            this.setState({animate})
        } else {
            animate = 0;
            this.setState({animate})
        }
    }
    nextAct=()=>{
        let { animate = 0 } = this.state;
        this.setState({oldAnimate: animate});// 旧的偏移量
        const picNum = 0;
        if( animate < picNum){
            animate += 500;
            this.setState({animate})
        } else {
            animate = -1000;
            this.setState({animate})
        }
    }
    /*
    handleClick =()=>{
        setInterval(this.myfunc(), 2.5);
    }
    myfunc =()=>{
        let { oldAnimate } = this.state;
        let good = 0;
        good = oldAnimate -= 2; 
            if( Math.abs(good) >= 500){
                clearInterval(this.handleClick()); 
            }
            // return good;
            console.log('good:', good); 
    }
    */
    render() {
        const { animate } = this.state;
        return (
            <div style={{position:'relative'}}>
                <a className={style.aButtonL} onClick={this.upAct}><Icon type="left-circle" /></a>
                <a className={style.aButtonR} onClick={this.nextAct}><Icon type="right-circle" /></a>
                <div style={{width:'500px', height: '300px', margin:'0 auto', position:'relative', overflow:'hidden'}} >
                    <div className={style.bigBox} style={{left: `${animate}px`}}>
                        <div className={style.box1}>
                            <strong>Welcome to React</strong>
                            <p>秦时明月汉时关，万里长征人未还。</p>
                            <p>但使龙城飞将在，不教胡马度阴山</p>
                        </div> 
                        <div className={style.box2}>
                            <strong>Welcome to VUE</strong>
                            <p>醉里挑灯看剑，梦回吹角连营。</p>
                            <p>八百里分麾下炙，五十弦翻塞外声，沙场秋点兵。</p>
                            <p>马作的卢飞快，弓如霹雳弦惊。</p>
                            <p>了却君王天下事，赢得生前身后名。可怜白发生！</p>
                        </div>
                        <div className={style.box3}>
                            <strong>Welcome to Angular</strong>
                            <p>庭院深深深几许，杨柳堆烟，帘幕无重数。</p>
                            <p>玉勒雕鞍游冶处，楼高不见章台路。</p>
                            <p>雨横风狂三月暮，门掩黄昏，无计留春住。</p>
                            <p>泪眼问花花不语，乱红飞过秋千去。</p>
                        </div>
                    </div>
                </div>
                <div> <Button onClick={()=>this.handleClick()}> 按钮</Button> </div>
            </div>
        )
    }
}
