import { useNavigate } from 'react-router-dom';
import "./reportCard.css"
import reportIconImage from "../../../imgs/report-icon.png"



function reportCard() {
    const navigate = useNavigate();
    
    const reportFlow = () => {
        navigate('/reports');
    };

    return(
        <div className="card-container" onClick={reportFlow}>
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