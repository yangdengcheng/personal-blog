import React, { Component } from 'react'
import {
    Menu
} from 'antd'
import { NavLink } from "react-router-dom";
import MenuList from '../../config/menu'

const SubMenu = Menu.SubMenu

export default class Header extends Component {
    rootSubKeys = []

    /**
     * 获取根路由的URL
     * @param list 路由列表
     */
    _generateSubKey (list) {
        if (list && list.length > 0) {
            list.forEach(item => {
                this.rootSubKeys.push(item.key)
            })
        }
    }

    _generateMenu (data) {
        return data.map(item => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this._generateMenu(item.children) }
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={ item.title } key={item.key}>
                    <NavLink to={item.key} key={item.key}>
                        { item.title }
                    </NavLink>
                </Menu.Item>
            )
        })
    }

    componentWillMount() {
        this._generateSubKey(MenuList)
        const menuTreeNode =  this._generateMenu(MenuList)
        this.setState({
            menuTreeNode
        })
    }

    render() {
        return (
            <Menu
                mode="inline"
                theme="dark"
                >
                { this.state.menuTreeNode }
            </Menu>
        )
    }
}
