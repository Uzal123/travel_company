import Location from "../public/location.svg";
import Flight from "../public/fight.svg";
import Hotel from "../public/hotel.svg";
import Activity from "../public/activity.svg";
import User from "../public/user.svg";
import Calendar from "../public/calendar.svg";
import Plane from "../public/plane.svg";
import Clock from "../public/clock.svg";
import Offer from "../public/offer.svg";
import Tag from "../public/tag.svg";
import Trend from "../public/trend.svg";
import Gift from "../public/gift.svg";
import Arrow from "../public/arrow.svg";
import Tick from "../public/tick.svg";
import styles from "../styles/Home.module.css";

export default function Home() {
    const items = [
      {
        id: "1",
        title: "Agra",
        img: "/image4.jpg",
      },
      {
        id: "2",
        title: "Agra",
        img: "/dest1.png",
      },
      {
        id: "3",
        title: "Agra",
        img: "/dest2.png",
      },
      {
        id: "4",
        title: "Agra",
        img: "/dest3.png",
      },
      {
        id: "5",
        title: "Agra",
        img: "/dest4.png",
      },
      {
        id: "7",
        title: "Kerla",
        img: "/dest5.png",
      },

    ];
  return (
    <div className="">
      <div className="absolute w-screen">
        <navbar className="flex bg-white justify-around">
          <div className="m-3 p-2">Logo</div>
          <ul className="flex">
            <a className="m-3 flex items-center gap-2 cursor-pointer p-2 text-gray-800 font-bold">
              <Location />
              Location
            </a>
            <a
              href="#section3"
              className="m-3 flex items-center gap-2 cursor-pointer p-2"
            >
              <Flight />
              Flights
            </a>
            <a className="m-3 flex items-center gap-2 cursor-pointer  p-2">
              <Hotel />
              Hotels
            </a>
            <a className="m-3 flex items-center gap-2 cursor-pointer p-2">
              <Activity />
              Activities
            </a>
          </ul>
          <ul className="flex">
            <a className="m-3 p-2">Support</a>
            <a className="m-4 text-primary p-1 px-3 rounded-xl border-primary border-2">
              Sign in
            </a>
          </ul>
        </navbar>
      </div>

      <section id="section1" className="w-screen">
        <div className="flex w-screen h-screen">
          <div className="w-1/2 flex items-center justify-end px-20">
            <div>
              <h2 className="text-4xl">Lets make a tour</h2>
              <h2 className="text-4xl font-bold text-primary">
                Discover the Beauty
              </h2>
              <div className="flex gap-4 pt-20 pb-12">
                <span className="p-2 activeinput border-b-2">
                  <Location />
                </span>
                <span className="p-2">
                  <Flight />
                </span>
                <span className="p-2">
                  <Hotel />
                </span>
              </div>
              <form className="grid grid-cols-2 gap-6">
                <div className="flex items-center border-b-2 gap-2">
                  <Location />
                  <input type="text" placeholder=" From where" />
                </div>
                <div className="flex items-center border-b-2 gap-2">
                  <Location />
                  <input type="text" placeholder=" To where" />
                </div>
                <div className="flex items-center border-b-2 gap-2">
                  <Calendar />
                  <input type="text" placeholder="16 Apr 2022" />
                </div>
                <div className="flex items-center border-b-2 gap-2">
                  <Calendar />
                  <input type="text" placeholder="26 Apr 2022" />
                </div>
                <div className="flex items-center border-b-2 gap-2">
                  <User />
                  <input type="number" placeholder="2 Person" />
                </div>
                <div className="flex col-span-2 bg-pink-500 justify-center rounded-lg p-2 cursor-pointer">
                  <btn>
                    <span className="text-white">Search Packages</span>
                  </btn>
                </div>
              </form>
            </div>
          </div>
          <div className="h-full w-1/2">
            <img src="Image1.png" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 flex justify-end">
            <img src="Image2.png" className="h-full w-full object-cover" />
          </div>
          <div className="w-1/2 pl-20 p-10 bg-gradient-to-r from-primary to-pink-500">
            <h2 className="flex items-center text-2xl gap-4 py-4 font-bold text-white">
              <Plane className="text-5xl" />
              Visit the greatest place
            </h2>
            <h2 className="flex items-center text-2xl gap-4 py-4 font-bold text-white">
              <Clock className="text-5xl" />
              Make your own plans.
            </h2>
            <h2 className="flex items-center text-2xl gap-4 py-4 font-bold text-white">
              <Offer className="text-5xl" />
              Save 50% on your next trip
            </h2>
          </div>
        </div>
      </section>
      <section id="section2">
        <div className="p-20">
          <div className="flex justify-center pb-10">
            <h2 className="text-4xl font-bold">Flash Deals</h2>
          </div>
          <div className="flex justify-center gap-3">
            <div className="w-80 relative">
              <span className="absolute flex text-white px-4 items-center gap-2 top-4 left-4 rounded-md bg-primary">
                <Trend />
                Trending
              </span>
              <img src="image3.jpg" className="object-cover w-80 h-80" />

              <p className="font-bold">
                Mermaid Beach Resort: The most joyful way to spend your holiday
              </p>
              <div className="flex py-4">
                <span className="flex items-center gap-2">
                  <Location />
                  Maldives
                </span>
                <span className="flex items-center gap-2 pl-4">
                  <Calendar />4 Days
                </span>
              </div>
              <div className="">
                <span className="line-through">$300</span>
              </div>
              <div className="">
                <span className="text-3xl font-bold text-primary">$ 250</span>
                <span>/Per Person</span>
              </div>
              <div className="flex items-center gap-2 bg-red-200 px-2 p-1 w-1/3 justify-center rounded-lg my-2">
                <Tag />
                <span>-15%</span>
              </div>
            </div>
            <div className="w-80 relative">
              <span className="absolute flex text-white px-4 items-center gap-2 top-4 left-4 rounded-md bg-primary">
                <Trend />
                Trending
              </span>
              <img src="image5.jpg" className="object-cover w-80 h-80" />

              <p className="font-bold">
                Mermaid Beach Resort: The most joyful way to spend your holiday
              </p>
              <div className="flex py-4">
                <span className="flex items-center gap-2">
                  <Location />
                  Maldives
                </span>
                <span className="flex items-center gap-2 pl-4">
                  <Calendar />4 Days
                </span>
              </div>
              <div className="">
                <span className="line-through">$300</span>
              </div>
              <div className="">
                <span className="text-3xl font-bold text-primary">$ 250</span>
                <span>/Per Person</span>
              </div>
              <div className="flex items-center gap-2 bg-red-200 px-2 p-1 w-1/3 justify-center rounded-lg my-2">
                <Tag />
                <span>-15%</span>
              </div>
            </div>
            <div className="w-80 relative">
              <span className="absolute flex text-white px-4 items-center gap-2 top-4 left-4 rounded-md bg-primary">
                <Trend />
                Trending
              </span>
              <img src="image4.jpg" className="object-cover w-80 h-80" />

              <p className="font-bold">
                Mermaid Beach Resort: The most joyful way to spend your holiday
              </p>
              <div className="flex py-4">
                <span className="flex items-center gap-2">
                  <Location />
                  Maldives
                </span>
                <span className="flex items-center gap-2 pl-4">
                  <Calendar />4 Days
                </span>
              </div>
              <div className="">
                <span className="line-through">$300</span>
              </div>
              <div className="">
                <span className="text-3xl font-bold text-primary">$ 250</span>
                <span>/Per Person</span>
              </div>
              <div className="flex items-center gap-2 bg-red-200 px-2 p-1 w-1/3 justify-center rounded-lg my-2">
                <Tag />
                <span>-15%</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 py-4">
            <div className="h-1 w-12 bg-primary "></div>
            <div className="h-1 w-12 bg-primary "></div>
            <div className="h-1 w-12 bg-primary "></div>
          </div>
        </div>
      </section>
      
      <section id="section3" className="">
        <div className="grid grid-rows-3 grid-cols-5 grid-flow-col gap-1 h-screen w-screen">
          <div className="flex justify-end col-span-2 bg-gradient-to-r from-primary to-pink-500">
            <div className="w-1/2 grid items-center">
              <Tick className="text-6xl" />
              <div>
                <h2 className="text-white text-2xl font-bold">
                  Popular Places
                </h2>
                <p className="text-white">
                  Enjoy the benefits of our packages to the sites where our
                  visitors have more fun. Properly arranged with low costing.
                </p>
              </div>
            </div>
          </div>
          <div className=""></div>
          <div className=""></div>
          {items.map((d) => (
            <div className="relative">
              <div className="absolute bottom-4 left-4">
                <h2 className="text-2xl font-bold text-white py-2">
                  {d.title}
                </h2>
                <div className="flex items-center text-white gap-2">
                  <Gift /> 10 Packages
                </div>
              </div>
              <img src={d.img} className="h-full w-full object-cover" />
            </div>
          ))}
          <div className="flex justify-center items-center p-8 row-span-2 bg-gradient-to-r from-orange-500 to-yellow-500">
            <div className="grid gap-10">
              <span className="text-white">
                Wanna travel to the most thrilling spot on the planet? We've set
                a bunch of surprises for you.
              </span>
              <span className="flex justify-between items-center text-white">
                Click to view more
                <Arrow className="text-5xl" />
              </span>
            </div>
          </div>
          <div className="row-span-3 bg-slate-400"></div>
        </div>
      </section>
      <div className="m-20"></div>
      <section id="section4" className="w-screen h-screen">
        <div className="flex items-center w-full h-full">
          <img src="/Image11.png" className="w-2/5 h-full object-cover" />
          <div className="w-2/5 h-full">
            <img src="/Image12.png" className="h-3/5 w-full object-cover" />
            <div className="h-2/5 pl-20 pt-10 bg-green-500">
              <h2 className="text-2xl">Share a trip to</h2>
              <h2 className="text-primary text-4xl font-bold py-2">Dubai</h2>
              <p className="text-sm">
                Dubai, a city with many faces, is one of the world's most
                popular tourist destinations. The Burj Khalifa, the world's
                highest tower, is located here. The futuristic beauty of new
                buildings is at the heart of Dubai tourism.
              </p>
              <div className="flex justify-end items-center pt-10">
                <span className="px-10 font-bold text-orange-500">
                  Read more
                </span>
                <Arrow className="text-4xl text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="m-20"></div>
      <section>
        <div className="grid grid-rows-3 grid-cols-5 grid-flow-col gap-1 h-screen w-screen overflow-hidden">
          <div className="row-span-3"></div>

          {items.map((d) => (
            <div className="relative">
              <div className="absolute bottom-4 left-4">
                <h2 className="text-2xl font-bold text-white py-2">
                  {d.title}
                </h2>
                <div className="flex items-center text-white gap-2">
                  <Gift /> 10 Packages
                </div>
              </div>
              <img src={d.img} className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="flex justify-center items-center p-8 row-span-2 bg-gradient-to-r from-orange-500 to-yellow-500">
            <div className="grid gap-10">
              <span className="text-white">
                Wanna travel to the most thrilling spot on the planet? We've set
                a bunch of surprises for you.
              </span>
              <span className="flex justify-between items-center text-white">
                Click to view more
                <Arrow className="text-5xl" />
              </span>
            </div>
          </div>
          <div className="row-span-3 bg-slate-400"></div>
        </div>
      </section>
    </div>
  );
}
