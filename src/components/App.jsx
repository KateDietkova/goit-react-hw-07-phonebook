import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Box } from './Box/Box';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  console.log(items);
  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt="20px">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="10px"
        mb="20px"
      >
        <h1>Phonebook</h1>
        <ContactForm />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" p="10px">
        <h2>Contacts</h2>
        <Filter />
        {items && <ContactList />}
      </Box>
    </Box>
  );
};
