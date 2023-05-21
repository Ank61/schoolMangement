import React from 'react';
import "../../Common/CSS/commonCSS.css";
import image from "../../Common/Image/img-01.png";
import { useNavigate } from "react-router";
function Login(){
	const navigation  = useNavigate();
	const handleSubmit = ()=>{
		navigation("/dashboard");
	}
    return (
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src={image} alt="IMG"/>
				</div>

				<form className="login100-form validate-form">
					<span className="login100-form-title">
						Member Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email" placeholder="Email"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn" onClick={handleSubmit}>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
    )
}

export default Login;