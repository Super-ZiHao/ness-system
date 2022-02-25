export interface MenuType {
  id: number
  rightId?: number
  grade: number
  key: string
  title: string
  pagepermisson?: boolean
  children?: MenuListType
}
export type MenuListType = MenuType[]

export interface iconsType {
  [a: string]: any
}

export interface RolesType {
  id: number
  right: string[]
  roleName: string
  roleType: number
}
