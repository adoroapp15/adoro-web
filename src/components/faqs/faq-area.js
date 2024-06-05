import React from "react";
import SingleFaq from "./single-faq";

// faq items
const faq_items = [
  {
    id: "One",
    title: "How does Adoro work?",
    show: true,
    desc: "Adoro connects creators with brands through our social media platform. Creators can participate in contests or campaigns organized by brands, create content for them, and earn based on the creativity and quality of their work.",
    parent: "accordionFaq",
  },
  {
    id: "Two",
    title: " What types of creators does Adoro support?",
    desc: "Adoro supports all types of content creators, with a special focus on meme creators. We welcome anyone who can produce engaging and creative content.",
    parent: "accordionFaq",
  },
  {
    id: "Three",
    title: " How can I join Adoro as a creator?",
    desc: "You can join Adoro by signing up on our platform through our website or mobile app. Simply create an account and start exploring available opportunities.",
    parent: "accordionFaq",
  },
  {
    id: "Four",
    title: " How do creators make money on Adoro?",
    desc: "Creators make money by participating in brand campaigns and contests. They earn based on the level of creativity and quality of the content they produce for these brands.",
    parent: "accordionFaq",
  },
  {
    id: "Five",
    title: " What are brand campaigns and contests?",
    desc: "Brand campaigns are specific marketing efforts by brands where creators produce content to promote products or services. Contests are competitive events where creators submit their content to win prizes or cash rewards.",
    parent: "accordionFaq",
  },
  {
    id: "Six",
    title: "How can I stay updated on new campaigns and opportunities?",
    desc: "Stay updated by regularly checking the Adoro app or website, subscribing to our newsletter, and following us on social media for the latest news and opportunities.",
    parent: "accordionFaq",
  },
]

const FaqArea = ({spacing,style_2=false}) => {
  return (
    <section className={`faq-area ${style_2?"faq-style-two":""} ${spacing?spacing:"section-py-80"}`}>
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">Asked Questions</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-9 col-lg-10">
            <div
              className="faq__wrapper"
              data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
            >
              <div className="accordion" id="accordionFaq">
                {faq_items.map((item) => (
                  <SingleFaq key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqArea
