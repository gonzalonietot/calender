import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state:{
        holidays: []
    },
    getters: {
        holidays: state => state.holidays
    },
    actions: {
        getHolidays({commit}, year) {
            return axios.get(`http://nolaborables.com.ar/api/v2/feriados/${year}`).then((response) => {
                commit('SET_HOLIDAYS', Object.freeze(response.data))
            })
        }
    },
    mutations: {
        SET_HOLIDAYS(state, value) {
            state.holidays = value;
        }
    }
})

export default store