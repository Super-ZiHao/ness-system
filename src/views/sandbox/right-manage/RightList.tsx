import { useEffect, useState } from 'react'
import { Table, Tag, Button } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { getSider } from '@/utils/api'
import { deleteAttribute } from '@/utils/function'
import { MenuListType } from '@/types'

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
    dataIndex: 'pagepermisson',
    render(dataIndex: number) {
      return (
        <>
          <Button danger shape="circle" icon={<DeleteOutlined />} />
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

const RightList = () => {
  const [dataSource, setDataSource] = useState<MenuListType>()
  useEffect(() => {
    getSider().then((res: MenuListType) => {
      setDataSource(
        deleteAttribute({
          key: 'children',
          data: res,
        })
      )
    })
  }, [])
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 4 }}
      />
    </div>
  )
}

export default RightList
