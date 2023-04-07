import AmountText from "../atoms/amountText";
import ProfileImagesGroup from "../atoms/profileImagesGroup";
import PublicOrPrivateButton from "../atoms/publicOrPrivateButton";
import VideoDescription from "../atoms/videoDescription";

function VideoCard({
  bgVideoSrc = "",
  views = "",
  title = "",
  description = "",
  isPublic = false,
  lastThreeProfiles = [],
}) {
  return (
    <div
      className="flex flex-col rounded-xl bg-white bg-cover bg-cemter bg-no-repeat"
      style={{
        height: "252px",
        width: "252px",
        minHeight: "252px",
        minWidth: "252px",
        backgroundImage: `url(${bgVideoSrc})`,
      }}
    >
      <div className="w-full h-full rounded-xl flex flex-col bg-black/40 text-white justify-between p-5">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-2">
            <ProfileImagesGroup lastThreeProfiles={lastThreeProfiles} />
            <AmountText number={views} />
          </div>
          <PublicOrPrivateButton isPublic={isPublic} />
        </div>
        <VideoDescription title={title} description={description} />
      </div>
    </div>
  );
}

export default VideoCard;
