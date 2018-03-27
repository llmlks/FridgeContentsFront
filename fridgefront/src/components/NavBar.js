import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NavBar = ({ user, logout }) => {
	if (user) {
		return (
			<Menu inverted>
				<Menu.Item link><Link to='/fridges'>Fridges</Link></Menu.Item>
				<Menu.Item link><Link to='/fooditems'>Food items</Link></Menu.Item>
				<Menu.Item link><Link to='/fooditems/create'>Add new food item</Link></Menu.Item>
				<div className='right menu'>
					<Menu.Item>{user.name} logged in</Menu.Item>
					<Menu.Item onClick={logout}>Log out</Menu.Item>
				</div>
			</Menu>
		)
	}

	return (
		<Menu inverted>
			<div className='right menu'>
				<Menu.Item link><Link to='/signup'>Sign up</Link></Menu.Item>
				<Menu.Item link><Link to='/login'>Log in</Link></Menu.Item>
			</div>
		</Menu>
	)
}

export default NavBar