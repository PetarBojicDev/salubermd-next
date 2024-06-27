import { useTranslations } from "next-intl";
import React from "react";
import { FaX } from "react-icons/fa6";
import welcomeTips from "@/public/images/welcomeTips.png"
import Image from "next/image";

const TipsModal: React.FC = () => {

  const translate = useTranslations();

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <div className="w-full inline-flex justify-between">
            <label className="font-bold text-lg">{translate("welcome_tips")}</label>
            <button>
              <FaX/>
            </button>
          </div>
        </form>
        <p className="py-4">{translate("welcome_tips_desc")}</p>
        <Image
          src={welcomeTips}
          alt="Welcome tips"
          style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}
        />
      </div>
    </dialog>
  );
}

export default TipsModal;
