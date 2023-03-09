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

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const subjects = [
    'Calculus',
    'Astronomy',
    'Algebra',
    'Physics',
    'Physical Education',
    'Music',
    'History',
    'Socail Studies',
    'Art',
    'Geography',
    'Biology',
    'Chemistry',
    'Foreign Languages',
    'Philosophy',
    'Literature',
    'English',
    'Computer Science',
    'Health Education',
    'Anthropology',
    'Dance',
    'Drama',
    'Forensics',
    'Geometry',
    'Humanities',
    'Law',
    'Nutrition',
    'Mechanics',
    'Photography',
    'Pottery',
    'Probability',
    'Religion',
    'Sociology',
    'Statistics',
    'Trigonometry',
    'Web Designing'
  ]

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
                <NavLink to={`/classDetails/${result.id}`} key={result.id}>
                  <div className="search-results">
                    <h3>{result.name}</h3>
                    <p>Semester: {result.semester}</p>
                    <p>Credits: {result.credits}</p>
                  </div>
                </NavLink>
              ))}
            </section>
          </div>
        )}
      </div>
      <div className="subject-list">
        <div className="subject">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3330/3330317.png"
            alt="books"
          ></img>
          <h2>Subject Lists</h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3330/3330317.png"
            alt="books"
          ></img>
        </div>
        <section className="container-grid">
          {subjects.map((subject) => (
            <NavLink
              to={`/classPreview/${subject}`}
              key={subject}
              className="subjectLinks"
            >
              <div>
                <h3 className="subject-card">{subject}</h3>
              </div>
            </NavLink>
          ))}
        </section>
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
