import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  email: string;
  password: string;
}

interface UserState {
  isAuth: boolean;
  user: User | null;
}

const initialState: UserState = {
  isAuth: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) {
      const { username, password } = action.payload;
      if (state.user) {
        state.user.username = username;
        state.user.password = password;
      }
      state.isAuth = true;
    },
    logoutUser(state) {
      state.isAuth = false;
      state.user = null;
    },
    setUser(state, action: PayloadAction<User>) {
      state.isAuth = true;
      state.user = action.payload;
    },
    resetUser() {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser, setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
