import "./Button.scss";
import React from "react";
import PropTypes from "prop-types";

export default function Button({ children, ...rest }) {
    return <button className="u-button">{ children }</button>
}

Button.propTypes = {
    children: PropTypes.node.isRequired
};
