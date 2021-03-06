import { useState } from 'react';
//import { Input, Icon, MonochromeIcons, CallToAction } from '@magiclabs/ui';
import classes from './Signin.module.css'

const EmailForm = ({ onEmailSubmit, disabled }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("")
    onEmailSubmit(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className='form-header'>Login</h3>
        <div className='input-wrapper'>
          <input
            placeholder='Enter your email'
            //size='sm'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            //prefix={<Icon inline type={MonochromeIcons.Envelope} size={22} />}
            className={classes.emailinput}
          />
        </div>
        <div>
          <button
            //leadingIcon={MonochromeIcons.PaperPlane}
            //color='primary'
            //size='sm'
            disabled={!email.length}
            onClick={handleSubmit}
            className={classes.loginbutton}
          >
            Send Magic Link
          </button>
        </div>
      </form>
      <style jsx>{`
        form,
        label {
          display: flex;
          flex-flow: column;
          text-align: center;
        }
        .form-header {
          font-size: 22px;
          margin: 25px 0;
        }
        .input-wrapper {
          width: 80%;
          margin: 0 auto 20px;
        }
      `}</style>
    </>
  );
};

export default EmailForm;