import Head from "next/head";
import Image from "next/image";
import "aos/dist/aos.css"; // Import the AOS CSS
import AOS from "aos";

import DOMPurify from "dompurify";
import styles from "@/styles/home.module.css";
import imagePng1 from "../public/personalityLogo.png";
import imagePng2 from "../public/celeb2.png";
import imagePng3 from "../public/celeb3.png";
import imagePng4 from "../public/celeb4.png";
import imagePng5 from "../public/celeb5.png";
import imagePng6 from "../public/celeb6.png";
import imagePng7 from "../public/celeb7.png";
import imagePng8 from "../public/celeb8.png";
import imagePng9 from "../public/celeb9.png";
import videoLogo from "../public/videoLogo.png";
import transform1 from "../public/transform1.png";
import transform2 from "../public/transform2.png";
import transform3 from "../public/transorfm3.png";
import blueUpSign from "../public/blueUpSign.png";
import mobileTransFormLogo from "../public/MobileLogoTRANSFORM.png";
import blueDownSign from "../public/blueDownSign.png";
import whiteDownSign from "../public/whiteDownSign.png";
import whiteUpSign from "../public/whiteUpSign.png";
import playBtn from "../public/playBtn.png";
import parse from "html-react-parser";
import collage from "../public/collageImage.png";
import mainBanner from "../public/paper.jpg";
import bannerReal from "../public/bannerReal.jpg";
// import bgVideo from "../public/bgVideo.mp4";

import transform4 from "../public/transform4.png";

import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";

import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

//
import cardLogo1 from "../public/cardImage1.png";
import cardLogo2 from "../public/cardImage2.png";
import cardLogo3 from "../public/cardImage3.png";
import cardLogo4 from "../public/cardImage4.png";
import poshLogo from "../public/poshLogo.png";
import mapie from "../public/mapeiLogo.png";
import infraLogo from "../public/infrabuild-logo.png";
import eventImage1 from "../public/eventImage1.png";
import eventImage2 from "../public/eventImage2.png";
import eventImage3 from "../public/eventImage3.png";
import eventImage4 from "../public/eventImage4.png";
import eventImage5 from "../public/eventImage5.png";
import eventImage6 from "../public/eventImage6.png";
import eventImage7 from "../public/eventImage7.png";
import eventImage8 from "../public/eventImage8.png";
import footerLogo from "../public/footerLogo.png";
import logo2024 from "../public/transform2024.png";
import axios from "axios";
import { useEffect, useState } from "react";

import icon1 from "../public/icon1.jpeg";
import icon2 from "../public/icon2.png";

// const serverUrl = "https://transform-service.evma.in";

const serverUrl = "https://service.gbcatransform.org.au";

export async function getServerSideProps() {
  try {
    const res = await axios.get(serverUrl + "/getAllWebsiteContent");
    const data = res.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
      },
    };
  }
}

export default function Home({ data }) {
  const dayLists = data.websiteContentObj.agendaDayList;

  const defaultData = dayLists[0].label;

  // const defaultDayId = dayLists.find((day) => day.label === "Day 1")._id;

  const defaultDayId = dayLists.find((day) => day.label === defaultData)._id;

  const [videoPg, setVideoPg] = useState(false);
  const agendaList = data.websiteContentObj.agendaList;

  const [showMenuBar, setShowMenuBar] = useState(false);
  const [selectedDayId, setSelectedDayId] = useState(defaultDayId);
  const [showAll, setShowAll] = useState(false);
  const [agendaShowAll, setAgendaShowAll] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [startX2, setStartX2] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);

  const [speakerFullDetail, setSpeakerFullDetails] = useState(null);

  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);
  const [showText5, setShowText5] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openBox, setOpenBox] = useState(false);

  const [videoClicked, setVideoClicked] = useState(false);

  const [viewGlancePopup, setViewPopUpGlance] = useState(false);

  const [speakerTiming, setSpeakerTiming] = useState(null);

  const handelMenuBar = () => {
    setShowMenuBar(false);
  };
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDivClick = () => {
    setShowText(!showText);
  };

  const handleDivClick2 = () => {
    setShowText2(!showText2);
  };

  const handleDivClick3 = () => {
    setShowText3(!showText3);
  };

  const handleDivClick4 = () => {
    setShowText4(!showText4);
  };

  const handleDivClick5 = () => {
    setShowText5(!showText5);
  };

  const speakerList = data.websiteContentObj.speakerList;
  const aboutData = data.websiteContentObj.aboutData;
  const agendaListData = data.websiteContentObj.agendaList;

  const sustainabilityData =
    data.websiteContentObj.sustainabilityData.sustainabilityList;

  const whatToExpectData =
    data.websiteContentObj.whatToExpectData.whatToExpectList;
  const partnerData = data.websiteContentObj.partnerData.goldPartnerList;
  const partnerDataSilver =
    data.websiteContentObj.partnerData.silverPartnerList;
  const galleryData = data.websiteContentObj.galleryData.galleryImage;
  const partnerDataDrinks = data.websiteContentObj.partnerData.drinkPartnerList;

  const partnerDataProduction =
    data.websiteContentObj.partnerData.productionPartnerList;
  const partnerDataMedia = data.websiteContentObj.partnerData.mediaPartnerList;
  const bookNowUrl = data.websiteContentObj.homeData.bookNowUrl;
  const scrollingBanner = data.websiteContentObj.homeData.scrollingBanner;
  const discription = data.websiteContentObj.aboutData.discription;
  const testimonialList = data.websiteContentObj.testimonialList;

  const ticketList = data.websiteContentObj.ticketList;

  const transFormMobile = data.websiteContentObj.homeData.logoImage;

  const enquiryPartner =
    data.websiteContentObj.partnerData.enquireResult.enquirePartnerLink;

  console.log(data.websiteContentObj); //For Referencing the websiteContentObj --> SHADMAN

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 200,
      once: true,
    });
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const visibleSpeakerList = showAll ? speakerList : speakerList.slice(0, 8);

  const toggleShowAllAgenda = () => {
    setAgendaShowAll(!agendaShowAll);
  };

  const selectedDay = dayLists.find((day) => day._id === selectedDayId);

  // const filteredAgendaData = agendaList.filter(
  //   (data) => data.agendaDayId === selectedDayId
  // );

  const filteredAgendaData = agendaList.filter(
    (data) => data.agendaDaydata[0]._id === selectedDayId
  );

  const getSortedAgendaData = (data) => {
    return data
      .map((details) => ({
        ...details,
        time: convertToDates(details.time),
      }))
      .sort((a, b) => a.time[0] - b.time[0])
      .map((details) => ({
        ...details,
        time: formatToTimeRange(details.time),
      }));
  };

  const sortedAgendaData = getSortedAgendaData(filteredAgendaData);

  // const sortedAgendaData = filteredAgendaData
  //   .slice(0, agendaShowAll ? filteredAgendaData.length : 3)
  //   .map((details) => ({
  //     ...details,
  //     // Convert 12-hour time to Date objects for sorting
  //     time: convertToDates(details.time),
  //   }))
  //   .sort((a, b) => a.time[0] - b.time[0])
  //   .map((details) => ({
  //     ...details,
  //     // Format the sorted time back to the 12-hour format
  //     time: formatToTimeRange(details.time),
  //   }));

  const prevSlide = () => {
    const slider = document.querySelector(`.${styles.cardContainer}`);
    const width = slider.offsetWidth;
    slider.scrollLeft -= width;
  };

  const nextSlide = () => {
    const slider = document.querySelector(`.${styles.cardContainer}`);
    const width = slider.offsetWidth;
    slider.scrollLeft += width;
  };

  const prevSlidePartner = () => {
    const slider = document.querySelector(
      `.${styles.section10ImageContainer2}`
    );
    const width = slider.offsetWidth;
    slider.scrollLeft -= width;
  };

  const nextSlidePartner = () => {
    const slider = document.querySelector(
      `.${styles.section10ImageContainer2}`
    );
    const width = slider.offsetWidth;
    slider.scrollLeft += width;
  };

  const handleTouchStart = (e) => {
    if (e.target.closest(`.${styles.cardContainer}`)) {
      setStartX(e.touches[0].clientX);
      setScrollLeft(e.currentTarget.scrollLeft);
    }
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    if (e.target.closest(`.${styles.cardContainer}`)) {
      const x = e.touches[0].clientX;
      const walk = (x - startX) * 2;
      e.currentTarget.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setStartX(0);
  };

  const handleTouchStart2 = (e) => {
    if (e.target.closest(`.${styles.cardContainer2}`)) {
      setStartX(e.touches[0].clientX);
      setScrollLeft(e.currentTarget.scrollLeft);
    }
  };

  const handleTouchMove2 = (e) => {
    if (!startX) return;
    if (e.target.closest(`.${styles.cardContainer2}`)) {
      const x = e.touches[0].clientX;
      const walk = (x - startX) * 2;
      e.currentTarget.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd2 = () => {
    setStartX(0);
  };

  const prevSlide2 = () => {
    const slider = document.querySelector(`.${styles.cardContainer2}`);
    const width = slider.offsetWidth;
    slider.scrollLeft -= width;
  };

  const nextSlide2 = () => {
    const slider = document.querySelector(`.${styles.cardContainer2}`);
    const width = slider.offsetWidth;
    slider.scrollLeft += width;
  };

  const emailId = "transform@gbca.org.au";

  const enquierEmail = "Zeina.Iesa@gbca.org.au";

  const changeDay = (id) => {
    setSelectedDayId(id);
    setAgendaShowAll(false);
  };

  const handelNavBar = () => {
    setShowMenuBar(true);
  };
  const cancelMenuBar = () => {
    setShowMenuBar(false);
  };

  const videoPopUp = () => {
    setVideoPg(true);
  };

  const openDetailsBox = (_id) => {
    axios
      .get(`${serverUrl}/getAgendaListSpeakerWise?speakerId=${_id}`)
      .then((response) => {
        setSpeakerTiming(response.data.agendaData);

        const data = response;
        // const agendaData = response.data.result[0].agendaData;
        // setSpeakerTiming(agendaData);

        setOpenBox(!openBox);

        setSpeakerFullDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching speaker details", error);
      });
  };

  const cancelButton = () => {
    setOpenBox(false);
  };

  const showAgendaPopUp = () => {
    setViewPopUpGlance(!viewGlancePopup);
  };

  const closeBtnGlance = () => {
    setViewPopUpGlance(false);
  };

  const partners = [
    {
      headingName: "Gold Partners",
      iconSrcName: [
        { src: "icon1.jpeg", width: "10vw" },
        { src: "icon2.png", width: "8vw" },
        { src: "icon1.jpeg", width: "5vw" },
      ],
    },
    {
      headingName: "Silver Partners",
      iconSrcName: [
        { src: "icon1.jpeg", width: "9vw" },
        { src: "icon2.png", width: "7vw" },
        { src: "icon1.jpeg", width: "5vw" },
      ],
    },
    {
      headingName: "Associate Partners",
      iconSrcName: [
        { src: "icon1.jpeg", width: "10vw" },
        { src: "icon2.png", width: "8vw" },
        { src: "icon1.jpeg", width: "6vw" },
      ],
    },
  ];

  const handleVideoClick = () => {
    console.log("video clicked");
    setVideoClicked(!videoClicked);
  };

  return (
    <>
      <Head>
        <title>TRANSFORM 2024 | GBCA sustainability conference</title>
        <meta
          name="description"
          content="The Green Building Council of Australia's annual TRANSFORM conference is an industry-leading event that pioneers thought leadership on sustainability.
"
        />
        <meta
          name="viewport"
          content="The Green Building Council of Australia's annual TRANSFORM conference is an industry-leading event that pioneers thought leadership on sustainability."
        />
        <link rel="icon" href="/logo2.png" />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KK376HN');`,
          }}
        ></script>
      </Head>
      <main className={styles.mainContainer}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KK376HN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
          <section className={styles.section1}>
            <div className={styles.textMarqueeContainer}>
              <span className={styles.textMarquee}>
                <span>{scrollingBanner}</span>
                <span>{scrollingBanner}</span>
                <span>{scrollingBanner}</span>
                <span>{scrollingBanner}</span>
                <span>{scrollingBanner}</span>
              </span>

              <span className={styles.textMarquee}>
                <span>{scrollingBanner}</span>
                <span>{scrollingBanner}</span>
                <span>{scrollingBanner}</span>
                <span>{scrollingBanner}</span>
                <span>{scrollingBanner}</span>
              </span>
            </div>
          </section>
          <section className={styles.section2}>
            <div className={styles.hrLine} onClick={handelNavBar}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.section2ContentBox}>
              <div className={styles.logoContainer}>
                <a href="/" target="_self">
                  <Image
                    src="/logo.png"
                    alt="Transform"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
              <div className={styles.menuContainer}>
                <ul>
                  <li>
                    <a href="#about">ABOUT</a>
                  </li>
                  <li>
                    <a href="#speakers">SPEAKERS</a>
                  </li>
                  <li>
                    <a href="#agenda">AGENDA</a>
                  </li>
                  <li>
                    <a href="#ticket">TICKETS</a>
                  </li>
                  <li>
                    <a href="#testimonials">TESTIMONIALS</a>
                  </li>
                  <li>
                    <a href="#partners">PARTNERS</a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${emailId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.actionContainer}>
                <button className={styles.rightButton}>
                  <a
                    className={styles.rightButton}
                    href={bookNowUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BOOK NOW
                  </a>
                </button>
              </div>
            </div>
          </section>
        </div>

        <section className={styles.section3}>
          <Image
            src={bannerReal}
            alt="mainBanner"
            className={styles.mainBannerReal}
          />
          <div className={styles.bannerBtnMainContainer}>
            <a href={bookNowUrl} target="_blank" rel="noopener noreferrer">
              {" "}
              <button className={styles.bannerBtnMain}>BOOK NOW</button>
            </a>
          </div>

          <div className={styles.bannerContent}>
            <div>
              {/* <div className={styles.mainLogoBannerContainer}>
                <Image
                  src={logo2024}
                  alt="main-logo"
                  className={styles.mainLogoBanner}
                />
              </div> */}

              {/* <video
                style={{ width: "100vw" }}
                autoPlay={true}
                muted={true}
                loop
                controls={false}
              >
                <source
                  src={
                    serverUrl +
                    "/website/home/" +
                    data.websiteContentObj.homeData.fileName
                  }
                  type="video/mp4"
                />
              </video> */}
              {/* <Image
                src={bannerImage}
                alt="banner"
                // width={1000}
                // height={700}
                className={styles.bannerImageMain}
              /> */}
            </div>

            {/* <div className={styles.videoBtn}>
              <button>
                <a
                  className={styles.anchorButton}
                  href={bookNowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BOOK NOW
                </a>
              </button>
            </div> */}
          </div>
        </section>
        {/* <div className={styles.bannerBtnMainContainer}>
          <button className={styles.bannerBtnMain}>BOOK NOW</button>
        </div> */}
        {videoClicked && (
          <section>
            <div
              style={{
                width: "100vw",
                height: "100%",
                aspectRatio: "16/9",
                display: "block",
                border: "2px solid black",
                cursor: "pointer",
              }}
            >
              <video
                autoPlay={true}
                muted={true}
                loop
                controls={true}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                // className={styles.videoPicture}
                onClick={handleVideoClick}
              >
                <source
                  src={
                    serverUrl +
                    "/website/home/" +
                    data.websiteContentObj.homeData.fileName
                  }
                  type="video/mp4"
                />
              </video>
            </div>
          </section>
        )}

        {!videoClicked && (
          <section id="about" data-aos="fade-up" className={styles.section4}>
            <div className={styles.section4ContentBox}>
              <div className={styles.leftSection}>
                <div className={styles.leftBox}>
                  <h2>{data.websiteContentObj.aboutData.heading}</h2>
                  <div
                    className={styles.details}
                    dangerouslySetInnerHTML={{ __html: discription }}
                  ></div>
                  <div className={styles.btnContainer}>
                    <button>
                      <a
                        className={styles.anchorButton}
                        href={bookNowUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BOOK NOW
                      </a>
                    </button>
                  </div>
                  <div className={styles.taggline}>
                    <p>
                      {" "}
                      TRANSFORM is brought to you by the Green Building Council
                      of Australia
                    </p>
                  </div>
                  <div className={styles.greenBuldingimage}>
                    <a
                      href="https://new.gbca.org.au/?utm_source=transform-website&utm_medium=referral&utm_campaign=transform"
                      target="blank"
                    >
                      <Image
                        // src={serverUrl + "/website/about/" +  aboutData.videoThumbnail}
                        src="/green-building.png"
                        alt="Green Building"
                        width={243}
                        height={51}
                        className={styles.greenBuilding}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.rightSection}>
                <div className={styles.header}>
                  <h3>{data.websiteContentObj.aboutData.videoHeading}</h3>
                </div>
                <div className={styles.videoImg}>
                  {/* <Image
                  src={serverUrl + "/website/about/" + aboutData.videoThumbnail}
                  alt="videoLogo"
                  width={700}
                  height={500}
                  className={styles.videoPicture}
                  style={{ border: "2px solid black" }}
                /> */}
                  {/* {videoClicked ? (
                  <div className={styles.bigVideoContainer}>
                    <video
                      autoPlay={true}
                      muted={true}
                      loop
                      controls={true}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      // className={styles.videoPicture}
                      onClick={handleVideoClick}
                    >
                      <source
                        src={
                          serverUrl +
                          "/website/home/" +
                          data.websiteContentObj.homeData.fileName
                        }
                        type="video/mp4"
                      />
                    </video>
                  </div>
                 ) : ( */}
                  <video
                    autoPlay={true}
                    muted={true}
                    loop
                    controls={false}
                    className={styles.videoPicture}
                    onClick={handleVideoClick}
                    style={{ cursor: "pointer" }}
                  >
                    <source
                      src={
                        serverUrl +
                        "/website/home/" +
                        data.websiteContentObj.homeData.fileName
                      }
                      type="video/mp4"
                    />
                  </video>
                  {/* )} */}
                  <a
                    href="https://www.youtube.com/watch?v=eKdz1oeSeqM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <div className={styles.playBtn}>
                    <Image
                      src={playBtn.src}
                      alt="videoLogo"
                      width={50}
                      height={50}
                      className={styles.plyBtn}
                    />
                  </div> */}
                  </a>
                </div>

                <div className={styles.videoImg} onClick={videoPopUp}></div>
                <div className={styles.section4Box}>
                  <p>
                    <a
                      href={data.websiteContentObj.aboutData.youTubeVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See more highlights from previous TRANSFORM events
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* <section data-aos="fade-up" className={styles.section5}>
          <div className={styles.section5Content}>
            <div onClick={handleDivClick} className={styles.greenBanner}>
              <h3 data-aos="fade-right" className={styles.leftToRight}>
                {data.websiteContentObj.aboutData.text1}
              </h3>
              {showText && (
                <div className={showText ? styles.slideIn : ""}>
                  <p className={styles.whiteParaTxt}>
                    How are we set up to support and facilitate a rapidly
                    decarbonising economy, how are different states and
                    companies responding to these challenges and how to do we
                    address the challenge of retrofitting buildings to meet our
                    changing needs?
                  </p>
                </div>
              )}
            </div>
            <div onClick={handleDivClick2} className={styles.whiteBanner}>
              <h3 data-aos="fade-left" className={styles.rightToLeft}>
                {data.websiteContentObj.aboutData.text2}
              </h3>
              {showText2 && (
                <div className={showText2 ? styles.slideIn : ""}>
                  <p className={styles.blackParaTxt}>
                    What impact will the TNFD have on reporting and transparency
                    and how can we make contributions to nature and biodiversity
                    that are measurable, impactful and regenerative?
                  </p>
                </div>
              )}
            </div>
            <div onClick={handleDivClick3} className={styles.greenBanner}>
              <h3 data-aos="fade-right" className={styles.leftToRight}>
                {data.websiteContentObj.aboutData.text3}
              </h3>
              {showText3 && (
                <div className={showText3 ? styles.slideIn : ""}>
                  <p className={styles.whiteParaTxt}>
                    How can we reframe our collective mindset on fitouts to
                    reflect principles of a circular economy and how do circular
                    fitouts build processes to ensure products are appropriately
                    used and reused throughout their lifecycle?
                  </p>
                </div>
              )}
            </div>
            <div onClick={handleDivClick4} className={styles.whiteBanner}>
              <h3 data-aos="fade-left" className={styles.rightToLeft}>
                {data.websiteContentObj.aboutData.text4}
              </h3>
              {showText4 && (
                <div className={showText4 ? styles.slideIn : ""}>
                  <p className={styles.blackParaTxt}>
                    {" "}
                    Demystify the “s” in ESG and explore the role social
                    sustainability has in meeting investor needs, addressing
                  </p>
                </div>
              )}
              {/* {showText4 && (
                <div className={showText4 ? styles.slideIn : ""}>
                  <p className={styles.blackParaTxt}>
                    Demystify the “s” in ESG and explore the role social
                    sustainability has in meeting investor needs, addressing
                  </p>
                </div>
              )} */}
        {/* </div>
            <div onClick={handleDivClick5} className={styles.greenBanner}>
              <h3 data-aos="fade-right" className={styles.leftToRight}>
                {data.websiteContentObj.aboutData.text5}
              </h3>
              {showText5 && (
                <div className={showText5 ? styles.slideIn : ""}>
                  <p className={styles.whiteParaTxt}>
                    Demystify the “s” in ESG and explore the role social
                    sustainability has in meeting investor needs, addressing
                  </p>
                </div>
              )}
            </div>
          </div>
        </section> put closing bracket at end */}
        <section id="speakers" data-aos="fade-up" className={styles.section6}>
          <div className={styles.section6ContentBox}>
            <div className={styles.headingBox}>
              <h2>Featured speakers</h2>
            </div>

            <div className={styles.imageGridContainer}>
              {visibleSpeakerList.map((image, index) => (
                <div
                  className={styles.gridBox}
                  key={index}
                  onClick={() => openDetailsBox(image._id)}
                >
                  <Image
                    src={serverUrl + "/website/speaker/" + image.imageName}
                    // src={image.imageUrl}
                    width={100}
                    height={100}
                    className={styles.imgBox}
                    alt="img"
                  />

                  <p className={styles.nameTitle}>{image.name}</p>
                  <p className={styles.namePosition}>{image.designation}</p>
                </div>
              ))}
            </div>

            <div className={styles.textBox}>
              <button onClick={toggleShowAll}>
                {showAll ? "Show less" : "Show more"}
              </button>
              {showAll ? (
                <div className={styles.section6Icon} onClick={toggleShowAll}>
                  <p>&#709;</p>
                </div>
              ) : (
                <div className={styles.section6Icon} onClick={toggleShowAll}>
                  <p>&#709;</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="agenda" data-aos="fade-up" className={styles.section7}>
          {/* <div className={styles.section7ContentBox}>
            <div className={styles.section7headingBoxs}>
              <h2>Agenda</h2>
            </div>
            <div>
              <Image
                src="/Agendaimage5.jpg"
                width={2000}
                height={800}
                layout="responsive"
                alt="banner"
                className={styles.optionalImage}
              />
            </div>
          </div> */}

          <div className={styles.section7ContentBox}>
            <div className={styles.section7headingBox}>
              <h2 className={styles.agendaColor}>Agenda</h2>
            </div>
            <div className={styles.section7headingBox}>
              <div onClick={showAgendaPopUp} className={styles.section7textBox}>
                <p>VIEW AGENDA AT A GLANCE</p>
              </div>
            </div>

            <div className={styles.flexRowBox}>
              {dayLists.map((dayList, index) => (
                <div
                  key={index}
                  className={`${styles.flexBox} ${
                    selectedDayId === dayList._id ? styles.greenBackground : ""
                  }`}
                  onClick={() => changeDay(dayList._id)}
                >
                  <p>{dayList.label}</p>
                </div>
              ))}
            </div>

            {/* <div className={styles.flexColomContainer}>
              {filteredAgendaData
                .slice(0, agendaShowAll ? filteredAgendaData.length : 3)
                .map((details, index) => (
                  <div key={index} className={styles.flexrowBox}>
                    <div className={styles.leftcontentContainer}>
                      {details.keynoteStatus === "Enable" && (
                        <div className={styles.keyNoteBox}>
                          <p>KEYNOTE</p>
                        </div>
                      )}
                      <div className={styles.leftcontentBox}>
                        <p>
                          {details.time}
                          <br />
                          <span className={styles.leftSpan}>
                            {details.location}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className={styles.rightcontentBox}>
                      <p className={styles.paraText}>{details.heading}</p>

                      <p className={styles.paraText2}>{details.title}</p>
                      <div className={styles.imgFlexBoxContainer}>
                       

                        {details.speakerList.map((data, index) => (
                          <div key={index} className={styles.imgFlexBox}>
                            <div className={styles.agendaImgContainer}>
                              <Image
                                src={
                                  serverUrl +
                                  "/website/speaker/" +
                                  data.imageName
                                }
                                width={600}
                                height={300}
                                className={styles.imgBox2}
                                alt="img"
                              />
                            </div>

                            <div className={styles.paraHeadingBox}>
                              <p className={styles.paraHeading}>{data.name}</p>

                              <p className={styles.titlePara}>
                                {data.designation}
                              </p>
                            </div>
                          </div>
                        ))}

                       
                      </div>
                    </div>
                  </div>
                ))}

              <div className={styles.section7para}>
                {filteredAgendaData.length > 3 && (
                  <button onClick={toggleShowAllAgenda}>
                    {agendaShowAll ? "Show less" : "Show more"}
                  </button>
                )}

                {filteredAgendaData.length > 3 &&
                  (agendaShowAll ? (
                    <div
                      className={styles.section7Icon}
                      onClick={toggleShowAllAgenda}
                    >
                      <p>&#709;</p>
                    </div>
                  ) : (
                    <div
                      className={styles.section7Icon}
                      onClick={toggleShowAllAgenda}
                    >
                      <p>&#709;</p>
                    </div>
                  ))}
              </div>
            x

              <Image
                src="/transformBottomLogo.png"
                width="500"
                height="100"
                className={styles.transFormMobile2}
              />
            </div> */}

            <div className={styles.flexColomContainer}>
              {sortedAgendaData
                .slice(0, agendaShowAll ? sortedAgendaData.length : 3)
                .map((details, index) => (
                  <div key={index} className={styles.flexrowBox}>
                    <div className={styles.leftcontentContainer}>
                      {details.keynoteStatus === "Enable" && (
                        <div className={styles.keyNoteBox}>
                          <p className={styles.keynote}>KEYNOTE</p>
                          {/* {sortedAgendaData.map((details, index) => ( */}
                        </div>
                      )}
                      <div className={styles.leftcontentBox}>
                        <p>
                          {details.time}
                          <br />
                          <span className={styles.leftSpan}>
                            {details.location}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className={styles.rightcontentBox}>
                      <p className={styles.paraText}>{details.heading}</p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: details.title,
                        }}
                        className={styles.paraText2}
                      ></div>
                      {/* <p className={styles.paraText2}>{details.title}</p> */}

                      <div className={styles.imgFlexBoxContainer}>
                        {details.speakerList.map((data, index) => (
                          <div key={index} className={styles.imgFlexBox}>
                            <div className={styles.agendaImgContainer}>
                              <Image
                                src={
                                  serverUrl +
                                  "/website/speaker/" +
                                  data.imageName
                                }
                                width={600}
                                height={300}
                                className={styles.imgBox2}
                                alt="img"
                              />
                            </div>

                            <div className={styles.paraHeadingBox}>
                              <p className={styles.paraHeading}>{data.name}</p>

                              <p className={styles.titlePara}>
                                {data.designation}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

              <div className={styles.section7para}>
                {filteredAgendaData.length > 3 && (
                  <button onClick={toggleShowAllAgenda}>
                    {agendaShowAll ? "Show less" : "Show more"}
                    <p className={styles.bottomIconAgenda}>&#709;</p>
                  </button>
                )}
              </div>

              {/* <div className={styles.section7para}>
                {filteredAgendaData.length > 3 &&
                  (agendaShowAll ? (
                    <div
                      className={styles.section7Icon}
                      onClick={toggleShowAllAgenda}
                    >
                      <p>&#709;</p>
                    </div>
                  ) : (
                    <div
                      className={styles.section7Icon}
                      onClick={toggleShowAllAgenda}
                    >
                      <p>&#709;</p>
                    </div>
                  ))}
              </div> */}

              <Image
                src="/transformBottomLogo.png"
                width="500"
                height="100"
                className={styles.transFormMobile2}
              />
            </div>
          </div>
        </section>

        <section id="ticket" data-aos="fade-up" className={styles.section9}>
          <div className={styles.section9ContentBox}>
            <div className={styles.section7headingBox}>
              <h2 className={styles.ticketHeading}>Tickets</h2>
            </div>
            <div className={styles.ticketConatiner}>
              {ticketList.map((data, index) => (
                <div key={index} className={styles.ticketCard1}>
                  <div className={styles.ticketTitleContainer}>
                    <h2>{data.heading}</h2>
                    <p>{data.title}</p>
                  </div>

                  <div className={styles.listContainer}>
                    <span
                      dangerouslySetInnerHTML={{ __html: data.discription }}
                    ></span>
                  </div>
                  <div className={styles.ticketButton}>
                    <button>
                      <a
                        className={styles.anchorButton}
                        href={bookNowUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BOOK NOW
                      </a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Image
              src="/transformBottomLogo.png"
              width="500"
              height="100"
              className={styles.transFormMobile2}
            />

            {/* <Image
              src={serverUrl + "/website/home/" + transFormMobile}
              width="300"
              height="100"
              className={styles.transFormMobile2}
            /> */}
          </div>
        </section>

        <section data-aos="fade-up" className={styles.section8}>
          <div className={styles.section8ContentBox}>
            <div className={styles.section8heading}>
              <div className={styles.section8headerPara}>
                <h2>What to expect</h2>
                <div className={styles.section8headerParaBox}>
                  <p>
                    {data.websiteContentObj.whatToExpectData.heading.heading}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={styles.cardContainer}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {whatToExpectData.map((data, index) => (
                <div key={index} className={styles.cardBox}>
                  <Image
                    src={
                      serverUrl +
                      "/website/whatToExpect/" +
                      data.whatToExpectImage
                    }
                    width={250}
                    height={200}
                    className={styles.section8imgBox}
                    alt="imgUrl"
                  />

                  <div className={styles.section8TextBox}>
                    <p className={styles.section8Text1}>{index + 1}</p>
                    <h3>{data.heading}</h3>
                    <div className={styles.section8InfoText}>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.arrowContainer}>
              <div className={styles.arrowBtnContainer}>
                <BsArrowLeft className={styles.arrowBtn1} onClick={prevSlide} />
                <BsArrowRight
                  className={styles.arrowBtn2}
                  onClick={nextSlide}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="partners" data-aos="fade-up" className={styles.section10}>
          <h2>Partners</h2>
          <div>
            {partners.map((partner, index) => (
              <div className={styles.titlePartnersList} key={index}>
                <h2>{partner.headingName}</h2>
                <div>
                  {partner.iconSrcName.map((icon, iconIndex) => (
                    <img
                      key={iconIndex}
                      src={icon.src}
                      alt="partners"
                      style={{
                        width: icon.width,
                        // border: "2px solid green",
                        height: "5vw",
                        objectFit: "contain",
                        marginRight: "2vw",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* <h2>Partners</h2>
          <div className={styles.sec10Header}>
            {" "}
            <h3>Gold partners</h3>
          </div>

          <div className={styles.section10ImageContainer}>
            {partnerData.map((image, index) => (
              <a key={index} href={image.link} target="_blank">
                <Image
                  src={serverUrl + "/website/partners/" + image.imageName}
                  width={800}
                  height={400}
                  key={index}
                  className={styles.PartnersImageBox}
                  alt="imgUrl"
                />
              </a>
            ))}
          </div>
          <div className={styles.sec10Header}>
            {" "}
            <h3 className={styles.section10Title}>Silver partners</h3>
          </div>

          <div className={styles.section10ImageContainer2}>
            {partnerDataSilver.map((image, index) => (
              <a key={index} href={image.link} target="_blank">
                <Image
                  src={serverUrl + "/website/partners/" + image.imageName}
                  width={800}
                  height={400}
                  key={index}
                  alt="imgUrl"
                  className={styles.PartnersImageBox}
                />
              </a>
            ))}
          </div>
          <div className={styles.sec10Header}>
            <h3 className={styles.section10Title}>Drinks partners</h3>
          </div>

          <div className={styles.section10ImageContainer3}>
            {partnerDataDrinks.map((image, index) => (
              <>
                <a
                  className={styles.drinksPartner}
                  key={index}
                  href={image.link}
                  target="_blank"
                >
                  <Image
                    src={serverUrl + "/website/partners/" + image.imageName}
                    width={800}
                    height={400}
                    key={index}
                    alt="imgUrl"
                    className={styles.PartnersImageBox}
                  />
                </a>
              </>
            ))}
          </div>

          <div className={styles.sec10Header}>
            <h3 className={styles.section10Title}>Lunch partners</h3>
          </div>

          <div className={styles.section10ImageContainer3}>
            <a
              href="https://www.geberit.com.au/about-us/m-about-us.html"
              target="_blank"
              className={styles.lunchPartner}
            >
              <Image
                src={"/gebritLogo.jpeg"}
                width={800}
                height={400}
                alt="imgUrl"
                className={styles.PartnersImageBox}
              />
            </a>
          </div>

          <div className={styles.sec10Header}>
            <h3 className={styles.section10Title}>Bronze partners</h3>
          </div>

          <div className={styles.section10ImageContainer3}>
            <a
              className={styles.bronzeBox}
              href="https://www.cbre.com.au/"
              target="_blank"
            >
              <Image
                src={"/CBRE_green.png"}
                width={800}
                height={400}
                alt="imgUrl"
                className={styles.PartnersImageBoxBronze}
              />
            </a>
            <a
              className={styles.bronzeBox2}
              href="https://www.acor.com.au/"
              target="_blank"
            >
              <Image
                src={"/AcorLogo.png"}
                width={800}
                height={400}
                alt="imgUrl"
                className={styles.PartnersImageBoxBronze2}
              />
            </a>
            <a
              className={styles.bronzeBox2}
              href="https://www.panasonic.com/au/"
              target="_blank"
            >
              <Image
                src={"/panasonic.png"}
                width={213}
                height={100}
                alt="imgUrl"
                className={styles.PartnersImageBoxBronze2}
              />
            </a>
          </div>

          <div className={styles.sec10Header}>
            <h3 className={styles.section10Title}>Associate partners</h3>
          </div>

          <div className={styles.section10ImageContainer5}>
            <a href="https://www.tateinc.com/au/en/" target="_blank">
              <Image
                src={"/TateLogo.png"}
                width={800}
                height={400}
                alt="imgUrl"
                className={styles.PartnersImageBox}
              />
            </a>
            <a
              className={styles.anchorLogo}
              href="https://verosol.com.au/"
              target="_blank"
            >
              <Image
                src={"/VerosolBlack.png"}
                width={1000}
                height={500}
                alt="imgUrl"
                className={styles.PartnersImageBox}
              />
            </a>
            <a
              className={styles.anchorLogo}
              href="https://www.kingspan.com/au/en/"
              target="_blank"
            >
              <Image
                src={"/kingspan.png"}
                width={1000}
                height={500}
                alt="imgUrl"
                className={styles.PartnersImageBox}
              />
            </a>
          </div>

          <div className={styles.sec10Header}>
            <h3 className={styles.section10Title}>Activation partners</h3>
          </div>

          <div className={styles.section10ImageContainer5}>
            <a
              href="https://www.jll.com.au/en/solutions/sustainability-services?highlight=sustainability"
              target="_blank"
            >
              <Image
                src={"/jll-b.png"}
                width={1000}
                height={616}
                alt="imgUrl"
                className={styles.PartnersImageBox}
              />
            </a>
            <a
              className={styles.anchorLogo}
              href="https://www.mapei.com/au/en/home-page?gclid=EAIaIQobChMImdC0mL3lggMVhMNMAh1xLALsEAAYASAAEgKR9PD_BwE"
              target="_blank"
            >
              <Image
                src={"/mapei.png"}
                width={378}
                height={119}
                alt="imgUrl"
                className={styles.PartnersImageBox}
              />
            </a>
            <a
              className={styles.anchorLogo}
              href="https://cetec.com.au/"
              target="_blank"
            >
              <Image
                src={"/cetec.jpg"}
                width={1120}
                height={252}
                alt="imgUrl"
                className={styles.PartnersImageBox}
              />
            </a>
            <a
              className={styles.anchorLogo}
              href="https://wattwatchers.com.au/"
              target="_blank"
            >
              <Image
                src={"/watt-watchers.png"}
                width={1120}
                height={252}
                alt="imgUrl"
                className={styles.PartnersImageBox}
              />
            </a>
            <a
              className={styles.anchorLogo}
              href="https://www.xylo.systems/"
              target="_blank"
            >
              <Image
                src={"/xylo-o.png"}
                width={1120}
                height={252}
                alt="imgUrl"
                className={styles.PartnersImageBox}
              />
            </a>
          </div>
          <div className={styles.sec10Header}>
            <h3 className={styles.section10Title}>Production partners</h3>
          </div>

          <div className={styles.section10ImageContainer4}>
            {partnerDataProduction.map((image, index) => (
              <a key={index} href={image.link} target="_blank">
                <Image
                  src={serverUrl + "/website/partners/" + image.imageName}
                  width={800}
                  height={400}
                  key={index}
                  alt="imgUrl"
                  className={styles.PartnersImageBox}
                />
              </a>
            ))}
          </div>

          <div className={styles.sec10Header}>
            <h3 className={styles.section10Title}>Media partners</h3>
          </div>

          <div className={styles.section10ImageContainer4}>
            {partnerDataMedia.map((image, index) => (
              <a key={index} href={image.link} target="_blank">
                <Image
                  src={serverUrl + "/website/partners/" + image.imageName}
                  width={800}
                  height={400}
                  key={index}
                  alt="imgUrl"
                  className={styles.PartnersImageBox}
                />
              </a>
            ))}
          </div>

          <div className={styles.sec10Header}>
            <h3 className={styles.section10Title}>
              Renewable Electricity partner
            </h3>
          </div>
          <div className={styles.section10ImageContainer6}>
            <a href="https://www.greenpower.gov.au/" target="_blank">
              <Image
                src="/green-power.png"
                width={800}
                height={400}
                alt="imgUrl"
                className={styles.PartnersImageBox}
              />
            </a>
          </div>

          <div className={styles.contentContainer}>
            <div className={styles.contentTextBox}>
              <p>
                {data.websiteContentObj.partnerData.enquireResult.description}
              </p>
            </div>
            <div className={styles.contentBtnContainer}>
              <button>
                <a href={`mailto:${enquierEmail}`}> ENQUIRE TO PARTNER</a>
              </button>
            </div>
          </div> */}
        </section>
        <section data-aos="fade-up" className={styles.section11}>
          <div className={styles.section11ContentBox}>
            <div className={styles.section8heading}>
              <div className={styles.section8headerPara}>
                <h2 className={styles.titleText8}>Sustainability insights</h2>
                <div className={styles.section8headerParaBox}>
                  <p>
                    {data.websiteContentObj.sustainabilityData.heading.heading}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={styles.cardContainer2}
              onTouchStart={handleTouchStart2}
              onTouchMove={handleTouchMove2}
              onTouchEnd={handleTouchEnd2}
            >
              {sustainabilityData.map((data, index) => (
                <div key={index} className={styles.cardBox}>
                  <Image
                    src={
                      serverUrl +
                      "/website/sustainabilty/" +
                      data.sustainabilityImage
                    }
                    width={250}
                    height={200}
                    alt="imgUrl"
                    className={styles.section8imgBox}
                  />

                  <div className={styles.section8TextBox}>
                    <p className={styles.section8Text1}>{data.num}</p>
                    <h3>{data.heading}</h3>
                    <div className={styles.section8InfoText}>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.arrowBtnContainer}>
              <BsArrowLeft className={styles.arrowBtn1} onClick={prevSlide2} />
              <BsArrowRight className={styles.arrowBtn2} onClick={nextSlide2} />
            </div>
          </div>
        </section>

        {/* <section data-aos="fade-up" className={styles.section12}>
          <h2>Gallery</h2>
          <div className={styles.section12Paratext}>
            <p>
              <a
                href={data.websiteContentObj.galleryData.headingLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.websiteContentObj.galleryData.heading}
              </a>
            </p>
          </div>

          <Image
            src={serverUrl + "/website/gallery/" + galleryData}
            width={1000}
            height={500}
            className={styles.eventImageContainer}
          />
        </section> */}

        <section
          id="testimonials"
          data-aos="fade-up"
          className={styles.section13}
        >
          <div className={styles.section13ContentBox}>
            <h2>Testimonials</h2>

            <div className={styles.section13FelxContaioner}>
              {testimonialList.map((details, index) => (
                <div
                  key={index}
                  className={`${styles.contentBox} ${
                    index % 2 === 0 ? styles.greenBg : styles.grayBg
                  }`}
                >
                  {/* <h3>{details.heading}</h3> */}
                  <div className={styles.section13ParaText}>
                    <p>{details.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className={styles.horizontalLine} />
            <section data-aos="fade-up" className={styles.section12}>
              <h2>Gallery</h2>
              <div className={styles.section12Paratext}>
                <p>
                  <a
                    href={data.websiteContentObj.galleryData.headingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.websiteContentObj.galleryData.heading}
                  </a>
                </p>
              </div>

              <Image
                src={serverUrl + "/website/gallery/" + galleryData}
                width={1000}
                height={500}
                className={styles.eventImageContainer}
              />
            </section>

            <div className={styles.section13ContentContainer}>
              <a
                href="https://new.gbca.org.au/?utm_source=transform-website&utm_medium=referral&utm_campaign=transform"
                target="blank"
              >
                <Image
                  src="/green-building.png"
                  alt="Green Building"
                  width={800}
                  height={400}
                  className={styles.section13ImgBox}
                />
              </a>

              <div className={styles.section13ListContainer}>
                <div className={styles.list}>
                  <a href="#about">ABOUT</a>

                  <a href="#speakers">SPEAKERS</a>

                  <a href="#agenda">AGENDA</a>
                </div>

                <div className={styles.list}>
                  <a href="#ticket">TICKETS</a>
                  <a
                    href={`mailto:${emailId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CONTACT
                  </a>
                  <a href="#partners">PARTNERS</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {videoPg && (
          <div className={styles.videoContainer}>
            <div>
              <video
                style={{ width: "75vw" }}
                autoPlay={true}
                muted={true}
                loop
                controls={false}
              >
                <source
                  src={
                    serverUrl +
                    "/website/home/" +
                    data.websiteContentObj.homeData.fileName
                  }
                  type="video/mp4"
                />
              </video>
            </div>
            <div className={styles.cancelBtn} onClick={() => setVideoPg(false)}>
              <p>X</p>
            </div>
          </div>
        )}

        {showMenuBar && (
          <>
            <div className={styles.menuBarContainer}>
              <div className={styles.navContainer}>
                <button className={styles.cancelBtn2} onClick={cancelMenuBar}>
                  X
                </button>
                <button className={styles.bookBtn}>BOOK NOW</button>
              </div>
              <div className={styles.menuContainer2}>
                <ul>
                  <li>
                    <a onClick={handelMenuBar} href="#about">
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a onClick={handelMenuBar} href="#speakers">
                      SPEAKERS
                    </a>
                  </li>
                  <li>
                    <a onClick={handelMenuBar} href="#agenda">
                      AGENDA
                    </a>
                  </li>
                  <li>
                    <a onClick={handelMenuBar} href="#ticket">
                      TICKETS
                    </a>
                  </li>
                  <li>
                    <a href="transform@gbca.org.au">PARTNERS</a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>

              {/* */}
            </div>
          </>
        )}

        {openBox && (
          <div className={styles.popUpContainer}>
            <div className={styles.popUpDetailsBox}>
              <div className={styles.cancelButton} onClick={cancelButton}>
                <div className={styles.cancelImage}>
                  <img src="/cross.png" alt="image" />
                </div>
              </div>
              <div className={styles.imageTitleContainer}>
                <div className={styles.popUpimageBox}>
                  <Image
                    src={
                      serverUrl +
                      "/website/speaker/" +
                      speakerFullDetail.data.result.imageName
                    }
                    width={100}
                    height={100}
                    className={styles.imgBoxPopUp}
                    alt="img"
                  />
                  {/* <img src="/celeb3.png" alt="image" /> */}
                </div>

                <div className={styles.colomFlexBox}>
                  <div className={styles.heading}>
                    <h2>{speakerFullDetail.data.result.name}</h2>
                  </div>
                  <div className={styles.titleColom}>
                    <p>{speakerFullDetail.data.result.designation}</p>
                  </div>
                </div>
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html: speakerFullDetail.data.result.bio,
                }}
                className={styles.paraText4}
                // className={styles.parentContainerDetails}
              ></div>

              <div className={styles.verticalLine}></div>
              <div className={styles.textHeading}>
                <h2>Assigned Talks</h2>
              </div>
              <div className={styles.headingColom}>
                {speakerFullDetail.data.agendaData[0] && (
                  <p>{speakerFullDetail.data.agendaData[0].heading}</p>
                )}
                {/* <p>{speakerFullDetail.data.agendaData[0].heading}</p> */}
              </div>

              <div className={styles.parentContainerDetails}>
                {speakerTiming.map((data, index) => (
                  <div key={index}>
                    <div
                      dangerouslySetInnerHTML={{ __html: data.title }}
                      className={styles.paraText5}
                    ></div>
                    {/* <p className={styles.paraText5}>{data.title}</p> */}
                    <p className={styles.timeText}>{data.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {viewGlancePopup && (
          <div className={styles.parentGlanceContainer}>
            <div className={styles.ParentBtnCancel}>
              <div className={styles.glanceImg}>
                <img src="./updatedGLance.jpg" alt="image" />
              </div>
              <div onClick={closeBtnGlance} className={styles.cancelBtns}>
                X
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
function convertToDates(timeStr) {
  const [start, end] = timeStr.split(" - ").map((time) => time.trim());
  const [startHour, startMinute, startPeriod] = parseTime(start);
  const [endHour, endMinute, endPeriod] = parseTime(end);

  const currentDate = new Date();
  return [
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      startHour,
      startMinute,
      0,
      0
    ),
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      endHour,
      endMinute,
      0,
      0
    ),
  ];
}

// Function to parse a 12-hour time string
function parseTime(timeStr) {
  const [time, period] = timeStr.split(" ");
  const [hour, minute] = time.split(":");
  return [
    parseInt(hour, 10) + (period === "PM" && hour !== "12" ? 12 : 0),
    parseInt(minute, 10),
  ];
}

// Function to format Date objects to time range in 12-hour format
function formatToTimeRange(dates) {
  return `${formatToTime(dates[0])} - ${formatToTime(dates[1])}`;
}

// Function to format a Date to 12-hour time string
function formatToTime(date) {
  const hours = date.getHours();
  const period = hours < 12 ? "AM" : "PM";
  const formattedHours = hours === 0 || hours === 12 ? 12 : hours % 12;
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${formattedHours}:${minutes} ${period}`;
}
