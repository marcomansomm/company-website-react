import React from 'react';

const FormField = ({ type, id, className, placeholder, label, required, autoFocus, groupClass }) => {
    return (
      <div className={groupClass}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          className={className}
          placeholder={placeholder}
          required={required}
          autoFocus={autoFocus}
        />
        
      </div>
    );
  };
  
  export default FormField;