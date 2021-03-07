import React from 'react'

interface titleProps {
  title: string
}

const Title = ({ title }: titleProps) => {
  return (
    <div className="title-wrapper">
      <p className="title">{ title }</p>
    </div>
  )
}

export default Title
