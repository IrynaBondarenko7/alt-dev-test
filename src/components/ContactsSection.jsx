export const ContactsSection = () => {
  return (
    <section
      className="px-3 xl:pl-[147px] xl:pr-[175px] text-white flex flex-col md:flex-row gap-6 xl:gap-[115px]"
      id="contact"
    >
      <div>
        <h2 className="font-gilroy text-[30px] xl:text-[60px] font-bold leading-[normal] xl:w-[607px] pb-[17px]">
          We’re <span className="text-stroke text-transparent">your</span> IT
          Services problem solvers
        </h2>
        <p className="font-ibm-plex-mono text-16px leading-[30px] mb-[30px] xl:w-[596px]">
          Recognising your frustrations with your print environment, IT
          services, document management & communications and finding.
        </p>
        <p className="font-ibm-plex-mono text-16px leading-[30px]">
          Get in touch today!
        </p>
      </div>
      <form className="flex flex-col gap-[25px] w-full mt-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="h-[55px] bg-transparent border-[1px] border-white text-white placeholder:text-white px-5 py-[12px] font-ibm-plex-mono text-[16px] leading-[30px] focus:outline-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="h-[55px] bg-transparent border-[1px] border-white text-white placeholder:text-white px-5 py-[12px] font-ibm-plex-mono text-[16px] leading-[30px] focus:outline-white"
        />
        <input
          type="text"
          name="telephone"
          placeholder="Telephone"
          className="h-[55px] bg-transparent border-[1px] border-white text-white placeholder:text-white px-5 py-[12px] font-ibm-plex-mono text-[16px] leading-[30px] focus:outline-white"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          className="h-[55px] bg-transparent border-[1px] border-white text-white placeholder:text-white px-5 py-[12px] font-ibm-plex-mono text-[16px] leading-[30px] focus:outline-white"
        />
        <textarea
          name="message"
          placeholder="I need help with..."
          className="h-[55px] resize-none bg-transparent border-[1px] border-white text-white placeholder:text-white px-5 pt-[12px] font-ibm-plex-mono text-[16px] leading-[30px] focus:outline-white"
        ></textarea>
        <button
          type="submit"
          className="h-[55px] bg-white text-secondBtnTextColour text-[16px] leading-[30px] text-center w-[200px] pt-[12px] pb-[13px] font-ibm-plex-mono self-end hover:bg-secondBtnTextColour focus:bg-secondBtnTextColour hover:text-white focus:text-white transition-all duration-500"
        >
          Submit now
        </button>
      </form>
    </section>
  );
};
