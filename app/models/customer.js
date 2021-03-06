import DS from 'ember-data';
import Ember from 'ember';

var Customer = DS.Model.extend({
  name: DS.attr('string'),
  link: DS.attr('string'),
  circle_logo: DS.attr('string'),
  logo: DS.attr('string'),
  style: DS.attr('string'),
  description: DS.attr('string'),
  id_odd: Ember.computed.match('id', /^\d*[135]\b$/)
});

Customer.reopenClass({
  FIXTURES: [{
    id: 1,
    name: "广西中烟",
    link: "",
    circle_logo: "images/customers/guangxizhongyan_active.png",
    logo: "images/customers/old/amazon.jpg",
    style: "",
    description: "广西中烟近程物流配送系统是跳羚科技为广西中烟量身打造的一整套近程物流配送系统，着力于中烟的最后三公里配送问题。随着移动互联网的快速发展，终端用户对于服务、体验也提出了越来越高的要求。更便捷的购物体验、更快速的配送速度，体验的优化对系统提出更高的要求。跳羚科技为中烟打造的近程物流配送系统，能够最大程度的提高配送员的人效，同时为门店人员提供更好的订单管理系统。另外该系统不仅支持中烟自身的平台，还预留公共API接口，可与多电商平台进行无缝对接。另外还支持接入多家配送公司，支持与配送公司系统对接，配送公司也可以在近程物流配送系统开通账号，通过近程物流配送系统进行自己订单的管理。"
  }, {
    id: 2,
    name: "如风达",
    link: "https://cnodejs.org/",
    circle_logo: "images/customers/rufengda_active.png",
    logo: "images/customers/rufengda.jpg",
    style: "",
    description: "如风达是中信产业投资基金管理有限公司控股的天地华宇集团旗下独立运营的快递品牌。如风达前身为凡客诚品旗下自建物流，创立于2008年4月15日，总部位于北京。目前覆盖全国31个省及省级直辖市，共计340个地级市及省级辖区域，覆盖2054个市区及县级市，初步建成以如风达品牌为核心的区域型COD物流配送网络。跳羚科技在8年的时间内为如风达提供技术支持，多次抗住订单考验大关，日单量200万系统运行稳定无压力。2015年4月8日小米米粉节日单量突破100W；2015年11月11日光棍节日单量突破200W。另外跳羚科技独立开发SaaS模式的风云配送系统，支持多个配送商多账套使用，适用多种配送业务，也支持独立部署，帮助国内多家配送公司更好的管理运单，提高运营效率。除业务系统外，跳羚科技还为如风达开发管理系统，如权限管理、财务、BI及订单履约系统等。权限管理，科学管理角色和岗位；财务与上游配送商、下游商家的账务结算清晰、实现自动化；BI报表帮助各部门通过数据清晰地看到对应的业务报表，帮助领导层更好的决策战略方向，帮助业务部门能针对性的优化业务环节的操作；订单履约系统设置，订制运单生命周期所有环节的标准时效，有效、及时地监控运单的时效异常。"
  }, {
    id: 3,
    name: "中策橡胶",
    link: "https://ghost.org/",
    circle_logo: "images/customers/zhongce_active.png",
    logo: "images/customers/zhongce.jpg",
    style: "",
    description: "中策橡胶集团有限公司（简称中策）是目前中国最大的轮胎生产企业，位列中国企业500强名单中，在世界轮胎企业排名中位列第10名。在互联网浪潮的影响下，中策领导及时认识到企业改革的重要性，在本身企业优势的前提下做轮胎后市场的改革——互联网+轮胎。首先完成对自己经销商与代理商的改革，以“助力门店、快乐用户”为服务理念，努力打造集汽配产品商城、汽车数据平台、用户数据平台、供链云平台于一体的汽车后市场供应链平台。跳羚科技为其提供了高效便捷的仓储解决方案，最终打造中策总部、各级经销商、用户一条龙信息通道，让中策能够更好的与用户进行沟通，销售反推生产，生产出用户更喜欢的产品。"
  }, {
    id: 4,
    name: "凡客",
    link: "https://nodebb.com/",
    circle_logo: "images/customers/fanke_active.png",
    logo: "images/customers/vancl.jpg",
    style: "",
    description: "凡客诚品作为名列前茅的B2C自主销售式服装品牌，订单管理和货物调配是销售实现的重要环节。跳羚科技提供的WMS（Warehouse management system）仓库管理系统，可实时订单获取、当天发货，支撑200万单/天的发货单量，库存差异率低于万分之六。不同于平台型电商，凡客主要是快时尚的服装产品，消费者往往会购买多件产品，多件产品在仓储后台的分拣流程会相对复杂一些，这对仓储的系统化管理和人员管理的要求更高。跳羚科技为凡客量身定制了仓配一体解决方案完美的解决多件购买问题。跳羚科技仓储有一个专门的流程与系统优化团队与仓储实操部门互为配合，在仓储日常流程中，会持续发掘可以提高效率的节点并不断通过布局规划、工具改善、流程再造、系统优化等措施予以改善。这些都使得原本简单依靠体力的仓库发货业务，转变为专业的技术活。基于跳羚科技专业的作业系统和工时管理系统，凡客仓储拥有了大量准确、及时的数据，对此进行即时、详尽、深度挖掘的数据分析系统也应运而生。如今，作为仓储管理人员日常最重要的监控工具，数据分析结果成为仓储中心工作人员了解业务情况，寻找自身问题，不断提高业务水平的主要依据。"
  }, {
    id: 5,
    name: "天地华宇",
    link: "https://csdn.net/",
    circle_logo: "images/customers/tiandihuayu_active.png",
    logo: "images/customers/tiandihuayu.gif",
    style: "",
    description: "天地华宇是中信产业投资基金管理有限公司旗下公司，也是国家第一批\"AAAAA\"级资质的物流企业,拥有中国最大的公路快运网络之一。天地华宇为中国公路快运行业的领先企业，其服务产品有\"定日达\"、\"零担运输\"和\"整车特运\"等，并提供代收货款等多种增值服务。跳羚科技针对天地华宇的快运业务定制了一整套的物流解决方案，为天地华宇致力打造中国最强大、最快捷、最可靠的递送网络提供了最专业的技术支持。跳羚科技为天地华宇提供快运TMS系统、车货匹配系统、企业内部管理等信息系统服务。为天地华宇的54个货物转运中心、1500家营业网点和超过16000名员工提供信息支持服务。"
  }, {
    id: 6,
    name: "万家康",
    link: "http://mpwang.cn/",
    circle_logo: "images/customers/wankang_active.png",
    logo: "images/customers/wjk.jpg",
    style: "",
    description: "北京万家康物流公司成立于2001年，拥有5000㎡冷藏、冷冻温控库房，现阶段拥有20余辆冷藏温控运输车辆及150多台可调配车辆，主要为真空包装食品、冷鲜食品、肉禽蛋类等 食品行业提供专业的仓储、运输、速递、宅配、及限时达一条龙服务。始终坚持“冷链速递专家”的品牌价值观及“开创完美服务之先河”的服务理念，注重品牌、团队建设，不断向现代食品物流的新动向迈进，开创具有战略性的全方位物流服务。跳羚科技为其量身订制了一整套的信息化解决方案，包括配送系统、仓储系统、移动POS机，移动PDA等，在系统的辅助下，从出货到配送到客户减少了一个工作日，缩短了配送流程，节约时间成本。"
  }]
});

export default Customer;