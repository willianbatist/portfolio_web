import Header from "../components/header/Header";
import Title from "../components/title/Title";
import About from "../components/about/About";
import Technologies from "../components/technologies/Technologies";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";


export default function Home() {
  return (
    <>
      <span className="spanBlur">
      </span>
      <Header/>
      <Title/>
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
    </>
  )
}
