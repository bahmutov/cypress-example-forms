import { AutoForm } from 'uniforms-semantic'
import React from 'react'
import GuestSchema from './GuestSchema'
export default function GuestForm () {
  return <AutoForm schema={GuestSchema} onSubmit={console.log} />
}
