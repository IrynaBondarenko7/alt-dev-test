export const Footer = () => {
  return (
    <footer className="mt-16 xl:mt-[118px] text-white font-ibm-plex-mono">
      <div className="px-3 xl:px-[144px] flex flex-col md:flex-row gap-2 xl:gap-[68px] mb-5 xl:mb-[43px]">
        <a
          href="/"
          className="mt-[5px] w-[80px] xl:w-[94px] xl:h-[57px] hover:shadow-md hover:shadow-white focus:shadow-md focus:shadow-white rounded-br-[25px] transition-all duration-300"
        >
          <img
            src="/images/white-logo.png"
            alt="logo"
            className="w-[80px] xl:w-[94px] xl:h-[57px]"
          />
        </a>
        <ul className="flex flex-col md:flex-row gap-5 xl:gap-0 xl:justify-between w-[75%] xl:w-full flex-1 mx-auto">
          <li className="text-[12px] leading-[22px]">
            <h3>Contact us</h3>
            <ul>
              <li>
                E
                <a
                  href="mailto:info@dnslimited.co.uk"
                  className="ml-2 underline decoration-transparent hover:decoration-inherit underline-offset-0 hover:underline-offset-[3px] focus:decoration-inherit focus:underline-offset-[3px] transition-all duration-300"
                >
                  info@dnslimited.co.uk
                </a>
              </li>
              <li>
                T
                <a
                  href="tel:08450340895"
                  className="ml-2 underline decoration-transparent hover:decoration-inherit underline-offset-0 hover:underline-offset-[3px] focus:decoration-inherit focus:underline-offset-[3px] transition-all duration-300"
                >
                  0845 034 0895
                </a>
              </li>
            </ul>
          </li>
          <li className="text-[12px] leading-[22px] w-[133px]">
            <h3>Address</h3>
            <p>
              Unit 9 <br />
              Royal Scot Road, Pride Park, Derby DE24 8AJ
            </p>
          </li>
          <li className="text-[12px] leading-[22px]">
            <h3>Opening hours</h3>
            <p>Mon – Fri:</p>
            <p>9 am – 5:30 pm</p>
          </li>
          <li className="text-[12px] leading-[22px]">
            <h3>About us</h3>
            <ul className="text-thirdTextColour">
              <li>CSR</li>
              <li>Enivronment & Sustainability</li>
              <li>Meet the team</li>
            </ul>
          </li>
          <li className="text-[12px] leading-[22px]">
            <h3>Services</h3>
            <ul className="text-thirdTextColour">
              <li>IT Services</li>
              <li>Communications</li>
              <li>Managed Print Services</li>
              <li>Document Management</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="pt-[19px] pb-[28px] pl-[38px] pr-[27px] flex flex-col md:flex-row justify-between text-[11px] leading-[26px] items-center footer">
        <p>Design & built by Alt</p>
        <p>© Document Network Services Ltd 2024</p>
      </div>
    </footer>
  );
};
