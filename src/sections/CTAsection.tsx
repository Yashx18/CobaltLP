import CTA from '@/components/CTA';

const CTAsection = () => {
  return (
    <section className="h-fit w-full px-6 sm:px-10">
      <div className="relative mx-auto w-full max-w-5xl py-14">
        <div
          aria-hidden="true"
          className="user-select-none pointer-events-none absolute -top-0.5 left-1/2 h-px w-4/5 max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(2,132,199,0.65)_50%,rgba(0,0,0,0)_100%)]"
        ></div>

        <div
          className="pointer-events-none absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-cyan-500 to-blue-800 opacity-20"
            style={{
              clipPath:
                'polygon(77.5% 40.13%, 90% 10%, 100% 50%, 95% 80%, 92% 85%, 75% 65%, 61.26% 54.7%, 50% 54.7%, 47.24% 65.81%, 50% 85%, 26.16% 73.91%, 0.1% 100%, 1% 40.13%, 20% 48.75%, 60% 0.25%, 67.5% 32.63%)',
            }}
          ></div>
        </div>

        <div className="relative isolate">
          <svg className="absolute inset-0 h-full w-full stroke-white/90" aria-hidden="true">
            <defs>
              <pattern id="cta" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M0 80V0H80" stroke="currentColor" strokeWidth="3" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta)" />
          </svg>

          <div
            className="pointer-events-none absolute inset-x-0 top-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-cyan-500 to-blue-800 opacity-20"
              style={{
                clipPath:
                  'polygon(77.5% 40.13%, 90% 10%, 100% 50%, 95% 80%, 92% 85%, 75% 65%, 61.26% 54.7%, 50% 54.7%, 47.24% 65.81%, 50% 85%, 26.16% 73.91%, 0.1% 100%, 1% 40.13%, 20% 48.75%, 60% 0.25%, 67.5% 32.63%)',
              }}
            ></div>
          </div>
        </div>

        <div className="relative flex flex-col items-center gap-4">
          <span className="max-w-lg bg-[linear-gradient(to_bottom_right,white,grey)] bg-clip-text text-center text-3xl font-semibold text-transparent">
            See where financial automation can take your business.
          </span>
          <span className="mb-6 text-lg tracking-tight text-neutral-400">
            The first financial tool you'll love. And the last one you'll ever need.
          </span>
          <CTA />
        </div>
      </div>
    </section>
  );
};

export default CTAsection;
