import {HeaderContainer, HeaderLeft, HeaderRight} from './styles'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'

const Header = () => {

  return (
    <HeaderContainer>
      <HeaderLeft>
        <SearchIcon />
        <input type="text" placeholder="Search for artists, Songs or Other" />
      </HeaderLeft>
      <HeaderRight>
        <Avatar />
        <h4>Nico</h4>
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
