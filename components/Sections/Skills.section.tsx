import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="font-sen my-16 px-3 text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills</p>

      <div className="text-md custom:text-lg my-8 flex flex-col font-medium md:text-xl">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white mr-2">React </span>
          as my Frontend Frame work
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white mr-2">JavaScript & TypeScript </span>
          as my main language
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white mr-2">Tailwind CSS </span>
          as my CSS framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white mr-2">Next.js & Go </span>
          currently learning
        </p>
      </div>

      <p className="text-lg font-medium text-slate-300">
        ...more skills include{" "}
        <span className="text-white">Chrome Extension </span>,
        <span className="text-white">Vue.js </span>,
        <span className="text-white">HTML & CSS and so on.</span>
      </p>
    </div>
  );
};

export default Skills;
