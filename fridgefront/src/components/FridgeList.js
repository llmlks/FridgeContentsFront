import React from 'react'
import { Segment, Table, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CreateFridgeForm from './CreateFridgeForm'
import { connect } from 'react-redux'

const FridgeList = ({ remove, user, addFridge, fridges, makeDefault }) => {
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
							<Table.Cell rowSpan={fridge.users.length}>
								<Link to={`/fridges/update/${fridge.id}`}>{fridge.name}</Link>
							</Table.Cell>
							<Table.Cell rowSpan={fridge.users.length}>{fridge.fooditems.length}</Table.Cell>
							<Table.Cell>{fridge.users[0].name}</Table.Cell>
							<Table.Cell rowSpan={fridge.users.length}>
								{user.defaultFridge === fridge.id && <Icon color='green' name='checkmark' size='large' />}
							</Table.Cell>
							<Table.Cell rowSpan={fridge.users.length}>
								{user.defaultFridge !== fridge.id && 
									<Button className='tiny' color='green' onClick={makeDefault(fridge)}>
										Make default
									</Button>
								}
							</Table.Cell>
							<Table.Cell rowSpan={fridge.users.length}>
								<Button color='red' onClick={remove(fridge)}>Delete</Button>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</Segment>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps,
		user: state.loggedin.user
	}
}

export default connect(mapStateToProps)(FridgeList)