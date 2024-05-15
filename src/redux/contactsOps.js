import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6640a018a7500fcf1a9e4268.mockapi.io/"

export const fetchContacts = createAsyncThunk(
    'fetchAllContacts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts')
            return response.data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
})

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', newContact)
        return response.data;
    } catch (error){
        return thunkAPI.rejectWithValue(error.message)
     }
    })
 
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`)
        return response.data;
    } catch (error){
        return thunkAPI.rejectWithValue(error.message)
     }
    })
 