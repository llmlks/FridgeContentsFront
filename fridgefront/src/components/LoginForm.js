import React from 'react'
import { Segment, Form } from 'semantic-ui-react'

const LoginForm = ({ onSubmit }) => {
	return (
		<Segment>
			<h3>Log in</h3>
			<Form className='ui form' onSubmit={onSubmit} >
				<Form.Input label='Username' type='text' name='username' />
				<Form.Input label='Password' type='password' name='password' />
				<Form.Button color='green'>Log in</Form.Button>
			</Form>
		</Segment>
	)
}

export default LoginForm