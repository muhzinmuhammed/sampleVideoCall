import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    const appID = 26563277
    const serverSecret = "617e84c3e34c9056fdec8038414a1ee5";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "muhzin sidhiq"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
        container:element,
        scenario:{
            mode:ZegoUIKitPrebuilt.VideoConference
        }
    })
  };

  return <div className="room-page">
    <div ref={myMeeting}/>
  </div>;
};

export default Room;
