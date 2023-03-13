export default function ArticleTextLarge({ data }) {
  return (
    <div className="textLargeContainer" id={data.link ?? ""}>
      {data.content.toUpperCase()}
    </div>
  );
}
