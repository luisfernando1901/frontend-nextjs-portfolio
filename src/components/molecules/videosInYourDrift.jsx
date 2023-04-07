import { UserProfileContext } from "@/services/contextApi/userProfileContext";
import { useContext } from "react";
import AmountOfVideosText from "../atoms/amountOfVideosText";
import LookForVideosButton from "../atoms/lookForVideosButton";
import VideoMiniatures from "../atoms/videoMiniatures";

function VideosInYourDrift() {
  const { userProfileInfo } = useContext(UserProfileContext);

  return (
    <div className="w-min flex items-center gap-6 rounded-lg bg-black/20 p-1">
      <div className="flex items-center gap-3">
        <VideoMiniatures
          lastThreeVideosList={userProfileInfo.driftVideos.list}
        />
        <AmountOfVideosText number={userProfileInfo.driftVideos.amount} />
      </div>
      <LookForVideosButton />
    </div>
  );
}

export default VideosInYourDrift;
