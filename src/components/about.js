import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

// import "../../styles/about.scss"

const BlogFeatured = () => {

    const closeAbout = () => {
        const aboutBlock = document.querySelector("#aboutblock")
        aboutBlock.classList.remove('about-show')
    }

    // Clock display ONLY
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
        return () => {
            clearInterval(timerID)
        }
    })
    function tick() {
        setTime(new Date());
    }

    // Custom greeting ONLY
    const hour = new Date().getHours()
    let greetingText = ""
    switch(hour) {
        case 0: 
            greetingText = "The waves come after midnight." 
            break;
        case 1: 
            greetingText = "Let's fall asleep to a revolution, then wake up next to a sad excuse."
            break;
        case 2: 
            greetingText = "I got all I need, in a world of doubt. We got our champagne dreams, in an endless drought."
            break;
        case 3: 
            greetingText = "The lies I weave are all so intricate."
            break;
        case 4: 
            greetingText = "We could follow the sparks, I'll drive."
            break;
        case 5: 
            greetingText = "Don't you know there's a part of me that longs to go."
            break;
        case 6: 
            greetingText = "In my darkest hours I stumbled on a secret power."
            break;
        case 7: 
            greetingText = "Turn around and you’ll see what I see."
            break;
        case 8: 
            greetingText = "To be honest, what I liked, were the things I didn’t know."
            break;
        case 9: 
            greetingText = "Would you believe me now, if I say I got caught up in a wave, almost gave it away."
            break;
        case 10: 
            greetingText = "But I'm still not sure if fear's a rival or close relative to truth."
            break;
        case 11: 
            greetingText = "Hang your head low in the glow of the vending machine I'm not dying."
            break;
        case 12: 
            greetingText = "There's no going back against this California feeling."
            break;
        case 13: 
            greetingText = "I guess you win some and lose some, 'long as the outcome's income. I want it all, and then some."
            break;
        case 14: 
            greetingText = "It’s a train wreck, but I won’t crash it."
            break;
        case 15: 
            greetingText = "But here we are, after all the messes and confessions, to the stars."
            break;
        case 16: 
            greetingText = "I hope this summer breeze would last more than a season."
            break;
        case 17: 
            greetingText = "Look at the world, so close, and I'm halfway to it."
            break;
        case 18: 
            greetingText = "In the meantime we let it go, at the roadside we used to know."
            break;
        case 19: 
            greetingText = "You are what you love, not who loves you."
            break;
        case 20: 
            greetingText = "Why settle for less when there's more?"
            break;
        case 21: 
            greetingText = "'Cause you know the good die young, but so did this, and so it must be better than I think it is."
            break;
        case 22: 
            greetingText = "Try to shine. Stay wild."
            break;
        case 23: 
            greetingText = "When it rains it pours, so stay thirsty like before."
            break;
        default: 
            greetingText = "We could follow the sparks, I'll drive."
    }

    return (
        <main id="aboutblock" className="about">
            <div className="about-nav">
                <button onClick={closeAbout}>Close</button>
                <div className="about-social">
                    <a href="https://www.instagram.com/rencewang/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.linkedin.com/in/lawrence-c-w/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    {/* <a href="/">Resume</a> */}
                </div>
            </div>

            <div className="about-text">
                <p>I'm a student at &#x2609; Yale studying the intersection between computer science and design. I like basic things such as watching Chinese TV, making Spotify playlists, collecting song lyrics, and yelping. If you'd like to find out more about the interesting personality I never knew I had, you can check out my basic <i><Link to="/blog">opinions</Link></i>, my basic <i><Link to="/art/digital">art</Link></i>, or go find me &#x2197;&#xFE0E; while I get lost in space.</p>
            </div>

            {/* <div className="about-recents">
                 <span>Recently &#x2014;</span>
                 <span><a href="https://youtu.be/iVQhkDZS_Tk" target="_blank" rel="noopener noreferrer">a dream</a></span>
                 <span><a href="https://www.planneduniverse.com" target="_blank" rel="noopener noreferrer">a blog about floor plans</a></span>
                 <span><a href="https://youtu.be/kBF5l9rWQFs" target="_blank" rel="noopener noreferrer">a lesson on child-rearing</a></span>
            </div> */}
            <div></div>
            <div className="about-recents">
                <span>Letters of Recommendation &#x2014;</span>
                <span><a href="https://youtu.be/iVQhkDZS_Tk" target="_blank" rel="noopener noreferrer">a dream</a></span>
                <span><a href="https://www.planneduniverse.com" target="_blank" rel="noopener noreferrer">a blog about floor plans</a></span>
                <span><a href="https://youtu.be/kBF5l9rWQFs" target="_blank" rel="noopener noreferrer">a lesson on child-rearing</a></span>
                <span><a href="https://www.vogue.com/fashion-shows/fall-2005-couture/christian-dior/slideshow/collection#11" target="_blank" rel="noopener noreferrer">Dior without Maria Grazia</a></span>
                <span><a href="https://youtu.be/HUMygkRhB88" target="_blank" rel="noopener noreferrer">ASMR</a></span>
                <span><a href="https://open.spotify.com/album/52u4anZbHd6UInnmHRFzba?si=xNVxK3eXSrmCUEY5stXCEQ" target="_blank" rel="noopener noreferrer">Please Excuse Me For Being Antisocial</a></span>
            </div>

            <div>
                <span id="clock">{time.toLocaleTimeString()}</span>
                <span id="greeting">{greetingText}</span>
            </div>
            
        </main>
    )
}

export default BlogFeatured
