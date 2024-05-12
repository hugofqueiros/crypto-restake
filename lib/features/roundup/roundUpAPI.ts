import { createAsyncThunk } from '@reduxjs/toolkit';

// import { INTERNAL_BASE_URL } from "@/utils/constants";

// Helper function to refresh the access token using the server-side API
// const refreshAccessToken = async (refreshToken: string): Promise<string> => {
//     const response = await fetch(`${INTERNAL_BASE_URL}/refreshtoken`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ refreshToken }),
//     });

//     if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data.accessToken; // Return the new access token
// };

// Asynchronous thunk to fetch round-up total with token refresh logic
export const fetchRoundUp = createAsyncThunk(
    'roundUp/fetchRoundUp',
    async (
        { accessToken, refreshToken, startDate, endDate }: { accessToken: string; refreshToken: string; startDate: string; endDate: string },
        { rejectWithValue }
    ) => {
        try {
            let token = accessToken;

            // const response = await fetch(`${INTERNAL_BASE_URL}/roundup`, {
                const response = await fetch(`api/roundup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ startDate, endDate }),
            });

            // if (response.status === 401) { // If unauthorized, refresh the access token
            //     token = await refreshAccessToken(refreshToken); // Get a new access token

            //     const retryResponse = await fetch(`${INTERNAL_BASE_URL}/roundup`, {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Authorization': `Bearer ${token}`,
            //         },
            //         body: JSON.stringify({ startDate, endDate }),
            //     });

            //     if (!retryResponse.ok) {
            //         throw new Error(`Error: ${retryResponse.statusText}`);
            //     }

            //     const retryData = await retryResponse.json();
            //     return retryData.roundUpTotal; // Return the round-up total
            // }

            const data = await response.json();
            return data.roundUpTotal; // Return the fetched round-up total
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

// Asynchronous thunk to perform the round-up transfer (server-side)
export const performRoundUp = createAsyncThunk(
    'roundUp/performRoundUp',
    async (
        { accessToken, refreshToken, savingsGoalUid, roundUpTotal }: { accessToken: string; refreshToken: string; savingsGoalUid: string; roundUpTotal: number },
        { rejectWithValue }
    ) => {
        // try {
        //     let token = accessToken;

        //     const transferUid = `transfer-${Date.now()}`; // Unique ID for the transfer
        //     // const transferUid = uuidv4(); 

        //     // Call your internal API route for the transfer operation
        //     const response = await fetch(`${INTERNAL_BASE_URL}/roundup`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${token}`,
        //         },
        //         body: JSON.stringify({
        //             transferUid,
        //             savingsGoalUid,
        //             amount: roundUpTotal * 100, // Convert to minor units (pennies)
        //         }),
        //     });

        //     if (response.status === 401) {
        //         // Refresh the access token if unauthorized
        //         token = await refreshAccessToken(refreshToken);

        //         const retryResponse = await fetch(`${INTERNAL_BASE_URL}/roundup`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'Authorization': `Bearer ${token}`,
        //             },
        //             body: JSON.stringify({
        //                 transferUid,
        //                 savingsGoalUid,
        //                 amount: roundUpTotal * 100, // Convert to minor units (pennies)
        //             }),
        //         });

        //         if (!retryResponse.ok) {
        //             throw new Error(`Error: ${retryResponse.statusText}`);
        //         }
        //     } else if (!response.ok) {
        //         throw new Error(`Error: ${response.statusText}`);
        //     }

        //     return { successMessage: 'Round-up transferred successfully!' }; // Success message after transfer
        // } catch (error) {
        //     return rejectWithValue((error as Error).message);
        // }
    }
);