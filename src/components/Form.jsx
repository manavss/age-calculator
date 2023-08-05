/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import icon from "../assets/images/icon-arrow.svg";
export const Form = ({ setIsSubmitted, setAd, setAy, setAm }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  let answerYear, answerMonth, answerDay;
  const today = new Date();
  const currYear = today.getFullYear();
  const currMonth = today.getMonth() + 1;
  const currDay = today.getDate();

  const errorStateYear = year > currYear;
  const errorStateDay = day > 31 || day < 1;
  const errorStateMonth = month > 12 || month < 1;

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  const previousMonthDays = daysInMonth(currMonth - 1, currYear);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!year || !month || !day) return;
    if (errorStateYear || errorStateDay || errorStateMonth) return;

    setIsSubmitted(true);
    answerYear = currYear - year;
    if (currMonth < month) {
      answerYear = answerYear - 1;
      answerMonth = 12 + currMonth - month;
    } else {
      answerMonth = currMonth - month;
    }
    if (currDay < day) {
      answerMonth = answerMonth - 1;
      answerDay = previousMonthDays + currDay - day;
    } else {
      answerDay = currDay - day;
    }
    setAd(answerDay);
    setAm(answerMonth);
    setAy(answerYear);
    // reset();
  };
  return (
    <form
      className="flex flex-col items-center gap-y-6 relative md:w-[400px] md:items-start "
      onSubmit={handleSubmit}
    >
      <div className="flex gap-x-5   ">
        <div className="flex flex-col gap-y-1">
          <label
            className={` font-semibold ${
              errorStateDay && day ? "text-lightRed" : "text-smokeygrey"
            }`}
          >
            Day
          </label>
          <input
            className={`input ${
              errorStateDay && day
                ? "focus:ring-lightRed  hover:border-lightRed "
                : "focus:ring-purple  hover:border-purple"
            }`}
            placeholder="DD"
            type="Number"
            inputMode="numeric"
            required={true}
            value={day}
            onChange={(e) => {
              setDay(e.target.value);
            }}
          />
          <h6 className=" text-[10px] text-lightRed">
            {(day && day > 31) || (day && day < 1) ? "Enter a valid day" : ""}
          </h6>
        </div>
        <div className="flex flex-col gap-y-1 ">
          <label
            className={` font-semibold ${
              errorStateMonth && month ? "text-lightRed" : "text-smokeygrey"
            }`}
          >
            Month
          </label>
          <input
            className={`input  ${
              errorStateMonth && month
                ? "focus:ring-lightRed  hover:border-lightRed"
                : "focus:ring-purple  hover:border-purple"
            }`}
            placeholder="MM"
            type="Number"
            inputMode="numeric"
            maxLength={2}
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
            }}
          />
          <h6 className=" text-[10px] text-lightRed">
            {(month && month > 12) || (month && month < 1)
              ? "Enter a valid Month"
              : ""}
          </h6>
        </div>
        <div className="flex flex-col gap-y-1 ">
          <label
            className={` font-semibold ${
              errorStateYear && year ? "text-lightRed" : "text-smokeygrey"
            }`}
          >
            Year
          </label>
          <input
            className={`input  ${
              errorStateYear && year
                ? "focus:ring-lightRed  hover:border-lightRed"
                : "focus:ring-purple  hover:border-purple"
            }`}
            placeholder="YYYY"
            type="Number"
            inputMode="numeric"
            maxLength={4}
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
          <h6 className=" text-[10px] text-lightRed">
            {year > currYear ? "Must be in past" : ""}
          </h6>
        </div>
      </div>
      <hr className="h-[1.5px] mt-1 w-[95%] bg-lightgrey"></hr>
      <button className="md:hidden bg-purple p-4 rounded-full divide-x-2 absolute top-[87px] hover:bg-black">
        <img className="w-5" srcSet={icon} />
      </button>
      <button className="hidden md:block bg-purple p-4 rounded-full divide-x-2 absolute top-[82px] right-[0.1px] hover:bg-black">
        <img className="w-5" srcSet={icon} />
      </button>
    </form>
  );
};
