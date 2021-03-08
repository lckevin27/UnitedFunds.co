import React from 'react'
import picture from '../img/text/advantages.jpg'
import TitleSide from '../components/TitleSide'

const Advantages = () => {
  return (
    <div id="advantages" className="art-section">
      <TitleSide title="矿业投资有哪些特点" />
      <div className="content-wrapper">
        <p>
          联合资本是一家以矿产资源行业为中心，并积极寻找和布局高增长潜力企业的私募股权投资信托，通过专注于投资矿产资源项目的勘探运营，回报投资者。
          <br/><br/>由于不同矿业项目有不同的风险和特征，投资过程中需要设计合适的项目运营模式和相应价值增长方式。因此，矿业投资的技术支持和行业积累尤为重要。
          <br/><br/>我们的核心团队成员累计有超过四十年的行业背景，并在行业内有广泛的网络和渠道积累。团队成员不仅拥有丰富的矿业管理经验，曾成功地在澳洲领导矿企和运营矿业项目，更在矿业领域拥有全面的知识储备和行业积累。
          <br/><br/>基于团队对项目前期尽职调查结果，联合资本会根据项目的资金特点以及风险和收益偏好，并结合澳大利亚的矿业资本市场来制定具体投资方案。
        </p>
        <div className="text-img">
          <img src={ picture } alt="Our Concepts"/>
        </div>
      </div>
    </div>
  )
}

export default Advantages
