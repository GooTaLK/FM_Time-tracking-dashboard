import { useEffect, useRef, useState } from 'react'
import './app.css'
import Nav from './components/nav'
import TimeContainer from './components/timeContainer'
import timeData from '../data.json'

function getTypeFromHash() {
  if (location.hash === '#monthly') return 'monthly'
  if (location.hash === '#weekly') return 'weekly'
  return 'daily'
}

export default function App() {
  const [dateType, setDateType] = useState(getTypeFromHash())
  const dateTypeRef = useRef(dateType)

  dateTypeRef.current = dateType

  useEffect(() => {
    function hashchangeHandler() {
      const newDateType = getTypeFromHash()

      if (location.hash.slice(1) !== newDateType) {
        location.hash = newDateType
        setDateType(newDateType)
      } else if (dateTypeRef !== newDateType) {
        setDateType(newDateType)
      }
    }

    location.hash = getTypeFromHash()
    window.addEventListener('hashchange', hashchangeHandler)

    return () => window.removeEventListener('hashchange', hashchangeHandler)
  }, [])

  return (
    <div className='App'>
      <Nav currenLink={dateType} />
      <TimeContainer timeData={timeData} type={dateType} />
    </div>
  )
}
