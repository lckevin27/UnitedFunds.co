import React from 'react'
import Member from './Member'
import Title from './Title'

const Team = () => {
  const members = [{
    code: 'FanJiang',
    name: '江帆',
    position: '联合创始人兼执行董事',
    role: '负责联合资本的日常运营和融资',
    intro: '新西兰奥克兰大学土木工程荣誉学士，2010定居澳洲后，专注于金融领域工作，并在外汇，期货，股票累计了丰富的成功经验。近年来在澳洲多种领域都有投资，例如澳洲连锁健身品牌 Oslo Fitness, 墨尔本有机农场 Happy Hens, 墨尔本 Lyons College 大学， 澳洲亚富国际金融公司。',
  },
  {
    code: 'YutingWang',
    name: '王宇霆',
    position: '联合创始人兼执行董事',
    role: '负责联合资本的日常运营和融资',
    intro: '亚富国际联合创始人，为广大的国际留学生、移民、商务考察人士、海外置业者及商业投资者提供金融投资建议。傑昇资本联合创始人，负责电影项目板块投资，曾与朱浩伟、温子仁、安德烈·艾弗道夫合作，投资过《摘金奇缘》，《鬼修女》和《黑暗恐怖故事》等优质电影项目。澳洲连锁健身品牌 OSLO 联合创始人、Director，将中国资本引入澳洲传统行业的，使其在短时间内迅速发展，成为行业内正常最快的健身品牌。',
  },
  {
    code: 'TengTeng',
    name: '滕腾博士',
    position: '联合创始人',
    role: '负责联合资本的日常运营和融资',
    intro: '在澳经商十余年，目前担任澳洲澳腾达集团主席兼执行董事。2014 年成立国际性非盈利社团澳大利亚工商业联合会（Australian Industry and Commerce Federation， 简称 AIACF）并担任执行主席，帮助在澳企业和商人的生存与发展，与中国工经联及「一带一路」工商协会联手，为各方投资、发展、运作搭建了沟通桥梁和创业平台。滕博士的投资领域涉及矿业，教育业，房地产开发，澳洲基金投资等。',
  },
  {
    code: 'MingyanWang',
    name: '王明艳博士',
    position: '联合创始人兼技术顾问',
    role: '负责项目遴选和后期运营跟踪',
    intro: '从事矿业工作 20 年，工作经历涉及绿地勘探、生产勘探、项目可研、项目建设、团队构建，以及项目和公司的运营管理等。目前担任澳大利亚上市公司 Anova Metals Ltd 董事总经理。王博士曾任广西堂汉锌铟有限公司总经理、湖南有色金属股份有限公司工程管理部总经理，澳大利亚 Abra 矿业公司矿业公司执行董事和 MMG 公司 Las Bambas 项目地质和采矿团队负责人等。',
  },
  {
    code: 'YunxingXue',
    name: '薛云兴博士',
    position: '联合创始人兼技术顾问',
    role: '负责项目遴选和后期运营跟踪',
    intro: '从事矿业工作10余年，现在澳大利亚上市公司 Anova Metals Ltd 运营经理。曾在 KPMG 融资并购部门担任高级经理，期间完成多个矿业项目的融资和交易。此前，在 Gold Fields Australia 和 Hanking (Australia) 工作从事不同的地质工作。作为主要负责人之一，全程参与了 Hanking (Australia) 公司收购、勘探、可研、选厂维修、生产以及 3.3 亿澳元（17 倍溢价）销售 SXO 金矿项目的全部过程，以及对澳大利亚上市公司 Primary Gold Ltd 的私有化退市过程。',
  }]

  return (
    <div id="team">
      <Title title="核心团队" />
      <div className="member-container">
        {members.map(member => (<Member member={member} />))}
      </div>
    </div>
  )
}

export default Team
