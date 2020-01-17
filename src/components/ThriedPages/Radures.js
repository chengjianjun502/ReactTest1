import React, { Component } from 'react';
import styles from './index.less';

export default class Radures extends Component {
    render() {
        return (
            <div>
                <div className={styles.box}>
                    <div> <span>状态1</span> </div>
                    <div> <span>状态2</span> </div>
                    <div> <span>状态3</span> </div>
                    <div> <span>状态4</span> </div>
                    <div> <span>状态5</span> </div>
                    <div> <span>当前</span> </div>
                </div>
            </div>
        )
    }
}
