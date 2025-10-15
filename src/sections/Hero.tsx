import banner from '../assets/dashboard.webp';

const Hero = () => {
  return (
    <section className="relative isolate h-fit w-full transform-gpu bg-[#09090b]">
      <div className="absolute inset-0 -z-10 bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))]"></div>
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
      <div className="mx-auto w-full max-w-5xl pt-40">
        <div className="mx-auto my-0 flex h-full max-w-4xl flex-col items-center justify-center">
          <h1 className="max-w-3xl text-center text-7xl font-semibold text-neutral-200">
            Unleash the power of intuitive finance
          </h1>
          <p className="mt-6 max-w-2xl text-center text-lg text-neutral-500">
            Say goodbye to the outdated financial tools. Every small business owner, regardless of
            the background, can now manage their business like a pro. Simple. Intuitive. And never
            boring.
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col gap-6">
          <div className="relative mx-auto w-fit">
            <button className="relative cursor-pointer rounded-full bg-black px-4 py-2 text-sm text-neutral-300 ring ring-white/8">
              Join the waitlist
            </button>
            <div className="-bottom-0.2 absolute inset-x-0 mx-auto h-px w-[60%] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></div>
          </div>
          <div className="mx-auto flex flex-col items-center justify-center gap-1 text-neutral-400">
            <p>Learn more</p>
            <span>
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
                className="lucide lucide-arrow-down text-zinc-400 duration-300 group-hover:translate-y-1.5 group-hover:text-zinc-100"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </span>
          </div>
        </div>

        {/* Banner */}
        <div className="mx-auto h-fit w-full py-10">
          <img src={banner} alt="banner" className="w-full rounded-2xl border border-neutral-800" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
