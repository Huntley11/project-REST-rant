const React = require('react')
const Default = require('../default')

function Show(data) {
    return (
        <Default>
          <main>
            <h1>{data.place.name}</h1>
            <div>
                <h3>Ratings</h3>
            </div>
            <div>
                <h3>Description</h3>
            </div>
            <div>
                <h4>Comments</h4>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>     
          </main>
        </Default>
    )
}

module.exports = Show