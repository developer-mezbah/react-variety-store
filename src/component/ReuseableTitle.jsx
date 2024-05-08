import React from 'react'

const ReuseableTitle = ({text}) => {
  return (
    <div>
        <h2 className="text-4xl text-textColor reuseable-title my-5">{text}</h2>
    </div>
  )
}

export default ReuseableTitle