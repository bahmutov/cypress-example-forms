import React from 'react'
import Field from './Field.jsx'

export default function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <div className="form-group">
      <Field name="first" handleChange={props.handleChange} />
      <Field name="last" handleChange={props.handleChange} />
      <Field name="email" handleChange={props.handleChange} />
      <Field name="field1a" handleChange={props.handleChange} />
      <Field name="field1b" handleChange={props.handleChange} />
      <Field name="field1c" handleChange={props.handleChange} />
      <Field name="field1d" handleChange={props.handleChange} />
      <Field name="field1e" handleChange={props.handleChange} />
    </div>
  )
}
