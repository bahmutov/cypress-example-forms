import React from 'react'
import Field from './Field.jsx'

export default function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  }

  return (
    <div className="form-group">
      <Field name="username" handleChange={props.handleChange} />
      <Field name="field2a" handleChange={props.handleChange} />
      <Field name="field2b" handleChange={props.handleChange} />
      <Field name="field2c" handleChange={props.handleChange} />
      <Field name="field2d" handleChange={props.handleChange} />
      <Field name="field2e" handleChange={props.handleChange} />
      <Field name="field2f" handleChange={props.handleChange} />
      <Field name="field2g" handleChange={props.handleChange} />
    </div>
  )
}
