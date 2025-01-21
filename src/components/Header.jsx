export const Header = () => {
  return (
    <header className="absolute top-0 text-white left-1/2 -translate-x-1/2 z-10 pt-[30px] pr-[31px] pl-[48px] w-full max-w-[1512px]">
      <div className="container flex justify-between">
        <div className="flex gap-[33px]">
          <img
            src="/images/white-logo.png"
            alt="logo"
            className="w-[133px] h-[82px]"
          />
          <nav className="flex flex-col justify-between">
            <ul className="font-ibm-plex-mono text-[13px] font-medium leading-normal not-italic flex gap-[33px]">
              <li>
                <a href="tel:0845 034 0895">0845 034 0895</a>
              </li>
              <li>
                <a href="#about-us">About us</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
            </ul>
            <ul className="font-gilroy font-bold text-[18px] leading-normal not-italic flex gap-[37px]">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#sase-studies">Case Studies</a>
              </li>
              <li>
                <a href="#insights">Insights</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="flex flex-col relative gap-[21px]">
          <li>
            <a
              href="#"
              className="font-ibm-plex-mono text-[13px] font-medium leading-normal not-italic"
            >
              Request support
            </a>
          </li>
          <li>
            <button
              type="button"
              className="text-btnTextColour text-center font-gilroy text-[18px] leading-[0px] not-italic font-bold w-[165px] h-[48px] rounded-[5px] bg-white absolute right-0"
            >
              Call me back
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
