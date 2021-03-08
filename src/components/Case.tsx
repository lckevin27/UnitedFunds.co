import React from 'react'
import TitleSide from '../components/TitleSide'

interface caseObj {
  abbr: string,
  name: string,
  content: any[]
}

interface caseProps {
  singCase: caseObj,
}

const Case = ({ singCase }: caseProps) => {
  return (
    <div id={ singCase.abbr } className="case">
      <TitleSide title={ singCase.name } />
      <div className="content-container">
        { singCase.abbr !== 'GPC' ? <img src={ require(`../img/case/${singCase.abbr}.png`).default } alt={ `${singCase.name}'s Photo` } className="logo" /> : '' }
        { singCase.content.map(sc => (sc.txt ? <p dangerouslySetInnerHTML={{__html: `${sc.txt}`}}></p> : <div className="embedded"><p className="title-img">{ sc.img.title }</p><img src={ require(`../img/case/${sc.img.filename}`).default } alt={ sc.img.title } /></div>)) }
      </div>
    </div>
  )
}

export default Case
