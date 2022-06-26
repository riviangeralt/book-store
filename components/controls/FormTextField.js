import React from "react";
import { Form } from "react-bootstrap";
import { Controller, useFormContext } from "react-hook-form";

const FormTextField = (props) => {
  const {
    control,
    name,
    defaultValue,
    rules,
    placeholder,
    type,
    error,
    label,
    onChangeNew,
  } = props;
  const methods = useFormContext();
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        error={error}
        render={({ onChange, onBlur, value }) => {
          return (
            <Form.Control
              type={type}
              placeholder={placeholder}
              onChange={
                onChangeNew
                  ? onChangeNew
                  : (e) => methods.setValue(name, e.target.value)
              }
              autoComplete="off"
            />
          );
        }}
      />
      <Form.Text className="text-danger">
        {error && error[name]?.message}
      </Form.Text>
    </>
  );
};

export default FormTextField;
