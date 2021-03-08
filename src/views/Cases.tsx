import React from 'react'
import SubBanner from '../components/SubBanner'
import Case from '../components/Case'

const Cases = () => {
  const cases = [{
    abbr: 'AML',
    name: 'Anova Metals Limited',
    content: [{
      txt: `Anova Metals Ltd 是澳洲上市公司专注于金矿勘探项目，其上市代码为 AWV。团队在 2019 年 12 月发现此投资机会，经过 3 个月的技术、法律，以及财务等全方面的尽调，尽调结果如下：
      <ul>
        <li>AWV公司在2020年初的每股价格为 A$1 cent，最低到 A$0.4 cent。公司市值不到 500 万澳元，另有约 380 万的债务，其现金不到 50 万澳元。相对于其拥有的两个金矿项目（总资源量 130 万盎司黄金，分别位于西澳大利亚和美国），该公司被严重低估；</li>
        <li>公司被严重低估的原因是其团队对两个金矿项目运营模式的失误，使得市场对其团队失去信心。项目本身，以及公司层面没有问题；</li>
        <li>在尽调过程中，我们找到了之前运营团队的错误所在，并提出相应的运营更改措施。</li>
      </ul><br>`
    }, {
      txt: `通过与相关咨询机构合作，我们在 2020 年 3 月以 A$0.7 cent 的价格通过增发控制 Anova 公司，并改组董事会和管理层。之后顺利出售位于西澳大利亚的金矿资产（约 1000 万澳元），一举成功扭转公司财务状况。公司目前市值约 4000 万澳元，没有任何债务，现金有约 850 万澳元，以及含有资源量 100 万盎司的金矿项目。该金矿项目勘探潜力巨大，市场反应很好<br><br>`
    }, {
      txt: `公司股价 2020 年 9 月达到 A$4.2 cent, 公司股东实现在 5 个月内盈利 5 倍收益。<br><br>`
    },{
      img: {
        filename: 'shareprice.png',
        title: 'Anova 公司股价变化'
      }
    }],
  },
  {
    abbr: 'GL',
    name: 'Global Lithium',
    content: [{
      txt: `Global Lithium Resource Pty Ltd 公司为位于澳大利亚的私有公司。公司核心项目为位于西澳大利亚北部的 Marble Bar 锂矿勘探项目。<br><br>`
    }, {
      txt: `Marble Bar 锂矿项目于 2019 年 3 月开始，通过为期两个月的尽职调查，团队认为其勘探潜力巨大。Global Lithium 于 2019 年 5 月启动 。2019 年 6 月 Global Lithium 完成第一轮融资，融资金额为 A$2,287,000， 其中支付项目收购金额为 A$100,000 (两次支付)，剩余资金用于项目勘探。2020 年 2 月 Global Lithium 完成第二笔融资，金额为 A$1,770,000，用于项目勘探和公司上市。<br><br>`
    }, {
      txt: `截止到目前，Global Lithium 成功实施了三期钻探，共 12388 米，部分钻探结果如表所示。<br><br>`
    }, {
      txt: `<table>
              <tr><th>Hole ID</th><th>From (m)</th><th>To (m)</th><th>Thickness (m)</th><th>LiO<sub>2</sub>%</th></tr>
              <tr><td>MBRC0055</td><td>72</td><td>78</td><td>6</td><td>1.57</td></tr>
              <tr><td>MBRC0056</td><td>108</td><td>111</td><td>3</td><td>1.41</td></tr>
              <tr><td>MBRC0058</td><td>47</td><td>54</td><td>7</td><td>0.95</td></tr>
              <tr><td>MBRC0059</td><td>76</td><td>83</td><td>7</td><td>1.53</td></tr>
              <tr><td>MBRC0059</td><td>93</td><td>99</td><td>6</td><td>1.53</td></tr>
              <tr><td>MBRC0067</td><td>27</td><td>32</td><td>5</td><td>0.95</td></tr>
              <tr><td>MBRC0069</td><td>12</td><td>15</td><td>3</td><td>1.62</td></tr>
              <tr><td>MBRC0071</td><td>74</td><td>82</td><td>8</td><td>0.92</td></tr>
              <tr><td>MBRC0076</td><td>111</td><td>117</td><td>6</td><td>1.59</td></tr>
              <tr><td>MBRC0077</td><td>37</td><td>53</td><td>16</td><td>1.41</td></tr>
              <tr><td>MBRC0081</td><td>15</td><td>18</td><td>3</td><td>2.07</td></tr>
              <tr><td>MBRC0082</td><td>17</td><td>28</td><td>11</td><td>0.90</td></tr>
            </table><br>`
    }, {
      txt: `通过第三方独立资源估算，Marble Bar 锂矿资源量为 1000 万吨，品位 1.0%Li2O。按照市场初步评估，Global Lithium Resources 公司的价值约 2500 万澳元。Global Lithium 的独立上市正在进行中，预计在 2021 年 4 月完成。<br><br>`
    },{
      img: {
        filename: 'discovery.png',
        title: 'Marble Bar 锂矿项目勘探发现'
      }
    }, {
      txt: `通过投资该项目，Global Lithium 预计在 2 年内为股东创造 5 倍左右收益。<br><br>`
    },],
  },
  {
    abbr: 'GPC',
    name: 'Global Potash Corporation',
    content: [{
      txt: `Global Potash Corporation 公司（GPC）的核心项目为位于老挝的钾盐矿。该项目距离老挝首都万象 25 公里，交通便利。项目已有资源量超过 10 亿吨，品位 17.5%KCl，储量 4 亿吨，品位 18%KCl。资源量分布在临近的三个矿权范围内。矿权总面积为 581.4 平方公里，部分项目运营设施已经具备。<br><br>`
    }, {
      txt: `经过持续两年的跟踪调查，该钾盐项目量大质优，靠近中国市场。中国占据世界钾盐消耗量的 60%，钾盐严重依赖进口。<br><br>`
    }, {
      txt: `上市公司青岛东方铁塔（SHE：002545）在老挝拥有类似的钾盐项目，资源量为 2 亿吨，年产不到 50 万吨 KCl。其市值为 101 亿人民币。相对比，GPC 的钾盐项目建成后年产量为 100 万吨，其生产成本更低。初步保守估计，该项目估值在 6 亿 - 10 亿美元。<br><br>`
    }, {
      txt: `GPC 公司计划在 2 年内在香港独立上市。目前 GPC 正在进行基石投资者的商谈以及钻探和 JORC 标准的资源估算工作（为香港上市准备）。预期在 1 - 1.5 年内为股东创造收益 10 倍。<br><br>`
    }, {
      txt: `从中国昆明到泰国曼谷的铁路老挝段已经接近完成，预计在 2021 年底通车运行。该钾盐项目距离铁路 20 公里。届时，生产的钾盐产品运往中国市场的运输成本将大幅降低。使得该项目的经济可行性大幅提高，同时 GPC 公司对投资者的吸引力也大幅提升。<br><br>`
    }, {
      img: {
        filename: 'map.png',
        title: '中国昆明 - 泰国曼谷铁路'
      }
    },],
  }];

  return (
    <div className="cases">
      <SubBanner name="cases" />
        {cases.map(singCase => (<Case singCase={ singCase } />))}
    </div>
  )
}

export default Cases
