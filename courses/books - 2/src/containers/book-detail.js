import React, { Component } from 'react';
import { connect } from 'react-redux';



class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return <div> Select a book to get started. </div>
		}
		
		return (
				<div>
					<h3> Details for: </h3>
					{this.props.book.title}
					{this.props.book.pages}
				</div>

		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
};

export default connect(mapStateToProps)(BookDetail);