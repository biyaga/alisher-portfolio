import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Reading from "@/components/Reading";
import Writing from "@/components/Writing";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <div className="mx-auto flex max-w-content flex-col gap-20 px-4 py-20 sm:px-6">
          <Projects />
          <Writing />
          <Reading />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
