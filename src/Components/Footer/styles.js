// Footer
import styled from 'styled-components'

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: 90px;
  width: 100%;
  background-color: #181818;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

const FooterLeft = styled.div`
  flex: 0.2;
  color: #fff;
  padding: 10px 10px 10px 15px;

  & .footer-left-container {
    display: flex;
    align-items: center;
  }

  & img {
    width: 56px;
    height: 56px;
    object-fit: contain;
  }

  & .song-and-artist {
      display: flex;
      flex-direction: column;
      padding: 10px;
      min-width: 11rem;
      margin-right: 1rem;

      & a {
        text-decoration: none;
        color: rgb(180, 180, 154);
        font-size: 11px;

        &:hover {
          text-decoration: underline;
          color: #fff;
        }
      }

      & a:first-child {
        color: white;
        font-size: 15px;
      }
  }

  & .favorites {
    padding: 10px;
    display: flex;
    color: rgb(180, 180, 154);

    & div {
      width: 20px;
      height: 20px;
      margin: 0 auto;
      font-size: .5rem;
      cursor: pointer;
      
      &:hover {
        color: #fff;
      }
    }

    & div:first-child {
      margin-right: 10px;
    }
  }

`

const FooterCenter = styled.div`
  flex: 0.65;
  display: flex;
  flex-direction: column;
  color: rgb(180, 180, 154);
  font-size: 11px;
  padding: 0 40px;

  & .footer-center-up {
    display: flex;
    align-items: center;
    justify-content: center;
    

    & .icon {
      margin: 0 13px;
      font-size: 20px;
      cursor: pointer;

      &:not(.play):hover {
        color: white;
      }
    }

    & .play {
        font-size: 40px;
        color: white;

        &:hover {
          transform: scale(1.05);
        }
      }
    
  }

  & .footer-center-down {
    display: flex;
    align-items: center;
    padding: 0 40px;

    & p {
      
    }

    & .MuiSlider-root {
      color: rgb(180, 180, 154);
      margin: 0 10px;

      &:hover {
        color: #1DB954;
      }
    }
  }

  

`

const FooterRight = styled.div`
  
  flex: 0.35;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 35px;

  & .icon {
    color: rgb(180, 180, 154);
    font-size: 18px;
    margin-top: 5px;

    &:hover {
      color: white;
    }
  }

  & .first {
    margin-left: 60px;
  }

  & .MuiSlider-root {
    color: rgb(180, 180, 154);

    &:hover {
      color: #1DB954;
    }
  }

  & .volume {
    font-size: 24px;
    margin-top: 2px;
  }

  & .list,
  & .first {
    font-size: 20px;
    margin-top: 4px;
  }

`




export {FooterContainer, FooterLeft, FooterCenter,FooterRight}