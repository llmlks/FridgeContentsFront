import React from 'react'
import { Segment, Form } from 'semantic-ui-react'

class CreateFooditem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			step: 1,
			onSubmit: props.onSubmit
		}
	}

	setStep = (event) => {
		let step = 1
		switch (event.target.selectedIndex) {
			case 0:
				step = 50
				break
			case 1:
				step = 0.1
				break
			default:
				step = 1
		}
		this.setState({ step })
	}

	render() {
		const units = [
			'grams', 'liters', 'pieces'
		]
		return (
			<Segment>
				<Form onSubmit={this.state.onSubmit} className='ui form'>
					<Form.Input label='Name' name='name' type='text'/>
					<Form.Group>
						<Form.Field control='select' label='Unit' onChange={this.setStep} name='unit'>
							{units.map(unit => <option value={unit} key={unit}>{unit}</option>)}
						</Form.Field>
						<Form.Input label='Amount' name='amount' type='number' min='0' step={this.state.step}/>
						<Form.Input label='Date bought' name='bought' type='date'/>
						<Form.Input label='Date opened' name='opened' type='date'/>
					</Form.Group>
					<Form.Button color='blue'>Submit</Form.Button>
				</Form>
			</Segment>
		)
	}
}

export default CreateFooditem