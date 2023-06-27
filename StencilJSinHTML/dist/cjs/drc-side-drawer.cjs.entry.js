'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-85d86a10.js');

const sideDrawerCss = "aside{position:fixed;top:0;left:-100%;width:30rem;max-width:80rem;height:100vh;background:#f3f3f3;box-shadow:0 2px 8px rgba(0, 0, 0, 0.26);transition:left 0.3s ease-out;z-index:100}button{cursor:pointer}:host([opened]) aside{left:0}header{padding:1rem;background-color:black;position:relative}header h1{font-size:1.5rem;color:white;margin:0}header button{position:absolute;top:0;right:0;padding:1rem;color:white;font-size:1.5rem;background:transparent;border:none}header button:focus{outline:none}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0}#tabs button{width:30%;background-color:white;color:black;border:1px solid black;font:inherit;text-align:center;padding:0.15rem 0}#tabs button.active,#tabs button:hover,#tabs button:active{background:black;color:white}#tabs button:focus{outline:none}#contact-info{padding:0 1rem}#backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0, 0, 0, 0.75);z-index:10;opacity:0;pointer-events:none;transition:opacity 0.3s ease-out}:host([opened]) #backdrop{opacity:1;pointer-events:all}";

const SideDrawer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.showContactInfo = false;
  }
  onCloseDrawer() {
    this.opened = false;
  }
  onContentChange(content) {
    this.showContactInfo = content === 'con';
  }
  open() {
    this.opened = true;
  }
  render() {
    let mainContent = index.h("slot", null);
    if (this.showContactInfo) {
      mainContent = (index.h("div", { id: "contact-info" }, index.h("h2", null, "Contact Information"), index.h("p", null, "You can reach us via Phone & Email"), index.h("ul", null, index.h("li", null, "Phone: 8990878766"), index.h("li", null, "Email ", index.h("a", { href: "mailto:xyz@something.com" }, "xyz@something.com")))));
    }
    return [
      index.h("div", { id: "backdrop", onClick: this.onCloseDrawer.bind(this) }),
      index.h("button", { onClick: this.open.bind(this) }, "Open Side Menu"),
      index.h("aside", null, index.h("header", null, index.h("h1", null, this.title), index.h("button", { onClick: this.onCloseDrawer.bind(this) }, "X")), index.h("section", { id: "tabs" }, index.h("button", { class: !this.showContactInfo ? 'active' : '', onClick: this.onContentChange.bind(this, 'nav') }, "Navigation"), index.h("button", { class: this.showContactInfo ? 'active' : '', onClick: this.onContentChange.bind(this, 'con') }, "Contact US")), index.h("main", null, mainContent)),
    ];
  }
};
SideDrawer.style = sideDrawerCss;

exports.drc_side_drawer = SideDrawer;
