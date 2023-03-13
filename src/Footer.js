import { useState, useEffect } from "react";

export default function Footer() {
  const [desktop, setDesktop] = useState(window.innerWidth > 600);

  function updateMedia() {
    setDesktop(window.innerWidth > 600);
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className="footer">
      <div>
        <img src={require("./assets/asiaone_footer.png")} />
        {desktop ? (
          <div className="footerText">
            <p>
              <a href="#">About Us</a> | <a href="#">Advertise With Us</a> |{" "}
              <a href="#">Work With Us</a> | <a href="#">Privacy Statement</a>
            </p>
          </div>
        ) : (
          <div className="footerText">
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">Advertise With Us</a>
            </p>
            <p>
              <a href="#">Work With Us</a>
            </p>
            <p>
              <a href="#">Privacy Statement</a>
            </p>
          </div>
        )}

        <p style={{ fontWeight: "bold" }}>
          <span style={{ color: "#ff6d00" }}>@asiaone 2023</span> Company
          Registration No.: 201815023K
        </p>
      </div>
    </div>
  );
}
