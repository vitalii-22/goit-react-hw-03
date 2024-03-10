import { FiPhone } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import css from './Contact.module.css';

const Contact = ({ name, number }) => {
  return (
    <>
      <div className={css.contactWrapper}>
        <h4>
          <FiUser />
          {name}
        </h4>
        <p>
          <FiPhone /> {number}
        </p>
      </div>

      <button className={css.deleteButton} type="button">
        Delete
      </button>
    </>
  );
};

export default Contact;
