

const SidebarChoice = ({title, Icon}) => {
  return (
    <div className="sidebar-choice">
    
      {
        Icon ? <div className="choice"><Icon /><h4>{title}</h4> </div> : <p>{title}</p>
      }

    </div>
  )
}

export default SidebarChoice
