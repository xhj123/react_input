/*
  React自定义组件 ----icon组件 参考ant-design
  Author:xiahaojie
  date:2019-10-17
  iconfont.css文件使用的是阿里巴巴图标矢量库
*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import "../font-demo/iconfont.css";

class Icon extends Component {
  /*
    实现自定义组件时的规范
    需要定义传递参数的类型以及默认值
  */

  static propTypes = {
    name: PropTypes.string
  };

  static defaultProps = {
    name: ""
  };

  render() {
    let { name, ...rest } = this.props;
    return <span {...rest} className={`icon iconfont icon-${name}`} />;
  }
}

export default Icon;
