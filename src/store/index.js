import { createStore } from "vuex";
import apiClient from "../axios";
import axios from 'axios'
import auth from "./auth"

export default createStore({

state: {
  message: null,
  allProperities: null,
  allBrokers: null,
  allClients: null,
  allEmployees: null,
  BusinessExpenses: null,
  salesData: null,
  officeExpenses: null,
  salaries: null
},

mutations: {
  MESSAGE(state, message) {
    state.message = message
  },
  ALL_PROPS(state, properities) {
    state.allProperities = properities
  },
  ALL_BROKERS(state, brokers) {
    state.allBrokers = brokers
  },
  ALL_CLIENTS(state, clients) {
    state.allClients = clients
  },
  ALL_EMPLOYEES(state, employees) {
    state.allEmployees = employees
  },
  BUSINESS_EXPENSES(state, data) {
    state.BusinessExpenses = data
  },
  SALES(state, salesData) {
    state.salesData = salesData
  },
  OFFICE_EXPENSES(state, data) {
    state.officeExpenses = data
  },
  SALARIES(state, data) {
    state.salaries = data
  }

},

actions: {
  async allProperities({ commit }) {
    await apiClient.get('properities').then((result) => {
      commit('ALL_PROPS', result.data)
    }).catch((err) => {
      console.log(err);
    });
  },

  async addProperity({commit}, data) {
    await apiClient.post('properities/add', data).then((result) => {
      commit('MESSAGE', result.message.message)

    }).catch((err) => {
      console.log(err);
    });
  },

  async allBrokers({commit}) {
    await apiClient.get('brokers').then((result) => {
      commit('ALL_BROKERS', result.data)
    }).catch((err) => {
      console.log(err);
    });
  },

  async addBroker({commit}, data) {
    await apiClient.post('brokers/add', data).then((result) => {
      commit('MESSAGE', result.message.message)
    }).catch((err) => {
      console.log(err);
    });
  },

  async allClients({ commit }) {
    await apiClient.get('clients').then((result) => {
      commit('ALL_CLIENTS', result.data)
    }).catch((err) => {
      console.log(err);
    });
  },

  async addClient({ commit }, data) {
    await apiClient.post('clients/add', data).then((result) => {
      commit('MESSAGE', result.message.message)
    }).catch((err) => {
      console.log(err);
    });
  },

  async allEmployees({ commit }) {
    await apiClient.get('employees').then((result) => {
      commit('ALL_EMPLOYEES', result.data)
    }).catch((err) => {
      console.log(err);
    });
  },

  async addEmployee({ commit }, data) {
    await apiClient.post('employees/add', data).then((result) => {
      commit('MESSAGE', result.message.message)
    }).catch((err) => {
      console.log(err);
    });
  },

  async BusinessExpenses({commit}) {
    await apiClient.get('BusinessExpenses').then((result) => {
      commit('BUSINESS_EXPENSES', result.data)
    }).catch((err) => {
      console.log(err);
    });
  },

  async addBussinessExpenses({ commit }, data) {
    await apiClient.post('BusinessExpenses/add', data).then((result) => {
      commit('MESSAGE', result.message.message)
    }).catch((err) => {
      console.log(err);
    });
  },

  async sales({ commit }) {
    await apiClient.get('sales').then((result) => {
      commit('SALES', result.data)
    }).catch((err) => {
      console.log(err);
    });
  },

  async addSales({ commit }, data) {
    await apiClient.post('sales/add', data).then((result) => {
      commit('MESSAGE', result.message.message)
    }).catch((err) => {
      console.log(err);
    });
  },

  async OfficeExpenses({ commit }) {
    await apiClient.get('office-expenses').then((result) => {
      commit('OFFICE_EXPENSES', result.data)
    }).catch((err) => {
      console.log(err);
    });
  },

  async addOfficeExpenses({ commit }, data) {
    await apiClient.post('office-expenses/add', data).then((result) => {
      commit('MESSAGE', result.message.message)
    }).catch((err) => {
      console.log(err);
    });
  },

  async salaries({ commit }) {
    await apiClient.get('salaries').then((result) => {
      commit('SALARIES', result.data)
    }).catch((err) => {
      console.log(err);
    });
  },

  async addSalary({ commit }, data) {
    await apiClient.post('salaries/add', data).then((result) => {
      commit('SALARIES', result.data)
    }).catch((err) => {
      console.log(err);
    });
  },

},

getters: {
  
},

modules: {
  auth
},

})