

import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

export const STORAGE_KEY = 'listOfContact';
  const initialContactList=JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];
   const initialState = {
    contacts: { items: initialContactList, },
    
}
const contactsListSlice = createSlice({

  name: "contactsList",
 
  initialState: initialState.contacts,
  
  reducers: {
    addContact(state, action) {
      const contactToAdd = { ...action.payload, id: nanoid() };
      state.items.push(contactToAdd);
    },
    deleteContact(state, action) {state.items=state.items.filter(contact => contact.id !== action.payload)},
   
  },
});


export const { addContact, deleteContact} = contactsListSlice.actions;


export const contactsReducer = contactsListSlice.reducer;

