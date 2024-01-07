import React from 'react';

class HomePage extends React.PureComponent {
  static getInitialProps = async (ctx) => {
    if (ctx.isServer) {
      const { ssrConfig, response } = ctx;
      return Promise.resolve({
        response,
        startTime: ssrConfig.startTime,
        renderTime: (new Date).valueOf(),
      });
    }
    return Promise.resolve({});
  };

  render() {
    const { startTime, renderTime, response } = this.props;
    return (
      <div>
        <div>This server started at {startTime}</div>
        <div>This page rendered at {renderTime}</div>
        <div>This server said: {response}</div>
      </div>
    );
  }
}

export default HomePage;
