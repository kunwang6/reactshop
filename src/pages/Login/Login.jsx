import React, { Component } from 'react'
import { Input,Button ,Form} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './Login.css'
import {reqLogin} from '../../api'


export default class Login extends Component {
  //点击提交按钮后的回掉
  onFinish=(vals)=>{
    this.props.history.push('/')
    
  }

  render() {
    
    return (
      
      <div className='loginbj'>
        <div className="loginbox">
        <Form name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}>

            <Form.Item name="username">
              <Input prefix={<UserOutlined className="site-form-item-icon formitem" />} 
              placeholder="请输入用户名"/>
            </Form.Item>
            <Form.Item name="password">
              <Input prefix={<LockOutlined className="site-form-item-icon formitem" />}
              type="password"
                placeholder="请输入密码"
                />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
             登陆
            </Button>
            </Form.Item>
         </Form>
        </div>
        
      </div>
    )
  }
}
