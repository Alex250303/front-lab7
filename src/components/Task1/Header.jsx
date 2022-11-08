import React, { useState } from 'react';

const Header = () => {

	const [first, setFirstStyle] = useState({ background: '#fff', color: '#000'});
	const [second, setSecondStyle] = useState({ background: '#fff', color: '#000'});

	const onClickFirst = () => {
		setFirstStyle({ background: getRandomColorStyle(), color: getRandomColorStyle() });
	};

	const onClickSecond = () => {
		setSecondStyle({ background: getRandomColorStyle(), color: getRandomColorStyle() });
	};

	return (
		<>
		   <h2>Косюк Олексій Богданович</h2>
           <p onClick={onClickFirst} style={first}>Місце народження: 25 березня, 2003 року, смт. Першотравенськ (Житомирська обл)</p>
           <p onClick={onClickSecond} style={second}>Освіта: Ліцей, смт. Першотравенськ;</p>
           <p>&emsp;&emsp;&emsp;НТУУ "КПІ", м. Київ</p>
		</>
	);
}

function getRandomColorStyle() {
    return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) 
    + ',' + Math.floor(Math.random() * 255) + ')';
}

export default Header;