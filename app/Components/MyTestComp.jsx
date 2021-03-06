import React from 'react';

class MyTestComp extends React.Component {
  constructor(props) {
    console.log('constructor', props);
    super(props);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  priv() {
    this.div.scrollLeft -= 100;
  }
  next() {
    this.div.scrollLeft += 100;
  }

  render() {
    console.log('render', this.props, this.state);
    return (
      <div>
        <div
          ref={(div) => { this.div = div; }}
          style={{
            width: '200px', height: '200px', overflowX: 'scroll', overflowY: 'scroll'
          }}
        >
          111111111111111111111111111111111111111111112222222222222222222222222222222233333333333333
          111111111111111111111111111111111111111111112222222222222222222222222222222233333333333333
          111111111111111111111111111111111111111111112222222222222222222222222222222233333333333333
          111111111111111111111111111111111111111111112222222222222222222222222222222233333333333333
          111111111111111111111111111111111111111111112222222222222222222222222222222233333333333333
          111111111111111111111111111111111111111111112222222222222222222222222222222233333333333333
          111111111111111111111111111111111111111111112222222222222222222222222222222233333333333333
          111111111111111111111111111111111111111111112222222222222222222222222222222233333333333333
          111111111111111111111111111111111111111111112222222222222222222222222222222233333333333333
          111111111111111111111111111111111111111111112222222222222222222222222222222233333333333333
          111111111111111111111111111111111111111111112222222222222222222222222222222233333333333333
          111111111111111111111111111111111111111111112222222222222222222222222222222233333333333333
        </div>
        <input
          style={{
            position: 'relative', left: '-10px', top: '-100px'
          }}
          type="button"
          value="priv"
          onClick={this.priv}
        />
        <input
          style={{
            position: 'relative', left: '150px', top: '-100px'
          }}
          type="button"
          value="next"
          onClick={this.next}
        />
      </div>
    );
  }
}

export default MyTestComp;
