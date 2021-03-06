import Vuex from 'vuex';

const state = {
    notifications: []
};

const mutations = {
    ADD_NOTIFICATION (state, payload) {
        state.notifications.push({
            payload: payload
        });
    }
};

const getters = {
    notifications:  state => state.notifications
};

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: {},
});