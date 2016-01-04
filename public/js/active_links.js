const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;
const IndexRoute = require('react-router').IndexRoute;
const IndexLink = require('react-router').IndexLink;
const createHashHistory  = require('history').createHashHistory ;
require('../css/active_links');

const ACTIVE = {color:'#2196F3'};

var App = React.createClass({
  render(){
    return (
      <div  id="tabs">
        <h1>APP</h1>
        <ul>

          <li>
            <IndexLink to="/" activeStyle={ACTIVE} >IndexLink</IndexLink>
          </li>

          <li><IndexLink to="/users"      activeStyle={ACTIVE}>users IndexLink</IndexLink></li>
          <li><Link      to="/users/ryan" activeStyle={ACTIVE}>users/ryan</Link></li>
          <li><Link      to= '/users/ryan' query= {{ foo: 'bar' }}
                                            activeStyle={ACTIVE}>users/ryan?foo=bar</Link></li>
          <li><Link      to="/about"      activeStyle={ACTIVE}>about</Link></li>

        </ul>
        {this.props.children}
      </div>
    )
  }
});

var Index = React.createClass({
  render(){
    return (
      <div>
        <h2>Index</h2>
      </div>
    )
  }
})

var Users  = React.createClass({
  render(){
    return (
      <div>
        <h2>Users </h2>
        {this.props.children}
      </div>
    )
  }
})

var User  = React.createClass({
  render(){
    return (
      <div>
        <h2>User {this.props.params.id}</h2>
        {this.props.query}
      </div>
    )
  }
})

var UsersIndex   = React.createClass({
  render(){
    return (
      <div>
        <h2>UsersIndex </h2>
      </div>
    )
  }
})

var About  = React.createClass({
  render(){
    return (
      <div>
        <h2>About </h2>
      </div>
    )
  }
})

ReactDOM.render((
  <Router history={createHashHistory({ queryKey: false })}>
    <Route path="/" component={App}>
      <IndexRoute  component={Index}/>
      <Route path="/about" component={About}/>
      <Route path="users" component={Users}>
        <IndexRoute component={UsersIndex}/>
        <Route path=":id" component={User}/>
      </Route>
    </Route>
  </Router>
),document.getElementById('app'))
