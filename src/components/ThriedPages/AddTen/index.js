import React, { Component } from 'react';
import { Col, Button, Row } from 'antd';

export default class index extends Component {
    state={
        sonData: 0,
    }
    handleAdd=()=>{
        let { sonData } = this.state;
        this.setState({
            sonData: sonData += 10,
        })
    }
    render() {
        const { sonData } = this.state;
        return (
            <div>
                <Row>
                    <Col span={12}>
                    <div><span>子组件--点击加10： {sonData} </span></div>
                    </Col>
                </Row>
            </div>
        )
    }
}
