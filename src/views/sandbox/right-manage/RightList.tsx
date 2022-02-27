import { useEffect, useState } from 'react'
import { Table, Tag, Button, Modal, Popover, Switch } from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import {
  deleteSider,
  deleteSiderChildren,
  getMenu,
  patchSider,
  patchSiderChildren,
} from '@/utils/api'
import { deleteAttribute } from '@/utils/function'
import { MenuListType, MenuType } from '@/types'

const RightList = () => {
  const [MenuList, setMenuList] = useState<MenuListType | []>([])
  // table 配置
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '权限名称',
      dataIndex: 'title',
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      render(dataIndex: string) {
        return <Tag color="orange">{dataIndex}</Tag>
      },
    },
    {
      title: '操作',
      render(data: MenuType) {
        return (
          <>
            <Button
              danger
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => confirmDelete(data)}
            />
            <Popover
              content={
                <div style={{ textAlign: 'center' }}>
                  <Switch
                    checked={data.pagepermisson}
                    onChange={() => switchMethod(data)}
                  />
                </div>
              }
              title="页面配置项"
              trigger={data.pagepermisson === undefined ? '' : 'click'}
            >
              <Button
                className="ml-16"
                type="primary"
                danger={!data.pagepermisson}
                shape="circle"
                icon={<EditOutlined />}
                disabled={data.pagepermisson === undefined}
              />
            </Popover>
          </>
        )
      },
    },
  ]
  
  useEffect(() => {
    getMenu().then((res: MenuListType) => {
      setMenuList(
        deleteAttribute({
          key: 'children',
          data: res,
        })
      )
    })
  }, [])
  // 删除提示
  const confirmDelete = (data: MenuType) => {
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
  const deleteMethod = (data: MenuType) => {
    if (data.grade === 1) {
     // 实现前端页面显示删除
      setMenuList(MenuList?.filter((item) => item.id !== data.id))
      // 调用接口实现后端数据库删除
      deleteSider(data.id)
    } else if (data.grade === 2) {
     // 实现前端页面显示删除
      const list = MenuList?.filter((item) => item.id === data.rightId)
      list[0].children = list[0].children?.filter((item) => item.id !== data.id)
      setMenuList([...MenuList])
      // 调用接口实现后端数据库删除
      deleteSiderChildren(data.id)
    }
  }
  // 更改状态
  const switchMethod = (data: MenuType) => {
    data.pagepermisson = !data.pagepermisson
    setMenuList([...MenuList])
    if (data.grade === 1) {
      patchSider(data.id, {
        pagepermisson: data.pagepermisson,
      })
    } else if (data.grade === 2) {
      patchSiderChildren(data.id, {
        pagepermisson: data.pagepermisson,
      })
    }
  }

  

  return (
    <div>
      <Table
        dataSource={MenuList}
        columns={columns}
        pagination={{ pageSize: 4 }}
      />
    </div>
  )
}

export default RightList
