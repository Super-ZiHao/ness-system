interface deleteAttributeProps {
  key: string
  data: any[]
}
/**
 * 删除数组对象中某个值为空的的属性（ 浅层次 ） ’‘ | [] | {}
 * @key 属性名
 * @data 数组对象
 * @return 处理后的数组对象
 */
export const deleteAttribute = ({ key, data }: deleteAttributeProps) => {
  return data.map((item: any) => {
    // 删除 空字符串 | 空数组 | 空对象
    ;(item[key] === '' ||
      JSON.stringify(item[key]) === '{}' ||
      JSON.stringify(item[key]) === '[]') &&
      delete item[key]
    return item
  })
}
