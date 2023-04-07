import { UserProfileContext } from "@/services/contextApi/userProfileContext";
import { useContext } from "react";
import ProfileImage from "../atoms/profileImage";
import Username from "../atoms/username";
import Usernick from "../atoms/usernick";

function UserInfo() {
  const { userProfileInfo } = useContext(UserProfileContext);

  return (
    <div className="flex flex-col items-center text-center gap-6">
      <ProfileImage imgSrc={userProfileInfo.profileImage} />
      <div className="flex flex-col gap-1">
        <Username name={userProfileInfo.name} />
        <Usernick nickname={userProfileInfo.nickname} />
      </div>
    </div>
  );
}

export default UserInfo;
