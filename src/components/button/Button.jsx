import classnames from "classnames";
import "./Button.scss";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Button extends PureComponent {
    render() {
        const { children, theme, ...rest } = this.props;
        return (
            <button className={classnames("u-button", Button.theme[theme])}>
                { children }
            </button>
        );
    }
}

Button.theme = {
    "primary": "u-button-primary",
    "secondary": "u-button-secondary",
    "positive": "u-button-positive",
    "negative": "u-button-negative"
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.oneOf(Object.keys(Button.theme))
};

Button.defaultProps = {
    theme: null
};

export default Button;
