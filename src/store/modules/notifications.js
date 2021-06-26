// notifications
export const namespaced = true;

let nexId = 1;

// export default {

export const state = {
    notifications: [],
};

// getters: {
//     value: state => {
//         return state.value;
//     }
// },

export const getters = {};

export const mutations = {
    // updateValue(state, payload) {
    //     state.value = payload;
    // }
    ADD(state, notification) {
        state.notifications.push({
            notification: notification,
            id: nexId++,
        });
    },

    DELETE(state, notificationToRemove) {
        state.notifications = state.notifications.filter(
            (notification) => notification.id !== notificationToRemove.id
        );
    },
};

// actions: {
//     updateValue({commit}, payload) {
//         commit('updateValue', payload);
//     }
// }

export const actions = {
    add({ commit }, notification) {
        commit("ADD", notification);
    },
    delete({ commit }, notificationToRemove) {
        commit("DELETE", notificationToRemove);
    },
};

// };
