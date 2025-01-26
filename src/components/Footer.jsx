export const Footer = () => {
  return (
    <footer className="mt-[118px] text-white font-ibm-plex-mono">
      <div className="px-[144px] flex gap-[68px] mb-[43px]">
        <img
          src="/images/white-logo.png"
          alt="logo"
          className="w-[94px] h-[57px] mt-[10px]"
        />
        <ul className="flex justify-between w-full">
          <li className="text-[12px] leading-[22px]">
            <h3>Contact us</h3>
            <ul>
              <li>E info@dnslimited.co.uk</li>
              <li>T 0845 034 0895</li>
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
      <div className="pt-[19px] pb-[28px] pl-[38px] pr-[27px] flex justify-between text-[11px] leading-[26px] items-center footer">
        <p>Design & built by Alt</p>
        <p>© Document Network Services Ltd 2024</p>
      </div>
    </footer>
  );
};
