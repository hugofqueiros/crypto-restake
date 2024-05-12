import { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from "../../createAppSlice";

import { fetchRoundUp, performRoundUp } from "./roundUpAPI";

// Create the Redux slice
export const roundUpSlice = createAppSlice({
    name: 'roundUp',
    initialState: {
        roundUpTotal: 0,
        loading: false,
        error: null,
        successMessage: '',
    },
    reducers: {
        clearSuccessMessage(state) {
            state.successMessage = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRoundUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRoundUp.fulfilled, (state, action: PayloadAction<number>) => {
                state.roundUpTotal = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchRoundUp.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.error = action.payload || null;
                state.loading = false;
            })
            .addCase(performRoundUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(performRoundUp.fulfilled, (state, action: PayloadAction<{ successMessage: string }>) => {
                state.loading = false;
                state.successMessage = action.payload.successMessage;
            })
            .addCase(performRoundUp.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.error = action.payload || null;
                state.loading = false;
            });
    },
});

export const { clearSuccessMessage } = roundUpSlice.actions;

export default roundUpSlice.reducer;
