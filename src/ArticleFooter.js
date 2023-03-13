export default function ArticleFooter({ data }) {
  return (
    <div className="articleFooterContainer">
      <img src={require(`${data.image}`)} />
      {data.content ? (
        <div className="articleFooterText">
          <div>{data.content}</div>
          {data.link ? (
            <a href={data.link}>
              <div className="articleFooterLink">Click here</div>
            </a>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
