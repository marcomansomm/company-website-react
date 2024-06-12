import './JoinUs.css';
import FormField from '../FormField';

const JoinUs = () => {
  return (
    <div className="form-signin">
      <div className="text-center mb-4 font-color mt-4">
        <img className="mb-4" src={`${process.env.PUBLIC_URL}/images/markus/logoMarkusGray.png`} alt="Markus Logo" />
        <h1 className="h2 mb-3 font-weight-normal">Client Register</h1>
        <p>Please fill in all fields in the form below. Before submitting, review the information to ensure it is correct.</p>
      </div>

      <form>
        <div className="form-row" style={{display:'flex'}}>
          <FormField
            type="email"
            id="inputEmail"
            className="form-control inputcolor"
            placeholder="name@email.com"
            label="Email address"
            required={true}
            autoFocus={true}
            groupClass="form-group col-md-6 font-color"
          />
          <FormField
            type="text"
            id="inputName"
            className="form-control inputcolor"
            placeholder="First and Last name"
            label="Name"
            groupClass="form-group col-md-6 font-color"
          />
        </div>
        <div className="form-row" style={{display:'flex'}}>
          <FormField
            type="password"
            id="inputPassword4"
            className="form-control inputcolor"
            placeholder="Password"
            label="Password"
            groupClass="form-group col-md-6 font-color"
          />
          <FormField
            type="password"
            id="confirmPassword"
            className="form-control inputcolor"
            placeholder="Confirm Password"
            label="Confirm Password"
            groupClass="form-group col-md-6 font-color"
          />
        </div>
        <div className="alert alert-warning" id="passwordWarning">
          <p className="mb-0">Your password must have at least 6 characters including: a numeric character, a capitalized letter, and one of the following special characters "@#$%&*!?/\-_+=."</p>
        </div>
        <div className="form-row font-color " style={{display:'flex'}}>
          <FormField
            type="tel"
            id="inputPhone"
            className="form-control inputcolor"
            placeholder=""
            label="Phone Number"
            groupClass="form-group col-md-5"
          />
          <FormField
            type="text"
            id="inputBirthday"
            className="form-control inputcolor"
            placeholder="dd/mm/yyyy"
            label="Date of Birth"
            groupClass="form-group col-md-3 font-color"
          />
          <FormField
            type="text"
            id="inputCpf"
            className="form-control inputcolor"
            placeholder=""
            label="CPF"
            groupClass="form-group col-md-4 font-color"
          />
        </div>
        <div className="form-row font-color" style={{display:'flex'}}>
        <div className="form-group col-md-4">
            <label htmlFor="inputEducation">Education level</label>
            <select id="inputEducation" className="form-control inputcolor" defaultValue="3">
              <option value="1">Incomplete 1st degree</option>
              <option value="2">Complete 1st degree</option>
              <option value="3">Complete 2nd degree</option>
              <option value="4">Higher Education</option>
              <option value="5">Postgraduate</option>
            </select>
          </div>
          <div className="form-group col-md-8" style={{ display: 'grid' }}>
            <label htmlFor="civil" className="ml-4">Civil Status</label>
            <div>
              <div className="form-check form-check-inline ml-5">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" defaultChecked />
                <label className="form-check-label" htmlFor="inlineRadio1">Single</label>
              </div>
              <div className="form-check form-check-inline ml-3">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" />
                <label className="form-check-label" htmlFor="inlineRadio2">Married</label>
              </div>
              <div className="form-check form-check-inline ml-3">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" />
                <label className="form-check-label" htmlFor="inlineRadio3">Divorced</label>
              </div>
              <div className="form-check form-check-inline ml-3">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" />
                <label className="form-check-label" htmlFor="inlineRadio4">Widowed</label>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <button className="btn btn-lg btn-success btn-block mt-4 mr-2" type="submit">Sign up</button>
          <button className="btn btn-lg btn-outline-success btn-block mt-4" type="reset">Reset</button>
        </div>
        <p className="font-color text-center mt-4"> Already have an account? <a href="logIn.html">Log In</a></p>
        <p className="mt-4 mb-3 text-muted text-center">&copy; 2022-2024 Markus, Inc</p>
      </form>
    </div>
  );
};

export default JoinUs;
