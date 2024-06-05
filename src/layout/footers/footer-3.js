import { Link } from "gatsby"
import React from "react"
import { animateScroll as scroll } from "react-scroll"

// handle scroll to top
const handleScrollToTop = () => {
  scroll.scrollToTop()
}
function redirectToLink(event, url) {
  event.preventDefault();
  window.location.href = url;
}


const FooterThree = () => {
  return (
    <footer className="footer-area footer-style-default">
      <div className="footer__top-wrapper">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="logo footer-logo">
                  <Link to="/" className="light-logo">
                    <img src="/assets/img/logo/adoro.png" alt="Adoro" />
                  </Link>
                  <Link to="/" className="dark-logo">
                    <img src="/assets/img/logo/adoro.png" alt="Adoro" />
                  </Link>
                </div>
                <div className="footer__info-content">
                  <p>
                  the ultimate platform for creators to showcase their talents, monetize their content, and connect with a supportive community of like-minded individuals. Join us today and unlock your full potential as a creator!
                  </p>
                  <div className="footer__info-social">
                    <a 
                    
                    href="#"
                    onClick={(e) =>
                      redirectToLink(
                        e,
                        "https://twitter.com/adorocreators?t=Hj0FpXJSvmsPsRCdmQWhBw&s=09"
                      )
                    }
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a 
                    href="#"
                    onClick={(e) =>
                      redirectToLink(
                        e,
                        "https://www.reddit.com/r/adoro_creators/s/l26l0JC5BI"
                      )
                    }
                    >
                      <i className="fab fa-reddit"></i>
                    </a>
                    <a
                     href="#"
                     onClick={(e) =>
                      redirectToLink(
                        e,
                        "https://instagram.com/adorocreators?igshid=MzRlODBiNWFlZA=="
                      )
                    }
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6"></div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget">
                <h4 className="fw-title">Quick Link</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Collection</a>
                  </li>
                  <li>
                    <a href="#">Roadmap</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h4 className="fw-title">Community</h4>
                <ul>
                  <li>
                    <a href="#">How it works!</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Get in touch</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__wrapper-default">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="copyright__text">
                <p>
                  &copy; {new Date().getFullYear()} Adoro. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="copyright__menu">
                <ul className="list-wrap">
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of use</a>
                  </li>
                  <li className="backTop">
                    <button
                      onClick={handleScrollToTop}
                      style={{ background: "transparent", border: "none" }}
                      className="scroll-to-target"
                      data-target="html"
                    >
                      <i className="flaticon-arrowhead-up"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterThree
