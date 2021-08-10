import {SpotifyBody} from './styles'
import Sidebar from '../Sidebar/Sidebar'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import { Fragment } from 'react'

const Player = () => {
  return (
    <Fragment>
      <SpotifyBody>
        <Sidebar />
        <Body />
      </SpotifyBody>
      <Footer />
    </Fragment>
    
  )
}

export default Player
