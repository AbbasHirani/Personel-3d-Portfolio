import ContactExperience from "../components/ContactModels/ContactExperience"
import TitleHeader from "../components/TitleHeader"
import { useState } from "react"
import emailjs from '@emailjs/browser'
import { useRef } from "react"

const ContactSection = () => {

    const fromRef =useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    }); 

    const [loading,setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            await emailjs.sendForm(
                import.meta.env.VITE_APP_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                fromRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
        }catch(error){  
            console.log('EmailJs Error,',error)
        }finally{
            setLoading(false)
        }

        setFormData({name:'',email:'',message:''})
    }

  return (
    <section id="contact" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader 
                title='📧Contact Information'
                sub='Get In Touch With Me !'
            />
            <div className="mt-16 grid-12-cols">
                {/* Contact Form Left Side */}
                <div className="xl:col-span-5">
                    <div className="flex-center card-border rounded-xl p-10">
                        <form 
                        ref={fromRef}
                        onSubmit={handleSubmit}
                        className="w-full flex flex-col gap-7">
                            <div >
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required/>
                            </div>    
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" id="email" placeholder="Enter Your Email Address" value={formData.email} onChange={handleChange} required/>
                                </div>
                                <div className="">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" rows={5} placeholder="Enter Your Message" value={formData.message} onChange={handleChange} required>

                                    </textarea>
                                </div>
                                <button type="submit" className="w-full mt-4" disabled={loading}>
                                    <div className="cta-button group">  
                                        <div className="bg-circle" />
                                        <p className="text"> {loading ? 'Sending.....' : 'Send Message'}</p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arr" />
                                        </div>
                                    </div>
                                </button>
                        </form>
                    </div>
                </div>
                {/* Contact Form Right Side */}
                <div className="xl:col-span-7 min-h-96">
                    <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded:3xl overflow-hidden">
                        <ContactExperience />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection