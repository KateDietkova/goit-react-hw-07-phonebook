import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { ContactListStyled, ContactListItemStyled } from './ContactList.styled';
import { selectContacts, selectFilterValue } from 'redux/selectors';

export const ContactList = () => {
  const { items } = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);
  console.log(items);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    return filterContacts;
  };

  const contacts = visibleContacts();
  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <ContactListItemStyled key={contact.id}>
          <ContactItem contact={contact} />
        </ContactListItemStyled>
      ))}
    </ContactListStyled>
  );
};

//
