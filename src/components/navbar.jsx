import { navLinks } from "../constants"
import { useState, useEffect } from "react";

const navbar = () => {

    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            const isScrolled = window.scrollY > 10;
            setScrolled(true)
        }
        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            <a classname='logo' href="#hero">Abbas Hirani</a>

            <nav className="desktop">
                <ul>
                    {navLinks.map(({link,name})=> (
                        <li key={name} className="group">
                        <a href={link}>
                            <span>{name}</span>
                            <span className="underline"></span>
                        </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a className='contact-btn group'href="#contack">
                <div className="inner">
                    <span>Contact Me</span>
                </div>
            </a >


        </div>
    </header>
  )
}

export default navbar