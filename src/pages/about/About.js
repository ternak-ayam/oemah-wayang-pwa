import Layout from "../../components/layouts/Layout";
import SimpleTitle from "../../components/texts/SimpleTitle";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SocialIcon from "../../components/socials/SocialIcon";
import MainButton from "../../components/buttons/MainButton";
import { useHistory } from "react-router-dom";
import BackToHome from "../../components/navbars/BackToHome";

const About = () => {
  const history = useHistory();

  return (
    <Layout bottom={false} navbar={true} title={"About Us"}>
      <div className={"mt-8"}>
        <div className={"rounded-2xl"}>
          <ReactPlayer width={"100%"} url={"https://youtu.be/uH78GUo2TOs"} />
        </div>
        <div className={"mt-12 bg-white p-4 shadow-lg rounded-2xl"}>
          <SimpleTitle className={"text-blue-400"} fontSize={"text-xs"}>
            Sekilas mengenai sejarah biografi kami
          </SimpleTitle>
          <SimpleTitle fontSize={"text-sm my-2"}>Sejarah Kami</SimpleTitle>
          <p className={"text-xs leading-loose"}>
            Omah Wayang Klaten terbentuk atas dasar keprihatinan terhadap hidup,
            tumbuh, dan berkembangnya budaya Jawa serta keinginan untuk
            mewujudkan sebuah pusat studi seni tradisional adalah daya utama
            yang mendorong berdirinya kebon pasinaon Omah Wayang Klaten.
          </p>
          <span className={"font-semibold text-xs"}>See All</span>
        </div>
        <div className={"mt-12 grid grid-cols-2 gap-4"}>
          <div className={"p-4 shadow-md bg-white rounded-2xl"}>
            <SimpleTitle className={"uppercase"}>Visi</SimpleTitle>
            <p className={"mt-2 text-xs"}>
              Membangun manusia pembelajar, berdayaguna, dan berbudaya.
            </p>
          </div>
          <div className={"p-4 shadow-md bg-white rounded-2xl"}>
            <SimpleTitle className={"uppercase"}>Misi</SimpleTitle>
            <p className={"mt-2 text-xs whitespace-pre-line"}>
              1. Melaksanakan kegiatan pelestarian, pengembangan, pemanfaatan
              sumber daya lingkungan berbasis seni budaya. 2. Meregenerasi seni
              tradisi.
            </p>
          </div>
        </div>
        <div className={"mt-12"}>
          <Carousel
            autoFocus={true}
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            showArrows={false}
            centerMode={true}
            showIndicators={false}
          >
            <div className={"mx-2"}>
              <img
                className={"rounded-xl"}
                src={process.env.PUBLIC_URL + "/banners/example.webp"}
                alt=""
              />
            </div>
            <div className={"mx-2"}>
              <img
                className={"rounded-xl"}
                src={process.env.PUBLIC_URL + "/banners/example.webp"}
                alt=""
              />
            </div>
          </Carousel>
        </div>
        <div className={"mt-12 p-4 shadow-lg"}>
          <SimpleTitle>Support</SimpleTitle>
          <div className={"mt-4 grid grid-cols-3 gap-4"}>
            <div className={"w-full h-full"}>
              <img
                className={"w-full h-full rounded-full border object-cover"}
                src={process.env.PUBLIC_URL + "/banners/example.webp"}
                alt=""
              />
            </div>
            <div className={"w-full h-full"}>
              <img
                className={"rounded-full border object-cover"}
                src={process.env.PUBLIC_URL + "/banners/example.webp"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={"mt-12 bg-white p-4 shadow-lg rounded-2xl"}>
          <SimpleTitle className={"text-blue-400"} fontSize={"text-xs"}>
            Silakan ajukan pertanyaan
          </SimpleTitle>
          <SimpleTitle fontSize={"text-sm my-2"}>Contact Us</SimpleTitle>
          <p className={"text-xs leading-loose"}>
            Silakan ajukan pertanyaan mengenai Omah Wayang Klaten melalui kolom
            di bawah ini. Tak perlu segan untuk memberikan masukan, saran, serta
            kritik kepada kami. Setiap pertanyaan serta komentar yang masuk akan
            dibalas melalui kontak kami akan segera kami proses
          </p>
          <div>
            <span>Icon</span>
            <span className={"font-semibold text-xs"}>See All</span>
          </div>
        </div>
        <SocialIcon />
        <div className={"mt-4"}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.98363566647!2d110.33982539816525!3d-7.803163972960444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta%2C%20Yogyakarta%20City%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1661846733241!5m2!1sen!2sid"
            style={{ border: 0 }}
            className={"w-full h-64 mb-32"}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <BackToHome />
    </Layout>
  );
};
export default About;