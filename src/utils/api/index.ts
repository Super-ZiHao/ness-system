import request from './request'

interface PatchMenuType {
  id?: number
  rightId?: number
  grade?: number
  key?: string
  title?: string
  pagepermisson?: boolean
}

export const getSider: () => any = () => {
  return request.get('rights?_embed=children')
}

export const deleteSider: (id: number) => any = (id) => {
  return request.delete(`rights/${id}`)
}

export const deleteSiderChildren: (id: number) => any = (id) => {
  return request.delete(`children/${id}`)
}

export const patchSider: (id: number, data: PatchMenuType) => any = (
  id,
  data
) => {
  return request.patch(`rights/${id}`, data)
}

export const patchSiderChildren: (id: number, data: PatchMenuType) => any = (
  id,
  data
) => {
  return request.patch(`children/${id}`, data)
}
