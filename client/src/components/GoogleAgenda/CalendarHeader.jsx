import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import GlobalContext from "../../context/GlobalContext";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 md:flex items-center">

      <img src={logo} alt="calendar" className="md:mr-4 md:ml-0 w-32 mx-auto"/>
      <h1 className="md:mr-10 text-xl text-gray-500 fond-bold text-center">
        Calendar
      </h1>


      <div className="flex items-center justify-center">
        <button
          onClick={handleReset}
          className="border rounded py-2 px-4 mr-5 text-gray-800 bg-white"
        >
          Today
        </button>


        <button onClick={handlePrevMonth} className="px-1">
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-4">

            <svg width={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="#737373" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </span>
        </button>

        <button onClick={handleNextMonth} className="px-1">
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-4">
            <svg width={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="#737373" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </span>
        </button>
      </div>

      <h2 className="md:ml-4 text-xl text-gray-500 font-bold text-center">
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>
    </header>
  );
}
