import React, { useState } from "react";

function Notice() {
  const [noticeList, setNoticeList] = useState([]);
  const [noticeDetails, setNoticeDetails] = useState({
    title: "",
    details: "",
    postedBy: "",
    Date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setNoticeList([...noticeList, noticeDetails]);
    setNoticeDetails({
      // Reset form after submission
      title: "",
      details: "",
      postedBy: "",
      Date: new Date().toISOString().split("T")[0],
    });
  };

  const handleReset = () => {
    setNoticeDetails({
      title: "",
      details: "",
      postedBy: "",
      Date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className="w-full h-auto px-10 py-10">
      <p className="text-5xl font-semibold">Notice Board</p>
      <div className="w-full h-auto flex flex-row gap-10 mt-10">
        {/* Left Side - Form */}
        <div className="w-1/3 bg-slate-300 p-10 rounded-lg">
          <p className="text-4xl font-semibold">Create A Notice</p>
          <form className="w-[85%]" onSubmit={handleSubmit}>
            <p className="mt-5 text-xl mb-2">Title</p>
            <input
              value={noticeDetails.title}
              onChange={(e) =>
                setNoticeDetails({
                  ...noticeDetails,
                  title: e.target.value,
                })
              }
              placeholder="Enter Title"
              className="w-full px-4 py-4 rounded-lg"
              type="text"
              required
            />
            <p className="mt-5 text-xl mb-2">Details</p>
            <input
              value={noticeDetails.details}
              onChange={(e) =>
                setNoticeDetails({
                  ...noticeDetails,
                  details: e.target.value,
                })
              }
              placeholder="Enter Details"
              className="w-full px-4 py-4 rounded-lg"
              type="text"
              required
            />
            <p className="mt-5 text-xl mb-2">Posted By</p>
            <input
              value={noticeDetails.postedBy}
              onChange={(e) =>
                setNoticeDetails({
                  ...noticeDetails,
                  postedBy: e.target.value,
                })
              }
              placeholder="Enter Name"
              className="w-full px-4 py-4 rounded-lg"
              type="text"
              required
            />
            <p className="mt-5 text-xl mb-2">Date</p>
            <input
              value={noticeDetails.Date}
              onChange={(e) =>
                setNoticeDetails({
                  ...noticeDetails,
                  Date: e.target.value,
                })
              }
              className="w-full px-4 py-4 rounded-lg"
              type="date"
              required
            />
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
          <p className="text-4xl font-semibold">Notice Board</p>
          <div className="mt-5">
            {noticeList.length > 0 ? (
              noticeList.map((notice, index) => (
                <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-md">
                    <p className="text-lg text-white bg-pink-600 font-semibold px-5 mb-3 py-2 rounded-full inline-block">{notice.Date}</p>
                    <p className="text-2xl font-semibold">{notice.title}</p>
                    <p className="text-lg">{notice.details}</p>
                    <p><strong>Posted By:</strong> {notice.postedBy}</p>
                </div>
              ))
            ) : (
              <p className="text-xl text-gray-600">No notices posted yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notice;
