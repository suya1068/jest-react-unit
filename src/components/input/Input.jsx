import React, { createElement, Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * - 기능 설명
 * 1. 사용자가 내용을 입력한다.
 * - properties
 * : message
 * : width(number = default value)
 * : minLength(number = default value)
 * : maxLength(number = default value)
 * : type(types = default value("text"))
 *   - "text" || "number" || "date"
 * : theme
 * : title
 * : description
 * : required
 * - method
 * : setMessage(message)
 * : getMessage()
 * : validCheck() - 예정
 * : getVaildTypes() - 예정
 * : getFormat() - 예정
 * : setFormat() - 예정
 * - EVENT
 * : onKeyDown()
 * : onChange()
 */

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, minLength, maxLength, message, theme, title, description, required, width, ...rest } = this.props;
        const inputProps = {
            ...rest,
            className: classNames("input-container")
        };

        if (width) {
            const sheet = {};
            // const sheet = document.createElement("style");
            sheet.width = width;
            inputProps.style = sheet;
        }

        return React.createElement("input", inputProps, children);
    }
};

Input.types = {
    text: "text",
    number: "number",
    date: "date"
};

Input.propTypes = {
    message: PropTypes.string,
    width: PropTypes.number,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    type: PropTypes.oneOf(Object.keys(Input.types)),
    theme: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    required: PropTypes.oneOf(["Y", "N"]),
    placeholder: PropTypes.string
};

Input.defaultProps = {
    message: "",
    width: 100,
    minLength: 0,
    maxLength: 0,
    type: "text",
    theme: "",
    title: "",
    description: "",
    required: "N",
    placeholder: ""
};
