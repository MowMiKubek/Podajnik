import Filterbar from './Filterbar/Filterbar'
import ScrewContainer from './Screwcontainer/ScrewContainer'

export default function Content(props) {
    return (
        <main className="container">
            <div className="card card-body">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <Filterbar />
                    </div>
                    <div className="col-md-9">
                        <ScrewContainer />
                    </div>
                </div>
            </div>
        </main>
    )
}