import React from "react";
import Brands from "./brands";
import Features from "./features";
import Achievements from "./achievements";
import Headline from "./headline";
import FashionTrends from "./fashion-trends";
import ManageProjects from "./manage-projects";
import Hero from "./hero";
import Testimonials from "./testimonials";
import Layout from "./layout";

export default function HomePageDesign() {
  return (
    <Layout>
      <Hero />
      <Brands />
      <Features />
      <Testimonials />
      <Achievements />
      <Headline />
      <FashionTrends />
      <ManageProjects />
    </Layout>
  );
}
