import type { NextComponentType } from "next";
import Link from "next/link";
import { useState } from "react";
import YouTube from "react-youtube";
import { Icon } from "../Misc/Icon.component";
import { AiOutlineGithub, MdWebAsset } from "../Misc/Icons.collection";
import { AiOutlinePlaySquare } from "react-icons/ai";

interface Props {
  githubUrl?: string;
  websiteUrl?: string;
  videoId?: string;
  desc: string;
  name: string;
}

const Project = ({ githubUrl, websiteUrl, videoId, desc, name }: Props) => {
  const [showYoutube, setShowYoutue] = useState(false);

  return (
    <div>
      {showYoutube && <YouTube videoId={videoId} />}
      <p className="flex flex-row items-center justify-between border-b-2 border-gray-500 py-1 text-slate-300">
        <span>
          <span className="mr-8 text-xl text-white">{name}</span>
          <span>{desc}</span>
        </span>
        <span className="flex gap-x-4">
          {githubUrl && <Icon icon={<AiOutlineGithub />} url={githubUrl} />}
          {websiteUrl && <Icon icon={<MdWebAsset />} url={websiteUrl} />}
          {videoId && (
            <div
              className="cursor-pointer rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300
            transition-all duration-150 hover:ring-2"
            >
              <AiOutlinePlaySquare
                onClick={() => {
                  setShowYoutue(!showYoutube);
                }}
              />
            </div>
          )}
        </span>
      </p>
    </div>
  );
};

const Projects: NextComponentType = () => {
  return (
    <div className="font-sen my-16 px-3" id="projects">
      <p className="mb-8 text-3xl font-bold text-white">Projects</p>
      <Project
        name="Greenet"
        desc="Beautify your own planet with real world environment-friendly actions."
        // videoId="rgYP63ZHKQ4"
      />
      <Project
        name="Todoist"
        desc="Manage your todo list online and get email notifications."
        githubUrl="https://github.com/MichaelYuhe/retodo"
        websiteUrl="https://retodo-ten.vercel.app/"
      />
      <Project
        name="Face Recognition"
        desc="Recognize, store and compare human faces information."
        githubUrl="https://github.com/MichaelYuhe/face-recognition"
        websiteUrl="https://face-recognize.vercel.app/"
      />
      <Project
        name="MyBoom"
        desc="Mobile social APP, create your topic to get votes and share life moments."
        websiteUrl="https://myboom.tw/"
        videoId="rgYP63ZHKQ4"
      />
      <Project
        name="Neckium"
        desc="An extension that helps free your hands and improve your cervical spine."
        githubUrl="https://github.com/MichaelYuhe/neckium"
        videoId="sZI996ouLEI"
      />
      <Project
        name="SoUart"
        desc="The official website of SoUart."
        websiteUrl="https://www.souartverse.com/"
      />
    </div>
  );
};

export default Projects;
