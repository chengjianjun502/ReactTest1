import React, { Component } from 'react'
import styles from './index.less';
import SecondPages from '../../components/SecondPages';
import TagTest from '../../components/SecondPages/TagTest';
import LifeTime from '../../components/SecondPages/LifeTime';

export default class index extends Component {
    render() {
        return (
            <div className={styles.forH3}>
                <h3>Wellcom!</h3>
                <SecondPages/>
                <hr/>
                <TagTest/>
                <hr/>
                <LifeTime ref={c => this.lifeTime = c} />
            </div>
        )
    }
}
