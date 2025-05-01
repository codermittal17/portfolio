import { Typewriter } from 'react-simple-typewriter';

function HeroSection() {
    return (
        <div id="hero" className="hero-section">
            <div>
                <div className='avatar-container'>
                    <img src='/images/avatar.svg' alt='Unable to load avatar' />
                </div>
                <h2>Hey, I'm RAGHVENDRA MITTAL</h2>
                <h4 className='typewriter-text'>I am a <Typewriter
                    words={['WEB DEVELOPER', 'FREELANCER', 'AI/ML ENTHUSIAST']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></h4>
            </div>
            <a href="#contact" className="contact-btn">CONTACT</a>
        </div>
    )
}

export default HeroSection
