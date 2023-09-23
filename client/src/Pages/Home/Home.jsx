import {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate=useNavigate()
    const [roomeCode,setRoomCode]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(`/room/${roomeCode}`)
    }
  return (
    <div className='home-page'>
      <form onSubmit={handleSubmit} className="form">
        <div>
            <label htmlFor="">Enter Room Code</label>
            <input type='text' value={roomeCode} onChange={e=>setRoomCode(e.target.value)} required placeholder='enter room ' />
        </div>
        <button type='submit'>Room numver</button>
      </form>
    </div>
  )
}

export default Home
