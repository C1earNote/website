import Card from "../Components/Card"
import "../css/Skills.css"

function Skills() {
  
    return (
      <div className='skills-page'>
        <Card title = "React.js" icon = "/react.svg" link = "https://react.dev/"/>
        <Card title = "Fullstack Development" icon = "/fullstack.png" link = "https://www.geeksforgeeks.org/what-is-full-stack-development/"/>
        <Card title = "Vercel Hosting" icon = "/vercel.jpg" link = "https://vercel.com/" />
        <Card title = "Version Control" icon = "/git.png" link = "https://www.atlassian.com/git/tutorials/what-is-version-control#:~:text=Version%20control%2C%20also%20known%20as,to%20source%20code%20over%20time."/>
        <Card title = "Express.js" icon = "/express.png" link = "https://expressjs.com/"/>
        <Card title = "Problem Solving" icon = "/back.png" link = "https://asq.org/quality-resources/problem-solving#:~:text=Overview,a%20solution%2C%20and%20sustaining%20results."/>
        <Card title = "Python" icon = "/python.png" link = "https://www.python.org/"/>
        <Card title = "Javascript" icon = "/js.png" link = "https://www.wix.com/encyclopedia/definition/javascript?utm_source=bing&utm_medium=cpc&utm_campaign=506190486^1276534656014655^search%20-%20dsa&experiment_id=wix^b^^&msclkid=f68ab87077f619005c7ed0527744d8c9"/>
        <Card title = "Java" icon = "/java.avif" link = "https://www.java.com/en/"/>
        <Card title = "C language" icon = "/c.png" link = "https://en.wikipedia.org/wiki/C_(programming_language)"/>
        <Card title = "DSA" icon = "/dsa.jpeg" link = "https://www.w3schools.com/dsa/index.php"/>
        <Card title = "HTML/CSS" icon = "/htmlcss.png" link = "https://www.geeksforgeeks.org/html-css/"/>
        <Card title = "Prompt Engineering" icon = "/prompt.png" link = "https://www.coursera.org/articles/what-is-prompt-engineering"/>
      </div>
    )
}

export default Skills