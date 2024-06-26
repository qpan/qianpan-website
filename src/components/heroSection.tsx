'use client';

import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { MdDoubleArrow } from 'react-icons/md';
import heroImg from '/public/hero.jpg';
import { Menu } from '@/types';

function HeroSection() {
  return (
    <section id={`${Menu.Home}`}>
      <div className="relative flex h-500px">
        <Image
          src={heroImg}
          alt="Hero background image"
          priority
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 100%' }}
        />
        <div className="flex justify-center w-full z-0 mt-10">
          <div className="text-center">
            <h1 className="text-6xl max-md:text-4xl px-2">
              <span className="font-bold text-blue-500">Qian Pan</span>
            </h1>
            <h3 className="mt-4 text-black text-xl max-md:text-medium p-2">
              <p>
                <span className="bg-white">
                  A <span className="font-bold">Front-End Developer</span> with
                  knowledge in web development and design.
                </span>
              </p>
              <p>
                <span className="bg-white">
                  In addition to coding and learning new tech, I enjoy rock
                  climbing, drinking tea, reading, cooking, and traveling.
                </span>
              </p>
            </h3>
            <div className="mt-4"></div>
            <Button
              color="warning"
              size="lg"
              radius="none"
              variant="shadow"
              onClick={() => {
                const element = document.getElementById(Menu.Contact);
                element?.scrollIntoView();
              }}
            >
              <div className="flex flex-row justify-center items-center font-medium">
                <span className="mr-2">CONTACT ME</span>
                <MdDoubleArrow />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
