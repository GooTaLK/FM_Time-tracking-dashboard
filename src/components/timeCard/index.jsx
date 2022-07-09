import { useEffect, useRef } from 'react'
import './styles.css'
import utilsStyles from '../../styles/utils.module.css'

export default function TimeCard({
  topImage,
  title,
  time,
  prevTime,
  backgroundColor,
}) {
  const timeCardRef = useRef(null)
  const timeCardDataRef = useRef(null)

  function handleMenuIconOver() {
    timeCardDataRef.current?.style.setProperty(
      'background-color',
      'var(--dark-blue)'
    )
  }

  function handleMenuIconLeave() {
    timeCardDataRef.current?.removeAttribute('style')
  }

  useEffect(() => {
    timeCardRef.current?.style.setProperty('background-color', backgroundColor)
  }, [])

  return (
    <figure className={`TimeCard ${utilsStyles.rounded}`} ref={timeCardRef}>
      <div className='TimeCard-topImage'>
        <img src={topImage.src} alt={topImage.alt} />
      </div>
      <div
        className={`TimeCard-data ${utilsStyles.rounded}`}
        ref={timeCardDataRef}
      >
        <header className='TimeCard-data-heading'>
          <h2 className='TimeCard-data-title'>{title}</h2>
          <span
            className='TimeCard-data-menuIcon'
            onMouseOver={handleMenuIconOver}
            onMouseLeave={handleMenuIconLeave}
          >
            <i className='ellipsisIcon' />
          </span>
        </header>
        <div className='TimeCard-data-content'>
          <span className='TimeCard-data-time'>{time}</span>
          <span className={utilsStyles.blurredText}>{prevTime}</span>
        </div>
      </div>
    </figure>
  )
}
