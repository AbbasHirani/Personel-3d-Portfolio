import React from 'react'

const TitleHeader = ({title,sub}) => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className='hero-badge'>
            {title}
        </div>
        <div className='font-semibold md:text-5xl text-3xl text-center'>
            {sub}
        </div>
    </div>
  )
}

export default TitleHeader