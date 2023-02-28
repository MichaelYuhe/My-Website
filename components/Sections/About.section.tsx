import type { NextComponentType } from "next";
import Image from "next/image";

const About: NextComponentType = () => {
  return (
    <div className="font-sen my-8 flex flex-row items-center justify-between px-3">
      <div>
        <p className="cursor-pointer text-3xl font-bold text-white hover:underline">
          Yuhang Xia
        </p>
        <p className="mt-1 text-lg text-gray-300">
          Frontend Developer, Student, Freelancer
        </p>

        <p className="mt-4 text-gray-400">
          Start my Frontend Develop Jouney from 2021/7.
          <br />
          Graduating in 2023 from Zhejiang University.
        </p>

        <p className="mt-4 text-gray-400">
          <a
            className="underline underline-offset-1 ml-2"
            href="https://zeabur.com">Zeabur
          </a>
          Co-Founder
          <br />
        </p>
      </div>

      <div className="custom:block hidden">
        <Image
          src="/assests/avatar.png"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
