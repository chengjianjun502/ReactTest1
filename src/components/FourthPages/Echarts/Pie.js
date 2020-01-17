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

// data--核心数据
// radiuIn--圆环内径
// radiuOut--园外径
// title--标题
// color--扇形背景色

export default class Pie extends Component {

    getDataOption1=() => {
        const {data:propsData=[], radiuIn = '0', radiuOut = '70%', title = '', color} = this.props.params;
        const nameArr = [];
        let echartsData = {
            data:[],
            nameArr: [],
        };
        const propsRadius = [];
        if(propsData && propsData.length !== 0 ){
        propsData.forEach((item) => {
              nameArr.push(item.name)
          })
          echartsData = {
              data: propsData,
              nameArr,
          }
        } else {
            message.error('缺少核心数据或数据格式不对!!!');
        }
        if(radiuIn || radiuOut){
            propsRadius.push(radiuIn,radiuOut)
        }
        
        const option = {
          title : {
            text: title || '',
            subtext: '',
            x:'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            x: 'right',
            data: echartsData.nameArr,
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              // radius: ['50%', '90%'],
              radius: propsRadius,
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: `${radiuIn === '0%' ||radiuIn === '0' || radiuIn === 0 ? '' : 'center'}`,
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold',
                  },
                },
              },
              labelLine: {
                normal: {
                  show: false,
                },
              },
              data: echartsData.data,
            },
          ],
          color: color || '#abcabc', //如果不设置颜色，默认为同一个颜色--#abcabc
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
                  option={this.getDataOption1()}
                  onChartReady={this.onChartReady}
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
