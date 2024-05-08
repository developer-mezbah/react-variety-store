import React from 'react'

const Title = ({text}) => {
  return (
    <div>
        <h2 className="text-4xl text-textColor reuseable-title">{text}</h2>
    </div>
  )
}

export default Title