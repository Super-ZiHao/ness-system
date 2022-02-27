import { useEffect, useState } from 'react'
import { Button, Switch, Table } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { getUsers } from '@/utils/api'
import { UsersType } from '@/types'
const UserList = () => {
  const [users, setUsers] = useState<UsersType[]>([])
  console.log(users)
  const columns = [
    {
      title: '区域',
      render(data: UsersType) {
        return data.region === '' ? '全球' : data.region
      },
    },
    {
      title: '角色名称',
      render(data: UsersType) {
        return getIdentity(data.roleId)
      },
    },
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '用户状态',
      render(data: UsersType) {
        return <Switch checked={data.roleState} disabled={data.default} />
      },
    },
    {
      title: '操作',
      render(data: UsersType) {
        return (
          <>
            <Button
              disabled={data.default}
              shape="circle"
              danger
              icon={<DeleteOutlined />}
            />
            <Button
              className="ml-16"
              disabled={data.default}
              shape="circle"
              type="primary"
              icon={<EditOutlined />}
            />
          </>
        )
      },
    },
  ]
  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  //获取身份
  const getIdentity = (roleId: number) => {
    switch (roleId) {
      case 1:
        return '超级管理员'
      case 2:
        return '区域管理员'
      case 3:
        return '区域编辑'
      default:
        return '普通员工'
    }
  }
  return (
    <>
      <Button type="primary">添加用户</Button>
      <Table columns={columns} dataSource={users} />
    </>
  )
}

export default UserList
