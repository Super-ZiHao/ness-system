export interface MenuType {
  key: string
  title: string
  icon: JSX.Element
  children?: MenuListType
}
export type MenuListType = MenuType[]
