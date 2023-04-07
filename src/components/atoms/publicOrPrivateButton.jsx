function PublicOrPrivateButton({ isPublic = true }) {
  return isPublic ? (
    <button className="text-sm font-light text-yellow-500 bg-black/60 rounded-lg px-3 py-2">
      Public
    </button>
  ) : (
    <button className="text-sm font-light text-white/80 bg-yellow-500 rounded-lg px-3 py-2">
      Private
    </button>
  );
}

export default PublicOrPrivateButton;
