import { useEffect, useState } from 'react'
import { Table, Button, Modal, Tree } from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import { deleteRoles, getRoles, getMenu, pathRoles } from '@/utils/api'
import { RolesType, MenuListType } from '@/types'

const RoleList = () => {
  // Table 列表
  const [dataSource, setDataSource] = useState<RolesType[]>([])
  // 侧边栏
  const [menu, setMenu] = useState<MenuListType>()
  console.log(menu)
  // 选中 path
  const [currentRights, setCurrentRights] = useState<string[]>([])
  // 选中 Id
  const [currentId, setCurrentId] = useState<number>(-1)
  // 弹窗显示
  const [modalShow, setModalShow] = useState<boolean>(false)
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
              onClick={() => {
                setModalShow(true)
                setCurrentRights(data.rights)
                setCurrentId(data.id)
              }}
            />
          </>
        )
      },
    },
  ]
  useEffect(() => {
    getRoles().then(setDataSource)
    getMenu().then(setMenu)
  }, [])
  // 删除弹窗
  const confirmDelete = (data: RolesType) => {
    Modal.confirm({
      title: '你确定要删除吗？( 此操作不可逆转 )',
      icon: <ExclamationCircleOutlined />,
      okText: '确定',
      cancelText: '取消',
      onOk() {
        deleteMethod(data)
      },
    })
  }
  // 删除函数
  const deleteMethod = (data: RolesType) => {
    // 实现前端页面显示删除
    setDataSource(dataSource?.filter((item) => item.id !== data.id))
    // 调用接口实现后端数据库删除
    deleteRoles(data.id)
  }
  // 编辑确定事件
  const handleOk = () => {
    setDataSource(
      dataSource?.map((item) => {
        if (item.id === currentId) {
          return {
            ...item,
            rights: currentRights,
          }
        }
        return item
      })
    )
    pathRoles(currentId, currentRights)
    setModalShow(false)
  }
  const onCheck = (checkKeys: any) => {
    setCurrentRights(checkKeys.checked)
  }

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(item) => item.id}
      />
      <Modal
        title="弹出框"
        visible={modalShow}
        onOk={handleOk}
        onCancel={() => setModalShow(false)}
      >
        <Tree
          checkable
          checkStrictly
          treeData={menu}
          checkedKeys={currentRights}
          onCheck={onCheck}
        />
      </Modal>
    </div>
  )
}

export default RoleList
