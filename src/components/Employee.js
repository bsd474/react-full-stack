import React from "react";
function Employee(props) {
  return (
    <div className="mx-auto min-w-[300px] max-w-[300px] m-2 py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="select-none object-cover rounded-full h-[100px] w-[100px] block mx-auto sm:mx-0 sm:shrink-0"
        src={
          props.img
            ? props.img
            : "https://t4.ftcdn.net/jpg/00/84/67/19/360_F_84671939_jxymoYZO8Oeacc3JRBDE8bSXBWj0ZfA9.jpg"
        }
        alt="Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{props.name}</p>
          <p className="text-slate-500 font-medium">
            {props.role ? props.role : "No Roles"}
          </p>
        </div>
        {props.editEmployee}
      </div>
    </div>
  );
}

export default Employee;
