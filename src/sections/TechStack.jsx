import { techStackIcons } from '../constants/index'
import TitleHeader from '../components/TitleHeader'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.tech-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
        scrollTrigger: {
        trigger: '#skills',
        start: 'top 80%',
      },
    }
  )
}, [])

return (
  <section id="skills" className="flex-center section-padding flex">
    <div className="w-full h-full md:px-10 px-5">
      <TitleHeader 
        title="My Tech Stack" 
        sub="🤝 The Skills I Bring to the Table" 
      />
    <div className="tech-grid">
      {techStackIcons.map((icons) => (
        <div key={icons.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
          <div className="tech-card-content">
            <div className="tech-icon-wrapper">
              <TechIcon model={icons} />
            </div>
            <div className="padding-x w-full">
              <p>{icons.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
)
}

export default TechStack