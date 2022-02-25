import request from './request'

export const getSider: () => any = () => {
  return request.get('rights?_embed=children')
}

export const getRights: () => any = () => {
  return request.get('rights')
}