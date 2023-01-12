import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ButtonContactStyled, ContactInfo } from './ContactItem.styled';

export const ContactItem = ({
  contact: { id, name, phone }
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <ContactInfo>
        {name}: {phone}
      </ContactInfo>
      <ButtonContactStyled
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </ButtonContactStyled>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
