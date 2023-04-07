import ExternalLink from "@/components/atoms/externalLink";
import ProfileDescription from "@/components/atoms/profileDescription";
import UserInfo from "@/components/molecules/userInfo";
import VideosInYourDrift from "@/components/molecules/videosInYourDrift";
import UserFollowersFollowingAndFriends from "@/components/organisms/userFollowersFollowingAndFriends";
import VideosGallery from "@/components/organisms/videosGallery";
import { UserProfileContext } from "@/services/contextApi/userProfileContext";
import { useContext } from "react";

function UserProfileTemplate() {
  const { userProfileInfo } = useContext(UserProfileContext);

  return (
    <div className="w-full h-full px-6 py-10 bg-black/90 overflow-y-auto">
      <div className="flex flex-col space-y-6">
        <UserInfo />
        <UserFollowersFollowingAndFriends />
        <div className="flex flex-col md:items-center">
          <ProfileDescription text={userProfileInfo.profileDescription} />
          <ExternalLink url={userProfileInfo.socialUrl} />
        </div>
        <div className="flex md:justify-center">
          <VideosInYourDrift />
        </div>
        <VideosGallery videosList={userProfileInfo.videos.list} />
      </div>
    </div>
  );
}

export default UserProfileTemplate;
