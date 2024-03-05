import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import waitListService from './waitListService';

const initialState = {
    waitList: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Add WaitList
export const addWaitList = createAsyncThunk('waitList/add', async(userData, thunkAPI) => {
    try {
        return await waitListService.addWaitList(userData)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message);
    }
})

export const authSlice = createSlice({
    name: 'waitList',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addWaitList.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addWaitList.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.waitList.push(action.payload)
            })
            .addCase(addWaitList.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;