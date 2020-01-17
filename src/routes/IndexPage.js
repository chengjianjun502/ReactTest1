import React from 'react';
import { connect } from 'dva';
import { Row, Col, Tabs } from 'antd'
import styles from './IndexPage.css';
import IndexPagec from '../components/IndexPage';

function IndexPage() {
  const { TabPane } = Tabs;
  return (
    <div className={styles.normal}>
      <Row style={{height:'50rem'}}>
        <Col span={24} style={{background:'#ddd'}}>
        <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          <IndexPagec typekey='1' />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
        <IndexPagec typekey='2' />
        </TabPane>
        <TabPane tab="Tab 3" key="3">
        <IndexPagec typekey='3' />
        </TabPane>
        <TabPane tab="Tab 4" key="4">
        <IndexPagec typekey='4' />
        </TabPane>
        <TabPane tab="Tab 5" key="5">
        <IndexPagec typekey='5' />
        </TabPane>
        <TabPane tab="Tab 6" key="6">
        <IndexPagec typekey='6' />
        </TabPane>
        <TabPane tab="Tab 7" key="7">
        <IndexPagec typekey='7' />
        </TabPane>
      </Tabs>
        </Col>
      </Row>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
