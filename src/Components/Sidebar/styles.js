// Sidebar
import styled from 'styled-components'

const SidebarContainer = styled.div`
  
  position: fixed;
  height: 100vh;
  background-color: #000;
  width: 300px;
  color: #ffF;
  padding: 0 20px;

  & img {
    height: 40px;
    margin-top: 25px;
    margin-bottom: 20px;
    margin-right: auto;
    cursor: pointer;
    object-fit: contain;
  }

  & .space {
    margin-bottom: 20px;
  }

  & .line {
    width: 100%;
    border-bottom: .5px solid grey;
    opacity: .5;
    margin: 5px 0 17px 0;
  }

  & .sidebar-choice {
    color: rgb(180, 180, 154);
    cursor: pointer;


    &:hover {
      color: #fff;
    }

    & .choice {
      display: flex;
      align-items: center;
      height: 40px;
      transition: .3s color ease-in;
    }

    & h4{
      font-weight: 600;
      margin-left: 15px;
      
    }
  
    & p{
      font-size: 14px;
      height: 30px;
    }

  }

  

`

const Playlists = styled.div`
  
  


`


export {SidebarContainer, Playlists}