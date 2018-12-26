const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

class TextBrightness extends D3Component {
  initialize(node, props) {}
  update(props, oldProps) {
    var hex = Math.floor(props.backgroundBrightness / 100 * 255).toString(16);
    if (hex.length == 1) {
      hex = '0' + hex;
    }
    d3.selectAll("h1").style("color", '#' + hex + hex + hex);
    d3.selectAll("h2").style("color", '#' + hex + hex + hex);
    d3.selectAll('p').style("color", '#' + hex + hex + hex);
  }
}

module.exports = TextBrightness;
