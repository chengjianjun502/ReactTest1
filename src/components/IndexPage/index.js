import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { Switch, Route, Link, Redirect } from 'dva/router';
import moment from 'moment';
import List from '../ThriedPages';
import AddCusGroup from './tab6_button';
import FirstPage from '../../routes/FirstPage';
import PageSeven from './pageSeven';

export default class index extends Component {
    constructor(props){
        super(props);
        this.mapSort = {}; // 记录排序状态
        this.state={
            loading:false,
            sort: [],
            oldSort: {},
        }
    }
    // this.mapSort = {}; // 记录排序状态
    setColumns = ()=>{
        const columns =
        [
            { title:'姓名',dataIndex:'name',key: 'name',datakey:'name',pxlx:1},
            {title:'年龄',dataIndex:'age',key:'age',datakey:'age',pxlx:1},
            {title:'收入',dataIndex:'salary',key:'salary',datakey:'salary',pxlx:1},
            {title:'学历',dataIndex:'educational',key:'edu',datakey:'edu',pxlx:1}    
        ]
        return columns;
    }
    setColumns2 = ()=>{
        const columns =
        [
            { title:'姓名2',dataIndex:'name',key: 'name',sorter:(a,b)=>a.name-b.name},
            {title:'年龄2',dataIndex:'age',key:'age',sorter:(a,b)=>a.age-b.age},
            {title:'收入2',dataIndex:'salary',key:'salary',sorter:(a,b)=>a.salary-b.salary},
            {title:'学历2',dataIndex:'educational',key:'edu'}    
        ]
        return columns;
    }
    setDataSource = ()=>{
        const dataSource=[
            {
                key:'1',
                name:'发的的撒3',
                age:34,
                salary:'$555055',
                educational:'1本科'
            },{
                key:'2',
                name:'发的的撒2',
                age:44,
                salary:'$56555',
                educational:'2本科'
            },{
                key:'3',
                name:'发的的撒1',
                age:31,
                salary:'$55555',
                educational:'3本科'
            }
        ]
        return dataSource;
    }
    // 处理排序逻辑
  handlSortChange = (pagination, filters, sorter) => {
      debugger
    const {oldSort}= this.state;
    const { field = '' } =Object.keys(sorter).length===0? oldSort : sorter;
    const sorters = [];
    if (!this.state.loading) {
      if (field) {
        const tempSort = {};
        const order = this.mapSort[field] || '';
        let ord = '';
        if (order === 'ascend') {
          ord = '';
          tempSort[field] = '';
        } else if (order === 'descend') {
          ord = 'asc';
          tempSort[field] = 'ascend';
        } else if (order === '') {
          ord = 'desc';
          tempSort[field] = 'descend';
        }
        this.mapSort = tempSort;
        sorters.push({ [field]: ord });
      } else {
        this.mapSort = {};
      }
      this.setState({ sort: sorters[0] }, console.log( sorters[0]));
      // console.log(this.state.sort);
      console.log(JSON.stringify(sorters[0]));
      console.log(JSON.stringify(sorters[0]).split('"'));
      const paixu = JSON.stringify(sorters[0]).split('"')||[];
      console.log(`${paixu[1]} ${paixu[3]}`);
    }
    this.setState({
      oldSort: sorter,
    })
  }
  displayColumnsRender = () => {
    let columns  = this.setColumns();
    columns = columns.map((item) => {
      const { pxlx } = item;
      return {
        ...item,
        sorter: parseInt(pxlx || 0, 10),
        sortOrder: this.mapSort[item.datakey] || '',
      };
    });
    return columns;
  }
  getNewTime = (a, b) =>{

  }
    render() {
        const Now = moment().format('YYYY-MM-DD HH:mm:ss'); // 当前时间
        const nnn = moment('2019/12/27 14:10').format('YYYY-MM-DD HH:mm:ss');
        const nnn2 = moment.max(moment('2019-12-27 15:18'), moment('2050/12/29 14:10'));
        console.info('大小：', moment('2019-12-27 15:18') > moment('2050/12/29 14:10'));
        console.info('nnn2:', nnn2);
        console.info('nnn2_i:', nnn2._i);
        console.info('nnn:', nnn);
        const timeArr=[
          {
            name: 'Tom1',
            time: '2019-12-28 15:18',
          },{
            name: 'Tom2',
            time: '2019-12-29 15:18',
          },{
            name: 'Tom3',
            time: '2019-12-27 17:18',
          },{
            name: 'Tom4',
            time: '2019/12/27 15:18',
          }
        ];
        const newArr = timeArr.sort((a, b) => {
          return moment(b.time) - moment(a.time);
        });
        console.info('newArr: ', newArr);
        const {typekey} = this.props;
        const tableData={
            columns: this.displayColumnsRender(),
            dataSource: this.setDataSource(),
            onChange: this.handlSortChange, // 分页、排序、筛选变化时的操作
        }
        const tableData2={
            columns: this.setColumns2(),
            dataSource: this.setDataSource(),
        }
        const text = '跨站脚本攻击(Cross Site Scripting)，为了不和层叠样式表(Cascading Style Sheets, CSS)的缩写混淆，故将跨站脚本攻击缩写为XSS。';
        return (
                <React.Fragment>
                    {typekey==='1' ? (
                        <div >
                          <Link to="/index" style={{ display: 'block' }}>链接2</Link>
                          <Switch>
                            <Route path="/index" exact render={() => (<FirstPage/>)}></Route>
                          </Switch>
                          <div style={{width:'80%',background:'#ddd',margin:'0 auto', fontSize:'5rem'}}>
                            {Now}
                          </div>
                          </div>
                    ):typekey==='2' ? (
                        <div style={{width:'80%',background:'#eee',margin:'0 auto'}}>
                            <Table {...tableData2}></Table>
                        </div>
                    ):typekey==='3' ? (
                        <div style={{width:'80%',background:'#eee',margin:'0 auto'}}>
                            <Table {...tableData}></Table>
                        </div>
                    ):typekey==='4' ? (
                      <div style={{width:'80%',background:'#eee',margin:'0 auto',textAlign:'left'}}>
                          <List/>
                      </div>
                  ):typekey==='5' ? (
                    <div style={{width:'80%',background:'#eee',margin:'0 auto'}}>
                        <div title={text} style={{border:'1px solid #666',width:'10rem',margin:'5rem auto', borderRadius:'5px'}}>
                          <strong>这是个气泡测试</strong> 
                        </div>
                    </div>
                ):typekey==='6' ? (
                  <div style={{width:'80%',background:'#eee',margin:'110px auto', padding:'5rem 0'}}>
                      {/* <Button onClick= {this.handleClick}>创建客群</Button> */}
                      <AddCusGroup numa = {125} />
                  </div>
              ):typekey==='7' ? (
                <div style={{width:'80%',background:'#eee',margin:'110px auto', padding:'5rem 0'}}>
                    <PageSeven txt='helloddjdsjlajdlkfjdl'/>
                </div>
            ):<h4>nothing</h4>
                    }
                </React.Fragment>     
        )
    }
}
