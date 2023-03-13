export default function ArticleSplash({ data }) {
  return (
    <div className="splashContainer">
      <img src={require(`${data.image}`)} />
      {data.content ? (
        <div className="splashHeader">
          <div className="splashHeaderText">{data.content}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
