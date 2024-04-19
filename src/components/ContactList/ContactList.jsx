import { useSelector} from 'react-redux';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

function ContactList() {
  const contactsList = useSelector(state => state.selectContacts.items);
  const filter = useSelector(state => state.selectNameFilter.name);
 
  const filteredContactList = contactsList.filter((contact) =>contact.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div className={css.contactListContainer}>{filteredContactList.map((contactData) => (<Contact key={contactData.id} contactData={contactData} /> ))}</div>
  )
}

export default ContactList