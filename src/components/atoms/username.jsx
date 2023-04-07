import { HiBadgeCheck } from "react-icons/hi";

function Username({ name = "Luis Nestares" }) {
  return (
    <div className="flex gap-2 items-center">
      <p className="text-2xl font-semibold tracking-wide text-white">{name}</p>
      <HiBadgeCheck size={30} color={"#71c55b"} />
    </div>
  );
}

export default Username;
