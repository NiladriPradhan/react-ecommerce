import React from 'react';
import './login.css';

const Login = () => {
    return (
        <>
            {/* <div className="card" style={{width: "30rem"}}> */}
            <div className="container mt-5">
                <form className='col-lg-4 col-md-6 col-sm-8 col-xs-4  shadow p-3 mb-5 bg-white rounded' >
                    <h2 className='text-center '>login</h2>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary text-white">Submit</button>
                </form>
            </div>
            {/* </div> */}
        </>
    )
}

export default Login;