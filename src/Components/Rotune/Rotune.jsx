import React, { useState } from "react";

function Rotune() {
  const [routineList, setRoutineList] = useState([]);
  const [routineDetails, setRoutineDetails] = useState({
    day: "",
    subjectName: "",
    class: "",
    section: "",
    Teacher: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setRoutineList([...routineList, routineDetails]);
    setRoutineDetails({
      day: "",
      subjectName: "",
      class: "",
      section: "",
      Teacher: "",
      time: "",
    });
  };

  const handleReset = () => {
    setRoutineDetails({
      day: "",
      subjectName: "",
      class: "",
      section: "",
      Teacher: "",
      time: "",
    });
  };

  const dayList = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const classList = [5, 6, 7, 8, 9, 10, 11, 12];
  const subjectList = [
    "English",
    "Hindi",
    "Maths",
    "Science",
    "Social Science",
  ];
  const secList = ["A", "B", "C"];
  const timeList = [
    "10:30-11:30 am",
    "11:30-12:30 pm",
    "12:30-1:30 pm",
    "1:30-2:30 pm",
    "2:30-3:30 pm",
    "3:30-4:30 pm",
  ];
  const TeacherList = ["Mr. A", "Mr. B", "Mr. C", "Mr. D", "Mr. E"];

  return (
    <div className="w-full h-auto px-10 py-10">
      <p className="text-5xl font-semibold">Routine Board</p>
      <div className="w-full h-auto flex flex-row gap-10 mt-10">
        {/* Left Side - Form */}
        <div className="w-1/3 bg-slate-300 p-10 rounded-lg">
          <p className="text-4xl font-semibold">Create A Routine</p>
          <form className="w-[85%]" onSubmit={handleSubmit}>
            <p className="mt-5 text-xl mb-2">Select Day</p>
            <select
              value={routineDetails.day}
              onChange={(e) =>
                setRoutineDetails({ ...routineDetails, day: e.target.value })
              }
              className="w-full px-4 py-4 rounded-lg"
            >
              <option value="">Select Day</option>
              {dayList.map((day) => (
                <option value={day}>{day}</option>
              ))}
            </select>
            <p className="mt-5 text-xl mb-2">select Subject</p>
            <select
              value={routineDetails.subjectName}
              onChange={(e) =>
                setRoutineDetails({
                  ...routineDetails,
                  subjectName: e.target.value,
                })
              }
              className="w-full px-4 py-4 rounded-lg"
            >
              <option value="">select Subject</option>
              {subjectList.map((subject) => (
                <option value={subject}>{subject}</option>
              ))}
            </select>
            <p className="mt-5 text-xl mb-2">select Class</p>
            <select
              value={routineDetails.class}
              onChange={(e) =>
                setRoutineDetails({ ...routineDetails, class: e.target.value })
              }
              className="w-full px-4 py-4 rounded-lg"
            >
              <option value="">select Class</option>
              {classList.map((cls) => (
                <option value={cls}>{cls}</option>
              ))}
            </select>
            <p className="mt-5 text-xl mb-2">select Section</p>
            <select
              value={routineDetails.section}
              onChange={(e) =>
                setRoutineDetails({
                  ...routineDetails,
                  section: e.target.value,
                })
              }
              className="w-full px-4 py-4 rounded-lg"
            >
              <option value="">select Section</option>
              {secList.map((sec) => (
                <option value={sec}>{sec}</option>
              ))}
            </select>
            <p className="mt-5 text-xl mb-2">select Teacher</p>
            <select
              value={routineDetails.Teacher}
              onChange={(e) =>
                setRoutineDetails({
                  ...routineDetails,
                  Teacher: e.target.value,
                })
              }
              className="w-full px-4 py-4 rounded-lg"
            >
              <option value="">select Teacher</option>
              {TeacherList.map((teacher) => (
                <option value={teacher}>{teacher}</option>
              ))}
            </select>
            <p className="mt-5 text-xl mb-2">select Time</p>
            <select
              value={routineDetails.time}
              onChange={(e) =>
                setRoutineDetails({ ...routineDetails, time: e.target.value })
              }
              className="w-full px-4 py-4 rounded-lg"
            >
              <option value="">select Time</option>
              {timeList.map((time) => (
                <option value={time}>{time}</option>
              ))}
            </select>
            <div className="w-full flex gap-10 flex-row mt-10 text-white">
              <button
                type="submit"
                className="px-10 text-2xl font-semibold py-2 bg-yellow-600 rounded-lg cursor-pointer"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-10 text-2xl font-semibold py-2 bg-blue-950 rounded-lg cursor-pointer"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Table */}
        <div className="w-2/3 bg-slate-300 p-10 rounded-lg">
          <p className="text-4xl font-semibold">Routine Board</p>
          <div className="mt-5">
            <table className="w-full border-collapse border border-gray-500">
              <thead>
                <tr className="bg-gray-400">
                  <th className="px-4 py-2">Day</th>
                  <th className="px-4 py-2">Subject</th>
                  <th className="px-4 py-2">Class</th>
                  <th className="px-4 py-2">Section</th>
                  <th className="px-4 py-2">Teacher</th>
                  <th className="px-4 py-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {routineList.length > 0 ? (
                  routineList.map((routineList, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-gray-500 text-center bg-white border-t-[3px] ${
                        index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
                      }`}
                    >
                      <td className=" px-4 py-2">{routineList.day}</td>
                      <td className=" px-4 py-2">{routineList.subjectName}</td>
                      <td className=" px-4 py-2">{routineList.class}</td>
                      <td className=" px-4 py-2">{routineList.section}</td>
                      <td className=" px-4 py-2">{routineList.teacher}</td>
                      <td className=" px-4 py-2">{routineList.time}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center p-4">
                      No subjects added yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rotune;
