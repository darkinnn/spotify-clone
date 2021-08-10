import { SongInfo, SongRowContainer } from "./styles"

const a = [
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  },
  {
    inc_date: '9 jul 2019',
    time: '3:47'
  }
]

const SongRow = ({track, id}) => {


  return (
    <SongRowContainer>
      
      
      <SongInfo>
        <div className="sharp">
          {id}
        </div>
        <div className="title">
          <img src={track.title.img} alt="album" />
          <div className="title-song">
            <p>
              {
                track.title.name
              }
            </p>
            <a href="#">
              {
                track.title.title
              }
            </a>
          </div>
        </div>
        <div className="album">
          <p>
            {
              track.album
            }
          </p>
        </div>
        <div className="inc-date">
            <p>{a[id].inc_date}</p>
          </div>
          <div className="time">
            <p>{a[id].time}</p>
          </div>
      </SongInfo>
      
    </SongRowContainer>
  )
}

export default SongRow
