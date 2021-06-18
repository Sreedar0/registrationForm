import React from 'react'

function mobile() {
    return (
        <div>
            <div className='row'>
                        <div className='col-sm-6'>
                            <div className='wrap-input100 martop' id='m_rnumber' data-validate='Mobile is required'>
                                <div className='row input100 mainRowSignup validate-input' id='mainRowSignup'>
                                    <div className='intl-tel-input allow-dropdown'>
                                        <div className='flag-container'>
                                            <ul className='country-list hide'>
                                                <li className='country active' data-dial-code='91' data-country-code='in'>
                                                    <div className='flag-box'>
                                                        <div className='iti-flag in'></div>
                                                    </div>
                                                    <span class="country-name">India (भारत)</span><span class="dial-code">+91</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='intl-tel-input allow-dropdown'>
                                            <div className='flag-container'>
                                                <div class="selected-flag" tabindex="0" title="India (भारत): +91">
                                                    <div class="iti-flag in"></div>
                                                    <ul className='country-list hide'>
                                                        <li className='country active highlight' data-dial-code="91" data-country-code="in">
                                                            <div className='flag-box'>
                                                                <div className='init-flag in'></div>
                                                            </div>
                                                            <span class="country-name">India (भारत)</span><span class="dial-code">+91</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                    <div className=''>
                                                    
                                                        <label className='mobile-label'>
                                                            <span class="label_name" >Mobile Number</span>
                                                             <input id="demo" type="tel" name="flag" class=" firstInputSignUpBox" autocomplete="off" placeholder="+91" value="+91" readonly />   
                                                        
                                                            <div style={{width:'150px'}}><input name="mobile" class="secondInputBoxSignup input100 nodecimals" placeholder="888 888 8888" type="text" maxlength="10" autocomplete="off" id="mobile" /></div>
                                                            <button type="button" id="sendMobileOTPButton" onclick="sendMobileOTP()">Verify</button>
                                                        </label> 
                                                    </div>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 class="resend_mobile_otp" id="mobile_otp_txt">OTP valid for 30 mins. Didn’t Receive OTP? <a href="/" id="resendMobile" onclick="sendMobileOTP()">Resend Code</a></h5>
                                          <span class="help-block error-validation error-mobile"></span>
                            </div>
                        </div>
                        <div class='col-sm-6 otp-section phone_otp'>
                            <div class='wrap-input100 validate-input'>
                                <label  style={{width:'350px'}}>
                                    <span class="label_name">Mobile OTP</span>
                                    <div>
                                        <input id="codeBox11" class="otp_box phone_bx nodecimals" type="text" placeholder="0" maxlength="1" onkeyup="onKeyUpEvent1(11, event)" onfocus="onFocusEvent1(11)" />
                                        <input id="codeBox12" class="otp_box phone_bx nodecimals" type="text" placeholder="0" maxlength="1" onkeyup="onKeyUpEvent1(12, event)" onfocus="onFocusEvent1(12)" />
                                        <input id="codeBox13" class="otp_box phone_bx nodecimals" type="text" placeholder="0" maxlength="1" onkeyup="onKeyUpEvent1(13, event)" onfocus="onFocusEvent1(13)" />
                                        <input id="codeBox14" class="otp_box phone_bx nodecimals" type="text" placeholder="0" maxlength="1" onkeyup="onKeyUpEvent1(14, event)" onfocus="onFocusEvent1(14)" />
                                        <input id="codeBox15" class="otp_box phone_bx nodecimals" type="text" placeholder="0" maxlength="1" onkeyup="onKeyUpEvent1(15, event)" onfocus="onFocusEvent1(15)" />
                                        <input id="codeBox16" class="otp_box phone_bx nodecimals" type="text" placeholder="0" maxlength="1" onkeyup="onKeyUpEvent1(16, event)" onfocus="onFocusEvent1(16)" />
                                    </div>
                                    <span class="help-block error-validation error-mobile_otp"></span>
                                    <p class="check_mobile_otp">Check your phone to see OTP</p>
                                </label>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default mobile
