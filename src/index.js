import React from 'react'
import ReactDOM from 'react-dom'

class MasterForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentStep: 1,
      email: '',
      username: '',
      password: ''
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
    const { email, username, password } = this.state
    alert(`Your registration detail: \n
           Email: ${email} \n
           Username: ${username} \n
           Password: ${password}`)
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
        <h1>Book Hotel</h1>
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
        placeholder={'Enter your ' + props.name + ' name'}
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
      {/* <label htmlFor='first'>First name</label>
      <input
        className='form-control'
        id='first'
        name='first'
        type='text'
        placeholder='Enter your first name'
        value={props.first}
        onChange={props.handleChange}
      /> */}

      <label htmlFor='last'>Last name (surname, family name)</label>
      <input
        className='form-control'
        id='last'
        name='last'
        type='text'
        placeholder='Enter your last name'
        value={props.last}
        onChange={props.handleChange}
      />

      <label htmlFor='field1'>Some other field 1</label>
      <input
        className='form-control'
        id='field1'
        name='field1'
        type='text'
        placeholder='Enter your field1 name'
        value={props.field1}
        onChange={props.handleChange}
      />
      <label htmlFor='field2'>Some other field 2</label>
      <input
        className='form-control'
        id='field2'
        name='field2'
        type='text'
        placeholder='Enter your field2 name'
        value={props.field2}
        onChange={props.handleChange}
      />
      <label htmlFor='field3'>Some other field 3</label>
      <input
        className='form-control'
        id='field3'
        name='field3'
        type='text'
        placeholder='Enter your field3 name'
        value={props.field3}
        onChange={props.handleChange}
      />
      <label htmlFor='field4'>Some other field 4</label>
      <input
        className='form-control'
        id='field4'
        name='field4'
        type='text'
        placeholder='Enter your field4 name'
        value={props.field4}
        onChange={props.handleChange}
      />

      <label htmlFor='email'>Email address</label>
      <input
        className='form-control'
        id='email'
        name='email'
        type='text'
        placeholder='Enter email'
        value={props.email}
        onChange={props.handleChange}
      />
    </div>
  )
}

function Step2 (props) {
  if (props.currentStep !== 2) {
    return null
  }
  return (
    <div className='form-group'>
      <label htmlFor='username'>Username</label>
      <input
        className='form-control'
        id='username'
        name='username'
        type='text'
        placeholder='Enter username'
        value={props.username}
        onChange={props.handleChange}
      />
    </div>
  )
}

function Step3 (props) {
  if (props.currentStep !== 3) {
    return null
  }
  return (
    <React.Fragment>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          className='form-control'
          id='password'
          name='password'
          type='password'
          placeholder='Enter password'
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
      <button className='btn btn-success btn-block'>Sign up</button>
    </React.Fragment>
  )
}

ReactDOM.render(<MasterForm />, document.getElementById('root'))
