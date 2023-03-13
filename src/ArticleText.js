export default function ArticleText({ data }) {
  return (
    <div className="textContainer">
      {data.content.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
}
