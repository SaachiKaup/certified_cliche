import flutter from "../public/flutter-logo.svg";
import arVr from "../public/AR-VR.svg";
import woman from "../public/woman.svg";
import amazon from "../public/amazon.svg";
import puppy from "../public/puppy.svg";
import metaverse from "../public/metaverse.svg";

const HomeComponent = () => {
  const certificateData = [
    {
      id: 1,
      img: flutter.src,
      heading: "Flutter logo",
      para: "this is a flutter logo",
    },
    {
      id: 2,
      img: arVr.src,
      heading: "Flutter logo",
      para: "this is a flutter logo",
    },
    {
      id: 3,
      img: woman.src,
      heading: "Flutter logo",
      para: "this is a flutter logo",
    },
    {
      id: 4,
      img: amazon.src,
      heading: "Flutter logo",
      para: "this is a flutter logo",
    },
    {
      id: 5,
      img: puppy.src,
      heading: "Flutter logo",
      para: "this is a flutter logo",
    },
    {
      id: 6,
      img: amazon.src,
      heading: "Flutter logo",
      para: "this is a flutter logo",
    },
    {
      id: 7,
      img: flutter.src,
      heading: "Flutter logo",
      para: "this is a flutter logo",
    },
    {
      id: 8,
      img: metaverse.src,
      heading: "Flutter logo",
      para: "this is a flutter logo",
    },
  ];
  return (
    <div className="m-4 md:m-6 lg:m-8 ">
      <h3 className="md:text-[1.3rem] text-[1.2rem] font-semibold ml-3 md:ml-5 lg:ml-7">
        My Certificates
      </h3>

      <div className="flex justify-center items-center">
        <div className="w-[95%]  bg-[#bbbaba] h-[1px] mb-10 mt-3 "></div>
      </div>
      <div className="flex flex-wrap items-center md:justify-start justify-center">
        {certificateData.map((item) => {
          const { id } = item;

          return (
            <div key={id}>
              <HomeCard {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeComponent;

const HomeCard = ({ img, heading, para }) => {
  return (
    <div className="w-[210px] h-[254px] m-6 md:m-7 lg:m-8 rounded-[10%] border-[1px] border-[transparent] border-solid bg-[#f1f1f1]">
      <div>
        <img src={img} alt="" className="w-[284px] h-[196px] " />
      </div>
      <div className="flex-col justify-center flex items-start ">
        <h5 className="font-semibold my-1 ml-4 text-[14px]">{heading}</h5>
        <p className="ml-4 -mt-1 text-[12px]">{para}</p>
      </div>
    </div>
  );
};