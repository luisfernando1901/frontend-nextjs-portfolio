import AmountText from "../atoms/amountText";
import NetworkTypeText from "../atoms/networkTypeText";
import ProfileImagesGroup from "../atoms/profileImagesGroup";

function UserNetwork({
  number = "3M",
  networkType = "-",
  lastThreeProfiles = [],
}) {
  return (
    <div className="flex flex-col justify-center text-center gap-3">
      <div className="flex flex-row items-center gap-2">
        <ProfileImagesGroup lastThreeProfiles={lastThreeProfiles} />
        <AmountText number={number} />
      </div>
      <NetworkTypeText type={networkType} />
    </div>
  );
}

export default UserNetwork;
