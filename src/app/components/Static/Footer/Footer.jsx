import "../../../styles/Footer.scss";

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <div className="logo-and-title">
          <img src="/icons/logo_white.svg" alt="Logo" className="footer-logo" />
          <div className="footer-title">Affaldsguiden</div>
        </div>
        <div className="additional-text">
          <div className="informative-text">
            Vi arbejder for at informere om korrekt <br />
            affaldssortering. Ved at sortere hjælper du os,
            <br /> men også klimaet.
          </div>
          <div className="copyright-text">© 2023 Affaldsguiden</div>
        </div>
      </div>
      <div className="footer-right">
        <a href="#top" className="back-to-top">
          Back to Top <img src="/icons/footerarrow.svg" className="icon" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
