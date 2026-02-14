// src/redux/sessionSlice.js
import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    sessionId: null,
    userId: null,
    name: null,
    customerId: null, // permanent partner CustomerId
  },

  reducers: {
    setSession: (state, action) => {
      const { sessionId, userId, name, customerId } = action.payload;

      if (sessionId) state.sessionId = sessionId;
      if (userId) state.userId = userId;
      if (name) state.name = name;
      if (customerId) state.customerId = customerId;
    },

    clearSession: (state) => {
      state.sessionId = null;
      state.userId = null;
      state.name = null;
      state.customerId = null;
    },
  },
});

export const { setSession, clearSession } = sessionSlice.actions;
export default sessionSlice.reducer;