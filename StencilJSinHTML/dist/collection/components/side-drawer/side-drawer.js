import { h, State, Component, Prop, Method } from '@stencil/core';
export class SideDrawer {
  constructor() {
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
    let mainContent = h("slot", null);
    if (this.showContactInfo) {
      mainContent = (h("div", { id: "contact-info" },
        h("h2", null, "Contact Information"),
        h("p", null, "You can reach us via Phone & Email"),
        h("ul", null,
          h("li", null, "Phone: 8990878766"),
          h("li", null,
            "Email ",
            h("a", { href: "mailto:xyz@something.com" }, "xyz@something.com")))));
    }
    return [
      h("div", { id: "backdrop", onClick: this.onCloseDrawer.bind(this) }),
      h("button", { onClick: this.open.bind(this) }, "Open Side Menu"),
      h("aside", null,
        h("header", null,
          h("h1", null, this.title),
          h("button", { onClick: this.onCloseDrawer.bind(this) }, "X")),
        h("section", { id: "tabs" },
          h("button", { class: !this.showContactInfo ? 'active' : '', onClick: this.onContentChange.bind(this, 'nav') }, "Navigation"),
          h("button", { class: this.showContactInfo ? 'active' : '', onClick: this.onContentChange.bind(this, 'con') }, "Contact US")),
        h("main", null, mainContent)),
    ];
  }
  static get is() { return "drc-side-drawer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./side-drawer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["side-drawer.css"]
  }; }
  static get properties() { return {
    "title": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "title",
      "reflect": true
    },
    "opened": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "opened",
      "reflect": true
    }
  }; }
  static get states() { return {
    "showContactInfo": {}
  }; }
  static get methods() { return {
    "open": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {},
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
}
