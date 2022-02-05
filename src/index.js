import React from 'react'
import ReactDOM from 'react-dom'
import Step1 from './Step1.jsx'
import Step2 from './Step2.jsx'
import Step3 from './Step3.jsx'

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email: '',
      username: '',
    }

    if (window.Cypress) {
      window.app = this
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    console.log('submitting state', this.state)

    const { email, username } = this.state

    this.setState({
      submitted: true,
    })

    alert(`Your registration detail: \n
           Email: ${email} \n
           Username: ${username}`)
  }

  _next = () => {
    console.log(this.state)

    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep,
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep,
    })
  }

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      )
    }
    return null
  }

  nextButton() {
    let currentStep = this.state.currentStep
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      )
    }
    return null
  }

  render() {
    return (
      <React.Fragment>
        <div className="app">
          <h1>Book Hotel {this.state.currentStep}/3</h1>
          <p>All fields are required</p>

          <form onSubmit={this.handleSubmit}>
            {/*
        render the form steps and pass required props in
      */}
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              email={this.state.email}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              username={this.state.username}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              password={this.state.password}
              submitted={this.state.submitted}
            />
            {this.previousButton()}
            {this.nextButton()}
          </form>
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<MasterForm />, document.getElementById('root'))
