import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import UserInfo from './UserInfo';


const mapStateToProps = state => {
  return{ state }
}

// <p><span className='intro-words'>Member Since: </span>{this.props.state.memberSince}</p>

class Profile extends Component {
	constructor(props){
		super(props)
		this.state={
			redirect: false,
			location: '',
		}
		this.auth = this.auth.bind(this)

	}

	auth(){
		this.setState({
			redirect: true,
			location: '/login'
		})
	}

	render() {
		let { redirect } = this.state

		if(redirect){
			return <Redirect to={this.state.location} />
		}

		if(!this.props.state.userName){
			//window.Materalize.toast("Please log in to access this page.", 'red', 3000)
			this.auth()
		}
		if(this.props.state.snaps){
			var temp = this.props.state.snaps
			var snapBooks = temp.map((snap, i) => {
				var link = '/snapbook/' + snap.id
				return <li><Link to={link}>{snap.name}</Link></li>
			})
		}else{
			var snapBooks = <li>No Snaps</li>
		}
		
		return(
			<div className='profile-page'>
			

				<UserInfo 
					userName={this.props.state.userName} 
					firstName={this.props.state.firstName}
					lastName={this.props.state.lastName}
					email={this.props.state.email}
				/>

				<div className='row collections-display'>
					<div className='col s12 m8 offset-m2 center'>
						<h4>Your SnapBooks</h4>
						{/*	Conditional if there are none associated w this user */}
						{/* <h5>Uh oh, you don't seem to have any! Let's go make one.</h5> */}
						<ul className='list-of-snapbooks'>
							{snapBooks}
						</ul>
						<Link to='/collections' className='btn waves-effect waves-light yellow darken-2 z-depth-3'>Make a SnapBook!</Link>

					</div>
				</div>

			</div>
		)	
	}


}
export default connect(mapStateToProps)(Profile);