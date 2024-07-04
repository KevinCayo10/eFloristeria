import React from "react";

function InputForm({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  arialLabelName,
  register,
}) {
  return (
    <div className="mb-4">
      <input
        {...register(inputId)}
        className="p-2 border rounded-md w-full  font-light lg:text-base"
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
