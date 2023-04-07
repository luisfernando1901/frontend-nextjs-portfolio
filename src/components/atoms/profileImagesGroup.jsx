import ProfileImage from "./profileImage";

function ProfileImagesGroup({ lastThreeProfiles = [] }) {
  return (
    <div className="flex -space-x-3">
      {lastThreeProfiles.map((profile, index) => (
        <ProfileImage
          key={index}
          imgSrc={profile.profileImage}
          height="24px"
          width="24px"
          borderWith="2"
          rounded="lg"
        />
      ))}
    </div>
  );
}

export default ProfileImagesGroup;
