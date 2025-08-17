import { a, footer } from "motion/react-client"
import { socialImgs } from "../constants"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="flex flex-col justify-center md:items-start text-center">
                <a href="/">Abbas Hirani</a>
            </div>
            <div className="socials">
                {socialImgs.map((img)=>(
                    <a className="icon" target="_blank" key={img.url} href={img.url}>
                        <img src={img.imgPath} className="w-7 h-7"/>
                    </a>
                ))}
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-center md:text-end">
                    ©️{new Date().getFullYear()} Abbas Hirani.All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer