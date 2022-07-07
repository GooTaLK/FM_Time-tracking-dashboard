import './styles.css'
import utilStyles from '../../../styles/utils.module.css'

export default function ProfileSpace({ imgSrc, name }) {
  return (
    <div className={`ProfileSpace ${utilStyles.rounded}`}>
      <img className='ProfileSpace-picture' src={imgSrc} alt='Profile image' />
      <div className='ProfileSpace-name'>
        <span className={`ProfileSpace-name-label ${utilStyles.blurredText}`}>
          Report for
        </span>
        {name}
      </div>
    </div>
  )
}
