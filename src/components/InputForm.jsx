import React from "react";

function InputForm({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  arialLabelName,
}) {
  return (
    <div className="mb-4">
      <input
        className="p-2 border rounded-md w-full  font-light lg:text-xl"
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={arialLabelName}
        required
      />
    </div>
  );
}

export default InputForm;
