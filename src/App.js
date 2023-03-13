import "./App.css";
import { useState } from "react";
import article from "./articles/article1.json";
import ArticleFooter from "./ArticleFooter";
import ArticleInlineImage from "./ArticleInlineImage";
import ArticleInlineText from "./ArticleInlineText";
import ArticleQuote from "./ArticleQuote";
import ArticleSocial from "./ArticleSocial";
import ArticleSplash from "./ArticleSplash";
import ArticleSubheader from "./ArticleSubheader";
import ArticleText from "./ArticleText";
import ArticleTextLarge from "./ArticleTextLarge";
import Footer from "./Footer";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <header>
        <img src={require(`${article.header.image}`)} alt="splash" />
        <a href="https://www.asiaone.com">
          <img
            className="asiaonelogo"
            src={require("./assets/asiaone.png")}
            alt="asiaonelogo"
          />
        </a>
        <img
          className="menu"
          src={require("./assets/hamburger.png")}
          alt="menu"
          onClick={() => {
            setShowMenu(true);
          }}
        />
        <div className="headerContent">
          <div className="headerContentContainer">
            {article.header.icon ? (
              <img
                className="icon"
                src={require(`${article.header.icon}`)}
                alt="headericon"
              />
            ) : (
              ""
            )}
            <h1>{article.header.content}</h1>
          </div>
          {showMenu ? (
            <div className="headerMenu">
              <img
                className="closeMenu"
                src={require("./assets/cross.png")}
                alt="closemenu"
                onClick={() => {
                  setShowMenu(false);
                }}
              />
              <div className="headerMenuContent">
                {article.bookmarks.map((data, index) => (
                  <>
                    <a
                      href={data.link}
                      onClick={() => {
                        setShowMenu(false);
                      }}
                    >
                      {data.text}
                    </a>
                    {index + 1 !== article.bookmarks.length ? (
                      <div className="menuSeparator" />
                    ) : (
                      ""
                    )}
                  </>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
      <div className="skirting" />
      <div>
        {article.content.map((data) =>
          data.type === "text" ? (
            <ArticleText data={data} />
          ) : data.type === "text-large" ? (
            <ArticleTextLarge data={data} />
          ) : data.type === "quote" ? (
            <ArticleQuote data={data} />
          ) : data.type === "subheader" ? (
            <ArticleSubheader data={data} />
          ) : data.type === "inline-image" ? (
            <ArticleInlineImage data={data} />
          ) : data.type === "inline-text" ? (
            <ArticleInlineText data={data} />
          ) : data.type === "splash" ? (
            <ArticleSplash data={data} />
          ) : data.type === "footer" ? (
            <ArticleFooter data={data} />
          ) : data.type === "social" ? (
            <ArticleSocial data={data} />
          ) : (
            ""
          )
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
