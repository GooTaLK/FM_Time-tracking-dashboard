import './app.css'
import Nav from './components/nav'
import TimeContainer from './components/timeContainer'
import timeData from '../data.json'

export default function App() {
  return (
    <div className='App'>
      <Nav />
      <TimeContainer timeData={timeData} type='daily' />
    </div>
  )
}
