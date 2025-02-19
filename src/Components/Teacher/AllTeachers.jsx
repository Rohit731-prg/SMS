import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Link } from "react-router";
import { useSelector } from "react-redux";

function AllTeachers() {
    const [searchID, setSearchID] = useState("");
    const [searchName, setSearchName] = useState("");
    const [searchPhone, setSearchPhone] = useState("");

    const handleSearch = () => {
        
    }
  const teacherList = useSelector((state) => state.Teacher.value);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Header />
        <div className="flex flex-col w-full p-10 bg-gray-50 h-screen">
          <p className="text-3xl font-semibold">Teachers</p>
          <div className="flex justify-start gap-2 flex-row mt-5 mb-10">
            <Link to="/dashboard">Home</Link>
            <p>{">"}</p>
            <Link to="">Teacher</Link>
          </div>
          <div className="">
            <p className="py-5 text-white px-10 text-2xl font-semibold bg-blue-500 rounded-t-lg">
              All Teachers
            </p>
          </div>
          <div className="p-10 bg-white rounded-b-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <input
                type="text"
                placeholder="Search by ID ..."
                value={searchID}
                onchange={(e) => setSearchID(e.target.value)}
                className="border rounded-md px-3 py-2"
              />
              <input
                type="text"
                placeholder="Search by Name ..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="border rounded-md px-3 py-2"
              />
              <input
                type="text"
                placeholder="Search by Phone ..."
                value={searchPhone}
                onChange={(e) => setSearchPhone(e.target.value)}
                className="border rounded-md px-3 py-2"
              />
              <button
                onClick={handleSearch}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 flex items-center justify-center"
              >
                SEARCH
              </button>
            </div>

            <table className="min-w-full divide-y divide-gray-200 mt-2">
              <tr className="bg-gray-50">
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Gender</th>
                <th className="p-3">Date of Birth</th>
                <th className="p-3">Blood Group</th>
                <th className="p-3">Religion</th>
                <th className="p-3">Address</th>
                <th className="p-3">Phone</th>
                <th className="p-3">E-mail</th>
              </tr>

              {teacherList.map((teacher, index) => (
                <tr
                  className="bg-white divide-y divide-gray-200 text-center"
                  key={index}
                >
                  <td className="p-3">{teacher.id}</td>
                  <td className="p-3">{teacher.name}</td>
                  <td className="p-3">{teacher.gender}</td>
                  <td className="p-3">{teacher.dateOfBirth}</td>
                  <td className="p-3">{teacher.bloodGroup}</td>
                  <td className="p-3">{teacher.religion}</td>
                  <td className="p-3">{teacher.address}</td>
                  <td className="p-3">{teacher.phone}</td>
                  <td className="p-3">{teacher.email}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTeachers;
