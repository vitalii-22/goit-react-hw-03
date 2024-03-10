import css from './SearchBox.module.css';

const SearchBox = ({ contacts, handleSearchChange }) => {
  return (
    <label className={css.searchLabel}>
      Find contacts by name
      <input
        className={css.searchInput}
        type="text"
        name="contacts"
        value={contacts.name}
        onChange={handleSearchChange}
      />
    </label>
  );
};

export default SearchBox;
