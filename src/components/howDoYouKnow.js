import React from 'react';
import './howDoYouKnow.css';


class howDoYouKnow extends React.Component {

    state = {
        disabled: true
    }

    handleChange = (e) => {
        if (e.target.value =4) {
            this.setState({
                disabled:false
            });
        }
        else {
            this.setState({
                disabled:true
            })
        }
    }

    render() {
        return (
            <div>
                <div className='row'>
                            <div className='col-sm-12'>
                                <div className='form-group validate-input'>
                                    <label class="about-carbanio label_name" for="first-choice">How do you know about Carbanio?</label>
                                    <select class="form-control about select2 input100" required="" id="first-choice" name="primary_source" value="" onChange={this.handleChange}>
                                        <option value="" disabled="" selected="">Click to Select…</option>
                                        <option value="1">I found in Google / Internet search</option>
                                        <option value="2">I received an Email / Newsletter from Carbanio</option>
                                        <option value="3">Marketing Team approached me</option>
                                        <option value="4">Known person referred</option>
                                        <option value="5">I came to know through Advertisement</option>
                                        <option value="6">I found it on social media </option>
                                        <option value="7">I read a digital article about Carbanio </option>
                                     </select>  
                                </div>
                            </div>
                            <div className='know' disabled={this.state.disabled} >
                            <div class="col-sm-12 second-level" >
                                <div class="form-group validate-input">
                                    <label class="about-carbanio label_name" for="second-choice">Which one?</label>
                                    <select class="form-control about select2 input100" required="" id="second-choice" name="secondary_source">
    
                                    </select>
                                   <span class="help-block error-validation error-secondary_source" style={{color: 'red'}}></span>
                                   <input type="hidden" value="false" id="validate_second_choice" />
                                </div>
                            </div>
                            </div>
                        </div>
            </div>
        )
    }
}

export default howDoYouKnow;