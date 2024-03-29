'use client'
import React from "react";
import illumina_logo_text from "../images/illumina_logo_text.png";
import { useRouter } from 'next/navigation';
// import ParticlesBackground from './ParticlesBackground';

type Props = {};

export default function Hero({}: Props) {
  const router = useRouter()
  return (
    <div className="h-screen flex flex-col sm:flex-col items-center justify-center align-center text-center overflow-hidden p-5 sm:pb-28">
      {/* <ParticlesBackground/> */}
      <img
        className="relative rounded-full sm:w-[50vw] w-[100vw] mx-auto mb-20"
        src={illumina_logo_text.src}
        alt="ILLUMINA LOGO TEXT"
      />
      <button className="text-xl p-3 border border-[rgba(110,50,169,255)]  text-[rgb(255,255,255)] rounded-lg flex items-center justify-center"
      onClick={()=>{router.push('/login')}}>
        Get Started
      </button>
      {/*
      <p className="text-lg sm:text-xl text-center leading-10 sm:leading-10 sm:pl-20 sm:pr-20">
        Embark on a transformative journey by participating in the renowned
        Illumina hackathon, meticulously organized by VIT Vellore's IE(I)
        Student Chapter. Building on the resounding success of the previous
        edition, this event beckons you to partake in a thrilling experience
        dedicated to fostering creativity, innovation, and collaboration.
      </p>*/}
    </div>
  );
}