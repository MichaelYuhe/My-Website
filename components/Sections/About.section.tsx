import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="font-sen my-8 flex flex-row items-center justify-between px-3">
      <div>
        <p className="cursor-pointer text-3xl font-bold text-white hover:underline">
          Derick Xia
        </p>
        <p className="mt-1 text-lg text-gray-300">
          Frontend Developer, Student
        </p>

        <p className="mt-4 text-gray-400">
          Start my Frontend Develop Jouney from 2021/7.
          <br />
          Working at Zoom currently. <br />
          Graduating in 2023 from Zhejiang University.
        </p>

        <p className="mt-4 text-gray-400">
          Looking for job opportunities.
          <br />
          Prefer a&nbsp;
          <span className="cursor-pointer hover:underline">
            work-life-balance
          </span>{" "}
          job.
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
