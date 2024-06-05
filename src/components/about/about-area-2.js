import React from "react"

// about box
function AboutBox({ about_img, sub_title, title, content_1, content_2 }) {
  const link = "https://www.adoro.social/Apk/app-release.apk";
  const handleDownload = async (e, link) => {
    const confirmed = window.confirm('We noticed you were about to download our APK. Rest assured, this APK is safe and secure. If your download doesnot start automatically, click the button below 🫶🏻');
    if (confirmed) {
      redirectToLink(e, link);
    }
  };
  function redirectToLink(event, url) {
    event.preventDefault();
    window.location.href = url;
  }
  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div
          className="about__img"
          data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
        >
          <img src={`/assets/img/others/${about_img}`} alt="img" />
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="about__content"
          data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
        >
          <div className="section__title text-start">
            <span className="sub-title tg-text-gradient">{sub_title}.</span>
            <h2 className="title">{title}</h2>
          </div>
          <p>{content_1}</p>
          <p>{content_2}</p>
          <div className="about__content-text-btn">
            <a 
            href="#"
            onClick={(e) => 
              handleDownload(e,link)}
            >
              <span>Get Started</span>
              <i className="unicon-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const AboutAreaTwo = () => {
  return (
    <section
      id="about"
      className="about-area about-style-two section-pt-70 section-pb-80"
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">
                How it <span className="tg-text-gradient">works!</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="about__row-reverse">
          <AboutBox
            about_img="features-07.png"
            sub_title="01"
            title="Create adoro creator account"
            content_1="Kickstart your Adoro journey: Create your creator account, explore trending feeds, connect with fellow creators, access thousands of meme templates, and stay updated on viral trends for maximum engagement."
          />
          <AboutBox
            about_img="features-05.png"
            sub_title="02"
            title="Participate in Brand Campaign and Contests"
            content_1="Get paid to be awesome on Adoro! Earn rewards, dive into Brand campaigns, and network with top brands. It's like making money with your creativity while sipping virtual cocktails with famous logos."
          />
          <AboutBox
            about_img="features-06.png"
            sub_title="03"
            title="Build a green, growing career path."
            content_1=" Where teamwork makes the dream work! Join a sustainable community of creators, grow together, and cultivate talents. Develop a green income source while nurturing a supportive ecosystem for long-term success"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutAreaTwo
