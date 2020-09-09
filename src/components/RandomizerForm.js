import React, { useState } from "react";
import { Formik } from "formik";
import { Button, Form, Col } from "react-bootstrap";
import Forms from "../data/Forms.json";

function PossibleValuesObject() {
  let possibleValuesObject = {};
  Forms.forEach((form) => {
    for (const key in form) {
      if (form.hasOwnProperty(key) && key === "id") {
        const element = form[key];
        possibleValuesObject[element] = 0;
      }
    }
  });
  console.log("possibleValues", possibleValuesObject);
  return possibleValuesObject;
}

const RandomizerForm = (props) => {
  const [possibleValues, setPossibleValues] = useState(PossibleValuesObject());

  return (
    <Formik
      initialValues={possibleValues}
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
          {Forms.map((form, index) => (
            <Form.Row style={{ margin: "auto" }} key={index}>
              <Form.Group
                controlId={form.id}
                style={{ margin: "auto", width: "50%" }}
              >
                <Col lg={true}>
                  <Form.Label className="text-center">{form.label}</Form.Label>
                </Col>
                <Col lg={true}>
                  <Form.Control
                    name={form.name}
                    type="Number"
                    placeholder={form.placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    min={0}
                    max={form.data.length}
                    value={values[form.id]}
                    size="lg"
                  />
                  <Form.Text muted>{form.helpText}</Form.Text>
                </Col>
              </Form.Group>
            </Form.Row>
          ))}
          <Form.Row style={{ margin: "auto" }}>
            <Button variant="primary" type="submit" style={{ margin: "auto" }}>
              Submit
            </Button>
          </Form.Row>
        </Form>
      )}
    </Formik>
  );
};

export default RandomizerForm;
