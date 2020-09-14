import React, { useContext } from 'react';
import FieldContext from 'form/FieldContext';
const Field = (props) => {
  const {component} =
  const context = useContext(FieldContext)
  console.log(context);
  return <>

  </>;
};

export default Field;
