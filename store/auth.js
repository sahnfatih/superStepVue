// store/auth.js
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const state = () => ({
  user: null,
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

export const actions = {
  initAuth({ commit }) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      commit('setUser', user);
    });
  },
};
