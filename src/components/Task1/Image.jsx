import React, { useState } from 'react';

const Image = () => {

	const [imageSize, setImageSize] = useState(600);
	const [displayStyle, setDisplayStyle] = useState({display: 'inline-block'});

	const remove = () => {
		setDisplayStyle({display: 'none'});
    };

    const add = () => {
    	setImageSize(600);
    	setDisplayStyle({display: 'inline-block'});
    };

    const decrease = () => {
    	if (imageSize > 25) {
    		setImageSize(imageSize - 25)
    	}
    };

    const increase = () => {
    	if (imageSize < 1200) {
    		setImageSize(imageSize + 25)
    	}
    };

    return (
    	<>
    	   <a href="https://mistomariupol.com.ua/uk/"><img src="http://static.prsa.pl/images/389859b9-1b82-462c-b860-8d870a1cb281.jpg" height={imageSize} style={displayStyle} alt="picture"/></a>
           <div>
              <button onClick={add}>Додати</button>
              <button onClick={increase}>Збільшити</button>
              <button onClick={decrease}>Зменшити</button>
              <button onClick={remove}>Видалити</button>
           </div>

    	</>

    );
}

export default Image;