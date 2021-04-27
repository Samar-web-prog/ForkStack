import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  * as api from "../utils/wardrobe";


export const createwardrobe = createAsyncThunk(
    "wardrobe",
    async (dresses, thunkAPI) => {
        const response = await api.ajoutdress(dresses);
        return response.data;
    }
);

let initialState = {
    values: [],
};
export const WardrobeSlice = createSlice({
    name: "Wardrobe",
    initialState,
    reducers: {
        getwardrobe: ( state ,action)=> {
            state.values = action.payload
        },
        deletewardrobe:(state ,action)=>{
            const payload=action.payload;
            state.values=state.values.filter((dress)=>dress._id!==payload);
        }

    },
    extraReducers: {
        [createwardrobe.fulfilled]: (state, action) => {
            state.values.push(action.payload.data);
        },
    },


});

export const {
    getwardrobe,
    deletewardrobe
} = WardrobeSlice.actions;

//thunk
export const affichage = () => async (dispatch) => {
    try {
        const { data } = await api.getDresses();

        dispatch(getwardrobe(data));
        console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};
export const supprimer = (id) => async (dispatch) => {
    try {
        await api.deleteDresses(id);
        dispatch(deletewardrobe(id));
    } catch (error) {
        console.log(error.message);
    }
};
export const selectwardrobe = (state) => state.Wardrobe.values;

export default WardrobeSlice.reducer;
