import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Claim } from "../types";

// Tipe data state claim
interface ClaimState {
  claims: Claim[];
  loading: boolean;
  error: string | null;
}

// State inisial claim
const initialState: ClaimState = {
  claims: [],
  loading: false,
  error: null,
};

// Slice claim
const claimSlice = createSlice({
  name: "claims",
  initialState,
  reducers: {
    setClaims(state, action: PayloadAction<Claim[]>) {
      state.claims = action.payload;
    },
    addClaim(state, action: PayloadAction<Claim>) {
      state.claims.unshift(action.payload);
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setClaims, addClaim } = claimSlice.actions;

export default claimSlice.reducer;
