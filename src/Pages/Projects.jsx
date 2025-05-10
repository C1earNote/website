import Card from "../Components/Card";
import "../css/Projects.css";


function Projects () {
    return (
        <div className="projects-page">
            <Card title = "FinAI - Corporate Finance App" icon = "/back.png" link = "https://github.com/DeepseaBandit/FinAi"/>
            <Card title = "Real Time Weather App" icon = "/back.png" link = "https://weather-app-murex-gamma-47.vercel.app/"/>
            <Card title = "Hotel Management System" icon = "/back.png" link = "https://github.com/C1earNote/HotelManagementSystem"/>
            <Card title = "Real Time Stock Chart App" icon = "/back.png" link = "https://github.com/C1earNote/intern-assignment"/>
        </div>
    )
}

export default Projects