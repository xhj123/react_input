import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../icon/icon";
import "./input.css";

class InputNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerValue: ""
    };
  }

  static propTypes = {
    onChange: PropTypes.func,
    size: PropTypes.string
  };

  static defaultProps = {
    size: "middle",
    onChange: () => {}
  };

  get isControl() {
    // 判断是否传了value
    return "value" in this.props;
  }

  get value() {
    // 如果传了value,获取父组件传递的value值----受控组件
    // 如果没传value,获取组件内部state状态属性定义的值-----非受控组件
    if (this.isControl) {
      return this.props.value;
    } else {
      return this.state.innerValue;
    }
  }

  render() {
    // children获取父组件传过来的提交
    let { size, suffix, prefix } = this.props;
    return (
      <span className={`react-ui__input size-${size}`}>
        <input
          className={suffix ? "input--suffix" : "input--prefix"}
          value={this.value}
          onChange={e => {
            if (!this.isControl) {
              this.setState({
                innerValue: e.target.value
              });
            }
            this.props.onChange(e);
          }}
        />
        <span
          className={`
            input_icon 
            ${suffix ? "input_icon--suffix" : "input_icon--prefix"}
            `}
        >
          <Icon name={suffix ? suffix : prefix} className="icon" />
        </span>
      </span>
    );
  }

  componentDidMount() {
    this.setState({
      innerValue: this.props.defaultValue
    });
  }
}

export default InputNumber;
