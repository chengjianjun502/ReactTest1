import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import styles from './index.less';

export default class LifeTime extends Component {
    state={
        deg: 0,
    }
    handleClick=()=>{
        let { deg } = this.state;
        if( deg > -180){
            deg += -45;
        } else{
            deg = 0;
        }
        this.setState({deg});
    }
    render() {
        const { deg } = this.state;
        return (
            <React.Fragment>
                <div className={styles.lifetimeBox}>
                <div className={styles.lifetime}>
                    <div> <span>起步状态</span> </div>
                    <div> <span>加速状态</span> </div>
                    <div> <span>低速状态</span> </div>
                    <div> <span>中段加速</span> </div>
                    <div> <span>急速状态</span> </div>
                    <div> <span>♥</span> </div>
                    <div className={styles.innerBox} style={{transform: `rotate(${deg}deg)`}}><span><Icon type="caret-right" /></span> </div>
                </div>
                </div>
                <Button type="primary" onClick={this.handleClick}>点击一下试试</Button>
            </React.Fragment>
            
        )
    }
}
