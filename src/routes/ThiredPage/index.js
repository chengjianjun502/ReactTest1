import React, { Component } from 'react';
import { Radio, Divider, Row, Col, Button } from 'antd';
import List from '../../components/ThriedPages';
import Overflow from '../../components/ThriedPages/overflow';
import Radures from '../../components/ThriedPages/Radures';
import InputComponents from '../../components/ThriedPages/InputComponents';
import AddTen from '../../components/ThriedPages/AddTen';
import styles from './index.less';

class ThiredPage extends Component {
  state={
    fotherData: 0,
  }
  /** 父级加法器函数 */
  handleClick=()=>{
    let { fotherData } = this.state;
    this.setState({
      fotherData: fotherData += 5,
    })
  }
  /** 通过ref调用子级加法器函数--handleAdd */
  handleAddClick=()=>{
    const { handleAdd } = this.addTen;
    console.info( 'this.addTen:',this.addTen);
    if(handleAdd){
      handleAdd();
    }
  }
    render() {
        // const { Option } = Select;
        const { fotherData } = this.state;
        return (
          <React.Fragment>
            <Row>
              <Col span={12}>
                <div style={{margin:'2rem auto', width:'30rem'}}>
                  <Radio.Group >
                    <Radio.Button  value="large">人间失格</Radio.Button>
                    <Radio.Button  value="default">百年孤独</Radio.Button>
                  </Radio.Group>
                </div>
                <div style={{margin:'2rem auto', width:'30rem'}}>
                  <Radio.Group className={styles.radioButton} >
                    <Radio.Button className={styles.radioButton} value="large">人间失格</Radio.Button>
                    <Divider type="vertical" style={{ height: '1.5rem', margin: '0', background: '#444' }} />
                    <Radio.Button className={styles.radioButton} value="default">百年孤独</Radio.Button>
                  </Radio.Group>
                </div>
                  <List/>
                  <Overflow/>
                  <Radures />
                  <InputComponents />
              </Col>
              <Col span={12} style={{border: '2rem solid #ddd', margin:'2rem', padding:'2rem'}}>
                <div><span>父组件--点击加5: {fotherData} </span></div>
                <hr/>
                <AddTen ref={c=>{this.addTen = c}} />
                <hr/>
                <span><Button type="primary" onClick={this.handleClick}>父组件--点击加5</Button></span>&nbsp;&nbsp;&nbsp;
                <span><Button type='danger' onClick={this.handleAddClick}>子组件--点击加10</Button></span>
              </Col>
            </Row>
          </React.Fragment>
        )
    }
}
export default ThiredPage;

