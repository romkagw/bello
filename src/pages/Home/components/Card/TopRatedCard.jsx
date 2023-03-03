import React from 'react';
import PropTypes from 'prop-types';

class TopRatedCard extends React.Component {
	render() {
		const { imgSrc, title, children, classNumber } = this.props;

		return (
			<div className={`card-${classNumber}`}>
				<img
					className={`img-top-rated${classNumber}`}
					src={imgSrc}
					alt={title}
				/>
				<h6>{title}</h6>
				<p>{children}</p>
			</div>
		);
	}
}

TopRatedCard.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	classNumber: PropTypes.string.isRequired
};

export default TopRatedCard;