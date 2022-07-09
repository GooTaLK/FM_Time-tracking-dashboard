import './styles.css'
import utilsStyles from '../../styles/utils.module.css'
import jeremyImage from '../../../assets/images/image-jeremy.png'
import ProfileSpace from './profileSpace'

export default function Nav({ currenLink }) {
  return (
    <div className={`NavWrapper ${utilsStyles.rounded}`}>
      <ProfileSpace imgSrc={jeremyImage} name='Jeremy Robson' />
      <nav className='Nav'>
        <ul>
          <li>
            <a
              className={`Nav-links${currenLink === 'daily' ? ' current' : ''}`}
              href='#daily'
            >
              Daily
            </a>
          </li>
          <li>
            <a
              className={`Nav-links${
                currenLink === 'weekly' ? ' current' : ''
              }`}
              href='#weekly'
            >
              Weekly
            </a>
          </li>
          <li>
            <a
              className={`Nav-links${
                currenLink === 'monthly' ? ' current' : ''
              }`}
              href='#monthly'
            >
              Monthly
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
