import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

export const postUser = (user) => async (dispatch) => {
  try {
    dispatch(setUser(user))
    return true;
  } catch (error) {
    console.log(error);
  }
};
