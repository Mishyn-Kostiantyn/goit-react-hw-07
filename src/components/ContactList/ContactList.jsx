import { useSelector} from 'react-redux';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsslice';

function ContactList() {
 
 
  const filteredContactList = useSelector(selectFilteredContacts);
  return (
    <div className={css.contactListContainer}>{filteredContactList.map((contactData) => (<Contact key={contactData.id} contactData={contactData} /> ))}</div>
  )
}

export default ContactList