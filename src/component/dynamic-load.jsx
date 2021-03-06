/**
 * Created by axetroy on 17-5-22.
 */
import { Spin } from "antd";
import PropTypes from "prop-types";
import React, { Component, Suspense } from "react";
import { withRouter } from "react-router-dom";

class DynamicLoad extends Component {
  static propTypes = {
    import: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      component: React.lazy(props.import)
    };
  }

  render() {
    const Target = this.state.component;
    return (
      <Suspense
        fallback={
          <Spin
            spinning={true}
            style={{
              width: "100%",
              height: "100%",
              minHeight: "20rem",
              backgroundColor: "rgba(0,0,0,0.05)",
              borderRadius: "0.4rem",
              zIndex: 99999999,
              marginTop: "0.4rem"
            }}
          ></Spin>
        }
      >
        <Target />
      </Suspense>
    );
  }
}

export default withRouter(DynamicLoad);
