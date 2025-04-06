import Link from "../Link";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-800/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Back in 2014, I began my journey into iOS development and was quickly
          hooked by the endless possibilities of coding and mobile app
          development. Today, I&apos;m proud to have worked on a variety of
          software projects, starting with hobby projects, moving on to a{" "}
          <Link url="https://oomovil.com" title="tech startup" />, and later at
          a{" "}
          <Link
            url="https://globant.com"
            title="multinational technology and consulting company"
          />
          .
        </p>
        <p className="mb-4">
          After an enriching experience at{" "}
          <Link url="https://globant.com" title="Globant" />, I embraced a new
          challenge in March 2025 as a Senior Software Developer at{" "}
          <Link url="https://www.luxoft.com" title="Luxoft" />. In this role, I
          continue to build top-notch mobile applications and lead innovative
          projects for esteemed clients. Additionally, I published an article on
          creating an{" "}
          <Link
            url="https://dev.to/alananayadev/using-chatgpt-to-optimize-code-in-xcode-a-new-era-of-development-1m19"
            title="Xcode extension using ChatGPT"
          />{" "}
          to share my expertise with the wider tech community.
        </p>
        <p>
          Away from the computer, I spend time reinventing myself by practicing
          football, listening to music, and enjoying coffee at cozy spots to
          clear my mind and find inspiration. My passion for technology drives
          me to continuously enhance my skills and stay up-to-date with the
          latest trends in iOS development.
        </p>
      </div>
    </section>
  );
}
