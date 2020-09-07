import React, { useState, useEffect } from 'react';
import AttributeCard from '../components/AttributeCard.js';
import { CardColumns, Col, Row } from 'react-bootstrap';
import posed from 'react-pose';

const OpacityAnimation = posed.div({
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 1000 } }
});

const AttributeCardList = (props) => {
	const [ isVisible, setVisble ] = useState(false);

	useEffect(() => {
		setVisble(true);
	}, []);

	return (
		<OpacityAnimation pose={isVisible ? 'visible' : 'hidden'}>
			{props.randomizedLists.map((randomList, listIndex) => (
				<div>
					<Row lg={true} key={listIndex}>
						<h2 style={{ margin: 'auto', textAlign: 'center' }}>
							{props.randomizedListsForms[listIndex].title}
						</h2>
						<CardColumns>
							{randomList.map((randomElement, index) => (
								<Col key={index} lg={true}>
									<AttributeCard randomElement={randomElement} />
								</Col>
							))}
						</CardColumns>
					</Row>
					<hr />
				</div>
			))}
		</OpacityAnimation>
	);
};

export default AttributeCardList;
