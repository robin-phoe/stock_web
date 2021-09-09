import _ from 'lodash'

export function deepClone(data) {
    return _.cloneDeep(data)
}

/**
 * 去除字符串所有的空格 tab 回车
 */
export function removeSpace(val) {
    return val.replace(/\s*|\t|\r|\n/ig, '')
}