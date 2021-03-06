import React from 'react'

interface sbProps {
  name: string,
}

const SubBanner = ({ name }: sbProps) => {
  return (
    <div className={`banner-${name}`}>
      
    </div>
  )
}

export default SubBanner
