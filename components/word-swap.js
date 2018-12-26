const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

class WordSwap extends D3Component {
  initialize(node, props) {
    this.node = d3.select(node)
    this.node.style("display", "inline")
    this.node.text(props.former)
  }
  update(props, oldProps) {
    if (props.variable < props.value) {
      this.node.text(props.former)
    } else {
      this.node.text(props.latter)
    }
  }
}

module.exports = WordSwap;
