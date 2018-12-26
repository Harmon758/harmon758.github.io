const React = require('react');

class TransparentText extends React.Component {
  render() {
    const { headerLevel, normalText, transparentText } = this.props;
	const Heading = "h" + headerLevel
    return (
	  <Heading>
	    {normalText}
        <span id = "halfTransparent">
          {transparentText}
        </span>
	  </Heading>
    );
  }
}

module.exports = TransparentText;
