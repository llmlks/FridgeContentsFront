import React from 'react'
import { Segment, Table, Form, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

const FooditemEditForm = ({ fooditem, history, updateItem }) => {
	if (!fooditem) {
		return <Redirect to='/fooditems' />
	}

	const backToList = () =>{
		history.push('/fooditems')
	}

	return (
		<Segment>
			<Table basic='very'>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Weight</Table.HeaderCell>
						<Table.HeaderCell>Volume</Table.HeaderCell>
						<Table.HeaderCell>Pieces</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell>{fooditem.name}</Table.Cell>
						<Table.Cell>{fooditem.weight}</Table.Cell>
						<Table.Cell>{fooditem.volume}</Table.Cell>
						<Table.Cell>{fooditem.pieces}</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>

			<h3>Set new values</h3>
			<Form onSubmit={updateItem}>
				<Form.Group>
					<Form.Input type='number' step='100' min='0' name='weight' label='Weight (in grams)' />
					<Form.Input type='number' step='0.1' min='0' name='volume' label='Volume (in liters)' />
					<Form.Input type='number' min='0' name='pieces' label='Pieces' />
				</Form.Group>
				<Button.Group>
					<Form.Button type='submit' positive>Save</Form.Button>
					<Button.Or />
					<Form.Button type='reset' onClick={backToList}>Return</Form.Button>
				</Button.Group>
			</Form>
		</Segment>
	)
}

export default FooditemEditForm