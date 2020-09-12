import React, { useState, useEffect } from 'react';
import posed from 'react-pose';

const OpacityAnimation = posed.div({
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 1000 } }
});

const Header = () => {
	const [ isVisible, setVisble ] = useState(false);

	useEffect(() => {
		setVisble(true);
	}, []);

	return (
		<OpacityAnimation pose={isVisible ? 'visible' : 'hidden'}>
			<h1 style={{ margin: 'auto', textAlign: 'center' }}>Game Jam Randomizer</h1>
		</OpacityAnimation>
	);
};

export default Header;
