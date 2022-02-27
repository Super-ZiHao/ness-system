import request from './request'

interface PatchMenuType {
  id?: number
  rightId?: number
  grade?: number
  key?: string
  title?: string
  pagepermisson?: boolean
}

/**
 *  rights
 */
export const getMenu: () => any = () => {
  return request.get('rights?_embed=children')
}
export const deleteSider: (id: number) => any = (id) => {
  return request.delete(`rights/${id}`)
}
export const patchSider: (id: number, data: PatchMenuType) => any = (
  id,
  data
) => {
  return request.patch(`rights/${id}`, data)
}

/**
 *  children
 */
export const deleteSiderChildren: (id: number) => any = (id) => {
  return request.delete(`children/${id}`)
}
export const patchSiderChildren: (id: number, data: PatchMenuType) => any = (
  id,
  data
) => {
  return request.patch(`children/${id}`, data)
}

/**
 *  Roles
 */
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

/**
 *  Users
 */
export const getUsers: () => any = () => {
  return request.get('users')
}
