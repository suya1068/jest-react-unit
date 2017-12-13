import renderer from "react-test-renderer";
import { JSDOM } from "jsdom";


const documentHTML = "<!doctype html><html><body><div id='root'></div></body></html>";
const jsdom = new JSDOM(documentHTML);
const { window } = jsdom;

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === "undefined")
        .map(prop => Object.getOwnPropertyDescriptor(src, prop));

    Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: "node.js"
};

global.renderer = renderer;

copyProps(document.defaultView, global);
