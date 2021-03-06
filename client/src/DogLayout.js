import React, { Component } from 'react';

class DogLayout extends Component {

	render() {

		return(
			<div className='dog-layout'>
				<div className='row top-row-dog-layout'>
					<div className='col s6 center'>
						<div className='dog-layout-photo-frame top-left'>
							<img src={this.props.pics[0].url} alt='meow' />
						</div>
					</div>
					<div className='col s6 center'>
						<div className='dog-layout-photo-frame top-right'>
							<img src={this.props.pics[1].url} alt='meow' />
						</div>
					</div>
				</div>
				<div className='row mid-row-dog-layout'>
					<div className='col s12 center'>
						<div className='dog-layout-photo-frame-mid'>
							<div className='dog-layout-inner-frame'>
								<img src={this.props.pics[2].url} alt='meow' />
							</div>
						</div>
					</div>
				</div>
				<div className='row bottom-row-dog-layout'>
					<div className='col s6 center'>
						<div className='dog-layout-photo-frame bottom-left'>
							<img src={this.props.pics[3].url} alt='meow' />
						</div>
					</div>
					<div className='col s6 center'>
						<div className='dog-layout-photo-frame bottom-right'>
							<img src={this.props.pics[4].url} alt='meow' />
						</div>
					</div>
				</div>
			</div>		
		)
	}

}

export default DogLayout;