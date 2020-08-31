export default {
  name: "user",
  getReducer: () => {
    const initialState = { data: null, loading: false };

    return (state = initialState, _action) => {
      return state;
    };
  },
  selectUserRaw: (state) => state.user,
  selectUserData: (state) => state.user.data,
};
