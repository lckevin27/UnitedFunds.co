import React from 'react'

interface memberObj {
  code: string,
  name: string, 
  position: string,
  role: string,
  intro: string,
}

interface memberProps {
  member: memberObj
}

const Member = ({ member }: memberProps) => {
  return (
    <div className="member">
      <div className="photo">
        <img src={require(`../img/team/${ member.code }.png`).default} alt={`${ member.code }'s Photo`}/>
      </div>
      <div className="main">
        <div className="name">
          { member.name }
        </div>
        <div className="position">
          { member.position }
        </div>
        <div className="role">
          { member.role }
        </div>
      </div>
      <div className="intro">
        { member.intro }
      </div>
    </div>
  )
}

export default Member
