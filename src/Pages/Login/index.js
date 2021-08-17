import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TitleContainer,
  InputContainer,
  FormContainer,
  MainContainer,
  LogoContainer,
} from "./styles";
import { Button, TextField } from "@material-ui/core";
import { useAuth } from "../../Providers/Auth";
import logo from "../../Assets/Img/logoMobile.png";

const Login = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const loginSchema = yup.object().shape({
    username: yup.string().required("Usuário Obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onLoginFunction = (data) => {
    signIn(data, history);
  };

  return (
    <MainContainer>
      <LogoContainer>
        <Link to="/">
          <img alt="logo" src={logo} />
        </Link>
      </LogoContainer>
      <TitleContainer>
        <h1>Não é cadastrado?</h1>
        <Link to="/signup">Cadastre-se</Link>
      </TitleContainer>
      <FormContainer>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onLoginFunction)}>
          <InputContainer>
            <TextField
              size="small"
              id="outlined-basic"
              label="Nome de usuário"
              variant="outlined"
              error={!!errors.username}
              helperText={errors.username?.message}
              color="primary"
              {...register("username")}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              size="small"
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message}
              color="primary"
              {...register("password")}
            />
          </InputContainer>
          <InputContainer>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              className="submitButton"
            >
              Entrar
            </Button>
          </InputContainer>
        </form>
      </FormContainer>
    </MainContainer>
  );
};

export default Login;
