import React from "react";
import Airbnb from "../../../images/AirbnbLogo.svg";
import Hubspot from "../../../images/HubspotLogo.svg";
import BookMyShow from "../../../images/BookMyShowLogo.svg";
export default function Testimonials() {
  return (
    <section class="testimonials mt-[64px]">
      <div class="max-w-[1110px] mx-auto w-full py-[64px]">
        <div class="testimonials__wrapper">
          <div class="testimonials__wrapper__item testimonials__wrapper__item--left">
            <svg
              width="143"
              height="120"
              viewBox="0 0 143 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M142.373 18.7419C121.049 29.1541 110.387 41.3882 110.387 55.4447C119.476 56.4859 126.992 60.1735 132.934 66.5076C138.877 72.8417 141.849 80.1735 141.849 88.5033C141.849 97.3536 138.965 104.816 133.197 110.889C127.428 116.963 120.175 120 111.435 120C101.647 120 93.1701 116.052 86.0037 108.156C78.8374 100.26 75.2542 90.6725 75.2542 79.3926C75.2542 45.553 94.306 19.089 132.41 0L142.373 18.7419ZM67.1186 18.7419C45.6196 29.1541 34.8702 41.3882 34.8702 55.4447C44.134 56.4859 51.7373 60.1735 57.6801 66.5076C63.6229 72.8417 66.5943 80.1735 66.5943 88.5033C66.5943 97.3536 63.6666 104.816 57.8112 110.889C51.9557 116.963 44.6584 120 35.919 120C26.1308 120 17.6973 116.052 10.6184 108.156C3.53942 100.26 0 90.6725 0 79.3926C0 45.553 18.9643 19.089 56.8935 0L67.1186 18.7419Z"
                fill="#2EC5CE"
              />
            </svg>

            <div class="testimonials__header">
              <div class="testimonials__header__title">
                Real Stories from Real Customers
              </div>
              <div class="testimonials__header__desc">
                Get inspired by these stories.
              </div>
            </div>
            <div class="testimonials__item">
              <div class="testimonials__item__image">
                <img src={Hubspot} />
              </div>
              <div class="testimonials__item__content__wrapper">
                {/* <svg class="icon icon-quote-mark">
                  <use xlink:href="#icon-quote-mark"></use>
                </svg> */}
                <div class="testimonials__item__comment__wrapper">
                  <div class="testimonials__item__comment">
                    To quickly start my startup landing page design, I was
                    looking for a landing page UI Kit. Landify is one of the
                    best landing page UI kit I have come across. It’s so
                    flexible, well organised and easily editable.
                  </div>
                  <div class="testimonials__item__person">
                    <div class="testimonials__item__person--name">
                      Floyd Miles
                    </div>
                    <div class="testimonials__item__person--degree">
                      Vice President, GoPro
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonials__wrapper__item testimonials__wrapper__item--right">
            <div class="testimonials__item">
              <div class="testimonials__item__image">
                <img src={Airbnb} />
              </div>
              <div class="testimonials__item__content__wrapper">
                <div class="testimonials__item__comment__wrapper">
                  <div class="testimonials__item__comment">
                    I used landify and created a landing page for my startup
                    within a week. The Landify UI Kit is simple and highly
                    intuitive, so anyone can use it.
                  </div>
                  <div class="testimonials__item__person">
                    <div class="testimonials__item__person--name">
                      Jane Cooper
                    </div>
                    <div class="testimonials__item__person--degree">
                      CEO, Airbnb
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="testimonials__item">
              <div class="testimonials__item__image">
                <img src={BookMyShow} />
              </div>
              <div class="testimonials__item__content__wrapper">
                {/* <svg class="icon icon-quote-mark">
                  <use xlink:href="#icon-quote-mark"></use>
                </svg> */}
                <div class="testimonials__item__comment__wrapper">
                  <div class="testimonials__item__comment">
                    Landify saved our time in designing my company page.
                  </div>
                  <div class="testimonials__item__person">
                    <div class="testimonials__item__person--name">
                      Kristin Watson
                    </div>
                    <div class="testimonials__item__person--degree">
                      Co-Founder, BookMyShow
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
