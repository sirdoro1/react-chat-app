
const AccessPage = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                {/* center col-md-4 to the vertical center of the page  */}

                <div className="col-md-4 offset-md-4 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Access Chat</h5>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Name</label>
                                    <input type="email" className="form-control" id="name" aria-describedby="name" placeholder="Enter name" />
                                </div>
                                <div className="form-group row p-2">
                                    <button type="submit" className="btn btn-primary mt-3 col-md-12">Access Chat</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AccessPage