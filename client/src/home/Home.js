import Display from './display/Display'
import './home.css'
import Sidebar from './sidebar/Sidebar'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <Display />
    </div>
  )
}

export default Home