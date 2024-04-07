import React, { useState } from 'react';

function CustomDropdown({label = 'label',options=[]}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  //const options = ['Option 1', 'Option 2', 'Option 3'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[320px] sm:w-[600px]">
      <div className='text-md font-medium mx-1 my-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
        {label}
      </div>
      <div
        onClick={toggleDropdown}
        className="w-[310px] flex justify-between items-center bg-white border border-gray-300 px-4 py-3 ml-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline sm:w-[600px]"
      >
        <div>
        {selectedOption || 'Select an option'}
        </div>
        <div>
          <img src='https://cdn.icon-icons.com/icons2/2596/PNG/96/down_icon_155471.png' alt='arrow' className='h-[20px] w-[20px]'/>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 bg-white w-[310px] border border-gray-300 mt-1 ml-1 rounded shadow-md sm:w-[600px]">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;
