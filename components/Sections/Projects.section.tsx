import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 xl:flex-row">
        <Link href="https://myboom.tw/" passHref>
          <a
            className="h-[7rem] w-[15rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] via-[#4639c4] to-[#818CF8] p-1 text-white duration-200 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">MyBoom</p>
              <p>A space to showcase your own popular topics</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/MichaelYuhe/Greenet" passHref>
          <a
            className="h-[7rem] w-[15rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#35c518] via-[#4ea45d] to-[#7ff0b6] p-1 text-white duration-200 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Greenet</p>
              <p>Change your planet with real environmental actions</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
