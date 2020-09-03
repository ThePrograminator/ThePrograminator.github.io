import React from "react";
import { useFormik, Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import Genres from "../data/Genres.json";

const RandomizerForm = (props) => {
  const formik = useFormik({
    initialValues: {
      genreAmount: 0,
    },
    onSubmit: (values) => {
      props.handleSubmit(values);
    },
  });

  return (
    <Formik
      initialValues={{ genreAmount: 0 }}
      onSubmit={(values) => {
        props.handleSubmit(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="genreAmount">
            <Form.Label>Genres Amount: </Form.Label>
            <Form.Control
              name="genreAmount"
              type="Number"
              placeholder="Enter genre amount..."
              onChange={handleChange}
              onBlur={handleBlur}
              max={Genres.length}
              value={values.genreAmount}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RandomizerForm;

/*

<form onSubmit={formik.handleSubmit}>
      <label htmlFor="genreAmount">Genre Amount:</label>
      <input
        id="genreAmount"
        name="genreAmount"
        type="number"
        min = "0"
        max = {Genres.length}
        onChange={formik.handleChange}
        value={formik.values.genreAmount}
      />
      <Button type="submit">Submit</Button>
    </form>*/
