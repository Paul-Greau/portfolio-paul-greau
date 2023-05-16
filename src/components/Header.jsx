/* eslint-disable tailwindcss/no-custom-classname */
import HeroSide from "../components/canvas/HeroSide";

const Header = () => {
  return (
    <section id="header" className="flex h-screen flex-wrap justify-center ">
      <div className="mb-[10%] flex w-[90%] justify-between max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <div className="z-0 flex flex-col items-center justify-center pt-16">
            <div className="bg-primary h-6 w-6 rounded-full"></div>
            <div className="from-primary h-[160px] w-1 bg-gradient-to-b to-transparent"></div>
          </div>
          <div className="z-0 ml-3 flex flex-col justify-center mt-10">
            <p className="text-2xl font-bold ">Bonjour,</p>
            <h1 className="text-5xl font-bold mb-3">
              <span className="text-4xl font-thin ">Je suis </span>
              <br className="block md:hidden" />
              Paul Gréau
            </h1>
            <p className="text-xl font-bold">
              Développeur junior
              <span className="text-xl font-thin">
                {" "}
                | Full stack JS - UI/UX
              </span>
            </p>
          </div>
        </div>
        <div className=" z-0 hidden h-[100%] w-[50%] lg:block">
          <HeroSide />
        </div>
      </div>
    </section>
  );
};

export default Header;
