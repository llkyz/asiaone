export default function ArticleInlineText({ data }) {
  return (
    <div className="inlineTextContainer">
      {data.content.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
}
