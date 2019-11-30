import React from 'react';

const Search = (props) => {
	let enteredText = '';
	// const getInputText = (event) => {
	// 	enteredText = event.target.value;
	// };
	// const onButtonClick = (event) => {
	// 	console.log(enteredText);
	// };
	// const onFormSubmit = (event) => {
	// 	event.preventDefault();
	// };
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<div className='ui corner labeled input'>
					<input
						type='text'
						onChange={(e) => {
							enteredText = e.target.value;
						}}
					/>
					<div className='ui corner label'>
						<i className='asterisk icon' />
					</div>
				</div>
				<button
					className='ui inverted green button'
					onClick={() => {
						props.onButtonClick(enteredText);
					}}
					type='button'
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default Search;
