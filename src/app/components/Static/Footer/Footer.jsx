import '../../../styles/Footer.scss';

const Footer = () => (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo-and-title">
            <img src="/logo.svg" alt="Logo" className="footer-logo" />
            <div className="footer-title">Affaldsguiden</div>
          </div>
          <div className="additional-text">
            <div>Vi arbejder for at informere om korrekt <br />affaldssortering. Ved at sortere hjælper du os,<br /> men også klimaet.</div>
            <div>© 2023</div>
          </div>
        </div>
        <div className="footer-right">
          <a href="#top" className="back-to-top">Back to Top</a>
        </div>
      </div>
    </div>
  );
  
  export default Footer;