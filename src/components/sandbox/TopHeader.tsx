import React, { useState } from 'react'
import { Dropdown, Layout, Menu } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'

const TopHeader = () => {
  const { Header } = Layout
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const menu = (
    <Menu>
      <Menu.Item>超级管理员</Menu.Item>
      <Menu.Item danger>退出</Menu.Item>
    </Menu>
  )
  return (
    <Header className="layout-header">
      {collapsed ? (
        <MenuUnfoldOutlined
          className="cp"
          onClick={() => setCollapsed(!collapsed)}
        />
      ) : (
        <MenuFoldOutlined
          className="cp"
          onClick={() => setCollapsed(!collapsed)}
        />
      )}
      <div className="flex items-center right">
        <span className="mr-32">欢迎 admin 回来</span>
        <Dropdown overlay={menu}>
          <Avatar
            size={40}
            src="https://img1.baidu.com/it/u=793269991,2224346596&fm=253"
          />
        </Dropdown>
      </div>
    </Header>
  )
}

export default TopHeader
