import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>


    }
    if (user || user1) {
        navigate('/home');
    }


    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className="bg-primary w-50"></div>
                <p className="mt-2 px-2">or</p>
                <div style={{ height: '1px' }} className="bg-primary w-50"></div>
            </div>

            {errorElement}

            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-info d-block mx-auto w-50 my-2">Google login</button>
                <button className="btn btn-info d-block mx-auto w-50 my-2">Facebook login</button>
                <button onClick={() => signInWithGithub()} className="btn btn-info d-block mx-auto w-50">Github login</button>
            </div>
        </div >
    );
};

export default SocialLogin;