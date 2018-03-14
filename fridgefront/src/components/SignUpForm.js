import React from 'react'
import { Segment, Form } from 'semantic-ui-react'

const SignUpForm = ({ onSubmit }) => {
	return (
		<Segment>
			<h3>Sign up</h3>
			<Form onSubmit={onSubmit} className='ui form'>
				<Form.Input label='Name' name='name' type='text' />
				<Form.Input label='Username' name='username' type='text' />
				<Form.Input label='Password' name='password' type='password' />
				<Form.Input label='Please enter password again' name='password2' type='password' />
				<Form.Button color='blue'>Submit</Form.Button>
			</Form>
		</Segment>
	)
}

export default SignUpForm