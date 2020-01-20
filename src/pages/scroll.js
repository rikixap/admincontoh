import React, {Component} from 'react';
import './scroll.css';

const ContentText = (props) => {
	return (
		<p id={`content${props.id}`}>{`Content ${props.id}Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</p>
		)
}


function Scrool() {
	const onContentIndexClick = (value) => {
		const element = document.getElementById(`content${value }`);
		element.scrollIntoView({behavior: 'smooth'});
	}
	return(
		<div>
		<div id="contenttop"></div>
	<a onClick={() => onContentIndexClick(1)}>Content 1</a>
	<a onClick={() => onContentIndexClick(2)}>Content 2</a>
	<a onClick={() => onContentIndexClick(3)}>Content 3</a>
	<a onClick={() => onContentIndexClick(4)}>Content 4</a>
	<a onClick={() => onContentIndexClick(5)}>Content 5</a>
	<ContentText id={1}/>
	<ContentText id={2}/>
	<ContentText id={3}/>
	<ContentText id={4}/>
	<ContentText id={5}/>

	<div id="go-to-top" onClick={() => onContentIndexClick('top')}>top</div>
		</div>
		)
}

export default Scrool;