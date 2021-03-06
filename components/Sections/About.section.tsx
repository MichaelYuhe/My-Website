import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white hover:underline cursor-pointer">MichaelYuhe</p>
        <p className="mt-1 text-lg text-gray-300">
          Frontend Developer, Student
        </p>

        <p className="mt-4 text-gray-400">
          I enjoyed playing basketball, <br />
          travelling, watching movies in my daily life. <br />
          Of course I love coding, too.
        </p>

        <p className="mt-4 text-gray-400">
          Start my Frontend Develop Jouney from 2021/7.<br />
          Working at Netease currently. <br />
          Graduating next year from ZJU.
        </p>

        <p className="mt-4 text-gray-400">
          Looking for job opportunities.<br />
          Prefer a&nbsp;
          <span className="hover:underline cursor-pointer">work-life-balance</span> job.
          <br />
        </p>

      </div>

      <div className="hidden custom:block">
        <Image
          src="/assests/avatar.jpg"
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
