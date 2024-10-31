import {puppyList} from './data.js'
import {useState} from 'react' 
function App() {
const [puppies, setPuppies] = useState(puppyList)
const [featPupId, setFeatPupId] = useState(null)
return (
    <div>
  {puppies.map((puppy) => {
    return <p>{puppy.name}</p>
  })}
  </div>
  )
}
export default App
