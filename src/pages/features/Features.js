import React from "react";
import "../../custom.css";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";

const Features = () => {
  const features = [
    {
      no: 1,
      name: "Web Designing",
      img: feature1,
      detail: "I Design Web site with CSS and CSS Framework  " ,
      color: "aqua",
    },
    {
      no: 2,
      name: "Web Develop",
      img: feature2,
      detail: " Web Developing service is best  provided by me .",
      color: "#ED3833",
    },
    {
      no: 3,
      name: "Sell Web site",
      img: feature3,
      detail: "I have some created projects these are ready to sell .",
      color: "#F6B443",
    },
  ];
  return (
    <div className="my-5 px-[15px]">
      <header className="text-center">
        <h6 className="fonts"> Features</h6>
        <h4 className="headings1">Awesome </h4>
        <h4 className="headings1">Client Services </h4>
        <p className="para1 normal">
         I try to best service to Client or buyer That's why they satisfied .
        </p>
        <p className="para1 normal"> My every projects is impleament by my Skills</p>
      </header>
      <main className="my-4 grid grid-cols-1 gap-[15px] md:grid-cols-2 lg:grid-cols-3 mt-4 mb-5">
        {features.map((feature) => {
          const { name, img, detail, color } = feature;

          return (
            <div class="card text-start  p-2 h-[230px]">
              <figures
                className={` h-[50px] w-[50px]  text-center p-2 rounded-[50%] `}
                style={{ backgroundColor: `${color}` }}
              >
                <img class="h-[30px] w-[30px]" src={img} alt="Title" />
              </figures>
              <h1 className="font-semibold">{name}</h1>
              <p className="para1 normal">
                {detail} <br /> Regularly I work with {name} <br />
               
              </p>
              <h6 className="text-slate-600"> See more ...</h6>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Features;
