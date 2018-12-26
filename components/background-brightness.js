const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

class BackgroundBrightness extends D3Component {
  initialize(node, props) {
    this.node = d3.select(node)
    this.node.style("background-color", "white");
  }
  update(props, oldProps) {
    var hex = Math.floor(255 - props.backgroundBrightness / 100 * 256).toString(16);
    if (hex.length == 1) {
      hex = '0' + hex;
    }
    this.node.style("background-color", '#' + hex + hex + hex);
  }
}

module.exports = BackgroundBrightness;
