const initialState = { data: null, loading: false };

export const userBundle = {
  name: "user",
  reducter: (state = initialState) => state,
  selectUserRaw: (state) => state.user,
  selectUserData: (state) => state.user.data,
};
