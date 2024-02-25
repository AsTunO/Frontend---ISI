import "./reportCard.css"
import reportIconImage from "../../../imgs/report-icon.png"

function reportCard() {
    return(
        <div className="card-container">
            <img
                src={reportIconImage}
                alt="Icone do relatório"
                className="report-icon-image"
            />
            <span className="card-title">Relatórios</span>
        </div>
    )
}

export default reportCard