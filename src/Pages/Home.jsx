import React, { useState } from "react";
import "../css/Home.css";

function Home() {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText('txanstoragefull27@gmail.com')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <>
      <div className="name-box">
        <h1>Tanishq Nigam</h1>
        <p>React.js Developer | Stock Market Researcher | Problem Solver</p>
      </div>

      <div className="outer">
        <div className="home-content">
          <h1>Heyyy!</h1>
          <p>
            Currently in my 4th year of Computer Science and Engineering at Kalinga Institute of Industrial Technology, always had a genuine passion for technology and a love for solving complex problems. 
            What sets me apart? I learn fast and adapt quickly to new environments whether it’s in the classroom or the real world. 
            I’m always looking to grow, pick up new skills, and make a meaningful impact in the world of tech.
          </p>
        </div>

        <div className="sec-cont">

          <div className="achievements">
            <h1>Top Achievements</h1>
            <a 
              href="https://ieeexplore.ieee.org/document/10963114" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="achievement-box"
            >
              Conference Research Paper published in IEEE
            </a>
            <a 
              href="https://www.linkedin.com/posts/tanishq-nigam-27501023b_smart-certificate-activity-7191158578794098689-5Jn7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADufwnkBiPdayCxNjPHgBLEu8ZQ2hfqoSdQ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="achievement-box"
            >
              First Prize in GK competition hosted by SMART
            </a>
            <a className="achievement-box">
              Gold medals and trophies in sports
            </a>
          </div>

          <div className="more-info">
            <h1>Some more information about me</h1>
            <p><b>Interests</b>: Building and automating useful tools, Exploring new programming languages and frameworks, Financial tech, Writing blogs and Investing.</p>
            <p><b>Hobbies</b>: Rogue Coding, Football, Gaming, Gym, Movies and TV shows.</p>
          </div>

          <div className="contact-card">
            <p><b>Phone and Whatsapp</b>: +91 9460213635</p>
            <div className="imagescontainer">
              <img 
                src="/gmail.jpg" 
                alt="G-Mail" 
                onClick={handleClick} 
                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
              />
              {copied && <p style={{ color: 'green' }}>Copied to clipboard!</p>}
              <a 
                href="https://www.linkedin.com/in/tanishq-nigam-27501023b/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src="/linkedin.jpg" alt="Linkedin" style={{ width: '40px', height: '40px', borderRadius: '8px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;