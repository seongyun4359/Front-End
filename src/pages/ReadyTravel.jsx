import React, { useState } from "react";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import questionIcon from "../imgs/question.png";
import "../index.css";

import { useNavigate } from "react-router-dom";

const ReadyTravel = () => {
  const [date, setDate] = useState(new Date());

  const formatDay = (locale, date) => {
    return date.getDate(); // 날짜에서 숫자만 반환
  };

  const navigate = useNavigate();
  const NextStepPopup = () => {
    navigate("/lodging");
  };

  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="flex-grow  p-4 mt-20">
      <div className="flex items-center relative">
        <h1 className="text-sm mb-4 text-center"><b>여행 기간을 선택해주세요.</b></h1>
        <div className="tooltip-icon ml-2">
                  <img src={questionIcon} alt="Question" className="w-6 h-6" />
                  <div className="tooltip-text -mt-2 -ml-16 w-72">
                  STEP 2는 여행에 있어 중요한 요소인 여행 기간을 선정하는 단계입니다. 여행 기간을 선정해주세요.
                  </div>
                </div>
                </div>  
        <div className="flex justify-center space-x-8">
          <Calendar
            onChange={setDate}
            value={date}
            selectRange={true}
            showDoubleView={true}
            className="p-4 custom-calendar"
            formatDay={formatDay}
          />
        </div>
        <div className="flex justify-end w-[75%] mt-4">
          <button
            className="bg-[#DEF8FF] text-[12px] font-bold px-4 py-2 rounded-xl"
            onClick={NextStepPopup}
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadyTravel;
