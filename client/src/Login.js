import React, {Component} from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {liftUser} from './action/actions'
import {Row, Input} from 'react-materialize';
// import M from 'materialize-css'

const mapStateToProps = state => {
	return{ state }
  }
const mapDispatchToProps = dispatch => {
	return{
		  liftUser: (userInfo) => dispatch(liftUser(userInfo)),
	}
  }

class Login extends Component {
	constructor(props){
		super(props)
		this.state={
			email: '',
			password: '',
			redirect: false,
			location: ''
		}
		this.emailChange = this.emailChange.bind(this)
		this.passwordChange = this.passwordChange.bind(this)
		this.submit = this.submit.bind(this)
	}

	emailChange(e){
		this.setState({
			email: e.target.value
		})
	}

	passwordChange(e){
		this.setState({
			password: e.target.value
		})
	}

	submit(e){
		e.preventDefault()
		axios.post('/auth/login', {
			email: this.state.email,
			password: this.state.password
		}).then((data)=>{
			console.log(data.data.user)
			console.log(data)
			if(data.data.user){
				window.Materialize.toast("Logged in successfully!", 3000, 'green')
				localStorage.setItem('snapbookToken', data.data.token)
				this.props.liftUser({
				firstName: data.data.user.firstName,
				lastName: data.data.user.lastName,
				email: data.data.user.email,
				userName: data.data.user.userName,
				userId: data.data.user.id,
				snaps: data.data.snaps
				})
				this.setState({
					redirect: true,
					location: '/'
				})
				console.log(this.props.state)
			}else{
				window.Materialize.toast("Incorrect email/password, please try again!", 3000, 'red')
			}
		})
	}

	render() {
		const { redirect } = this.state;

		if(redirect){
			return <Redirect to={this.state.location} />
		}
		return(
			<Row>
				<div className='col s8 offset-s2 login'>
					<h4> Log In! </h4>
					<hr />
					<form>
						<Input type="email" label="Email" s={12} onChange={this.emailChange}/>
						<br />
						<Input type="password" label="Password" s={12} onChange={this.passwordChange}/>
						<button type='submit' className='btn waves-effect waves-light yellow darken-2 col s4 offset-s4' onClick={this.submit}>Log In!</button>
					</form>
				</div>
			</Row>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);