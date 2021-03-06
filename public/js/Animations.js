var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;
const IndexRoute = require('react-router').IndexRoute;
const IndexLink = require('react-router').IndexLink;
const createHashHistory  = require('history').createHashHistory ;
require("../css/Animations.css")
var App = React.createClass({
  render(){
    return (
      <div>
        <ul>
          <li><Link to="/page1">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
        </ul>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500} >
            {React.cloneElement(this.props.children,{
              key:this.props.location.pathname
            })}
          </ReactCSSTransitionGroup>
      </div>
    )
  }
})

var Index = React.createClass({
  render(){
    return (
      <div className="Image">
        <h1>Index</h1>
        <p>Animations with React Router are not different than any other animation.</p>
      </div>
    )
  }
})

var Page1 = React.createClass({
  render(){
    return (
      <div className="Image">
        <h1>Page 1</h1>
        <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit. Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
})

var Page2 = React.createClass({
  render(){
    return (
      <div className="Image">
        <h1>Page 2</h1>
        <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
})

ReactDOM.render((
  <Router history={createHashHistory({ queryKey: false })}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="page1" component={Page1} />
      <Route path="page2" component={Page2} />
    </Route>
  </Router>
),document.getElementById('app'));
