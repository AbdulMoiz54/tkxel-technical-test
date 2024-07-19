import React from "react";
import BGImage from "../../../images/other-images/manage-project.png";
import GooglePlay from "../../../images/GooglePlay.svg";
import AppStore from "../../../images/AppStore.svg";

export default function ManageProjects() {
  return (
    <div
      className="bg-seagreen lg:bg-cover lg:bg-center lg:bg-no-repeat"
      style={{ backgroundImage: `url(${BGImage})` }}
    >
      <div className="max-w-[1110px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="py-[68px] flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="text-h2 font-extrabold">
            Manage your projects <br /> from your mobile
          </p>
          <p className="text-lead-1 max-w-[540px] mt-[8px]">
            Download the app to manage your projects, keep track of the progress
            and complete tasks without procrastinating. Stay on track and
            complete on time!
          </p>
          <div className="mt-[48px]">
            <p className="text-lead-1 font-medium">Get the App</p>
            <div className="flex mt-[8px] items-center gap-x-[12px] justify-center lg:justify-start">
              <img
                src={GooglePlay}
                alt="Google Play"
                className="w-[135px] h-[40px]"
              />
              <img
                src={AppStore}
                alt="App Store"
                className="w-[135px] h-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
