function AmountOfVideosText({ number = 0 }) {
  return (
    <div className="w-20 flex flex-col text-xs text-white/60">
      <p>{number} Videos</p>
      <p>In Your Drift</p>
    </div>
  );
}

export default AmountOfVideosText;
