import Footer from "./Footer";
import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Writing from "./sections/Writing";

export default function Main() {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <AboutMe />
      <Experience />
      <Projects />
      <Writing />
      <Footer />
    </main>
  );
}
