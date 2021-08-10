import {FooterContainer, FooterLeft, FooterCenter, FooterRight} from './styles'
import track from '../../assets/track.jfif'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';

import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import ImportantDevicesOutlinedIcon from '@material-ui/icons/ImportantDevicesOutlined';
import OpenWithOutlinedIcon from '@material-ui/icons/OpenWithOutlined';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <div className="footer-left-container">
          <img src={track} alt="cover" />
          <div className="song-and-artist">
            <a href="#">De La Guitarra</a>
            <a href="#">Intoxicados</a>
          </div>
          <div className="favorites">
            <div><FavoriteBorderIcon /></div>
            <div><FolderSpecialIcon /></div>
          </div>
        </div>
      </FooterLeft>
      <FooterCenter>
        <div className="footer-center-up">
          <ShuffleIcon className="icon" />
          <SkipPreviousIcon className="icon" />
          <PlayCircleFilledIcon className="play" />
          <SkipNextIcon className="icon" />
          <RepeatIcon className="icon" />
        </div>
        <div className="footer-center-down">
          <p>00:00</p>
          <Slider />
          <p>4:34</p>
        </div>
      </FooterCenter>
      <FooterRight>
        <Grid container spacing={2}>
          <Grid item> <MicNoneOutlinedIcon className="icon first" /> </Grid>
          <Grid item> <PlaylistPlayIcon className="icon list" /> </Grid>
          <Grid item> <ImportantDevicesOutlinedIcon className="icon" /> </Grid>
          <Grid item> <VolumeDownIcon className="icon volume" /> </Grid>
          <Grid item xs> <Slider /> </Grid>
          <Grid item> <OpenWithOutlinedIcon className="icon" /> </Grid>
        </Grid>
      </FooterRight>
    </FooterContainer>
  )
}

export default Footer