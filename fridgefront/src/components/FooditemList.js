import React from 'react'
import { Segment, Table, Button, Form, Select } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class FooditemList extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			currentFridge: props.fridge
		}
	}

	changeCurrentFridge = (event) => {
		console.log(event.target.selected)		
	}

	render() {
		const fridgeOptions = this.props.fridges.map(f => {
			return { value: f.id, text: f.name, key: f.id}
		})
		const itemsToShow = this.props.fooditems.filter(item => item.fridge === this.state.currentFridge)
		return (
			<Segment>
				<Form className='ui form'>
					<Form.Field inline label='Fridge' control={Select} options={fridgeOptions} onChange={this.changeCurrentFridge}></Form.Field>
				</Form>
				<Table striped selectable>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Amount</Table.HeaderCell>
							<Table.HeaderCell>Unit</Table.HeaderCell>
							<Table.HeaderCell>Date bought</Table.HeaderCell>
							<Table.HeaderCell>Date opened</Table.HeaderCell>
							<Table.HeaderCell></Table.HeaderCell>
							<Table.HeaderCell></Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{itemsToShow.map(item => (
							<Table.Row key={item.id}>
								<Table.Cell>{item.name}</Table.Cell>
								<Table.Cell>{item.amount}</Table.Cell>
								<Table.Cell>{item.unit}</Table.Cell>
								<Table.Cell>{item.bought}</Table.Cell>
								<Table.Cell>{item.opened}</Table.Cell>
								<Table.Cell>
									<Button className='tiny' color='green'>
										<Link to={`/fooditems/update/${item.id}`}>Update</Link>
									</Button>
								</Table.Cell>
								<Table.Cell><Button color='red' onClick={this.props.remove(item)}>Delete</Button></Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</Segment>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps,
		fooditems: state.fooditems,
		fridges: state.fridges,
		fridge: state.loggedin.user.defaultFridge
	}
}

export default connect(mapStateToProps)(FooditemList)