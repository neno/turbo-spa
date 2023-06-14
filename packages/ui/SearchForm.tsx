export interface SearchFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function SearchForm({ handleSubmit }: SearchFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <ol>
        <li>
          <label>
            <input type="text" name="searchTerm" />
          </label>
        </li>
        <li>
          <button type="submit">Search</button>
        </li>
      </ol>
    </form>
  );
}

export default SearchForm;