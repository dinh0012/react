import React from 'react';
import FieldContext, { HOOK_MARK } from './FieldContext';
const Form = props => {
  const { children } = props;
  console.log(React.toChildArray(props.children));
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <FieldContext.Provider value={123}>{children}</FieldContext.Provider>
    </form>
  );
};

export default Form;
