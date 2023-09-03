import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Gesture from "../assets/gesture.svg";
import Money from "../assets/money.svg";
import Tri from "../assets/tri.svg";
import Header from "../components/Header";


export default function Home() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main className="bg-[#2B00E90D]/5 min-h-screen relative">
      <Header />
      <div className="w-full h-screen flex absolute top-0 left-0 z-0">
        <div className="w-[50%]"></div>
        <div className={`flex-1 h-screen form`}></div>
      </div>
      <div className="max-w-[1200px] mx-auto absolute top-0 left-0 right-0 overflow-x-hidden z-10">
        <div className="flex gap-y-5 flex-col md:flex-row  justify-center items-center w-full h-full ">
          <div className="md:flex-1 flex flex-col justify-center md:items-center md:block mt-32 md:mt-20">
            <h2
              className="font-medium text-[24px] sm:text-[32px] sm:max-w-[508px] text-[#190087] px-4"
              data-aos="zoom-out"
            >
              Be the First to Experience <br />
              <span className="text-[#4BA318]">Thriftpals</span>: Join the
              Waitlist Now!
            </h2>
            <p
              className="sm:max-w-[400px] text-[#333333] mt-3 font-light px-4"
              data-aos="zoom-out"
            >
              Join the waitlist for early access to our mobile app and
              revolutionize the way you save. Take control of your finances
              today!
            </p>
            <img src={Gesture} className="hidden md:inline ml-10" alt="trust" />
            <img
              src={Money}
              className="hidden md:inline mt-24 -ml-10 animate-bounce"
              alt="thrift money"
            />
          </div>
          <form
            action="https://api.sheetmonkey.io/form/sLnXJaKbZgckMQTuXy88hT"
            method="POST"
            encType="multipart/form-data"
            className={`md:w-[50%] md:h-screen flex flex-col gap-6 items-center justify-center p-4 overflow-x-hidden`}
            data-aos="fade-left"
          >
            <input
              type="hidden"
              name="x-sheetmonkey-redirect"
              value="https://thriftpals.com/success"
            // value="http://localhost:3001/success"/
            />
            <div>
              <div className="">
                <label
                  htmlFor="name"
                  className="block mb-3 text-[#190087] font-medium"
                >
                  Full name
                </label>
                <input
                  ref={inputRef}
                  type="text"
                  name="name"
                  className="md:bg-[#F2F2F299]/60 w-[330px] xs:w-[420px] sm:w-[450px] md:w-[350px] xl:w-[505px] h-[52px] rounded-[10px] p-4 outline-none"
                  placeholder="Enter your full name"
                  required
                />
                <input
                  type="hidden"
                  name="Created"
                  value="x-sheetmonkey-current-date-time"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="name"
                  className="block mb-3 text-[#190087] font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="md:bg-[#F2F2F299]/60 w-[330px] xs:w-[420px] sm:w-[450px] md:w-[350px] xl:w-[505px] h-[52px] rounded-[10px] p-4 outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mt-10">
                <button className="bg-[#190087] cursor-pointer w-[140] px-6 py-2 rounded-md text-white transition-all duration-300 hover:scale-105">
                  Join waitlist
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute top-10 right-[20%] ">
        <img
          src={Tri}
          className="hidden md:inline mt-24 -ml-10 animate-pulse w-[100px]"
          alt="thriftpals"
        />
      </div>
    </main>
  );
}
