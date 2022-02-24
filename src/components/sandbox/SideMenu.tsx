import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { MenuListType } from '@/types'

// 模拟数组结构
const menuList: MenuListType = [
  {
    key: '/home',
    title: '首页',
    icon: <UserOutlined />,
  },
  {
    key: '/user-manage',
    title: '权限管理',
    icon: <UserOutlined />,
    children: [
      {
        key: '/user-manage/role/list',
        title: '角色列表',
        icon: <UserOutlined />,
      },
      {
        key: '/user-manage/right/list',
        title: '用户列表',
        icon: <UserOutlined />,
      },
    ],
  },
]

const SideMenu = () => {
  const { Sider } = Layout
  const { SubMenu } = Menu
  // 循环生成 侧边栏列表
  const loopSidebar = (list: MenuListType) => {
    return (
      <>
        {list.map((item) => {
          if (item.children && item.children.length > 0) {
            return (
              <SubMenu key={item.key} icon={item.icon} title={item.title}>
                {loopSidebar(item.children)}
              </SubMenu>
            )
          } else {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.title}
              </Menu.Item>
            )
          }
        })}
      </>
    )
  }
  return (
    <Sider className="layout-sider">
      <div className="logo">全球新闻发布管理系统</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {loopSidebar(menuList)}
      </Menu>
    </Sider>
  )
}

export default SideMenu
