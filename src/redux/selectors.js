export const selectIsLoading = state => state.selectContacts.contacts.isLoading;
export const selectError = state => state.selectContacts.contacts.error;
export const selectContacts = state => state.selectContacts.contacts.items;
export const selectNameFilter = state => state.selectNameFilter.name;