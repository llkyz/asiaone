export default function ArticleSubheader({ data }) {
  return (
    <div className="subheaderContainer" id={data.link ?? ""}>
      {data.content}
    </div>
  );
}
