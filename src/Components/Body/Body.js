import Header from './Header'
import { BodyContainer, Info, InfoText, Songs, Icons, HeaderAndInfo } from './styles'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import MoreHorizonIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import data from './data.json'


const Body = () => {

  return (
    <BodyContainer className="body-container">
      <HeaderAndInfo>
        <Header />
        <Info>
          <img src="https://i.scdn.co/image/ab67616d0000b2732822abd3225540cf8fe8878a" alt="playlist image" />
          <InfoText>
            <h4>PLAYLIST</h4>
            <h2> Uwu </h2>
            <p><span>Nicolás</span> ▪ 16 canciones, 1 hr 16 min  </p>
          </InfoText>
        </Info>
      </HeaderAndInfo>

      <Songs>
        <Icons>
          <PlayCircleFilledIcon className="play-circle" />
          <MoreHorizonIcon className="points" fontSize="large" />
        </Icons>
        <div className="header-songs">
          <div className="sharp">
            <p>#</p>
          </div>
          <div className="title">
            <p>Title</p>
          </div>
          <div className="album">
            <p>Album</p>
          </div>
          <div className="inc-date">
            <p>Incorporation date</p>
          </div>
          <div className="time">
            <AccessTimeIcon />
          </div>
        </div>
        {
          data.uwu_songs.map((item, index) => (
            <SongRow track={item} key={index} id={index} />
          ))
        }
      </Songs>
    </BodyContainer>
  )
}

export default Body
