import React from 'react'
import { Segment, Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CreateFridgeForm from './CreateFridgeForm'

const FridgeList = ({ remove, user, addFridge, fridges }) => {
	return (
		<Segment>
			<CreateFridgeForm onSubmit={addFridge}/>
			<Table striped selectable>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Fooditems</Table.HeaderCell>
						<Table.HeaderCell>Other users</Table.HeaderCell>
						<Table.HeaderCell>Default</Table.HeaderCell>
						<Table.HeaderCell></Table.HeaderCell>
						<Table.HeaderCell></Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{fridges.map(fridge => (
						<Table.Row key={fridge.id}>
							<Table.Cell>{fridge.name}</Table.Cell>
							<Table.Cell>{fridge.fooditems.length}</Table.Cell>
							<Table.Cell>{fridge.users.filter(u => u.id !== user.id).map(u => <p>{u.name}</p>)}</Table.Cell>
							<Table.Cell>{user.default === fridge.id ? 'true' : 'false'}</Table.Cell>
							<Table.Cell>
								<Button className='tiny' color='green'>
									<Link to={`/fridges/update/${fridge.id}`}>Update</Link>
								</Button>
							</Table.Cell>
							<Table.Cell><Button color='red' onClick={remove(fridge)}>Delete</Button></Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</Segment>
	)
}

export default FridgeList