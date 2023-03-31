const React = require('react')
const Default = require('../default')

function Show(data) {
    return (
        <Default>
            <main>
                <h1>{data.place.name}</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} className="img-max" />
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <h3>Description</h3>
                            <p className="text-center">
                                <br />
                                {data.place.showEstablished()}
                                <br />
                            </p>
                        </div>
                        <h3>Ratings</h3>
                        <h4>Comments</h4>
                    </div>
                </div>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Default>
    )
}

module.exports = Show