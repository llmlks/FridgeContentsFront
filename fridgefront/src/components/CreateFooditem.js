import React from 'react'
import { Segment, Form } from 'semantic-ui-react'

const CreateFooditem = ({ onSubmit }) => {
	const units = [
		'grams', 'liters', 'pieces'
	]
	return (
		<Segment>
			<Form onSubmit={onSubmit} className='ui form'>
				<Form.Input label='Name' name='name' type='text'/>
				<Form.Group>
					<Form.Input label='Amount' name='amount' type='number' min='0'/>
					<Form.Field control='select' label='Unit' options={units} name='unit' type='text'/>
					<Form.Input label='Date bought' name='bought' type='date'/>
					<Form.Input label='Date opened' name='opened' type='date'/>
				</Form.Group>
				<Form.Button color='blue'>Submit</Form.Button>
			</Form>
		</Segment>
	)
}

export default CreateFooditem