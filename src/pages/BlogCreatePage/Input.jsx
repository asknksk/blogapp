import React, { useState } from "react";

const Input = ({ innerRef, ...props }) => {
  const [value, setValue] = useState("");
  return (
    <div className='border border-primary rounded-full py-1.5 px-6 bg-white w-full'>
      <input
        required={props.required}
        ref={innerRef}
        type={props.type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='border-b w-full outline-none text-[11px] font-medium'
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
