import {SidebarContainer} from './styles'
import logo from '../../assets/logo.png'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SidebarChoice from './SidebarChoice';
// import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';

const Sidebar = () => {
  return ( 
    <SidebarContainer>
      <img src={logo} alt="logo" />
      <SidebarChoice title="Home" Icon={HomeRoundedIcon} />
      <SidebarChoice title="Search" Icon={SearchIcon} />
      <SidebarChoice title="Your Library" Icon={LibraryMusicIcon} />
      <div className="space"></div>
      <SidebarChoice title="Create List" Icon={AddBoxOutlinedIcon} />
      <SidebarChoice title="Songs you like" Icon={FavoriteBorderIcon} />
      <div className="line"></div>
      <SidebarChoice title="Rap" />
      <SidebarChoice title="Rock" />
      <SidebarChoice title="Beats" />
      <SidebarChoice title="Uwu" />
    </SidebarContainer>
   );
}
 
export default Sidebar;