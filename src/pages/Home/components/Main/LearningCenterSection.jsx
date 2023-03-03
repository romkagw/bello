import React, { Component } from 'react';
import ArrowButton from '../Buttons/ArrowButton';

class LearningCenterSection extends Component {
	render() {
		return (
			<section id='learning-center'>
				<div className='container'>
					<div className='learning-center-block'>
						<div className='learning-center-image' />
						<div className='learning-center-content'>
							<h5>You&apos;ve Got This</h5>
							<h3>Everything you need— completely free</h3>
							<p>
								Here’s the latest info, guides, and, helpful tools, from the
								Bello team. Learn about life insurance, finances, health and
								wellness.
							</p>
							<ArrowButton>Visit Learning Center</ArrowButton>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default LearningCenterSection;
