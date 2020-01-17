import React, { Component } from 'react';
import { Row, Col } from 'antd';
import EchartsPie from './Echarts/Pie';
import EchartsLine from './Echarts/Line';

export default class index extends Component {
    render() {
        const  data1= [
            { value: 410, name: '男' },
            { value: 280, name: '女' },
            { value: 310, name: '未知' },
          ]
          const  data2= [
            { value: 55, name: '黄金' },
            { value: 280, name: '白银' },
            { value: 31, name: '钻石' },
          ]
          const  data3= [
            { value: 21, name: '白菜' },
            { value: 29, name: '韭菜' },
            { value: 19, name: '芹菜' },
            { value: 31, name: '大葱' },
          ]
          const params1 = {
              title: '性别比例',
              data: data1,
              radiuIn: '30%',
              raiduOut: '70%',
              color:[
                'rgb(111, 111, 0)',
                'rgb(150, 0, 0)',
                'rgb(0,140,0)',
               ]
          }
          const params2 = {
            title: '大同山重矿含量比例',
            data: data2,
            radiuIn: '0%',
            raiduOut: '70%',
            color:[
               'rgb(0,112,0)',
               '#00BFFF',
               'rgb(220,0 ,100)',
               ]
        }
        const params3 = {
            title: '全国饺子馅种类比例',
            data: data3,
            radiuIn: '0%',
            raiduOut: '70%',
            color:[
               '#FFA500',
               '#2E8B57',
               '#6B8E23',
               '#7FFFD4',
               ]
        }
        const params4 = {
            title:'武汉大学2019年毕业生就业情况',
            legend: {
                data:['考研','毕业'],
                bottom:'0',
            },
            xAxisData: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            yAxis:{
                min:[0,0],
                max:[200,200],
                interval:[10,10],
                // formatter:['','%']
            },
            seriesData:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        }
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <EchartsPie params = {params1} />                  
                    </Col>
                    <Col span={12}>
                        <EchartsPie params = {params2} />                  
                    </Col>
                    <Col span={12}>
                        <EchartsPie params = {params3} />                  
                    </Col>
                    <Col span={12}>
                        <EchartsLine params = {params4} />                  
                    </Col>

                </Row>
            </div>
        )
    }
}
