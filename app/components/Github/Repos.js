var React = require('react');

var Repos = React.createClass({
  render: function(){
    return (
      <div>
        <p>Repos</p>
        Repos: {this.props.repos};
      </div>
    )
  }
})

module.exports = Repos;
