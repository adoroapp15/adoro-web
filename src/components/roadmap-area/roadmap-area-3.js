import React from "react"

// road map data
const road_map_data = [
  {
    step: 1,
    // percent: 0,
    heading: "Super Easy Content Creation Tool",
    desc: "Create stunning content effortlessly with our intuitive tools designed for all skill levels. Transform your ideas into reality in just a few clicks.",
    lists: ["User-friendly interface perfect for beginners and experts alike.",
    "Advanced editing features to enhance your creativity.",
    "Quick and easy integration with social media platforms."],
  },
  {
    step: 2,
    // percent: 25,
    heading: "Largest Template Library",
    desc:"Access the world's largest library of meme templates. Find the perfect template for any occasion and elevate your creative projects instantly.",
    lists: ["Thousands of templates across various categories.",
    "Regularly updated with trending designs and themes.",
    "Customizable options to personalize your content."],
  },
  {
    step: 3,
    // percent: 50,
    heading: "OG Content Marketplace",
    desc:"Showcase and sell your original content in our vibrant marketplace. Reach a global audience and monetize your unique creations.",
    lists: ["Exposure to millions of potential buyers.",
     "Secure transactions and fair pricing.",
     "Build a portfolio and establish your brand."],
  },
  {
    step: 4,
    // percent: 75,
    heading: "Campaign Section to Monetize Content",
    desc:"Participate in brand campaigns and monetize your creativity. Get paid for creating content that aligns with current marketing trends and brand needs.",
    lists: [  "Collaborate with top brands on exciting projects.",
    "Earn competitive payouts for your work.",
     "Boost your visibility and grow your audience."],
  },
  {
    step: 5,
    // percent: 95,
    heading: "Royalty Earning Model",
    desc:"Earn royalties on your content with our innovative model. Enjoy a continuous income stream as your work gains popularity and reaches new audiences.",
    lists: ["Passive income opportunities from your creations.",
    "Fair and transparent royalty distribution.",
    "Track earnings and performance with detailed analytics."],
  },
  {
    step: 6,
    // percent: 100,
    heading: "Wallet for Easy Withdrawal of Money",
    desc:"Manage your earnings effortlessly with our integrated wallet. Withdraw your funds quickly and securely whenever you need them.",
    lists: ["Instant access to your funds anytime, anywhere.",
     "Multiple withdrawal options for convenience.",
    "Secure and encrypted transactions for peace of mind."],
  },
]

const RoadMapAreaThree = () => {
  return (
    <section
      id="roadmap"
      className="roadmap-area roadmap-style-three section-pt-70 section-pb-30"
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">
                Adoro <span className="tg-text-gradient">Roadmap</span>
              </h2>
            </div>
          </div>
        </div>
        <div
          className="roadmap__wrapper-three"
          data-anime="targets: > * > * > *; opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: anime.stagger(100);"
        >
          <div className="row justify-content-center">
            {road_map_data.map(item => (
            <div key={item.step} className="col-lg-4 col-md-6 col-sm-9">
              <div className="roadmap__card style-three">
                {/* <div className="roadmap__percent">
                  <span>{item.percent}</span>%
                </div> */}
                <div className="roadmap__step">
                  <span className="tg-text-gradient d-inline-flex">
                    Phase {item.step < 10 ? `0${item.step}` : item.step}
                  </span>
                </div>
                <h3 className="roadmap__heading">{item.heading}</h3>
                <p>
                  {item.desc}
                </p>
                <ul className="roadmap__lists list-wrap">
                  {item.lists.map((l,i) => (
                  <li key={i}>
                    <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>
                    {l}
                  </li>
                  ))}
                </ul>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMapAreaThree
