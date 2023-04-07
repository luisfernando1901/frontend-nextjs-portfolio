function VideoMiniatures({
  width = "50px",
  height = "50px",
  lastThreeVideosList = [],
}) {
  return (
    <div className="flex -space-x-6">
      {lastThreeVideosList.map((video) => (
        <img
          key={video.id}
          className="bg-gray-500 rounded-lg border-2 object-cover object-center border-black/90"
          style={{
            width: width,
            height: height,
            minWidth: width,
            minHeight: height,
          }}
          src={video.videoUrl}
          alt=""
        />
      ))}
    </div>
  );
}

export default VideoMiniatures;
