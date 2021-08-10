// Body
import styled from 'styled-components'

const BodyContainer = styled.div`
  
  width: calc(100vw - 300px);
  margin-left: 300px;
  color: white;
  background: rgb(31,20,18);
  background: linear-gradient(180deg, rgba(31,20,18,1) 0%, rgba(27,19,17,1) 6%, rgba(18,18,18,1) 45%);
  margin-bottom: 90px;
  overflow-y: overlay;

  
  & .header-songs {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(180, 180, 154, .2);
    margin-bottom: 25px;
    font-size: 15px;
  }

  .sharp {
    width: 50px;
    text-align: center;
  }

  .title {
    width: 400px;
  }

  .album {
    width: 250px;
  }

  .inc-date {
    width: 220px;
  }

  .time {
    width: 100px;
  }

`

const HeaderAndInfo = styled.div`
  
  background-image: linear-gradient(to bottom, #563129, #4c2b24, #43261f, #39201b, #301b16);
  padding-bottom: 15px;

`

const HeaderContainer = styled.div`

  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 10px 30px;

`

const HeaderLeft = styled.div`
  
  display: flex;
  align-items: center;
  flex: 0.5;
  min-width: 75px;
  background-color: #fff;
  color: #181818;
  border-radius: 30px;
  padding: 10px;

  & input {
    border: none;
    width: 100%;

    &:focus {
      border: none;
      outline: none;
    }
  }

`

const HeaderRight = styled.div`
  
  display: flex;
  align-items: center;
  cursor: pointer;
  

  & h4 {
    margin-left: 15px;
  }

`

const Info = styled.div`

  display: flex;
  align-items: flex-end;
  padding: 10px;
  

  & img {
    width: 17vw;
    margin: 0 20px 0 30px;
    box-shadow: 0 4px 25px #000;
  }

`

const InfoText = styled.div`

  flex: 1;
  font-size: 13px;
  margin-left: 7px;

  & h2 {
    font-size: 80px;
    margin: 10px 0;
  }

`

const Songs = styled.div`

  margin: 20px 25px;
  color: rgb(180, 180, 154);

`

const Icons = styled.div`
  margin-bottom: 20px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: rgb(180, 180, 154);

  & .play-circle {
    font-size: 65px;
    color: #1DB954;
    margin-right: 20px;
    padding: 0;
    position: relative;
    z-index: 50;

    &:hover {
      transform: scale(1.05);
    }
  }

  // fondo blanco icono de play, si rompe borrar
  &::before {
    content: '1';
    position: absolute;
    top: 50%;
    transform: translateY(-50%) ;
    left: 20px;
    width: 25px;
    height: 25px;
    background-color: #fff;
    z-index: 10;
  }

  & .points {
    font-size: 35px;
  }

  & .points:hover {
    color: white;
  }

`

const SongRowContainer = styled.div`

  display: flex;
  align-items: center;

  
  &:hover {
    cursor: pointer;
    background-color: #2E2B2A;
    opacity: .8;
  }

  & img {
    height: 45px;
    width: 45px;
    object-fit: contain;
  }

`

const SongInfo = styled.div`

  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  font-size: 14px;

  & .title {
    display: flex;
    align-items: center;
    
    & .title-song {
      margin-left: 15px;

      & p {
        color: white;
      }

      & a {
        color: inherit;
        text-decoration: none;

        &:hover {
          color: white;
          text-decoration: underline;
        }
      }
    }

  }

`

export {BodyContainer, HeaderContainer, HeaderLeft, HeaderRight, Info, InfoText, Songs, Icons, HeaderAndInfo, SongRowContainer, SongInfo}