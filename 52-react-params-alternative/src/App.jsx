
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Wilkommen im Shop</h1>
      <Link to={'/home'}>Zum Shop</Link>
    </>
  )
}

export default App
