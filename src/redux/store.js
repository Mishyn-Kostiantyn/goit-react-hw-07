import { configureStore }  from '@reduxjs/toolkit';

import { contactsReducer } from './contactsslice.js';
import { filtersReducer } from './filtersslice.js';

export const store = configureStore({
  reducer: {
    selectContacts:contactsReducer,
    selectNameFilter: filtersReducer,
  }

});
