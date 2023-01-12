import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './itemsSlice/filterSlice';
import { contactsReducer } from './itemsSlice/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});


