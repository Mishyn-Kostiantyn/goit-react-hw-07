
import './App.css'
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import Loader from './components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from './redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  useEffect (() => {dispatch(fetchContacts())
    
  },[dispatch])
  return (
    <>
      <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm />
        <SearchBox />
         {loading && !isError&&<Loader/>}
      <ContactList />
    </div>
      
    </>
  )
}

export default App












































































