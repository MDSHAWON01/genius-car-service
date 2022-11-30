import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);



    const navigate = useNavigate();




    const navigateLogin = e => {
        navigate('/login')
    }
    if (user) {
        console.log('user', user);
    }

    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = e.target.terms.checked;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')



    }
    return (
        <div className="register-form">
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder="your name" />
                <input type="email" name="email" placeholder="email address" />
                <input type="password" name="password" placeholder="your password" />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept genius car terms and condition</label>
                <input disabled={!agree} className="btn btn-primary w-50 mx-auto" type="submit" value="Register" placeholder="your name" />
            </form>
            <p>Already have an account? <Link to="/login" className="text-danger pe-auto text-decoration-none" onClick={navigateLogin}>please login</Link> </p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;