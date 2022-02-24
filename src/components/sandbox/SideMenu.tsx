import { Layout, Menu } from 'antd'
import { MenuListType } from '@/types'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const { Sider } = Layout
const { SubMenu } = Menu
const SideMenu = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [menu, setMenu] = useState<any>()
  const openKeys = [`/${location.pathname.split('/')[1]}`]
  const selectKeys = [location.pathname]
  useEffect(() => {
    axios.get('http://localhost:8000/rights?_embed=children').then((res) => {
      setMenu(res.data)
    })
  }, [])
  // 判断返回的数据 sider 数据是否能被渲染
  const chekPagePermission = (item: any) => {
    return item.pagepermisson === 1
  }
  // 循环生成 侧边栏列表
  const loopSidebar = (list: MenuListType) => {
    return (
      menu && (
        <>
          {list.map((item) => {
            if (
              item.children &&
              item.children.length > 0 &&
              chekPagePermission(item)
            ) {
              return (
                <SubMenu key={item.key} icon={item.icon} title={item.title}>
                  {loopSidebar(item.children)}
                </SubMenu>
              )
            } else {
              return (
                chekPagePermission(item) && (
                  <Menu.Item
                    key={item.key}
                    icon={item.icon}
                    onClick={() => {
                      navigate(item.key)
                    }}
                  >
                    {item.title}
                  </Menu.Item>
                )
              )
            }
          })}
        </>
      )
    )
  }
  return (
    <Sider className="layout-sider">
      <div className="flex column" style={{ height: '100%' }}>
        <div className="logo">全球新闻发布管理系统</div>
        <Menu
          className="w-full"
          theme="dark"
          mode="inline"
          defaultOpenKeys={openKeys}
          selectedKeys={selectKeys}
          style={{ overflow: 'auto' }}
        >
          {loopSidebar(menu)}
        </Menu>
      </div>
    </Sider>
  )
}

export default SideMenu
