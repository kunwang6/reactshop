import React, { Component } from 'react'
import MenuConfig from '../../config/menuconfig'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './index.css'

const { SubMenu } = Menu;

export default class NavLeft extends Component {
  render() {
    return (
      <div>
        <div className='logo'>
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>管理系统</h1>
        </div>
        <Menu theme='dark'> 
        <SubMenu key="sub1" icon={<MailOutlined />} title="首页"></SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="城市管理"></SubMenu>
        <SubMenu key="sub3" icon={<SettingOutlined />} title="订单管理"></SubMenu>
        <SubMenu key="sub4" icon={<MailOutlined />} title="其他">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        </Menu>
      </div>
    )
  }
}
