import PropTypes from "prop-types";

const Welcome = (props) => {
  return <h1>hello , {props.name}</h1>;
};

Welcome.PropTypes = {
  name: PropTypes.string.isRequired,
};
Welcome.defaultProps = {
  name: "Hoang",
};

export default Welcome;
