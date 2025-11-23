import React from "react";
import ChatBox from "./_components/ChatBox";
import Itenerary from "./_components/Itenerary";

function CreateNewTrip() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
      <div>
        <ChatBox />
      </div>

      <div className="col-span-2">
        <Itenerary />
      </div>

      <div>Map and Trip Itenary</div>
    </div>
  );
}

export default CreateNewTrip;
