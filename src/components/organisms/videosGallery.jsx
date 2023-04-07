import VideoCard from "../molecules/videoCard";

function VideosGallery({ videosList = [] }) {
  return (
    <div className="w-full flex gap-5 overflow-x-scroll">
      {videosList.map((video) => (
        <VideoCard
          key={video.id}
          title={video.title}
          description={video.description}
          views={video.views.amount}
          bgVideoSrc={video.videoUrl}
          isPublic={video.public}
          lastThreeProfiles={video.views.list}
        />
      ))}
    </div>
  );
}

export default VideosGallery;
