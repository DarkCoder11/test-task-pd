import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../assets/styles/ImageLoader.scss";

class ImageLoader extends Component {
  _loaded = {};

  state = {
    loaded: this._loaded[this.props.src]
  };

  onLoad = () => {
    this._loaded[this.props.src] = true;
    this.setState({ loaded: true });
  };

  render() {
    const { loaded } = this.state;
    const {
      src,
      alt,
      className,
      loadedClassName,
      loadingClassName
    } = this.props;

    const classes = `${className} ${
      loaded ? loadedClassName : loadingClassName
    }`;

    return <img src={src} alt={alt} className={classes} onLoad={this.onLoad} />;
  }
}

ImageLoader.defaultProps = {
  className: "",
  loadingClassName: "img-loading",
  loadedClassName: "img-loaded"
};

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  loadedClassName: PropTypes.string.isRequired,
  loadingClassName: PropTypes.string.isRequired
};

export default ImageLoader;
