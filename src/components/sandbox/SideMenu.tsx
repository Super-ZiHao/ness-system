import { Layout, Menu } from 'antd'
import { iconsType, MenuListType } from '@/types'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getSider } from '@/utils/api'
import {
  HomeOutlined,
  UserOutlined,
  UserSwitchOutlined,
  SecurityScanOutlined,
  TeamOutlined,
  ContactsOutlined,
  MonitorOutlined,
  ReconciliationOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons'

const { Sider } = Layout
const { SubMenu } = Menu

const Icons: iconsType = {
  '/home': <HomeOutlined />,
  '/user-manage': <UserOutlined />,
  '/user-manage/list': <UserSwitchOutlined />,
  '/right-manage': <SecurityScanOutlined />,
  '/right-manage/role/list': <TeamOutlined />,
  '/right-manage/right/list': <ContactsOutlined />,
  '/news-manage': <MonitorOutlined />,
  '/audit-manage': <ReconciliationOutlined />,
  '/publish-manage': <CloudUploadOutlined />,
}

const SideMenu = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [menu, setMenu] = useState<MenuListType | []>([])
  // 第一次进入，展开的选项
  const openKeys = [`/${location.pathname.split('/')[1]}`]
  // 目前选中的项
  const selectKeys = [location.pathname]
  useEffect(() => {
    getSider().then(setMenu)
  }, [])
  // 循环生成 侧边栏列表
  const loopSidebar = (list: MenuListType) => {
    return (
      menu && (
        <>
          {list.map((item) => {
            if (
              item.children &&
              item.children.length > 0 &&
              item.pagepermisson
            ) {
              return (
                <SubMenu
                  key={item.key}
                  title={item.title}
                  icon={Icons[item.key]}
                >
                  {loopSidebar(item.children)}
                </SubMenu>
              )
            } else {
              return (
                item.pagepermisson && (
                  <Menu.Item
                    key={item.key}
                    icon={Icons[item.key]}
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
