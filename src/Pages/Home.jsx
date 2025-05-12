import "../css/Home.css"

function Home() {
    return (
        <>
        <div className="home-container">
            <div className="home-content">
                <h1>Tanishq Nigam reporting...</h1>
                <p>Currently in 4th year, studying Computer Science and Engineering at Kalinga Institute of Industrial Technology. Genuine passion for technology and a knack for solving complex problems. What sets me apart? {'->'} Ability to learn new concepts quickly and adjust seamlessly to different academic and professional settings. Always eager to expand my knowledge and skills, aiming to make a meaningful impact in the world of computer science and engineering.</p>
            </div>
        </div>
        <div className="sec-cont">
        <div className="more-info">
            <h1>Some more information about me</h1>
            <p>Interests: </p>
            <p>Hobbies: Rogue Coding, Football, Gaming, Gym, Movies and TV shows</p>
            <p></p>
        </div>

        <div className="achievements">
  <h1>Achievements</h1>
  <a href="https://ieeexplore.ieee.org/document/10963114" target="_blank" rel="noopener noreferrer" className="achievement-box">
    Conference Research Paper published in IEEE
  </a>
  <a href="https://www.linkedin.com/posts/tanishq-nigam-27501023b_smart-certificate-activity-7191158578794098689-5Jn7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADufwnkBiPdayCxNjPHgBLEu8ZQ2hfqoSdQ" target="_blank" rel="noopener noreferrer" className="achievement-box">
    First Prize in GK competition hosted by SMART
  </a>
  <a className="achievement-box">
    Gold medals and trophies in sports
  </a>
</div>

        <div className="contact-card">
            <h1>Contact me</h1>
            <p>E-mail: txanstoragefull27@gmail.com</p>
            <p>Phone and Whatsapp Number: +91 9460213635</p>
        </div>
        </div>
        </>
    )
}

export default Home
