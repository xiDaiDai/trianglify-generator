let React = require('react/addons');
let Controls = require('./Controls.jsx');
let Display = require('./Display.jsx');
let Trianglify = require('trianglify');
let update = React.addons.update;

module.exports = class App extends React.Component {
	constructor(props) {
		super(props);
    // Set opts to a clone of the defaults
    this.state = {
      opts: update(Trianglify.defaults, {})
    }
    // Override some defaults
    this.state.opts.seed = Math.random();
    this.state.opts.width = 1920;
    this.state.opts.height = 1080;
	}

  handleOptionChange(option) {
    console.log(this.state);
    console.log(option);
    let newState = update(this.state, {opts: {$merge: option}});
    console.log(newState);
    this.setState(newState);
  }

  render() {
    return (
      <div id="app">
        <header>
          <h1><img src="images/header.png" />Trianglify Image Generator</h1>
          <nav>
            <a href="#about">About</a>
            <a href="github">GitHub</a>
            <a href="https://qrohlf.com">Author</a>
          </nav>
        </header>
        <div className="main">
          <Controls opts={this.state.opts} handleOptionChange={this.handleOptionChange.bind(this)} />
          <Display opts={this.state.opts}/>
        </div>
      </div>
    )
  }
};