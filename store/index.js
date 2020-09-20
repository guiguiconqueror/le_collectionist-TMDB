export const state = () => ({
  watchlist: []
});

export const mutations = {
  // Watchlist
  setWatchlist: (state, params) => {
    state.watchlist.push(params);
  },
  updateWatchlist: (state, params) => {
    state.watchlist = params;
  }
};

export const actions = {
  // Watchlist
  addToWatchlist({ commit }, params) {
    commit("setWatchlist", params);
  },
  removeFromWatchlist({ commit, state }, id) {
    const updatedWatchlist = state.watchlist.filter(media => media.id !== id);
    commit("updateWatchlist", updatedWatchlist);
  }
};