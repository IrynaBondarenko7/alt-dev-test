import LaptopIcon from "../assets/icons/laptop.svg?react";
import PrinterIcon from "../assets/icons/printer.svg?react";
import FolderIcon from "../assets/icons/folder.svg?react";
import MessagesIcon from "../assets/icons/messages.svg?react";
import EroxIcon from "../assets/icons/erox.svg?react";
import MicrosoftIcon from "../assets/icons/microsoft_logo.svg?react";
import HPIcon from "../assets/icons/hp.svg?react";
import CXIcon from "../assets/icons/3CX_logo.svg?react";
import VipreIcon from "../assets/icons/vipre.svg?react";
import FortinetIcon from "../assets/icons/fortinet.svg?react";

export const ServicesSection = () => {
  return (
    <section
      className="relative pt-[1478px] md:pt-[760px] xl:pt-[359px] pb-[70px] xl:pb-[121px]"
      id="services"
    >
      <div className="container px-2 xl:px-[132px]">
        <ul className="w-[90%] md:w-[605px] xl:w-full flex flex-col md:flex-row md:flex-wrap gap-[37px] mx-auto absolute top-[-35px] xl:top-[-76px] max-w-[480px] md:max-w-[768px] xl:max-w-[1247px] -translate-x-1/2 left-1/2">
          <li className="bg-linkColour pt-[52px] pr-[24px] pl-[25px] pb-[40px] text-white rounded-[10px] shadow-customCardShadow">
            <LaptopIcon className="mb-[4px] mx-auto" />
            <h2 className="font-gilroy text-[21px] font-bold leading-[45px] mb-[4px] text-center">
              IT Services
            </h2>
            <p className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] mb-[18px] text-center w-[235px] mx-auto">
              Recognising your frustrations with your print environment, IT
              services, document management & communications and finding a
              solution to overcome them.
            </p>
            <a
              href="#"
              className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] decoration-solid underline text-center block hover:text-[14px] focus:text-[14px] transition-all duration-300"
            >
              Learn More
            </a>
          </li>
          <li className="bg-white pt-[46px] pr-[24px] pl-[25px] pb-[45px] rounded-[10px] shadow-customCardShadow">
            <PrinterIcon className="mb-[4px] mx-auto" />
            <h2 className="font-gilroy text-[21px] font-bold leading-[45px] mb-[4px] text-center text-linkColour">
              Managed Print Services
            </h2>
            <p className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] mb-[18px] text-center text-black w-[235px] mx-auto">
              Recognising your frustrations with your print environment, IT
              services, document management & communications and finding a
              solution to overcome them.
            </p>
            <a
              href="#"
              className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] decoration-solid underline text-center block text-linkColour hover:text-[14px] focus:text-[14px] transition-all duration-300"
            >
              Learn More
            </a>
          </li>
          <li className="bg-white pt-[48px] pr-[19px] pl-[19px] pb-[45px] rounded-[10px] shadow-customCardShadow">
            <FolderIcon className="mb-[4px] mx-auto" />
            <h2 className="font-gilroy text-[21px] font-bold leading-[45px] mb-[8px] text-center text-linkColour">
              Document Management
            </h2>
            <p className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] mb-[18px] text-center text-black w-[235px] mx-auto">
              Recognising your frustrations with your print environment, IT
              services, document management & communications and finding a
              solution to overcome them.
            </p>
            <a
              href="#"
              className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] decoration-solid underline text-center block text-linkColour hover:text-[14px] focus:text-[14px] transition-all duration-300"
            >
              Learn More
            </a>
          </li>
          <li className="bg-white pt-[51px] pr-[20px] pl-[29px] pb-[45px] rounded-[10px] shadow-customCardShadow">
            <MessagesIcon className="mb-[1px] mx-auto" />
            <h2 className="font-gilroy text-[21px] font-bold leading-[45px] mb-[8px] text-center text-linkColour">
              Communications
            </h2>
            <p className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] mb-[18px] text-center text-black w-[235px] mx-auto">
              Recognising your frustrations with your print environment, IT
              services, document management & communications and finding a
              solution to overcome them.
            </p>
            <a
              href="#"
              className="font-ibm-plex-mono text-[12px] font-normal leading-[23px] decoration-solid underline text-center block text-linkColour hover:text-[14px] focus:text-[14px] transition-all duration-300"
            >
              Learn More
            </a>
          </li>
        </ul>
        <p className="text-secondTextColour font-ibm-plex-mono text-[16px] leading-[55px] text-center mb-4">
          Our Clients include
        </p>
        <ul className="max-w-[1116px] mx-auto flex flex-col items-center md:flex-row md:flex-wrap gap-10 xl:gap-[88px] md:w-[500px] xl:w-full xl:flex-nowrap">
          <li>
            <EroxIcon />
          </li>
          <li>
            <MicrosoftIcon />
          </li>
          <li>
            <HPIcon />
          </li>
          <li>
            <CXIcon />
          </li>
          <li>
            <VipreIcon />
          </li>
          <li>
            <FortinetIcon />
          </li>
        </ul>
      </div>
    </section>
  );
};
