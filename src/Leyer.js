import React from 'react'
import Exporter from './Exporter'
import Input from './Input'

class Leyer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      submited: '',
      textArray: [],
      currentNumber: 1,
      currentWord: "Enter text",
      wordTwo:"One",
      wordThree:"Two",
      leyerValue: true,
      buttonText: 'Start',
      intervalId: null,
      currentIndex: 1,
      wpm: 300,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.startLeyer = this.startLeyer.bind(this)
    this.wpmChange = this.wpmChange.bind(this)
  }

  //Submit the text that has been Inputed
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submited: this.state.input,
    })

    //Splitting the text into an array
    this.setState(state => ({
      textArray: state.input.split(" ")
    }))

    //Changing the current and following words
    this.setState(state => ({
      currentWord: state.textArray[0],
      wordTwo: state.textArray[1],
      wordThree: state.textArray[2],
    }))

    //Smooth scrolling to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    })
  }

  wpmChange(event){
    this.setState({
      wpm: event.target.value,
    })
  }

  startLeyer() {
    let intervalId;
    let miliseconds = (60/ this.state.wpm) * 1000;

    //Function for getting random number
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    //Updating the button text
    this.setState((state) => ({
      leyerValue: !state.leyerValue,
    }))

    if (this.state.leyerValue === true) {
      this.setState({
        buttonText: 'Stop'
      })

      //Start Strobe
      intervalId = setInterval(() => {
        this.setState({
          currentNumber: getRandomInt(0,26),
        })

      }, miliseconds)

      this.setState({
        intervalId: intervalId,
      })

    } else {
      this.setState({
        buttonText: 'Start'
      })
      //Stop Strobe
      clearInterval(this.state.intervalId)
    }
  }

  render() {
    return (
      <div style={{}}>
        <Exporter text={this.state.currentWord} wordTwo = {this.state.wordTwo} wordThree = {this.state.wordThree} leyerValue={this.state.leyerValue} buttonText={this.state.buttonText} startLeyer={this.startLeyer} image={this.state.currentNumber}/>
        <Input handleSubmit={this.handleSubmit} input={this.state.input} wpm = {this.state.wpm} handleChange={this.handleChange} wpmChange = {this.wpmChange}/>
      </div>
    )
  }
}

export default Leyer;
