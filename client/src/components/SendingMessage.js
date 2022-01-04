import { memo } from 'react'

function Chat({ content }) {

  if (Object.keys(content).length === 0) {
  
    return <div></div>
  
  } else {

    return (
      <div>
        <div>
          <span>{content.from}</span>
          <span>{content.time}</span>
        </div>

        <p>{content.message}</p>
      </div> 
    )
  }

  }

export default memo(Chat)
