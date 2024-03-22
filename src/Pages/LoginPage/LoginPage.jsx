import React, { useState } from 'react';
import './LoginPage.css';
import { userActions } from '../../redux/slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const LoginPage = () => {
    const [user, setUser] = useState({name: '', password: ''});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        dispatch(userActions.setName(user.name));
        dispatch(userActions.toggleLogged());
        navigate("/");
    };

    return (
        <div className="login-container">
            <form id='formUser' onSubmit={loginUser}>
                <label htmlFor='nameUser' className='margin-form'>
                    {""}
                    Nome
                </label>
                <input
                    type='text'
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    placeholder='Digite o seu nome!'>
                    
                </input>
                <label htmlFor='passwordUser' className='margin-form'>
                    {""}
                    Senha
                </label>
                <input
                    type='password'
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value })}
                    placeholder='Digite a sua senha!'></input>
                <button type='submit' id="buttonForm"className='margin-form'>
                    Logar
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
