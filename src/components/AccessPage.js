import React from "react";

const AccessPage = () => {
     const handleClick = () =>{
        console.log(name.current.value);
     }
     const name = React.createRef(); 
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-lg-12 col-sm-9 mx-auto mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Access Chat</h5>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Name</label>
                                    <input ref={name} type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter name" />
                                </div>
                                <div className="form-group row p-2">
                                    <button type="button" onClick={handleClick} className="btn btn-primary mt-3 col-md-12">Access Chat</button>
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