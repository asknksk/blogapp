import React from "react";

const Submit = ({ value }) => {
  return (
    <input
      type='submit'
      value={value}
      className='rounded-full py-2 px-6 bg-indigo-600 font-montserrat text-btnGiris cursor-pointer font-semibold text-xs text-white'
    />
  );
};

export default Submit;
