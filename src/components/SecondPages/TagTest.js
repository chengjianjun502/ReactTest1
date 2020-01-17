import React, { Component } from 'react';
import {Tag} from 'antd';
const { CheckableTag } = Tag;
export default class TagTest extends Component {
    handleChange=(checked)=>{
        console.log(checked)
        console.log(222)
    }
    render() {
        const tags = [{note:'美国', value : '1'},{note:'法国', value:'2'},{note:'德国', value:'3'}];
        const newData = tags.forEach(element => {
            const { note, value } = element;
            return(
                <Tag value={value} color='red'>{note}</Tag>
            )
        });
        
        return (
            <div>
                <CheckableTag {...newData} onChange={this.handleChange}/>
               {tags.map(element => {
            const { note, value } = element;
            return(
                <Tag color='blue' value={value}>{note}</Tag>
                )
            })}
            </div>
        )
    }
}
