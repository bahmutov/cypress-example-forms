import React from 'react'

export default function Field(props) {
  return (
    <React.Fragment>
      <label htmlFor={props.name}>Field {props.name}</label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type="text"
        placeholder={'Enter value for ' + props.name}
        value={props.field1}
        onChange={props.handleChange}
      />
    </React.Fragment>
  )
}
