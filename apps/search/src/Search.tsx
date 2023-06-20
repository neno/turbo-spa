import { SearchForm } from '@nenoweb/ui';

export function Search() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('Form submitted:' + e.currentTarget.searchTerm.value);
  };

  return <SearchForm handleSubmit={handleSubmit} />;
}
