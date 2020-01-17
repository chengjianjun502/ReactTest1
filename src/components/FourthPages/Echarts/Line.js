import React, { Component } from 'react';
import { Row, Col, Card, message } from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEchartsCore from 'echarts-for-react';

// min: Y轴最小刻度
// max: Y轴最大刻度
// interval: Y轴单位

export default class Line extends Component {

    getDataOption = () => {
        const {title,legend,xAxisData,yAxis,seriesData} = this.props.params;
        const option = {
          title:{
            text:title,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999',
              },
            },
          },
          legend,
          xAxis: [
            {
              type: 'category',
              data: xAxisData,
              axisPointer: {
                type: 'shadow',
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              min: yAxis.min[0],
              max: yAxis.max[0],
              interval: yAxis.interval[0],
            //   axisLabel: {
            //     formatter: '{value} ml',
            //   },
            },
            {
              type: 'value',
              min: yAxis.min[1],
              max: yAxis.max[1],
              interval: yAxis.interval[1],
              axisLabel: {
                formatter: '{value}%',
              },
            },
          ],
          series: [
            {
              name: legend.data[0],
              type: 'bar',
              data: seriesData,
            },
            {
              name: legend.data[1],
              type: 'line',
              yAxisIndex: 1,
              data: seriesData,
            },
          ],
          color: '#00FF7F',
        };
        return option;
      }
    render() {
        return (
            <div>
                <Row style={{margin:'2rem'}}>
            <Col span={24}>
                <Card
                bordered
                style={{padding:'1.65rem'}}
              >
                <ReactEchartsCore
                  echarts={echarts}
                  option={this.getDataOption()}
                  notMerge
                  lazyUpdate
                  style={{ height: '30rem', width: '100%' }}
                />
              </Card>
            </Col>
            </Row>
            </div>
        )
    }
}
