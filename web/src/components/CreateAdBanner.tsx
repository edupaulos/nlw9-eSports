import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

interface AdBanner {
  title: string;
  subtitle: string;
  buttonTitle: string;
}

export const CreateAdBanner = ({ title, subtitle, buttonTitle }: AdBanner) => {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden ">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            {title}
          </strong>
          <span className="text-zinc-400 block">{subtitle}</span>
        </div>
        <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          {buttonTitle}
        </Dialog.Trigger>
      </div>
    </div>
  );
};
