import React from 'react'

interface titleProps {
  title: string
}

const TitleSide = ({ title }: titleProps) => {
  return (
    <div className="title-side">
      <p className="title"><span>{ title }</span></p>
    </div>
  )
}

export default TitleSide
