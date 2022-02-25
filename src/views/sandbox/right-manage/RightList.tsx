import { getRights } from '@/utils/api'
import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { MenuListType } from '@/types'

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
  },
  {
    title: '操作',
    dataIndex: 'pagepermisson',
  },
]

const RightList = () => {
  const [dataSource, setDataSource] = useState<MenuListType>()
  useEffect(() => {
    getRights().then(setDataSource)
  }, [])
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default RightList
