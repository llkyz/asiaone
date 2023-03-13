import quote from "./assets/quote.svg";

export default function ArticleQuote({ data }) {
  return (
    <div className="quoteContainer">
      <img className="quotePortrait" src={require(`${data.image}`)} />
      <img className="quoteMark" src={quote} />
      <p style={{ alignSelf: "center" }}>{data.content.toUpperCase()}</p>
    </div>
  );
}
