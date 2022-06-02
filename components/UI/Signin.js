import { useState } from 'react';
//import { Input, Icon, MonochromeIcons, CallToAction } from '@magiclabs/ui';

const EmailForm = ({ onEmailSubmit, disabled }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
            className="emailinput"
          />
        </div>
        <div>
          <button
            //leadingIcon={MonochromeIcons.PaperPlane}
            //color='primary'
            //size='sm'
            //disabled={disabled}
            onClick={handleSubmit}
            className="loginbutton"
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
        .loginbutton{
          background-color:blue;
          width:200px;
          height:35px;
          color:white;
          border-radius:7px;
          cursor:pointer;
          margin:10px 20px;
        }
        .emailinput{
          border-radius: 20px;
          color: black;
          width: 300px;
          height: 40px;
          padding-left: 10px;
        }
      `}</style>
    </>
  );
};

export default EmailForm;