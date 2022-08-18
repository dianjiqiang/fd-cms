import { getRequest, postRequest } from '@/server'

const home = {
  namespaced: true,
  state: {
    lists: {
      overview: {
        index: '1',
        type: 'overview',
        name: '公司概述',
        icon: 'Collection',
        children: {
          technology: {
            index: '1-1',
            type: 'technology',
            name: '技术概览'
          },
          introduce: {
            index: '1-2',
            type: 'introduce',
            name: '公司简介'
          },
          distribution: {
            index: '1-3',
            type: 'distribution',
            name: '人员分布'
          }
        }
      },
      staff: {
        index: '2',
        type: 'staff',
        name: '员工信息',
        icon: 'User'
      },
      department: {
        index: '3',
        type: 'department',
        name: '部门信息',
        icon: 'PriceTag'
      },
      menu: {
        index: '4',
        type: 'menu',
        name: '菜单列表',
        icon: 'Menu'
      }
    },
    staffData: [
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      },
      {
        id: '2016-05-03',
        name: '张三',
        state: true,
        department: '纪检部',
        technical: '主任',
        seniority: 3.2,
        salary: 7200
      }
    ],
    departmentData: [
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      },
      {
        id: '1',
        name: '纪检部',
        state: true,
        number: '30',
        manager: '张三',
        grade: 97
      }
    ],
    menuData: [
      {
        id: '001',
        operation: '查看公司概述',
        api: '/home/company/gsgs'
      },
      {
        id: '002',
        operation: '查看公司概述',
        api: '/home/company/gsgs'
      },
      {
        id: '003',
        operation: '查看公司概述',
        api: '/home/company/gsgs'
      },
      {
        id: '004',
        operation: '查看公司概述',
        api: '/home/company/gsgs'
      },
      {
        id: '005',
        operation: '查看公司概述',
        api: '/home/company/gsgs'
      },
      {
        id: '006',
        operation: '查看公司概述',
        api: '/home/company/gsgs'
      },
      {
        id: '007',
        operation: '查看公司概述',
        api: '/home/company/gsgs'
      }
    ]
  },
  mutations: {
    setListData(state, payload) {
      state.lists = payload.data
    }
  },
  actions: {
    async getListsData({ commit, dispatch }, payload) {
      const data = await getRequest('/lists')
      commit('setListData', data)
    },
    async getDepartmentData({ commit, dispatch }, payload) {
      const data = await postRequest('/department', {
        Headers: '---'
      })
      commit('setListData', data)
    }
  }
}

export default home
