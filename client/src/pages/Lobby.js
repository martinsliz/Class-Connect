import Search from '../components/Search'
import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

import Client from '../services/api'

const Lobby = ({ user }) => {
  let navigate = useNavigate()

  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await Client.get(`/api/classes/subject/${searchQuery}`)
    setSearchResults(response.data)
    toggleSearched(true)
    setSearchQuery('')
  }

  // console.log(searchResults)

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return user ? (
    <div>
      <h1>Search classes</h1>
      <div>
        <Search
          onChange={handleChange}
          onSubmit={getSearchResults}
          value={searchQuery}
        />
        {searched && (
          <div>
            <h2>Search Results</h2>
            <section className="container-grid">
              {searchResults.map((result) => (
                <NavLink to={`/classPreview/${result.subject}`} key={result.id}>
                  <h3>name: {result.name}</h3>
                  {/* <h3>
                    name: {result.name} semester: {result.semester} credits:{' '}
                    {result.credits}
                  </h3> */}
                </NavLink>
              ))}
            </section>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signIn')}>Sign In</button>
    </div>
  )
}

export default Lobby
