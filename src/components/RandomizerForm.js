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
            <Form.Row
              style={{ margin: "auto", maxWidth: "1000px" }}
              key={index}
            >
              <Form.Group
                controlId={form.id}
                style={{ margin: "auto", width: "100%", maxWidth: "600px" }}
              >
                <Col sm={true}>
                  <Form.Label className="text-center">{form.label}</Form.Label>
                </Col>
                <Col md={true}>
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
          <Form.Text muted style={{ textAlign: "center" }}>
            (Might need to scroll after clicking)
          </Form.Text>
        </Form>
      )}
    </Formik>
  );
};

export default RandomizerForm;
