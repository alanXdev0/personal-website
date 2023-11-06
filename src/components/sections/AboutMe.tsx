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
          software projects, started with hobby projects to a{" "}
          <Link url="https://oomovil.com" title="tech startup" />, and finally
          in a{" "}
          <Link
            url="https://globant.com"
            title="multinational technology and consulting company"
          />
          .
        </p>
        <p className="mb-4">
          My current role at <Link url="https://globant.com" title="Globant" />{" "}
          is centered around building top-notch mobile applications and
          spearheading projects for our esteemed clients. In addition to my
          professional work, I&apos;ve also published an article about the
          creation of an{" "}
          <Link
            url="https://dev.to/alananayadev/using-chatgpt-to-optimize-code-in-xcode-a-new-era-of-development-1m19"
            title="Xcode extension using ChatGPT"
          />
          , sharing my knowledge and expertise with the wider tech community.
        </p>
        <p>
          Away from the computer, I spend time reinventing myself by practicing
          football, listening to music, and indulging my love for coffee in cozy
          coffee places to clear out my mind and find inspiration. I have a
          passion for technology and continuously strive to enhance my skills
          and stay abreast of the latest trends in iOS development.
        </p>
      </div>
    </section>
  );
}
