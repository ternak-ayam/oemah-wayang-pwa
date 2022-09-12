import Layout from "../../components/layouts/Layout";
import HomeNavbar from "../../components/navbars/HomeNavbar";
import SimpleDisplay from "../../components/products/SimpleDisplay";
import "../../index.css";
import SimpleCard from "../../components/cards/SimpleCard";
import SimpleCalendarCard from "../../components/cards/SimpleCalendarCard";
import SimpleTitle from "../../components/texts/SimpleTitle";
import SimpleDisplayNoImage from "../../components/products/SimpleDisplayNoImage";
import MainReview from "../../components/reviews/MainReview";
import { useHistory } from "react-router-dom";
import SocialIcon from "../../components/socials/SocialIcon";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const history = useHistory();
  const [kegiatan, setKegiatan] = useState([]);

  useEffect(() => {
    axios
      .get("https://omahwayangklaten.or.id/wp-json/wp/v2/posts/?categories=31")
      .then((res) => {
        setKegiatan(res.data);
      });
  }, []);

  return (
    <Layout>
      <HomeNavbar />
      <div aria-label={"content"} className={"mt-4"}>
        <div
          aria-label={"slide-horizontal-content"}
          className={"overflow-x-scroll whitespace-nowrap md:text-center"}
        >
          <SimpleDisplay label={"Pelatihan"} />
          <SimpleDisplay label={"Karya Seni"} />
          <SimpleDisplay label={"Pelestarian"} />
        </div>
        <div aria-label={"cards"} className={"mt-8"}>
          <SimpleCard
            name={"About Us"}
            title={"Omah Wayang Klaten Mobile Website"}
            description={
              "Omah Wayang Klaten terbentuk atas dasar keprihatinan terhadap hidup, tumbuh dan berkembangnya budaya Jawa serta keinginan untuk mewujudkan sebuah pusat studi seni tradisional"
            }
            buttonLabel={"View More"}
            onClick={() => {
              history.push("/about");
            }}
          />
        </div>
        <SimpleCalendarCard />
        <div
          aria-label={"images-content"}
          className={"mt-8 grid md:grid-cols-2 grid-cols-1 gap-2"}
        >
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-2"}>
            {kegiatan.map((item, index) => (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
              />
            ))}
          </div>
        </div>
        <div className={"mt-12"}>
          <div aria-label={"Jasa"}>
            <SimpleTitle>Jasa yang kami tawarkan </SimpleTitle>
          </div>
          <div className={"overflow-x-scroll flex flex-nowrap mt-4"}>
            <SimpleDisplayNoImage>Fasilitas</SimpleDisplayNoImage>
            <SimpleDisplayNoImage>Sarana Prasarana</SimpleDisplayNoImage>
            <SimpleDisplayNoImage>Produk Kerajinan</SimpleDisplayNoImage>
            <SimpleDisplayNoImage>Pelatihan Seni</SimpleDisplayNoImage>
          </div>
        </div>
        <div aria-label={"Testimonial"} className={"mt-12"}>
          <div aria-label={"Jasa"}>
            <SimpleTitle>Testimonials</SimpleTitle>
          </div>
          <div className={"overflow-x-scroll flex flex-nowrap mt-4"}>
            <MainReview
              description={
                "Omah Wayang merupakan tempat pembelajaran bagi pecinta dan  pemerhati budaya "
              }
              author={"Amigo Grup "}
            />

            <MainReview
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              }
              author={"Lorem Ipsum"}
            />
          </div>
        </div>
        <SocialIcon />
      </div>
    </Layout>
  );
};
export default Home;
