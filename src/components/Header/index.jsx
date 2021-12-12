import React, { Component } from 'react'
import { Row ,Col } from 'antd'
import './index.css'


export default class Hearder extends Component {

    state = {
      username:'admin'
    }
  
  render() {
    return (
      <div className='header'>
        <Row className='herder-top'> 
          <Col span='24'>
            <span className='welcome'>欢迎{this.state.username}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className='bread'>
          <Col span='4' className='breadtitle'>
            首页
          </Col>
         
        </Row>
      </div>
    )
  }
}
