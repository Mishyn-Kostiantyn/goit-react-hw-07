import { createAsyncThunk } from '@reduxjs/toolkit';
import  axios from 'axios'; 

axios.defaults.baseURL = " https://6622926227fcd16fa6ca3c04.mockapi.io";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get('/contacts'); return responce.data;
        
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        
        }
    });
export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
    try { const responce = await axios.post('/contacts', contact); return responce.data } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try { const responce = await axios.delete(`/contacts/${contactId}`); return responce.data} catch (error) {
        return thunkAPI.rejectWithValue(error.message)
        
    }
    
});