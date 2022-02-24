import { Layout, Menu } from 'antd'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'

const SideMenu = () => {
  const { Sider } = Layout
  return (
    <Sider className="layout-sider">
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          3
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default SideMenu
