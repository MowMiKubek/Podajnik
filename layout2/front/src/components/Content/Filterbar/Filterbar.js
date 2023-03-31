export default function Filterbar(props) {
    return (
        <>
            <h2>Filtrowanie</h2>
              <p className="text-muted">Sortowanie kiedyś też</p>
              <div className="form-group mt-5">
                <label for="nazwa" className="form-label">Nazwa</label>
                <input type="text" className="form-control" id="nazwa" placeholder="Nazwa lub kod" />
              </div>
              <div className="form-group my-2">
                <label for="nazwa" className="form-label">Ilość</label>
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="od" placeholder="Od" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="do" placeholder="Do" />
                  </div>
                </div>
              </div>
        </>
    )
}