import React from 'react';

class HomePage extends React.PureComponent {
  static getInitialProps = async (ctx) => {
    if (ctx.isServer) {
      const { ssrConfig } = ctx;
      return Promise.resolve({
        startTime: ssrConfig.startTime,
        renderTime: (new Date).valueOf(),
      });
    }
    return Promise.resolve({});
  };

  render() {
    const { startTime, renderTime } = this.props;
    return (
      <div>
        <div>This server started at {startTime}</div>
        <div>This page rendered at {renderTime}</div>
      </div>
    );
  }
}

export default HomePage;
