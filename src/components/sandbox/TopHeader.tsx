import React, { useState } from 'react'
import { Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

const TopHeader = () => {
  const { Header } = Layout
  const [collapsed, setCollapsed] = useState<boolean>(false)
  return (
    <Header className="layout-header">
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Header>
  )
}

export default TopHeader
