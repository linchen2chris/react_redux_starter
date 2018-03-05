import React, { Component } from 'react';
import './SearchInput.css';

class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      activeIndex: -1,
      showOption: false,
      data: [
        'apple',
        'apple2',
        'apple3',
        'apple4',
        'banana',
        'grapes',
        'mango',
        'orange'
      ]
    };
  }


  onClick(value) {
    this.setState({
      ...this.state,
      value,
      showOption: false
    });
  }

  onKeyDown(event) {
    console.log(event, this.div, event.keyCode);
    switch (event.keyCode) {
      case 40:
        this.setState({
          activeIndex: (this.state.activeIndex + 1) % this.state.result.length
        });
        break;
      case 38:
        this.setState({
          activeIndex: this.state.activeIndex > 0 ? this.state.activeIndex - 1 : this.state.result.length - 1
        });
        break;
      default:
        break;
    }
  }

  search(value) {
    if (value.length > this.props.minLength) {
      const result = this.state.data.filter(item => item.match(value));
      this.setState({
        ...this.state,
        value,
        showOption: true,
        result
      });
    } else {
      this.setState({
        ...this.state,
        value,
        showOption: false
      });
    }
  }

  render() {
    return (
      <div className="search--container">
        <input
          ref={input => this.input = input}
          value={this.state.value}
          onChange={event => this.search(event.target.value)}
          onKeyDown={event => this.onKeyDown(event)}
        />
        {this.state.result && this.state.result.length > 0 && this.state.showOption &&
        <div
          className="search-options--container"
          ref={div => this.div = div}
        >
          {this.state.result.map((repo, index) => (
            <li
              className={`search-option ${this.state.activeIndex === index ? 'search-option--active' : ''}`}
              value={repo}
              onClick={() => this.onClick(repo)}
              key={index}
            >
              {repo}
            </li>
            ))
           }
        </div>
        }
      </div>
    );
  }
}

export default SearchInput;
