import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export const InsightsSection = () => {
  const faq = [
    "Do you offer 24hr support?",
    " Do you sell Xerox printers?",
    "Can I upgrade my support package?",
    "Do you offer 24hr support?",
    " Do you sell Xerox printers?",
    " Do you sell Xerox printers?",
    " Do you sell Xerox printers?",
    " Do you sell Xerox printers?",
    " Do you sell Xerox printers?",
  ];

  const lastElement =
    "py-3.5 border-t-[1px] border-b-[1px] border-strokeColour ";
  const middleElement = "py-3.5 border-t-[1px] border-strokeColour ";

  return (
    <div className="pt-[475px] pb-[161px] bg-black px-[133px]">
      <div className="container text-white">
        <section>
          <h2 className="font-gilroy text-center text-[40px] font-bold leading-[58px] mb-7">
            The business process problem solvers.
          </h2>
          <ul className="flex gap-[78px] max-w-[1018px] mx-auto">
            <li>
              <p className="font-ibm-plex-mono text-[16px] leading-[30px]">
                Recognising your frustrations with your print environment, IT
                services, document management & communications and finding a
                solution to overcome them. Recognising your frustrations with
                your print environment, IT services, document management &
                communications and finding a solution to overcome them.
              </p>
            </li>
            <li>
              <p className="font-ibm-plex-mono text-[16px] leading-[30px]">
                Recognising your frustrations with your print environment, IT
                services, document management & communications and finding a
                solution to overcome them. Recognising your frustrations with
                your print environment, IT services, document management &
                communications and finding a solution to overcome them.
              </p>
            </li>
          </ul>
        </section>
        <section className="mt-[175px]">
          <div>
            <h2 className="font-gilroy text-[40px] font-bold leading-[58px]">
              Insights & News
            </h2>
            <div>
              <img
                src="/images/insights/insights-1.png"
                alt="insights"
                width={602}
              />
              <p className="font-ibm-plex-mono text-[16px] leading-[30px]">
                15/06/2024
              </p>
              <h3 className="font-gilroy text-[25px] font-bold leading-[33px]">
                What is Microsoft Loop and how does it work
              </h3>
            </div>
            <div>
              <img src="/images/insights/insights-2.png" alt="insights" />
              <p className="font-ibm-plex-mono text-[16px] leading-[30px]">
                15/06/2024
              </p>
              <h3 className="font-gilroy text-[25px] font-bold leading-[33px]">
                Boost productivity within your law firm with xerox technology
              </h3>
            </div>
            <div>
              <img src="/images/insights/insights-3.png" alt="insights" />
              <p className="font-ibm-plex-mono text-[16px] leading-[30px]">
                15/06/2024
              </p>
              <h3 className="font-gilroy text-[25px] font-bold leading-[33px]">
                What is Microsoft Loop and how does it work
              </h3>
            </div>
          </div>
          <div className=" w-full ">
            <h2 className="font-gilroy text-[40px] font-bold leading-[58px]">
              FAQ’s
            </h2>
            <div className="mx-auto w-full max-w-lg  rounded-xl">
              {faq.map((question, i) => {
                return (
                  <Disclosure
                    as="div"
                    className={
                      i === faq.length - 1 ? lastElement : middleElement
                    }
                    key={i}
                  >
                    <DisclosureButton className="group flex w-full items-center justify-between">
                      <span className="font-gilroy text-[23px] font-medium leading-[45px] text-white group-data-[hover]:text-white/80">
                        {question}
                      </span>
                      <p className="font-gilroy text-[23px] font-medium leading-[45px] group-data-[hover]:fill-white/50 group-data-[open]:rotate-180">
                        +
                      </p>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptas, quis esse nostrum itaque ea minima libero
                      commodi nobis reprehenderit.
                    </DisclosurePanel>
                  </Disclosure>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
