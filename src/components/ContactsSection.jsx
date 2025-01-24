export const ContactsSection = () => {
  return (
    <section
      className="pl-[147px] pr-[175px] text-white flex gap-[115px]"
      id="contact"
    >
      <div>
        <h2 className="font-gilroy text-[60px] font-bold leading-[1.1] w-[607px]">
          We’re <span className="text-stroke text-transparent">your</span> IT
          Services problem solvers
        </h2>
        <p className="font-ibm-plex-mono text-16px leading-[30px] mb-6 w-[596px]">
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
          className="bg-transparent border-[1px] border-white text-white placeholder:text-white px-5 py-[12px] font-ibm-plex-mono text-[16px] leading-[30px] focus:outline-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-transparent border-[1px] border-white text-white placeholder:text-white px-5 py-[12px] font-ibm-plex-mono text-[16px] leading-[30px] focus:outline-white"
        />
        <input
          type="text"
          name="telephone"
          placeholder="Telephone"
          className="bg-transparent border-[1px] border-white text-white placeholder:text-white px-5 py-[12px] font-ibm-plex-mono text-[16px] leading-[30px] focus:outline-white"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          className="bg-transparent border-[1px] border-white text-white placeholder:text-white px-5 py-[12px] font-ibm-plex-mono text-[16px] leading-[30px] focus:outline-white"
        />
        <textarea
          name="message"
          placeholder="I need help with..."
          className="resize-none bg-transparent border-[1px] border-white text-white placeholder:text-white px-5 py-[12px] font-ibm-plex-mono text-[16px] leading-[30px] focus:outline-white"
        ></textarea>
        <button
          type="submit"
          className="bg-white text-secondBtnTextColour text-[16px] leading-[30px] text-center w-[200px] pt-[12px] pb-[13px] font-ibm-plex-mono self-end"
        >
          Submit now
        </button>
      </form>
    </section>
  );
};
