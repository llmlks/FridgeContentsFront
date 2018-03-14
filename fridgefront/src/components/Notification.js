import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'

const Notification = ({ notification }) => {
	if (!notification) {
		return null
	}

	if (notification.style === 'success') {
		return (
			<Message success header={notification.message} />
		)
	}

	return (
		<Message error header={notification.message} />
	)
}

const mapStateToProps = (state) => {
	return {
		notification: state.notification
	}
}

export default connect(mapStateToProps)(Notification)