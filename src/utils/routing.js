let LISTTYPE = []

export function routing(list, isChild) {
  let value = null
  if (isChild) {
    value = Object.values(list.children)
  } else {
    value = Object.values(list)
  }
  value.forEach((item) => {
    if (item.children) {
      routing(item, true)
    } else {
      if (item.type) {
        LISTTYPE.push(item.type)
      }
    }
  })
  return LISTTYPE
}
