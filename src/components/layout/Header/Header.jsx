import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { title } = props;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

Header.defaultProps = {
  title: "my app"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
