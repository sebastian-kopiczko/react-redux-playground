import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { appTitle } = props;
  return (
    <div>
      <h1>{appTitle}</h1>
    </div>
  );
};

Header.defaultProps = {
  appTitle: "my app"
};

Header.propTypes = {
  appTitle: PropTypes.string.isRequired
};

export default Header;
