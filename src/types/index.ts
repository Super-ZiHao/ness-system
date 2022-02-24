export interface MenuType {
  id: number
  grade: number
  key: string
  title: string
  pagepermisson?: number
  children?: MenuListType
}
export type MenuListType = MenuType[]

export interface iconsType {
  [a: string]: any
}
