// check whether the obj is null or not
// Now, it supports string, Array, undefined, null, JSON and number

export function isNull(obj) {
  if (obj === null || obj === undefined) {
    return true
  }
  if (typeof obj === 'string') {
    obj = obj.trim()
    return obj.length === 0
  } else if (typeof obj === 'object') {
    if (obj instanceof Array) {
      return obj.length === 0
    } else if (obj instanceof Date) {
      return false
    } else {
      // Now, obj must be a json object
      return isEmptyObject(obj)
    }
  } else if (typeof obj === 'number') {
    return isNaN(obj)
  } else if (typeof obj === 'function') {
    return false
  }
  return false
}

var isEmptyObject = function(obj) {
  var name
  for (name in obj) {
    return false
  }
  return true
}
