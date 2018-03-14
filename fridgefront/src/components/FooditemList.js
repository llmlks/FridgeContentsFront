import React from 'react'
import { Segment, Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import FooditemEditForm from './FooditemEditForm'

const FooditemList = ({ fooditems, remove }) => {
	return (
		<Segment>
			<Table striped selectable>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Weight (in grams)</Table.HeaderCell>
						<Table.HeaderCell>Volume (in liters)</Table.HeaderCell>
						<Table.HeaderCell>Pieces</Table.HeaderCell>
						<Table.HeaderCell></Table.HeaderCell>
						<Table.HeaderCell></Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{fooditems.map(item => (
						<Table.Row key={item.id}>
							<Table.Cell>{item.name}</Table.Cell>
							<Table.Cell>{item.weight}</Table.Cell>
							<Table.Cell>{item.volume}</Table.Cell>
							<Table.Cell>{item.pieces}</Table.Cell>
							<Table.Cell>
								<Button className='tiny' color='green'>
									<Link to={`/fooditems/update/${item.id}`}>Update</Link>
								</Button>
							</Table.Cell>
							<Table.Cell><Button color='red' onClick={remove(item)}>Delete</Button></Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</Segment>
	)
}

export default FooditemList