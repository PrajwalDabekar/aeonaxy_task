import React from "react";

function CustomCheck({question='what is your question',options=[]}){
    return(
        <div className="w-[320px] sm:w-[600px]">
            <div className="text-md font-medium mx-1 my-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{question}</div>
            <div >
                {options.map((option,index)=>(
                    <div key={index}
                    className="flex items-center h-full flex">
                    <input
                    type="checkbox"
                    className="p-4 mx-2 my-2 h-5 w-5 sm:h-5 w-5"
                    />
                    <label className="font-semibold">{option}</label>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default CustomCheck