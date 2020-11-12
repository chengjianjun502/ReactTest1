import React, { Component } from 'react';
import { Row, Col, Tabs } from 'antd';
import IndexPagec from '../components/IndexPage';

export default class FirstPage extends Component {
    render() {
        const { TabPane } = Tabs;
        return (
            <div>
                <Row style={{ height: '40rem' }}>
                    <Col span={24} style={{ background: '#ddd' }}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Tab 1" key="1">
                                <div><IndexPagec typekey='1' />
                                <div style={{width:'100%',height:'5rem',background:'#999'}}>lolololo</div>
                                </div> 
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                            <div><IndexPagec typekey='2' /></div> 
                            <div style={{width:'100%',height:'5rem',background:'#999'}}>lololodlo</div>
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
                            <div><IndexPagec typekey='3' /></div>
                            <div style={{width:'100%',height:'5rem',background:'#999'}}>lolololo</div> 
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        )
    }
}
