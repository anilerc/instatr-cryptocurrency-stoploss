import Vue from "vue"
import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({

  state: {
    price: null,
    baseATR: null,
    customATR: null,
    portfoyBuyuk: null,
    isLong: true
  },

  getters: {
    getIsLong(state) {
      return state.isLong;
    },

    getCustomATR(state) {

      return state.customATR;
    }
    ,
    getBaseATR(state) {


      return state.baseATR;
    }
    ,

    getPortfoyBuyuk(state) {
      return state.portfoyBuyuk;
    },

    getPrice(state) {

      return state.price;
    }
  }

  ,

  mutations: {
    setShort(state) {
      state.isLong = false;
    },

    setBaseATR(state, value) {
      state.baseATR = value;
    },

    setPortfoyBuyuk(state, value) {
      state.portfoyBuyuk = value;
    },

    setPrice(state, value) {
      state.price = value;
    },

    setLong(state) {
      state.isLong = true;
    }
    ,
    setCustomATR(state, value) {
      state.customATR = value;
    }
  }

});
