import React, { Component } from 'react';
import {List, Button, Skeleton, Rate, Icon } from 'antd';

export default class index extends Component {
     setData=()=>{
        const listData =[
            {
                name:'张良ZhangLiang',
                age:'none',
                work:'Minister Of Han',
                timer:'约前250—前186年',
                imp:5,
                des:'字子房，韩国（今河南省新郑市）人。秦末汉初杰出谋臣，与韩信、萧何并称为“汉初三杰”。',
            },
            {
                name:'韩信HanXin',
                age:'none',
                work:'Minister Of Han',
                timer:'约公元前231年－公元前196年',
                imp:4,
                des:'汉族，淮阴（今江苏省淮安市淮安区，另说淮阴区）人。西汉开国功臣、军事家、淮阴候，兵家四圣之一。',
            },
            {
                name:'萧何XiaoHe',
                age:'none',
                work:'Minister Of Han',
                timer:'前257年－前193年',
                imp:3,
                des:'汉族，西汉初年政治家、宰相，西汉开国功臣之一。沛丰人，早年任秦沛县县吏，秦末辅佐刘邦起义，史称“萧相国”。',
            }
        ]
        return listData;
     }
     // 截取字符串长度
     setStrLength=(str, leng)=>{
        if(str){
            if(str.length>leng){
                str = `${str.substr(0,leng)}...`
            }else{
                return str;
            }
        }else{
            str = '--';
        }
        return str;
     }
    render() {
        const listData = this.setData();
        return (
            <div>
                <List
                    // className="demo-loadmore-list"
                    // loading={true}
                    itemLayout="horizontal"
                    dataSource={listData}
                    renderItem={item => (
                    <List.Item
                        actions={[<a>点赞<Icon type="like" /></a>, <a>收藏<Icon type="heart" /></a>]}
                    >
                        <Skeleton avatar title={false} active loading={false}>
                        <List.Item.Meta
                            title={<a>{item.name}</a>}
                            description={<p>{ this.setStrLength(item.des, 20) }</p>}
                        />
                        <div style={{display:'flex',width:'60%',textAlign:'center', alignItems:'center' }}>
                            <div style={{width:'25%'}}>
                                <span><Rate disabled defaultValue={item.imp} /></span>
                            </div>
                            <div style={{width:'25%'}}>
                                <List.Item.Meta
                                title={<a>{item.work}</a>}
                                description={<p>Work</p>}
                                />
                            </div>
                            <div style={{width:'25%'}}>
                                <List.Item.Meta
                                title={<a>{item.timer}</a>}
                                description={<p>时间</p>}
                                />
                            </div>
                            <div style={{width:'25%'}}>
                                <List.Item.Meta
                                title={<a>{item.age}</a>}
                                description={<p>年龄</p>}
                                />
                            </div>
                        </div>
                        </Skeleton>
                    </List.Item>
                    )}
                />
            </div>
        )
    }
}
