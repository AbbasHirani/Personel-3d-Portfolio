const button = ({text,className,link}) => {
  return (

    <a 
    target="_blank" 
    rel="noopener noreferrer"
    href={link}    
    className={`${className ?? ''} cta-wrapper`}
    >
        <div className="cta-button group" >
            <div className="bg-circle" />
            <p className="text">{text}</p>
            <div className="arrow-wrapper">
                <img src="/images/top-right.png" alt="top-right" />
            </div>
        </div>
    </a>
  )
}

export default button