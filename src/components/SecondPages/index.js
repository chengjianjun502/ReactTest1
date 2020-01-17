import React, { Component } from 'react'
import {Table} from 'antd'
export default class index extends Component {
    state={
        sorterOrder:'edg',
    }
    setTableColumns=()=>{
        const tableColumns=[
            {
                title:'Name',
                dataIndex:'name',
                key:'name',
            },{
                title:'Age',
                dataIndex:'age',
                key:'age',
            },{
                title:'Work',
                dataIndex:'work',
                key:'wrk',
            },{
                title:'Des',
                dataIndex:'des',
                key:'des',
            }
        ]
        return tableColumns;
    }
    setTableData=()=>{
        const tablaData = [
            {
                name:'ZhangLiang',
                age:'none',
                work:'Minister Of Han',
                des:'张良（约前250—前186年），字子房，韩国（今河南省新郑市）人 [1]  。秦末汉初杰出谋臣，与韩信、萧何并称为“汉初三杰”。',
            },
            {
                name:'HanXin',
                age:'none',
                work:'Minister Of Han',
                des:'韩信（约公元前231年－公元前196年），汉族，淮阴（今江苏省淮安市淮安区 [1-2]  ，另说淮阴区 [3]  ）人。西汉开国功臣、军事家、淮阴候，兵家四圣之一。',
            },
            {
                name:'XiaoHe',
                age:'none',
                work:'Minister Of Han',
                des:'萧何（前257年－前193年），汉族，西汉初年政治家、宰相，西汉开国功臣之一。沛丰人，早年任秦沛县县吏，秦末辅佐刘邦起义，史称“萧相国”。',
            }
        ]
        return tablaData;
    }
    setSortForTable=()=>{
        let columns = this.setTableColumns;
        columns = columns.map(item=>{
            return{
                ...item,
                sorter:true,
                sorterOrder:this.state.mapSorter,
            }
        })
        return columns;
    }
    handleChange =()=>{
        this.setState({
            mapSorter:'abc'
        }, console.log(this.state.mapSorter))
    }

    render() {
        const tableprops = {
            dataSource: this.setTableData(),
            columns:this.setTableColumns(),
            onchange:this.handleChange,
        }
        return (
            <div>
                <Table {...tableprops}></Table>
            </div>
        )
    }
}
