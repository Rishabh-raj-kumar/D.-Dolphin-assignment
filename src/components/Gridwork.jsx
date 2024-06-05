import React from "react";

function Gridwork() {
  return (
    <div
      className=" w-screen h-[70vh] grid place-items-center my-20 border-t-2 border-b-2 "
      style={{ background: "#191919" }}
    >
      <div className=" w-4/5 grid--mansoory border-l-2 border-r-2 h-full">
        <div className=" box1 flex items-center justify-center text-white text-[4rem]">
          <h1>
            work with us <br /> grow with us
          </h1>
        </div>
        <div className=" box2 text-white flex px-3 flex-col py-4 gap-6">
          <h1 className=" text-2xl font-semibold">Location</h1>
          <p>
            186, Gurguj, Ward No.13, Lajpat Nagar
            <br /> Near Punjab Sindh Bank, Sumerpur
            <br />
            Hamirpur, Uttar Pradesh (India),
          </p>
        </div>
        <div className=" box3 text-white flex px-3 flex-col py-4 gap-6">
          <h1 className=" text-2xl font-semibold">Contact</h1>
          <p>
            social.d.dolphin@ddolphins.com <br /> +919415488382 <br />
            ddolphins.in
          </p>
        </div>
        <div className=" box4 text-white flex px-3 flex-col py-4 gap-6">
          <h1 className=" text-2xl font-semibold">Working Hour</h1>
          <p className=" capitalize">
            monday - saturday
            <br />
            9:00am - 9:00pm
          </p>
        </div>
        <div className=" box5 text-white flex px-3 flex-col py-4 gap-6">
          <h1 className=" text-2xl font-semibold">Stalk Us</h1>
          <p className=" capitalize">
            instagram
            <br />
            facebook <br />
            linkdin <br />
            twitter
            <br />
            youtube
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gridwork;
