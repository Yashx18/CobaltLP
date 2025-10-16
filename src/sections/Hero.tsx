import banner from '../assets/dashboard.webp';
import CTA from '../components/CTA';

const Hero = () => {
  return (
    <section className="relative h-fit w-full bg-[#09090b] px-6 sm:px-10">
      <div className="absolute inset-0 bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))]"></div>
      <svg
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)] stroke-white/5"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero" width="80" height="80" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#hero)"></rect>
      </svg>
      <div className="mx-auto w-full max-w-5xl pt-50">
        <div className="mx-auto my-0 flex h-full max-w-4xl flex-col items-center justify-center">
          <h1 className="max-w-3xl bg-[linear-gradient(to_bottom_right,white,grey)] bg-clip-text text-center text-4xl font-bold text-transparent sm:text-6xl sm:font-semibold md:text-7xl">
            Unleash the power of intuitive finance
          </h1>
          <p className="text-md mt-6 max-w-2xl text-center text-neutral-400 sm:text-lg">
            Say goodbye to the outdated financial tools. Every small business owner, regardless of
            the background, can now manage their business like a pro. Simple. Intuitive. And never
            boring.
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col gap-6">
          <div className="z-100 mx-auto flex w-fit items-center gap-2">
            <input
              type="text"
              className="rounded-full border border-neutral-400/20 px-4 py-2 text-sm text-neutral-200 backdrop-blur-2xl focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2 focus:ring-offset-black focus:shadow-[0_0_0_3px]"
              placeholder="name@gmail.com"
            />
            <CTA />
          </div>

          <div className="group z-1 mx-auto flex h-auto cursor-pointer flex-col items-center justify-center gap-1 text-neutral-400 hover:text-neutral-100">
            <p>Learn more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-dow transition-transform duration-300 group-hover:translate-y-1.5"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        {/* Banner */}
        <div className="mx-auto h-fit w-full py-10">
          <img src={banner} alt="banner" className="w-full rounded-2xl border border-neutral-800" />
        </div>

        {/* Hero feature */}
        <div className="flex w-full grid-cols-2 flex-col items-start gap-2 pb-10 sm:py-10 md:py-20 lg:grid lg:gap-5">
          <div className="col-span-1 lg:pr-10">
            <h2 className="tracking-light bg-[linear-gradient(to_bottom_right,white,grey)] bg-clip-text pb-2 text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
              Who said finance has to be boring?
            </h2>
          </div>
          <div className="text-md col-span-1 w-full text-neutral-400 sm:text-lg md:text-xl">
            <p>
              With Cobalt, managing your business finances is effortless, empowering, and never
              boring. Our intuitive platform brings clarity to your cash flow, simplifies your
              financial decision-making, and puts the power of advanced financial management at your
              fingertips.{' '}
              <span className="text-neutral-200">
                Say no to spreadsheets and tools designed in the 80s.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
