import request from '@/utils/request'

/**
 * 获取区域列表
 */
export function getRegionList () {
  return request({
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    url: '/stats/getRegionList',
    method: 'post'
  })
}

/**
 * 获取NCov统计数据
 * @param {*} data
 */
export function getNcovStats (data) {
  return request({
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    url: '/stats/getNcovStats',
    method: 'post',
    data
  })
}

/**
 * 增加NCov统计数据
 * @param {*} data
 */
export function setNcovInfo (data) {
  return request({
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    url: '/stats/setNcovInfo',
    method: 'post',
    data
  })
}
