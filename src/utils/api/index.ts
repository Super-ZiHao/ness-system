import request from './request'

interface PatchMenuType {
  id?: number
  rightId?: number
  grade?: number
  key?: string
  title?: string
  pagepermisson?: boolean
}
// 获取数据（ 包括子集 ）
export const getMenu: () => any = () => {
  return request.get('rights?_embed=children')
}
// 删除数据
export const deleteSider: (id: number) => any = (id) => {
  return request.delete(`rights/${id}`)
}
// 删除子集数据
export const deleteSiderChildren: (id: number) => any = (id) => {
  return request.delete(`children/${id}`)
}
// 更改权限
export const patchSider: (id: number, data: PatchMenuType) => any = (
  id,
  data
) => {
  return request.patch(`rights/${id}`, data)
}
// 更改子集权限
export const patchSiderChildren: (id: number, data: PatchMenuType) => any = (
  id,
  data
) => {
  return request.patch(`children/${id}`, data)
}
export const getRoles: () => any = () => {
  return request.get('roles')
}
export const deleteRoles: (id: number) => any = (id) => {
  return request.delete(`roles/${id}`)
}

export const pathRoles: (id: number, currentRights: string[]) => any = (
  id,
  currentRights
) => {
  return request.patch(`roles/${id}`, {
    rights: currentRights,
  })
}
