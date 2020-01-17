import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';
import lodash from 'lodash';

class InputComponents extends Component {

    state={
        values: '',
    }
    onChange=(value)=>{
        debugger
        // this.setState({values:value });
        console.log(value);
    }
    // handleClick =(id) =>{
    //     const arr2 = {name: 132, age: 45};
    //     const finalValue = {};
    //     this.props.form.validateFields((err, values) => {
    //         if(err){return};
    //         console.log('values', values);
    //         Object.assign(finalValue, values);
    //     })
    //     if (Object.keys(finalValue).length === 0) return false;
    //     console.log('finalValue', finalValue);

    //     const nnn = lodash.get(finalValue, id, '');
    //     console.log('nnn', nnn);
    //     console.log(finalValue.id);
    //     console.log( 'name', arr2.name);
    // }
    handleClick =(id)=>{
        const values = this.props.form.getFieldsValue();
        console.info(values);
        const nnn = lodash.get(values, id, '');
        console.info('nnn:', nnn);
    }
    render() {
        const arr = [{id: 'rrr', name: 'Tom0'}, {id: 'ddd', name: 'Tom1'}, {id: 'ddd3', name: 'Tom2'}];
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{background:'#ddd', width:'50rem', margin:'0 auto'}}>
                {arr.map(item =>{
                    return(
                        <div style={{ margin:'1rem'}}>
                            <Form.Item >
                            {getFieldDecorator(`${item.id}`, { initialValue: `${item.name}` })(
                                <Input />)}
                            </Form.Item>
                            <Button type='primary' onClick={() => this.handleClick(item.id)}>提交</Button>
                            <hr/>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}
export default Form.create()(InputComponents);