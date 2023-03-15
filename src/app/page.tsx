"use client"
import Image from "next/image";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import About from "../components/about/About";
import Technologies from "../components/technologies/Technologies";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import MenuMobile from "../components/menuMobile/MenuMobile";
import up from "../assets/up.svg";
import { useEffect, useState } from "react";
import { Button } from "./button.style"


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    function positionScroll() {
      if (window.scrollY > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener("scroll", positionScroll);
  }, []);

  const han = () => {
    window.scroll(0, 0)
  }

  return (
    <>
      <Button isVisible={isVisible} onClick={() => han()}>
        <Image src={up} alt="" width={50} height={50}/>
      </Button>
      <MenuMobile/>
      <span className="spanBlur">
      </span>
      <Header/>
      <Title/>
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}
