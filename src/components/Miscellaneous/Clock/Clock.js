import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #fff;
`;

class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.tick();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState(() => ({ date: new Date() }));
  }

  render() {
    return <Container>{this.state.date.toLocaleTimeString()}</Container>;
  }
}

export default Clock;
