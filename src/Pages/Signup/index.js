import api from '../../Services/api';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, Link } from 'react-router-dom';
import { MainContainer, FormContainer, InputContainer, TitleContainer, LogoContainerSignup } from './styles';
import { Button, TextField } from '@material-ui/core';
import { toast } from 'react-toastify';
import logo from '../../Assets/Img/logoMobile.png';

const Signup = () => {

  const schema = yup.object().shape({

    username: yup.string().required('*Campo obrigatório'),
    email: yup.string().required('*Campo obrigatório').email('Email inválido'),
    password: yup
      .string()
      .min(6, '*Mínimo de 6 dígitos')
      .required('*Campo obrigatório'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], '*Senha não confere'),

  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  function onSubmitFunction({ username, email, password }) {

    const user = { username, email, password };

    api
      .post('/users/', user)
      .then((_) => {
        toast.success('Conta criada com sucesso');
        return history.push('/login');
      })
      .catch((err) => {
        toast.error('Erro ao criar a conta. Email já cadastrado');
      });

  }

  return (
    <MainContainer>
      <LogoContainerSignup>
        <Link to='/'>
          <img alt='logo' src={logo} />
        </Link>
      </LogoContainerSignup>
      <FormContainer>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <InputContainer>
            <TextField
              size='small'
              id='outlined-basic'
              label='Nome de usuário'
              variant='outlined'
              error={!!errors.username}
              helperText={errors.username?.message}
              color='primary'
              {...register('username')}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              size='small'
              id='outlined-basic'
              label='Email'
              variant='outlined'
              error={!!errors.email}
              helperText={errors.email?.message}
              color='primary'
              {...register('email')}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              size='small'
              id='outlined-basic'
              label='Senha'
              variant='outlined'
              type='password'
              error={!!errors.password}
              helperText={errors.password?.message}
              color='primary'
              {...register('password')}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              size='small'
              id='outlined-basic'
              label='Confirme sua senha'
              variant='outlined'
              type='password'
              error={!!errors.passwordConfirmation}
              {...register('passwordConfirmation')}
              helperText={errors.passwordConfirmation?.message}
            />
          </InputContainer>
          <InputContainer>
            <Button
              variant='contained'
              color='primary'
              size='large'
              type='submit'
              className="submitButton"
            >
              Cadastrar
            </Button>
          </InputContainer>
        </form>
      </FormContainer>
      <TitleContainer>
        <h1>Já é cadastrado?</h1>
        <Link to='/login'>login</Link>
      </TitleContainer>
    </MainContainer>
  );
};

export default Signup;