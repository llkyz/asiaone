export default function ArticleInlineImage({ data }) {
  return (
    <div className="inlineImageContainer">
      <img src={require(`${data.image}`)} />
    </div>
  );
}
