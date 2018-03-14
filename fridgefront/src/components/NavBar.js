import React from 'react'
import { Menu } from 'semantic-ui-react'

const NavBar = ({ user }) => {
	if (user) {
		return (
			<Menu inverted>
				<div className='right menu'>
					<Menu.Item>{user.name} logged in</Menu.Item>
					<Menu.Item link>Log out</Menu.Item>
				</div>
			</Menu>
		)
	}

	return (
		<Menu inverted>
			<div className='right menu'>
				<Menu.Item link>Sign up</Menu.Item>
				<Menu.Item link>Log in</Menu.Item>
			</div>
		</Menu>
	)
}

export default NavBar