const CTA = () => {
  return (
    <div className="group relative mx-auto w-fit">
      <div className="absolute inset-x-0 -top-[1px] z-10 mx-auto h-px w-[70%] bg-transparent bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 opacity-0 shadow-[0_0_20px_2px_#2b7fff]/20 transition-opacity duration-400 group-hover:opacity-90 group-active:opacity-90"></div>

      <button className="relative cursor-pointer rounded-full bg-black px-4 py-2 text-sm text-neutral-300 ring ring-white/8 transition-shadow duration-400 group-hover:shadow-[0_0_20px_2px_#2b7fff]/20 group-active:shadow-[0_0_20px_2px_#b8e6fe]/20">
        Join the waitlist
      </button>

      <div className="-bottom-0.2 absolute inset-x-0 mx-auto h-px w-[60%] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 opacity-80 transition-opacity duration-500 group-hover:opacity-25 group-active:opacity-25"></div>
    </div>
  );
};

export default CTA;
