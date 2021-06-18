import React from 'react';
import './email.css';

class email extends React.Component {

    state = {
        disabled:true
    }

    otpEnable () {
        this.setState({
            disabled:false
        });
    }

   render() {
    return (
        <div>
            <div className='row'>
                        <div className='col-sm-6'>
                            <div className='wrap-input100 validate-input'>
                                <label>
                                    <span class="label_name">Email ID</span>
                                    <div className='label-email'>
                                    <input class="input100" placeholder="yuorname@email.com" id="email" name="email" type="email"  autocomplete="off" value="" />
                                    <button type="button" id="sendEmaiOTPButton" onclick={this.otpEnable}>Verify</button>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='col-sm-6 otp-section email_otp_section'>
                            <div className='wrap-input100 validate-input'>
                                <label style={{width:'350px'}} className='email-disabled' disabled={this.state.disabled}>
                                <span className='label_name'>Email OTP</span>
                                    <div>
                                    <input id="codeBox1" class="otp_box email_bx nodecimals" type='number' placeholder="0" maxlength="1" onkeyup="onKeyUpEvent(1, event)" onfocus="onFocusEvent(1)" value="" />
                                    <input id="codeBox2" class="otp_box email_bx nodecimals" type="number" placeholder="0" maxlength="1" onkeyup="onKeyUpEvent(2, event)" onfocus="onFocusEvent(2)" value="" />
                                    <input id="codeBox3" class="otp_box email_bx nodecimals" type="number" placeholder="0" maxlength="1" onkeyup="onKeyUpEvent(3, event)" onfocus="onFocusEvent(3)" value="" />
                                    <input id="codeBox4" class="otp_box email_bx nodecimals" type="number" placeholder="0" maxlength="1" onkeyup="onKeyUpEvent(4, event)" onfocus="onFocusEvent(4)" value="" />
                                    <input id="codeBox5" class="otp_box email_bx nodecimals" type="number" placeholder="0" maxlength="1" onkeyup="onKeyUpEvent(5, event)" onfocus="onFocusEvent(5)" value="" />
                                    <input id="codeBox6" class="otp_box email_bx nodecimals" type="number" placeholder="0" maxlength="1" onkeyup="onKeyUpEvent(6, event)" onfocus="onFocusEvent(6)" value="" />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
        </div>
    )
   }
}

export default email
