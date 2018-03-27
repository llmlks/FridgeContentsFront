import React from 'react'
import { Segment, Form, Table, Button } from 'semantic-ui-react'
const FridgeEditForm = ({ fridge, updateFridge }) => {
	return (
		<Segment>
			<Table basic='very'>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Users</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell rowSpan={fridge.users.length}>{fridge.name}</Table.Cell>
						<Table.Cell>{fridge.users[0].name}</Table.Cell>
					</Table.Row>
					{fridge.users
						.filter(u => u !== fridge.users[0])
						.map(u =>
							<Table.Row>
								<Table.Cell>{u.name}</Table.Cell>
							</Table.Row>)
					}
				</Table.Body>
			</Table>

			<h3>Set new values</h3>
			<Form onSubmit={updateFridge}>
				<Form.Group>
					<Form.Input type='number' step='100' min='0' name='weight' label='Weight (in grams)' />
					<Form.Input type='number' step='0.1' min='0' name='volume' label='Volume (in liters)' />
					<Form.Input type='number' min='0' name='pieces' label='Pieces' />
				</Form.Group>
				<Button.Group>
					<Form.Button type='submit' positive>Save</Form.Button>
					<Button.Or />
					<Form.Button type='reset' >Return</Form.Button>
				</Button.Group>
			</Form>

		</Segment>
	)
}

export default FridgeEditForm