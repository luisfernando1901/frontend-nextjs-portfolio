import { UserProfileContext } from "@/services/contextApi/userProfileContext";
import { useContext } from "react";
import UserNetwork from "../molecules/userNetwork";

function UserFollowersFollowingAndFriends() {
  const { userProfileInfo } = useContext(UserProfileContext);

  return (
    <div className="flex justify-between md:justify-center md:gap-8">
      <UserNetwork
        number={userProfileInfo.following.amount}
        networkType="Following"
        lastThreeProfiles={userProfileInfo.following.list}
      />
      <UserNetwork
        number={userProfileInfo.followers.amount}
        networkType="Followers"
        lastThreeProfiles={userProfileInfo.followers.list}
      />
      <UserNetwork
        number={userProfileInfo.closeFriends.amount}
        networkType="Close Friends"
        lastThreeProfiles={userProfileInfo.closeFriends.list}
      />
    </div>
  );
}

export default UserFollowersFollowingAndFriends;
