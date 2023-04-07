function ExternalLink({ url = "" }) {
  return (
    <a className="text-sm font-light text-blue-400" href={url}>
      {url}
    </a>
  );
}

export default ExternalLink;
