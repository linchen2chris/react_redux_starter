import React, { PropTyes, Component } from 'react';
import MyInput from './MyInput';

const InputWrapper = props => (
  <MyInput
    onChange={(value) => {console.log(1, value, props.value);}}
    value={props.value}
  />
)


export default InputWrapper;
