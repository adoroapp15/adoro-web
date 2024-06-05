import React from "react"
import { SingleBrand } from "./home-brands";

const BrandThree = () => {
  return (
    <div
      className="brand-area section-pt-30 section-pb-65"
      data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-12">
            <div className="brand__list">
            <img
        src="/assets/img/logo/mini.png"
        width="100"

      />
       <img
        src="/assets/img/logo/jiostudio.png"
        width="100"
      />
       <img
        src="/assets/img/logo/citron.png"
        width="100"
      />
       <img
        src="/assets/img/logo/prime.png"
        width="100"
      />
       <img
        src="/assets/img/logo/hotstar.png"
        width="120"
      />
        <img
        src="/assets/img/logo/stargold.png"
        width="100"
      />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandThree
