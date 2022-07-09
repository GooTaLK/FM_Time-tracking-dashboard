import React, { useRef } from 'react'
import './styles.css'
import TimeCard from '../timeCard'
import { extraTimeData } from '../../../extraTimeData'

export default function TimeContainer({ type, timeData }) {
  const allowedTypes = ['daily', 'weekly', 'monthly']
  if (!allowedTypes.includes(type)) return null

  const typeSingleRef = useRef(type === 'daily' ? 'day' : type.slice(2))

  return (
    <main className='TimeContainer'>
      {timeData.map(({ title, timeframes }) => {
        const { current, previous } = timeframes[type]
        const { backgroundColor, topImage } = extraTimeData[title.toLowerCase()]
        return (
          <TimeCard
            key={title}
            title={title}
            backgroundColor={backgroundColor}
            topImage={topImage}
            time={`${current}hrs`}
            prevTime={`Last ${typeSingleRef.current} - ${previous}hrs`}
          />
        )
      })}
    </main>
  )
}
