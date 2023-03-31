export default function Screw (props) {
    return (
        <div className="card mt-3">
            <img src="assets/srubka2.jpg" alt={props.code} className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.code}</p>
            <button className="btn btn-primary">Sprawdź Ilosc</button>
            <button className="btn btn-warning">Pobierz</button>
            </div>
        </div>
    )
}