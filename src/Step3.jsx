import React from 'react'
import Field from './Field.jsx'

export default function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  }

  const button = props.submitted ? (
    <button className="btn btn-success btn-block" disabled>
      Thank you
    </button>
  ) : (
    <button className="btn btn-block">Sign up</button>
  )

  return (
    <React.Fragment>
      <div className="form-group">
        <Field name="field3a" handleChange={props.handleChange} />
        <Field name="field3b" handleChange={props.handleChange} />
        <Field name="field3c" handleChange={props.handleChange} />
        <Field name="field3d" handleChange={props.handleChange} />
        <Field name="field3e" handleChange={props.handleChange} />
        <Field name="field3f" handleChange={props.handleChange} />
        <Field name="field3g" handleChange={props.handleChange} />
      </div>
      {button}
    </React.Fragment>
  )
}
