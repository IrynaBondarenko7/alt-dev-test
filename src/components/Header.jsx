export const Header = () => {
  return (
    <header className="absolute top-0 text-white left-1/2 -translate-x-1/2 z-10 pt-[30px] pr-[31px] pl-[48px] w-full max-w-[1512px]">
      <div className="container flex justify-between">
        <div className="flex gap-[33px]">
          <a
            href="/"
            className="hover:shadow-md hover:shadow-white focus:shadow-md focus:shadow-white rounded-br-[37px] transition-all duration-300"
          >
            <img
              src="/images/white-logo.png"
              alt="logo"
              className="w-[133px] h-[82px]"
            />
          </a>

          <nav className="flex flex-col justify-between">
            <ul className="font-ibm-plex-mono text-[13px] font-medium leading-normal flex gap-[33px]">
              <li>
                <a
                  href="tel:0845 034 0895"
                  className="underline decoration-transparent hover:decoration-inherit underline-offset-0 hover:underline-offset-[3px] focus:decoration-inherit focus:underline-offset-[3px] transition-all duration-300"
                >
                  0845 034 0895
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="underline decoration-transparent hover:decoration-inherit underline-offset-0 hover:underline-offset-[3px] focus:decoration-inherit focus:underline-offset-[3px] transition-all duration-300"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="underline decoration-transparent hover:decoration-inherit underline-offset-0 hover:underline-offset-[3px] focus:decoration-inherit focus:underline-offset-[3px] transition-all duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
            <ul className="font-gilroy font-bold text-[18px] leading-normal flex gap-[37px]">
              <li>
                <a
                  href="#services"
                  className="underline decoration-transparent hover:decoration-inherit underline-offset-0 hover:underline-offset-[3px] focus:decoration-inherit focus:underline-offset-[3px] transition-all duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="underline decoration-transparent hover:decoration-inherit underline-offset-0 hover:underline-offset-[3px] focus:decoration-inherit focus:underline-offset-[3px] transition-all duration-300"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  className="underline decoration-transparent hover:decoration-inherit underline-offset-0 hover:underline-offset-[3px] focus:decoration-inherit focus:underline-offset-[3px] transition-all duration-300"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="underline decoration-transparent hover:decoration-inherit underline-offset-0 hover:underline-offset-[3px] focus:decoration-inherit focus:underline-offset-[3px] transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="flex flex-col relative gap-[21px]">
          <li>
            <a
              href="#"
              className="font-ibm-plex-mono text-[13px] font-medium leading-normal underline decoration-transparent hover:decoration-inherit underline-offset-0 hover:underline-offset-[3px] focus:decoration-inherit focus:underline-offset-[3px] transition-all duration-300"
            >
              Request support
            </a>
          </li>
          <li>
            <button
              type="button"
              className="text-btnTextColour text-center font-gilroy text-[18px] leading-[0px] font-bold w-[165px] h-[48px] rounded-[5px] bg-white absolute right-0 hover:bg-btnTextColour hover:text-white focus:bg-btnTextColour focus:text-white transition-all duration-500"
            >
              Call me back
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
