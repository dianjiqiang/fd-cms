const dialogData = [
  {
    name: 'id',
    type: 'input',
    enter: 'id',
    hint: '请输入员工ID'
  },
  {
    name: '姓名',
    type: 'input',
    enter: 'name',
    hint: '请输入员工姓名'
  },
  {
    name: '部门',
    type: 'select',
    enter: 'department',
    hint: '请选择员工部门',
    data: { name: ['总裁办', '纪检部', '销售部', '数据部', '网络部', '后台管理员'] }
  },
  {
    name: '职称',
    type: 'input',
    enter: 'technical',
    hint: '请输入员工职称'
  },
  {
    name: '薪水',
    type: 'input',
    enter: 'salary',
    hint: '请输入员工薪水'
  }
]

const dialogValue = {
  id: '',
  name: '',
  department: '',
  technical: '',
  salary: 0
}

export { dialogData, dialogValue }
