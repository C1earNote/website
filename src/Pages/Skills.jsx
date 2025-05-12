import Card from "../Components/Card"
import "../css/Skills.css"

function Skills() {
  
    return (
      <div className='skills-page'>
        <Card title = "React.js" icon = "/back.png" link = "https://react.dev/"/>
        <Card title = "Fullstack Development" icon = "/back.png" link = "https://www.geeksforgeeks.org/what-is-full-stack-development/"/>
        <Card title = "Vercel Hosting" icon = "/back.png" link = "https://vercel.com/" />
        <Card title = "Version Control" icon = "/back.png" link = "https://www.atlassian.com/git/tutorials/what-is-version-control#:~:text=Version%20control%2C%20also%20known%20as,to%20source%20code%20over%20time."/>
        <Card title = "Express.js" icon = "/back.png" link = "https://expressjs.com/"/>
        <Card title = "Problem Solving" icon = "/back.png" link = "https://asq.org/quality-resources/problem-solving#:~:text=Overview,a%20solution%2C%20and%20sustaining%20results."/>
        <Card title = "DSA" icon = "/back.png" link = "https://www.w3schools.com/dsa/index.php"/>
        <Card title = "Java" icon = "/back.png" link = "https://www.java.com/en/"/>
        <Card title = "C language" icon = "/back.png" link = "https://en.wikipedia.org/wiki/C_(programming_language)"/>
        <Card title = "Javascript" icon = "/back.png" link = "https://www.wix.com/encyclopedia/definition/javascript?utm_source=bing&utm_medium=cpc&utm_campaign=506190486^1276534656014655^search%20-%20dsa&experiment_id=wix^b^^&msclkid=f68ab87077f619005c7ed0527744d8c9"/>
        <Card title = "Python" icon = "/back.png" link = "https://www.python.org/"/>
        <Card title = "HTML/CSS" icon = "/back.png" link = "https://www.geeksforgeeks.org/html-css/"/>
        <Card title = "Prompt Engineering" icon = "/back.png" link = "https://www.coursera.org/articles/what-is-prompt-engineering"/>
      </div>
    )
}

export default Skills