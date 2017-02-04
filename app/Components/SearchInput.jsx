import React, { Component } from 'react';


class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: ['1', '2']
    };
  }

  render() {
    return (
      <div>
        <input type="text" name="city" list="cityname"/>
        <datalist id="cityname">
          <option value="Boston">
          <option value="Boston1">
          <option value="Cambridge">
        </datalist>
      </div>
    );
  }
}

export default SearchInput;
