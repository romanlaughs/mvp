import React from 'react';
import $ from 'jquery';
import TLK_Prompts from '/src/TLK_Prompts.jsx'
import Choices from '/src/Choices.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tlks: [{
        _id: 'default',
        text: "Select a Category, Then Press '\Get Convo Starters\' to Generate New Ideas!"
      }],
      selectedOption: '',
      db: [],
    }
  }

  componentDidMount() {
    this.startOff();
  }

  startOff() {
    $.ajax({
      url: '/start',
      type: 'GET',
    })
    .then((data) => {
      this.setState({db: data});
      console.log(this.state.db);
    })
  }


  getStarters() {
    console.log(this.state.selectedOption)
    $.ajax({
      url: '/test',
      data: this.state.selectedOption,
      type: 'GET',
    })
    .then((data) => {
      this.setState({tlks: data});
    })
  }

  handleOnChange(e) {
    this.setState({ selectedOption: e.target.value});
  }

  render () {
    return (
      <div style={{backgroundColor: "lightblue", fontFamily: "Ariel", padding: '50px'}}>
        <h1 style={{fontSize: '50px', textShadow: '1px 1px white' }}>
          SMLL TLK
        </h1>
        <h2 style={{fontSize: '20px'}}>
          'The Cure for Akward Pauses'
        </h2>
      <div className="choices" style={{padding: '20px'}}>
        <Choices
          array={this.state.db}
          onChange={(e) => this.handleOnChange(e)} />
      </div>
            <div style={{padding: '20px'}}>
                <button type='submit' onClick={this.getStarters.bind(this)} style={{borderRadius: '25px',
                background: 'blue', padding: '20px', fontSize: '20px', color: 'white'}}>Get Convo Starters</button>
            </div>
          <div>
          <TLK_Prompts tlks={this.state.tlks} />
          </div>
      </div>
    )
  }
}



export default App