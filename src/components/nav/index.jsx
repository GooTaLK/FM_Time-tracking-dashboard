import './styles.css'
import utilsStyles from '../../styles/utils.module.css'
import jeremyImage from '../../../assets/images/image-jeremy.png'
import ProfileSpace from './profileSpace'

export default function Nav() {
  return (
    <div className={`NavWrapper ${utilsStyles.rounded}`}>
      <ProfileSpace imgSrc={jeremyImage} name='Jeremy Robson' />
      <nav className='Nav'>
        <ul>
          <li>
            <a className='Nav-links' href=''>
              Daily
            </a>
          </li>
          <li>
            <a className='Nav-links' href=''>
              Weekly
            </a>
          </li>
          <li>
            <a className='Nav-links' href=''>
              Monthly
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
