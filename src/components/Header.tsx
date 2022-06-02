import React from 'react'

interface Props {
    text: string;
}

const Header: React.FC<Props> = ({text}) => {
  return (
    <div className='header'>
        <h1>{text}</h1>
    </div>
  )
}

export default Header