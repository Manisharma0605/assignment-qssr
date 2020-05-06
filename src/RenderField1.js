import React from 'react';
import { TextField } from '@material-ui/core';

const RenderField1 = ({
  input,
  label,
  type,
  maxLength,
  openWindow,
  valueFacility,
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
      onClick={openWindow}
      onChange={openWindow}
      value={valueFacility}
    />
  );
};

export default RenderField1;