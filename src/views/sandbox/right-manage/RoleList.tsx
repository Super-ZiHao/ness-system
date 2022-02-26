import { useEffect, useState } from 'react'
import { Table, Button, Modal } from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import { deleteRoles, getRoles } from '@/utils/api'
import { RolesType } from '@/types'

const RoleList = () => {
  const [dataSource, setDataSource] = useState<RolesType[] | []>([])
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render(id: any) {
        return <b>{id}</b>
      },
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
    },
    {
      title: '操作',
      render(data: RolesType) {
        return (
          <>
            <Button
              danger
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => confirmDelete(data)}
            />
            <Button
              className="ml-16"
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
            />
          </>
        )
      },
    },
  ]
  useEffect(() => {
    getRoles().then(setDataSource)
  }, [])
  // 删除弹窗
  const confirmDelete = (data: RolesType) => {
    Modal.confirm({
      title: '你确定要删除吗？( 此操作不可逆转 )',
      icon: <ExclamationCircleOutlined />,
      okText: '确定',
      cancelText: '取消',
      onOk() {
        // 确认删除并执行
        deleteMethod(data)
      },
    })
  }
  // 删除函数
  const deleteMethod = (data: RolesType) => {
    // 实现前端页面显示删除
    setDataSource(dataSource.filter((item) => item.id !== data.id))
    // 调用接口实现后端数据库删除
    deleteRoles(data.id)
  }
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(item) => item.id}
      />
    </div>
  )
}

export default RoleList
