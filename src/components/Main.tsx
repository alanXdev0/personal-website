import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";

export default function Main() {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <AboutMe />
      <Experience />
    </main>
  );
}
