function Card(props) {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="card stat-card border-0 shadow-sm">
                    <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                            <div className="stat-icon bg-primary bg-opacity-10 text-primary">
                                <i className={props.icon}></i>
                            </div>
                            <span className="badge bg-success trend-badge">
                                <i className="fas fa-arrow-up me-1"></i>12.5%
                            </span>
                        </div>
                        <h6 className="text-muted mb-2">{props.nome}</h6>
                        <h4 className="mb-3">{props.total}</h4>
                        <div className="progress">
                            <div className="progress-bar bg-primary" style={{width: `${props.progBarra}`+'%'}}></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Card;