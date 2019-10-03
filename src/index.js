import React from 'react'
import ReactDOM from 'react-dom'

class MasterForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentStep: 1,
      email: '',
      username: ''
    }

    if (window.Cypress) {
      window.app = this
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    console.log('submitting state', this.state)

    const { email, username } = this.state

    this.setState({
      submitted: true
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
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  /*
   * the functions for our button
   */
  previousButton () {
    let currentStep = this.state.currentStep
    if (currentStep !== 1) {
      return (
        <button
          className='btn btn-secondary'
          type='button'
          onClick={this._prev}
        >
          Previous
        </button>
      )
    }
    return null
  }

  nextButton () {
    let currentStep = this.state.currentStep
    if (currentStep < 3) {
      return (
        <button
          className='btn btn-primary float-right'
          type='button'
          onClick={this._next}
        >
          Next
        </button>
      )
    }
    return null
  }

  render () {
    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}

const Field = props => {
  return (
    <React.Fragment>
      <label htmlFor={props.name}>Field {props.name}</label>
      <input
        className='form-control'
        id={props.name}
        name={props.name}
        type='text'
        placeholder={'Enter value for ' + props.name}
        value={props.field1}
        onChange={props.handleChange}
      />
    </React.Fragment>
  )
}

function Step1 (props) {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <div className='form-group'>
      <Field name='first' handleChange={props.handleChange} />
      <Field name='last' handleChange={props.handleChange} />
      <Field name='email' handleChange={props.handleChange} />
      <Field name='field1a' handleChange={props.handleChange} />
      <Field name='field1b' handleChange={props.handleChange} />
      <Field name='field1c' handleChange={props.handleChange} />
      <Field name='field1d' handleChange={props.handleChange} />
      <Field name='field1e' handleChange={props.handleChange} />
    </div>
  )
}

function Step2 (props) {
  if (props.currentStep !== 2) {
    return null
  }

  return (
    <div className='form-group'>
      <Field name='username' handleChange={props.handleChange} />
      <Field name='field2a' handleChange={props.handleChange} />
      <Field name='field2b' handleChange={props.handleChange} />
      <Field name='field2c' handleChange={props.handleChange} />
      <Field name='field2d' handleChange={props.handleChange} />
      <Field name='field2e' handleChange={props.handleChange} />
      <Field name='field2f' handleChange={props.handleChange} />
      <Field name='field2g' handleChange={props.handleChange} />
    </div>
  )
}

function Step3 (props) {
  if (props.currentStep !== 3) {
    return null
  }

  const button = props.submitted ? (
    <button className='btn btn-success btn-block' disabled>
      Thank you
    </button>
  ) : (
    <button className='btn btn-block'>Sign up</button>
  )

  return (
    <React.Fragment>
      <div className='form-group'>
        <Field name='field3a' handleChange={props.handleChange} />
        <Field name='field3b' handleChange={props.handleChange} />
        <Field name='field3c' handleChange={props.handleChange} />
        <Field name='field3d' handleChange={props.handleChange} />
        <Field name='field3e' handleChange={props.handleChange} />
        <Field name='field3f' handleChange={props.handleChange} />
        <Field name='field3g' handleChange={props.handleChange} />
      </div>
      {button}
    </React.Fragment>
  )
}

ReactDOM.render(<MasterForm />, document.getElementById('root'))
