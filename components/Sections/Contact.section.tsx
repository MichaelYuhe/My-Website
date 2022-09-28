import type { NextComponentType } from "next";
import {
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
  BsTelegram,
} from "../Misc/Icons.collection";
import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="font-sen px-3" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/michaelyuhe" />
        <Icon icon={<AiOutlineTwitter />} url="https://twitter.com/coooolxyh" />
        <Icon icon={<MdEmail />} url="mailto:xiayuhang1106@gmail.com" />
        <Icon icon={<BsTelegram />} url="https://t.me/michaelyuhe" />
      </div>
    </div>
  );
};

export default Contact;
