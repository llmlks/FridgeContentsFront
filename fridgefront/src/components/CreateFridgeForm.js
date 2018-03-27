import React from 'react'
import { Segment, Form } from 'semantic-ui-react'

const CreateFridgeForm = ({ onSubmit }) => {
	return (
		<Segment>
			<Form onSubmit={onSubmit} className='ui form'>
				<Form.Group inline>
					<Form.Input name='name' type='text' placeholder='Name' label='Add new fridge'/>
					<Form.Button color='blue'>Add new</Form.Button>
				</Form.Group>
			</Form>
		</Segment>
	)
}

export default CreateFridgeForm