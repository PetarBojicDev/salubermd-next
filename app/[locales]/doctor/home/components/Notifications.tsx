import React from "react";
import HomepageCard from "../../../components/HomepageCard";

const Notifications: React.FC = () => {

  return (
    <div className="w-full" style={{height: "75%"}}>
      <div className="block h-full">
        <div className="h-7 inline-flex justify-between w-full">
            <label className="font-bold text-md text-gray">Notifications (7)</label>
            <label className="font-bold text-lg text-blue mr-5"></label>
        </div>
      </div>
      
    </div>
  );
}

export default Notifications;
