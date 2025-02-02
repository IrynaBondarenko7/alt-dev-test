import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export const Header = () => {
  return (
    <header className="absolute top-0 text-white left-1/2 -translate-x-1/2 z-10 pt-3 px-5 xl:pt-[30px] xl:pr-[31px] xl:pl-[48px] w-full max-w-[1512px]">
      <div className="container flex justify-between">
        <div className="flex gap-[33px]">
          <a
            href="/"
            className="w-[80px] h-[52px] xl:w-[133px] xl:h-[82px] hover:shadow-md hover:shadow-white focus:shadow-md focus:shadow-white rounded-br-[37px] transition-all duration-300"
          >
            <img
              src="/images/white-logo.png"
              alt="logo"
              className="w-[80px] h-[52px] xl:w-[133px] xl:h-[82px]"
            />
          </a>

          <nav className="hidden xl:flex flex-col justify-between">
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
        <ul className="hidden xl:flex flex-col relative gap-[21px]">
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
        <div className="xl:hidden">
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md bg-white py-1.5 px-3 text-sm/6 font-semibold text-bgColour shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-white-700 data-[focus]:outline-1 data-[focus]:outline-white">
              Menu
              <ChevronDownIcon className="size-4 fill-bgColour/60" />
            </MenuButton>

            <MenuItems
              anchor="bottom"
              className="font-ibm-plex-mono  w-52 origin-top-right rounded-xl border border-white/5 bg-white p-1 text-sm/6 text-bgColour transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  About us
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  Careers
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  Services
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  Case Studies
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  Insights
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  Contact
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  Request support
                </button>
              </MenuItem>

              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  0845 034 0895
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  Call me back
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </header>
  );
};
