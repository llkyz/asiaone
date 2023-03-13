export default function ArticleSocial({ data }) {
  return (
    <div className="socialContainer">
      {data.content.map((item) => (
        <>
          <a href={item.link} style={{ margin: "auto 5px" }}>
            <img
              src={require(item.type === "whatsapp"
                ? "./assets/whatsapp_icon.png"
                : item.type === "facebook"
                ? "./assets/facebook_icon.png"
                : item.type === "twitter"
                ? "./assets/twitter_icon.png"
                : "./assets/twitter_icon.png")}
              alt={
                item.type === "whatsapp"
                  ? "whatsapp icon"
                  : item.type === "facebook"
                  ? "facebook icon"
                  : item.type === "twitter"
                  ? "twitter icon"
                  : "unknown icon"
              }
            />
          </a>
        </>
      ))}
    </div>
  );
}
