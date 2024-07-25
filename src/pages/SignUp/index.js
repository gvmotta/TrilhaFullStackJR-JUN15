import React, { useState } from 'react';
import * as C from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { signup } = useAuth();

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os e-mails não são iguais");
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res)
            return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/");
    };

    return (
        <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                    type="email"
                    placeholder="Confirme seu e-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.LabelSignin>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/" >&nbsp</Link> 
                    </C.Strong>
                </C.LabelSignin>
            </C.Content>
        </C.Container>>
    )
}

export default SignUp