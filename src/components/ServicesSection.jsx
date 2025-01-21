import LaptopIcon from "../assets/icons/laptop.svg?react";
import PrinterIcon from "../assets/icons/printer.svg?react";
import FolderIcon from "../assets/icons/folder.svg?react";
import MessagesIcon from "../assets/icons/messages.svg?react";

export const ServicesSection = () => {
  return (
    <section className="relative">
      <div className="container px-[132px]">
        <ul className="w-full flex gap-[37px]  mx-auto absolute top-[-76px]">
          <li className="bg-linkColour pt-[52px] pr-[24px] pl-[25px] pb-[40px] text-white rounded-[10px] shadow-customCardShadow">
            <LaptopIcon className="w-[50px] h-[44px] mb-[4px] mx-auto" />
            <h2 className="font-gilroy text-[21px] font-bold leading-[45px] mb-[4px] text-center">
              IT Services
            </h2>
            <p className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] mb-[18px] text-center w-[235px]">
              Recognising your frustrations with your print environment, IT
              services, document management & communications and finding a
              solution to overcome them.
            </p>
            <a
              href="#"
              className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] decoration-solid underline text-center block"
            >
              Learn More
            </a>
          </li>
          <li className="bg-white pt-[46px] pr-[24px] pl-[25px] pb-[45px] rounded-[10px] shadow-customCardShadow">
            <PrinterIcon className="w-[45px] h-[45px] mb-[4px] mx-auto" />
            <h2 className="font-gilroy text-[21px] font-bold leading-[45px] mb-[4px] text-center text-linkColour">
              Managed Print Services
            </h2>
            <p className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] mb-[18px] text-center text-black w-[235px]">
              Recognising your frustrations with your print environment, IT
              services, document management & communications and finding a
              solution to overcome them.
            </p>
            <a
              href="#"
              className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] decoration-solid underline text-center block text-linkColour"
            >
              Learn More
            </a>
          </li>
          <li className="bg-white pt-[48px] pr-[19px] pl-[19px] pb-[45px] rounded-[10px] shadow-customCardShadow">
            <FolderIcon className="w-[38px] h-[39px] mb-[4px] mx-auto" />
            <h2 className="font-gilroy text-[21px] font-bold leading-[45px] mb-[8px] text-center text-linkColour">
              Document Management
            </h2>
            <p className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] mb-[18px] text-center text-black w-[235px]">
              Recognising your frustrations with your print environment, IT
              services, document management & communications and finding a
              solution to overcome them.
            </p>
            <a
              href="#"
              className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] decoration-solid underline text-center block text-linkColour"
            >
              Learn More
            </a>
          </li>
          <li className="bg-white pt-[51px] pr-[20px] pl-[29px] pb-[45px] rounded-[10px] shadow-customCardShadow">
            <MessagesIcon className="w-[39px] h-[39px] mb-[1px] mx-auto" />
            <h2 className="font-gilroy text-[21px] font-bold leading-[45px] mb-[8px] text-center text-linkColour">
              Communications
            </h2>
            <p className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] mb-[18px] text-center text-black w-[235px]">
              Recognising your frustrations with your print environment, IT
              services, document management & communications and finding a
              solution to overcome them.
            </p>
            <a
              href="#"
              className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] decoration-solid underline text-center block text-linkColour"
            >
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
