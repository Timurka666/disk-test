import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
    files: File[]
}

const initialState: IState = {
    files: []
}
export const fileSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        pushAFile: (state, action: PayloadAction<File>) => {
            state.files.push(action.payload);
        },
    }
});