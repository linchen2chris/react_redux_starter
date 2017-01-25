import React, { PropTyes, Component } from 'react';

export default class MyInput extends Component {

  constructor(props) {
    super(props);
    console.log(7,props.value);
    this.state = {};
  }

  onChange(value) {
    this.setState({value});
    console.log(12, this.props.value);
    if(typeof this.props.value !== 'undefined') {
      this.props.onChange(this.state.value);
    }
  }

  onBlur(value) {
    this.setState({value});
    this.props.onChange(value);
  }
  render() {
    return(
      <input
        value={this.state.value}
        onChange={e => this.onChange(e.target.value)}
        onBlur={e => this.onBlur(e.target.value)}
      />
    );
  }
}
