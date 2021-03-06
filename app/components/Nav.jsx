var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h3>Nav component</h3>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//         <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//       </div>
//     );
//   }
// });

const Nav = React.createClass({
  onSearch: function (event) {
    event.preventDefault();

    var loc = this.refs.location.value;
    var encodedLoc = encodeURIComponent(loc);

    if (loc.length > 0 && loc !== '') {
      this.refs.location.value = '';
      window.location.hash = '#/?location=' + encodedLoc;
    }
  },

  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text navbar-text-title">React Weather</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>

            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>

            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>

        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="location" placeholder="Enter city name"/>
              </li>

              <li>
                <input type="submit" className="button" value="Get weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
