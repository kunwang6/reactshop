import React, { Component } from 'react'
import { Row,Col } from 'antd'
import  Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navleft from '../../components/Navleft'
import '../../style/common.css'
import Home from '../Home'


export default class Admin extends Component {
  render() {
    return (
      <Row className='container'>
        <Col span='3' className='nav-left'>
          <Navleft></Navleft>
        </Col>
        <Col span='21' className='main'>
          <Header/>
          <Row className='content'>
            <Home></Home>
          </Row>
          <Footer/>
        </Col>
      </Row>
    )
  }
}
