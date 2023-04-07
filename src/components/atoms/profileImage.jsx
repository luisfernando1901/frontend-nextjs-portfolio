function ProfileImage({
  width = "100px",
  height = "100px",
  rounded = "full",
  borderWith = "0",
  imgSrc = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
}) {
  return (
    <img
      className={`object-cover object-center rounded-${rounded} border-${borderWith} border-white bg-white`}
      style={{
        width: width,
        height: height,
      }}
      src={imgSrc}
      alt=""
    />
  );
}

export default ProfileImage;
