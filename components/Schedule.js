import React from "react";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

const Schedule = () => {
  return (
    <div className="schedule-card">
      <div className="schedule-card_head">
        <div className="schedule-head">
          <h3>Today's Schedule</h3>
        </div>
        <div className="see-more">
          <span>See All</span>
          <NavigateNextOutlinedIcon />
        </div>
      </div>
      <div className="schedule-card_body">
        <p>Meeting with suppliers from Kuts Bali</p>
        <p>14:00 - 15:00</p>
        <p>at Sunset Road , Kuts Bali</p>
      </div>
      <div className="schedule-card_body">
        <p>Check Operations for Giga Factory 1</p>
        <p>18:00 - 20:00</p>
        <p>at Central Jakarta</p>
      </div>
    </div>
  );
};

export default Schedule;
