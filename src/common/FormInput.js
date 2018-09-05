import React from 'react';
import { TextField } from '@material-ui/core';

const FormInput = props => {
  const {
    id = '',
    name = '',
    className = '',
    type = 'text',
    error = false,
		fullWidth = false,
		max ='100',
		value = '',
		onChange
  } = props;
  return (
    <React.Fragment>
			{type === 'textarea' ? <TextField
			id={id}
			value={value}
			label={name}
			className={className}
			fullWidth={fullWidth}
			error={error}
			multiline
			rows='2'
			inputProps={{
				maxLength: max
			}}
			onChange={onChange}
		/> : 
		<TextField
				id={id}
				value={value}
				label={name}
				className={className}
				fullWidth={fullWidth}
				error={error}
				type={type}
				inputProps={{
					maxLength: max
				}}
				onChange={onChange}
			/>}
		</React.Fragment>
  )
}

export default FormInput;