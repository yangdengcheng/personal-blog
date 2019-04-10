import React, {Component} from 'react'
import {
    Row,
    Col
} from 'antd'
import NavLeft from '../NavLeft'
import Header from '../Header'
import Footer from '../Footer'
import './index.less'


export default class CommonLayout extends Component {
    render() {
        return (
            <Row className="container-wrapper">
                <Col
                    span={3}
                    className="nav-left">
                    <NavLeft/>
                </Col>
                <Col
                    span={20}
                    className="main-wrapper">
                    <Header/>
                    <Row className="content-wrapper">
                        {
                            this.props.children
                        }
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        )
    }
}
