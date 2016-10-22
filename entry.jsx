import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import FanIcon from 'material-ui/svg-icons/hardware/toys';
import matchability from './matchability';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stringOne: "", stringTwo: "" };
    this.handleChangeStringOne = this.handleChangeStringOne.bind(this);
    this.handleChangeStringTwo = this.handleChangeStringTwo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeStringOne(event) {
    this.setState({stringOne: event.target.value});
  }

  handleChangeStringTwo(event) {
    this.setState({stringTwo: event.target.value});
  }

  handleSubmit(event) {
    alert("Calculating the matchability...");
  }

  render() {
    return (
      <MuiThemeProvider>
    		<div>
					<GridList
						cols={2}
						cellHeight={200}
						padding={4}>
						<GridTile
							key="text-tile"
							cols={2}
							rows={1}>
							<TextField
								name="string-one"
								placeholder="String one"
								errorText="String one is required"
								value={this.state.value}
								onChange={this.handleChangeStringOne} />
			        <TextField
								name="string-two"
								placeholder="String two"
								errorText="String two is required"
								value={this.state.value}
								onChange={this.handleChangeStringTwo} />
						</GridTile>
						<GridTile
              key="button-tile"
              cols={1}
              rows={1}>
              <RaisedButton
		            label="Go"
		            labelPosition="before"
		            primary={true}
			          onClick={this.handleSubmit}
		          />
		        </GridTile>
	        </GridList>
	      </div>
	    </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));