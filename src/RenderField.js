import React from 'react';
import { TextField } from '@material-ui/core';

const RenderField = ({
  input,
  label,
  type,
  maxLength,
  meta: { touched, error },
}) => {
  return (
    <TextField
      error={touched && error}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...input}
      type={type}
      label={label}
      fullWidth
      margin="normal"
      inputProps={{ maxLength }}
      required
    />
  );
};

export default RenderField;