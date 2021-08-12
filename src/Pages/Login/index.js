import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/api";
import {
  TitleContainer,
  InputContainer,
  FormContainer,
  MainContainer,
} from "./styles";
import { Button, TextField } from "@material-ui/core";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const Login = () => {
  const history = useHistory();

  const loginSchema = yup.object().shape({
    username: yup.string().required("Usuário Obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Mínimo de 8 dígitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onLoginFunction = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        toast.info(`Bem vindo ${data.username}`);
        const { access } = response.data;
        const decoded = jwtDecode(access);
        console.log(decoded);
        localStorage.setItem("@Kenzinho:token", JSON.stringify(access));
        history.push("/dashboard", { data: decoded.user_id });
      })
      .catch((err) =>
        toast.error(
          "Não foi possível fazer o login. Verifique dados informados"
        )
      );
  };

  return (
    <MainContainer>
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
            <div>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                className="submitButton"
              >
                login
              </Button>
            </div>
          </InputContainer>
        </form>
      </FormContainer>
    </MainContainer>
  );
};

export default Login;
