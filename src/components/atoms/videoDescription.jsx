function VideoDescription({ title = "", description = "" }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm">{title}</p>
      <p className="text-xs font-extralight text-white/80">{description}</p>
    </div>
  );
}

export default VideoDescription;
