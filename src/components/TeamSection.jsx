import CalendarIcon from "../assets/icons/team/calendar.svg?react";
import Icon28 from "../assets/icons/team/28.svg?react";
import SupportIcon from "../assets/icons/team/support.svg?react";
import ExpertIcon from "../assets/icons/team/expert.svg?react";
import Icon22 from "../assets/icons/team/22.svg?react";
import ContractsIcon from "../assets/icons/team/contracts.svg?react";
import Icon1650 from "../assets/icons/team/1,650.svg?react";
import TrainingIcon from "../assets/icons/team/training.svg?react";
import TrainingPinkIcon from "../assets/icons/team/training-pink.svg?react";
import AwardsPinkIcon from "../assets/icons/team/award.svg?react";
import Icon25 from "../assets/icons/team/25.svg?react";

export const TeamSection = () => {
  return (
    <section className="pt-[50px] xl:pt-[111px] pb-[50px] xl:pb-[129px]">
      <div className="container px-3 xl:px-[223px]">
        <h2 className="text-secondTextColour font-gilroy text-[30px] xl:text-[40px] font-bold leading-[48px] mb-[58px] text-center xl:w-[545px] mx-auto">
          A team of accredited experts that support you
        </h2>
        <ul className="w-full flex justify-between flex-wrap gap-y-[54px]">
          <li className="w-[275px] mx-auto">
            <div className="relative mx-auto w-[77px] mb-[14px]">
              <CalendarIcon />
              <div className="icon-28 flex justify-center items-center absolute z-10 rounded-[2px]">
                <Icon28 />
              </div>
            </div>
            <h3 className="font-gilroy text-secondTextColour text-[20px] font-semibold leading-[45px] text-center">
              Business years
            </h3>
            <p className="font-ibm-plex-mono text-center text-[12px] text-secondTextColour leading-[26px]">
              Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.
            </p>
          </li>
          <li className="w-[275px] mx-auto">
            <div className="relative mx-auto w-[82px] mb-[13px]">
              <SupportIcon />
            </div>
            <h3 className="font-gilroy text-secondTextColour text-[20px] font-semibold leading-[45px] text-center">
              On-site support
            </h3>
            <p className="font-ibm-plex-mono text-center text-[12px] text-secondTextColour leading-[26px]">
              Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.
            </p>
          </li>
          <li className="w-[275px] mx-auto">
            <div className="relative mx-auto w-[73px] mb-[8px]">
              <ExpertIcon />
              <div className="icon-22 flex justify-center items-center absolute z-10 rounded-[2px]">
                <Icon22 />
              </div>
            </div>
            <h3 className="font-gilroy text-secondTextColour text-[20px] font-semibold leading-[45px] text-center">
              Expert team members
            </h3>
            <p className="font-ibm-plex-mono text-center text-[12px] text-secondTextColour leading-[26px]">
              Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.
            </p>
          </li>
          <li className="w-[275px] mx-auto">
            <div className="relative mx-auto w-[73px] mb-[8px]">
              <ContractsIcon />
              <div className="icon-1650 flex justify-center items-center absolute z-10 rounded-[2px]">
                <Icon1650 />
              </div>
            </div>
            <h3 className="font-gilroy text-secondTextColour text-[20px] font-semibold leading-[45px] text-center">
              Live contracts
            </h3>
            <p className="font-ibm-plex-mono text-center text-[12px] text-secondTextColour leading-[26px]">
              Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.
            </p>
          </li>
          <li className="w-[275px] mx-auto">
            <div className="relative mx-auto w-[79px] mb-[8px]">
              <TrainingIcon />
              <TrainingPinkIcon className="absolute z-10 top-0" />
            </div>
            <h3 className="font-gilroy text-secondTextColour text-[20px] font-semibold leading-[45px] text-center">
              Guided training
            </h3>
            <p className="font-ibm-plex-mono text-center text-[12px] text-secondTextColour leading-[26px]">
              Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.
            </p>
          </li>
          <li className="w-[275px] mx-auto">
            <div className="relative mx-auto w-[80px] mb-[8px]">
              <AwardsPinkIcon />
              <div className="icon-25 flex justify-center items-center absolute z-10 rounded-[2px]">
                <Icon25 />
              </div>
            </div>
            <h3 className="font-gilroy text-secondTextColour text-[20px] font-semibold leading-[45px] text-center">
              Accreditations & awards
            </h3>
            <p className="font-ibm-plex-mono text-center text-[12px] text-secondTextColour leading-[26px]">
              Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
