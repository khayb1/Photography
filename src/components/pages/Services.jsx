import React from "react";
import Testimonials from "../Testimonials";
import MainHeader from "../MainHeader";
import Pricing from "../Pricing";
import { ServiceCard } from "../ServiceCard";
import { CiVideoOn, CiCamera, CiPen } from 'react-icons/ci';
import { GiWoodFrame } from "react-icons/gi";


export const Services = () => {
  return (
    <>
      <MainHeader 
        header='SERVICES'
        text = 'I provide wide range of services from photoshoot, party photoshoot, event coverage, wedding, picture frame and more.'
      />
      <div className="flex justify-center gap-10 flex-wrap py-10 px-3 md:py-4 lg:py-6 xl:py-8 cursor-pointer">
      <ServiceCard 
        ServiceIcon = {<CiCamera />}
        ServiceTitle = 'Photography Services:'
        SerivceInfo = 'Weddings, birthdays, anniversaries, corporate events, conferences, and parties.'
        />
        <ServiceCard 
        ServiceIcon = {<CiVideoOn />}
        ServiceTitle = 'Videography Services:'
        SerivceInfo = 'Highlight reels for weddings, events, or corporate promotions.Short promotional videos. '
      />
        <ServiceCard 
        ServiceIcon = {<CiPen />}
        ServiceTitle = 'Editing and Post-Production:'
        SerivceInfo = 'Color correction, retouching, and enhancement. Adding music and effects.'
      />
      <ServiceCard 
        ServiceIcon = {<GiWoodFrame />}
        ServiceTitle = 'Picture Frames:'
        SerivceInfo = 'Picture frames according to your style of preference either large or small.'
      />
      </div>
      <Pricing />
    <Testimonials />
    </> 
  )
};
