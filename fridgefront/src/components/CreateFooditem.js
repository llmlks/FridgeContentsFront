import React from 'react'
import { Segment, Form } from 'semantic-ui-react'

const CreateFooditem = ({ onSubmit }) => {
	return (
		<Segment>
			<Form onSubmit={onSubmit} className='ui form'>
				<Form.Input label='Name' name='name' type='text'/>
				<Form.Group>
					<Form.Input label='Weight (in grams)' name='weight' type='text'/>
					<Form.Input label='Volume (in liters)' name='volume' type='text'/>
					<Form.Input label='Pieces' name='pieces' type='text'/>
				</Form.Group>
				<Form.Button color='blue'>Submit</Form.Button>
			</Form>
		</Segment>
	)
}

export default CreateFooditem