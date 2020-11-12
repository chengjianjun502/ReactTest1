import React, { Component } from 'react';
import moment from 'moment';
import { Button, Tabs } from 'antd'
const { TabPane } = Tabs;

export default class AddCusGroup extends Component {
    state={
        num: this.props.numa,
        num1: 0,
        num2: this.props.numa,
    }

    handleClick=()=>{
        // debugger
        const num = this.state.num + 5;
        const num2 = this.state.num2 + 5;
        this.setState({ num, num2})
    }
    handleClearClick = ()=>{
        this.setState({ num: this.props.numa, num1: 0,num2: this.props.numa,})
    }
    // textfunc = (tx) =>{
    //     const fsqdDicts=['短信']
    //     let text = {};
    //     try {
    //       text = JSON.parse(tx);
    //     } catch(e) { // eslint-disable-line
    //       // do nothing
    //     }
    // }

    render() {
        // const txt = {"0":"您有一份大智慧特权待开启：即日起至今年12月31日，只要您账户资产首次达到相应金额及以上，即可按季度免费试用大智慧手机/PC端惊喜软件！↵1、手机端：5千-神奇D信号，3万-双突战法，50万-波段王；↵2、PC端：10万-大智慧365，100万-策略投资终端，500万-投资家机构版，1000万-投资家VIP版，2000万-投资家至尊版。↵（注意：详细活动规则以大智慧平台3周年庆宣传页面为准；所有软件就高匹配，PC软件权限默认发放到开户手机号所绑定大智慧账户，如需发放至其他账户，请在达标后3日内联系大智慧客服021-20219990；软件由大智慧提供，在软件领取、使用、应用等过程中产生的任何损失，恒泰证券不予负责。）↵"}
        const txt = '{"0":"nihaoaaaaaaaa"}';
        // const txt = "{\"8\":\"尊敬的用户,您本次找回密码的验证码为:735CSK\"}";
        const fsqdDicts=['短信'];
        let text = {};
        try {
          text = JSON.parse(txt);
        } catch(e) { // eslint-disable-line
          // do nothing
        }
        const timer = '2020-05-19 17:16:16';
        const Now = moment().format('YYYY-MM-DD HH:mm:ss'); // 当前时间
        const EOTs = moment(Now).diff(timer, 'seconds', true); // 时差--秒
        const EOTm = moment(Now).diff(timer, 'minutes', true); // 时差--分钟
        const EOTd = moment(Now).diff(timer, 'days', true); // 时差--天
        const EOTy = moment(Now).diff(timer, 'years', true); // 时差--年
        
        console.info(moment(timer).format('YYYYMMDD'), 123);
        console.info(moment().format('YYYYMMDD') - moment(timer).format('YYYYMMDD'), 999);
        console.info(EOTm,111);
        console.info(EOTd,222);
        return (
            <div>
                加法器测试：
                <Button onClick={this.handleClick} style={{margin:'0 1rem'}}> {this.state.num} </Button>
                <Button onClick={()=>{const num1 = this.state.num1 + 1;const num2 = this.state.num2 + 1;this.setState({ num1,num2})}} style={{margin:'0 1rem'}}> {this.state.num1} </Button>
                
                <Button onClick={this.handleClearClick}> 归位 </Button>
                <br/>
                <p style={{background:'#fff', fontSize:'4rem', color:'red'}}> <span>{this.state.num2} </span> </p> 
                {/* <p style={{background:'#fff', color:'444'}}> {this.textfunc(txt)}</p>  */}
                <div type="card" className="m-tab-message">
               {     
                Object.keys(text).map((key) => {
                  const txt = text[key];
                  if (txt === '') return null;
                  const index = fsqdDicts.findIndex(ele => ele.ibm === key);
                  if (index === -1) return null;
                  const dict = fsqdDicts[index];
                  const { note } = dict;
                  // const tempText = txt.replace('\n', '<br />');
                  let tempText = txt.replace(/\n/g, '<br />');
                  tempText = tempText.replace(/<[b][r]\s*\/*>/g, '');
                  return <p>{tempText}</p>
              })}
            </div>
            </div>
        )
    }
}
