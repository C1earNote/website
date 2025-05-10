import Card from "../Components/Card"
import "../css/Skills.css"

function Skills() {
  
    return (
      <div className='skills-page'>
        <Card title = "React.js" icon = "/back.png" link = "https://react.dev/"/>
        <Card title = "Fullstack Development" icon = "/back.png" link = "https://www.geeksforgeeks.org/what-is-full-stack-development/"/>
        <Card title = "Vercel Hosting" icon = "/back.png" link = "https://vercel.com/" />
        <Card title = "Version Control" icon = "/back.png" link = "https://www.atlassian.com/git/tutorials/what-is-version-control#:~:text=Version%20control%2C%20also%20known%20as,to%20source%20code%20over%20time."/>
        <Card title = "Prompt Engineering" icon = "/back.png" link = "https://www.coursera.org/articles/what-is-prompt-engineering"/>
        <Card title = "Express.js" icon = "/back.png" link = "https://expressjs.com/"/>
        <Card title = "Problem Solving" icon = "/back.png" link = "https://asq.org/quality-resources/problem-solving#:~:text=Overview,a%20solution%2C%20and%20sustaining%20results."/>
      </div>
    )
}

export default Skills