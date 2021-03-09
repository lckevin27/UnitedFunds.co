import React from 'react'
import picture from '../img/text/strategies.png'
import Title from '../components/Title'

const OurStrategies = () => {
  return (
    <div id="our-strategies" className="art-section">
      <Title title="联合资本如何运营" />
      <div className="content-container">
        <div className="content-left">
          <div className="cooperation">
            <p className="title">多方配合</p>
            <ul>
              <li>经验丰富的团队</li>
              <li>对矿业感兴趣的资本支持</li>
              <li>深耕矿业领域，丰富的渠道信息来源和网络</li>
              <li>专注于矿业的多方位咨询机构优质服务</li>
            </ul>
          </div>
          <div className="withdrawal">
            <p className="title">多种退出渠道</p>
            <ul>
              <li>多渠道退出，实现股东回报</li>
              <li>如IPO，RTO，或者项目销售等</li>
            </ul>
          </div>
        </div>
        <div className="img-strategies">
          <img src={picture} alt="Our Strategies"/>
        </div>
        <div className="content-right">
          <div className="excavation">
            <p className="title">发掘项目</p>
            <ul>
              <li>利用专业优势发掘潜力项目，并低成本进入</li>
              <li>积极寻找有潜力的合适的矿业项目或公司</li>
              <li>技术、法律、财务等全方位的尽职调查，发现项目价值增长点</li>
              <li>通过与不同咨询机构的配合，寻求低成本控制、运营项目或公司</li>
            </ul>
          </div>
          <div className="operation">
            <p className="title">项目运营</p>
            <ul>
              <li>增加项目价值</li>
              <li>根据尽调结果，制定运营项目或公司方案并相应组建团队</li>
              <li>通过运营，快速提升项目价值</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStrategies
