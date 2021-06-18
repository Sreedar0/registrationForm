import React from 'react';
import './RegistrationForm.css';
import HowDoYouKnow from './components/howDoYouKnow';
import Email from './components/email';
import Mobile from './components/mobile';

function RegistrationForm() {
    return (
        <div>
            <div className="userRegisterForm">
                <div className='register_dashboard_latest'>
                    <h1 style={{textAlign:'center'}}>
                        User Registration
                    </h1>
                </div>
                <br />
                <br />
                <br />
                <div className='nwfor'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='wrap-input100 validate-input'>
                                <label>
                                    <span>First Name</span>
                                    <input class="input100 onlytext" placeholder="sreedar" minlength="3" id="first_name" name="first_name" type="text" autocomplete="off" maxlength="15">
                                    </input>
                                </label>
                                <span class="help-block error-validation error-first_name"></span>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='wrap-input100 validate-input'>
                                <label>
                                    <span class="label_name">Last Name</span>
                                    <input class="input100 onlytext" placeholder="Pariserla" minlength="3" id="last_name" name="last_name" type="text"  autocomplete="off" maxlength="15"></input>   
                                </label>
                                <span class="help-block error-validation error-last_name"></span>
                            </div>
                        </div>
                    </div>
                    <Email />
                    <Mobile />
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className="wrap-input100 validate-input" data-validate="Password should be min 8 and max 15 characters ">
                                <label>
                                    <span class="label_name">Password</span>
                                    <div className='label-password'>
                                        <input class="input100" placeholder="********" id="password" name="password" type="password" value="" maxlength="15" />
                                        <p className="pass_btn" onclick="showHidePassword('password')">
                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                        </p>
                                    </div>
                                </label>
                                      <span class="help-block error-validation error-password"></span>
                            </div>
                        </div>
                        <div class="col-sm-6">
                        <div class="wrap-input100 validate-input" data-validate=" Valid Comfirm Password is required ">
                            <label>
                                <span class="label_name">Confirm Password</span>
                                <div className='label-password'>
                                    <input class="input100" placeholder="********" id="password_confirmation" name="password_confirmation" type="password" value="" maxlength="15" />
                                    <p class="pass_btn" onclick="showHidePassword('password_confirmation')">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                        
                                    </p>
                                </div>
                                
                            </label>
                            
                            <span class="help-block error-validation error-password_confirmation" style={{color: 'red'}}></span>
                        </div>
                    </div>
                    </div>
                    <HowDoYouKnow />
                    <br />
                    <br />
                    <div class="row">
                        <div class="col-md-12">
                            <div class="registerbutton">
                                <div class="container-login100-form-btn1">
                                    <button type="button" class="login100-form-btn validate-form-btn" id="user_submit_btn">
                                        next
                                    </button>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm
