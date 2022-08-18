const searchData = [
  {
    name: 'id',
    type: 'input',
    enter: 'id',
    hint: '请输入查询ID'
  },
  {
    name: '姓名',
    type: 'input',
    enter: 'name',
    hint: '请输入查询姓名'
  },
  {
    name: '部门',
    type: 'input',
    enter: 'department',
    hint: '请输入查询部门'
  },
  {
    name: '职称',
    type: 'input',
    enter: 'technical',
    hint: '请输入查询职称'
  }
]

const searchValue = {
  id: '',
  name: '',
  department: '',
  technical: ''
}

export { searchData, searchValue }
