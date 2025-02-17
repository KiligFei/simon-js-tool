import { _toString } from './common'

export function isPlainObject(o: any): o is Record<any, any> {
  return _toString.call(o) === '[object Object]'
}
