import React from 'react'
import SubBanner from '../components/SubBanner'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div className="contact">
      <SubBanner name="contact" />
      <div className="contacts-section art-section">
        <Title title="联系方式" />
        <p>如果您想了解更多澳洲矿业投资机会及项目信息，请联系我们</p>
        <div className="contacts-container">
          <div>
            <p className="location">墨尔本 Melbourne</p>
            <p className="name">王宇霆 Will Wang</p>
            <p className="phone">电话：0451 073 577</p>
            <p className="email">邮箱：<a target="_blank" href="mailto:will.wang@unitedfunds.co">will.wang@unitedfunds.co</a></p>
          </div>
          <div>
            <p className="location">珀斯 Perth</p>
            <p className="name">薛云兴 Geoffrey Xue</p>
            <p className="phone">电话：0456 624 899</p>
            <p className="email">邮箱：<a target="_blank" href="mailto:geoffrey.xue@unitedfunds.co">geoffrey.xue@unitedfunds.co</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
