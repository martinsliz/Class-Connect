const Search = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="search">
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Class Subject"
        onChange={props.onChange}
      ></input>
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
