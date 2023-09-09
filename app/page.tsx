import Image from "next/image";

import prework_Image1 from "@/images/prework_Image1.png";
import prework_Image2 from "@/images/prework_Image2.png";
import prework_Image3 from "@/images/prework_Image3.png";
import prework_Image4 from "@/images/prework_Image4.png";
import prework_Image5 from "@/images/prework_Image5.png";
import prework_Image6 from "@/images/prework_Image6.png";
import Button from "@/components/Button";
import Reactions from "@/components/Reactions";
import TextBox from "@/components/TextBox";

const feature_stories = [
  "Compare Prices: Find The Best Computer Accessory",
  "Why You Should Use External IT Support",
  "Why You Should Use In-House IT Support",
  "Choosing The Best Audio Player Software",
  "Addiction When Gambling Becomes A Problem",
];

export default function Home() {
  return (
    <main className="gap-5 min-h-screen bg-backgroundColor justify-between p-[40px] pt-[90px] overflow-x-hidden main-width">
      <div className="flex flex-col items-center justify-center relative bg-black card1 p-20">
        <Image
          className="opacity-40 object-cover"
          layout="fill"
          src={prework_Image1}
          alt="prework_Image1"
        />
        <div className="flex flex-col z-10 items-center p-12 sm:p-2 uppercase text-white">
          <TextBox title="Finance" />
          <p className="font-extrabold text-4xl sm:w-[275px] sm:text-xl text-center pt-3">
            This tie brand is bucking the retail apocalypse with a massive store
            expansion
          </p>
          <p className="md:hidden sm:hidden text-base opacity-70 text-center pt-3 p-16">
            There is a lot of exciting stuff going on in the stars above us that
            make astronomy so much fun. The truth is the universe is a
            constantly changing, moving.
          </p>
        </div>
        <Reactions />
      </div>
      <div className="flex flex-col items-center relative bg-black card2">
        <Image
          className="opacity-40 object-cover"
          layout="fill"
          src={prework_Image5}
          alt="prework_Image5"
        />
        <div className="flex flex-col z-10 items-start pt-4 uppercase text-white">
          <TextBox title="Finance" />
          <p className="font-semibold text-2xl text-left pt-3 pl-5 w-[90%]">
            Unmatched Toner Cartridge Quality: 20% Less Than OEM Price
          </p>
        </div>
        <Reactions />
      </div>
      <div className="flex flex-col gap-y-7 bg-primaryColor text-white p-7 card3">
        <div>
          <span className=" text-3xl font-extrabold uppercase">
            This tie brand is bucking the retail apocalypse with a massive store
            expansion
          </span>
        </div>
        <div>
          <span className="text-lg font-light">
            The universe is constantly changing, moving. Some would say it’s a
            “living” thing because you never know what you are going to see on
            any given night.
          </span>
        </div>
        <div>
          <Button text="READ MORE" color="white" />
        </div>
      </div>
      <div className=" flex flex-col divide-y gap-3 border bg-white p-5 card4">
        <div className="pb-5">
          <span className="font-medium uppercase text-sm">
            Featured stories
          </span>
        </div>
        {feature_stories.map((story, index) => (
          <div key={index} className="flex items-center gap-3 py-3">
            <span className="text-gray-400 text-lg font-medium">
              {index + 1}
            </span>
            <span className="font-medium text-lg">{story}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center relative bg-black card5">
        <Image
          className="opacity-40 object-cover"
          layout="fill"
          src={prework_Image2}
          alt="prework_Image2"
        />
        <div className="flex flex-col z-10 items-start pt-4 uppercase text-white">
          <TextBox title="Entertainment" />
          <p className="font-semibold text-2xl text-left pt-3 pl-5 w-[80%]">
            Here’s The Difference Between Used, Refurbished, Remarketed, And
            Rebuilt Electronic Equipment
          </p>
        </div>
        <Reactions />
      </div>
      <div className="flex flex-col items-center relative bg-black card6">
        <Image
          className="opacity-40 object-cover"
          layout="fill"
          src={prework_Image3}
          alt="prework_Image3"
        />
        <div className="flex flex-col z-10 items-start pt-4 uppercase text-white">
          <TextBox title="Finance" />
          <p className="font-semibold text-2xl text-left pt-3 pl-5 w-[90%]">
            Optimize Your PC’s Performance With These 3 Programs
          </p>
        </div>
        <Reactions />
      </div>
      <div className=" flex flex-col items-center relative bg-black card7">
        <Image
          className="opacity-40 object-cover"
          layout="fill"
          src={prework_Image4}
          alt="prework_Image4"
        />
        <div className="flex flex-col z-10 items-start pt-4 uppercase text-white">
          <TextBox title="Gaming" />
          <p className="font-semibold text-2xl text-left pt-3 pl-5 w-[90%]">
            Search Engine Optimization And Advertising
          </p>
        </div>
        <Reactions />
      </div>

      <div className="flex flex-col items-center relative bg-black card8">
        <Image
          className="opacity-40 object-cover"
          layout="fill"
          src={prework_Image6}
          alt="prework_Image6"
        />
        <div className="flex flex-col z-10 items-start pt-4 uppercase text-white">
          <TextBox title="Technology" />
          <p className="font-semibold text-2xl text-left pt-3 pl-5 w-[90%]">
            Where To Find Unique Myspace Layouts
          </p>
        </div>
        <Reactions />
      </div>
    </main>
  );
}
