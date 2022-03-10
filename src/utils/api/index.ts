import request from './request'
import { MenuType, UsersType } from '@/types'

/**
 *  rights
 */
export const getMenu: () => any = () => {
  return request.get('rights?_embed=children')
}
export const deleteSider: (id: number) => any = (id) => {
  return request.delete(`rights/${id}`)
}
export const patchSider: (id: number, data: Partial<MenuType>) => any = (
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
export const patchSiderChildren: (
  id: number,
  data: Partial<MenuType>
) => any = (id, data) => {
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
export const patchUsers: (id: number, data: Partial<UsersType>) => any = (
  id,
  data
) => {
  return request.patch(`users/${id}`, data)
}
export const delUsers: (id: number) => any = (id) => {
  return request.delete(`users/${id}`)
}
