import { Link } from "gatsby";
import React from "react";

const CtaAreaThree = () => {
  return (
    <section className="cta-area style-three">
      <div
        className="cta-bg"
        style={{ backgroundImage: "url(/assets/img/bg/collection_cta.png" }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="cta__content style-three text-center">
              <img
                src="/assets/img/objects/circle-01.png"
                width="24"
                alt="Object"
                style={{top:"0%",left:"-16%"}}
              />
              <img
                src="/assets/img/objects/x.png"
                width="24"
                alt="Object"
                style={{bottom:"16%",right:"-8%"}}
              />
              <img
                src="/assets/img/objects/ethereum-02.png"
                width="40"
                alt="Object"
                style={{top:"0%",right:"-16%"}}
              />
              <img
                src="/assets/img/objects/bitcoin-01.png"
                width="48"
                alt="Object"
                style={{bottom:"16%",left:"-8%"}}
              />
              <h2 className="title">
                We Bring <span className="tg-text-gradient">creator era 2.0</span>
              </h2>
              <p>The ultimate hub for creators: showcase, monetize, and connect seamlessly at one place</p>
              <Link to="/blog" className="btn gradient-btn">
                Get started <i className="unicon-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaAreaThree
