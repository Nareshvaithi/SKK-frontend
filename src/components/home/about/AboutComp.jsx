import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";

const AboutComp = () => {
  const [aboutImg, setAboutImg] = useState([]);
  
  useEffect(() => {
    const fetchAboutImg = async () => {
      try {
        const getAboutImage = await axios.get("https://skk-api.konceptsdandd.com/bannerabout");
        setAboutImg(getAboutImage.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAboutImg();
  }, []);

  return (
    <div id="meetfounder" className="w-full h-auto bg-white py-10">
      <div className="container mx-auto w-full lg:w-4/5">
        <div className="text-center">
          <h1 className="headingText">Meet The Founder</h1>
          <p className="contentText pt-5">
            The roots of Saraswathy Kala Kendra (SKK) were planted in 1967 by T Narayanamurthy and Meera Narayan in Perambur, with just three students embracing Bharathanatyam and Carnatic Music.
          </p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row-reverse items-stretch gap-5 mt-5">
          {/* content */}
          <div className="w-full lg:w-7/12 font-mainFont2 flex flex-col justify-between overflow-hidden">
            <div className="overflow-hidden">
            <div className="pb-3">
              <h1 className="font-black">Smt. Kiran Mayee</h1>
              <p className="font-semibold">Bharatanatyam</p>
            </div>
              <p className="contentText line-clamp-[12] overflow-hidden">
                Our esteemed guru, Smt. Kiran Mayee, has illuminated her path in the realm of Bharatanatyam.
                Drawing from a lineage steeped in music and arts across generations, she stands as a beacon of
                inspiration and knowledge. Her legacy is woven into the fabric of Bharatanatyam's intricate
                tapestry, enriched by her great-grandfather, Mritanga Vidwan Shri Devarajulu Naidu, and
                grandmother, the accomplished vocalist Smt. Dhanalakshmi Ammal.Research and study spanned a year and a half before popular music director C. Sathya
                orchestrated the masterpiece in 2009. VEERATTAM revolutionized the dance field, with
                students performing it alongside the traditional Margam in their Arangetram, garnering
                immense appreciation.
              </p>
            </div>
            <div className="mt-2" onClick={() => { window.scrollTo(0, 0); }}>
              <Button
                text="Read More"
                link="/aboutskk"
                hoverbg="bg-white"
                textcolor="text-white"
                hovertextcolor="group-hover:text-themebrown"
                bg="bg-themebrown"
                px={"px-5"}
                py={"py-3"}
                border={"border"}
                borderColor={"border-themebrown"}
              />
            </div>
          </div>
          {/* image */}
          <div className="w-full lg:w-5/12 flex-grow-0 flex-shrink-0">
            {aboutImg.map(({ _id, url }) => (
              <img className="rounded-xl h-full object-cover" key={_id} src={url} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
