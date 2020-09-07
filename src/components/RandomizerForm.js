import React, { useState } from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import Forms from '../data/Forms.json';

function PossibleValuesObject() {
	let possibleValuesObject = {};
	Forms.forEach((form) => {
		for (const key in form) {
			if (form.hasOwnProperty(key) && key === 'id') {
				const element = form[key];
				possibleValuesObject[element] = 0;
			}
		}
	});
	console.log('possibleValues', possibleValuesObject);
	return possibleValuesObject;
}

const RandomizerForm = (props) => {
	const [ possibleValues, setPossibleValues ] = useState(PossibleValuesObject());

	return (
		<Formik
			initialValues={possibleValues}
			onSubmit={(values) => {
				props.handleSubmit(values);
			}}
		>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<Form onSubmit={handleSubmit}>
					{Forms.map((form, index) => (
						<Form.Group controlId={form.id} key={index}>
							<Form.Label>{form.label}</Form.Label>
							<Form.Control
								name={form.name}
								type="Number"
								placeholder={form.placeholder}
								onChange={handleChange}
								onBlur={handleBlur}
								min={0}
								max={form.data.length}
								value={values[form.id]}
							/>
						</Form.Group>
					))}

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default RandomizerForm;
