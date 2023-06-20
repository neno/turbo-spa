import {SearchForm} from "@nenoweb/ui";

function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('Form submitted:' + e.currentTarget.searchTerm.value)
  }

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
    </>
  )
}

export default App
