import React from "react";

export class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  retry = () => {
    this.setState({ error: null });
  };

  render() {
    // BAD solutions, since we cannot reuse this for other designs
    // if (this.state.error) {
    //   return <p>An error occurred while rendering the feed</p>;
    // }

    // return this.props.children;

    // GOOD solution
    return this.props.children(this.state.error, this.retry);
  }
}
