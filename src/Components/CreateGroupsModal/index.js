import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGroupsUser } from "../../Providers/GroupsUserProvider";
import { FormContainer, InputContainer, TitleContainer } from "./styles";
import {
  makeStyles,
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Tooltip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: "linear-gradient(#1D64CB, #741DCB)",
    border: "1px solid #000",
    borderRadius: "20px",
    boxShadow: theme.shadows[9],
    padding: theme.spacing(2, 4, 3),
  },
  inputs: {
    backgroundColor: "#e5e5e5",
    border: "1px solid #000",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0px 4px 4px rgba(116, 29, 203, 0.57)",
  },
}));

const CreateGroupsModal = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const { register, handleSubmit } = useForm();
  const { createGroup } = useGroupsUser();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Add" interactive>
        <h3 type="button" onClick={handleOpen}>
          Criar +
        </h3>
      </Tooltip>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <FormContainer>
              <TitleContainer>
                <h1>Crie seu Grupo</h1>
              </TitleContainer>
              <form onSubmit={handleSubmit(createGroup)}>
                <div className={classes.inputs}>
                  <InputContainer>
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Nome"
                      variant="outlined"
                      color="primary"
                      {...register("name")}
                    />
                  </InputContainer>
                  <InputContainer>
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Descrição"
                      variant="outlined"
                      color="primary"
                      {...register("description")}
                    />
                  </InputContainer>

                  <InputContainer>
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Categoria"
                      variant="outlined"
                      {...register("category")}
                    />
                  </InputContainer>

                  <InputContainer>
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Atividade"
                      variant="outlined"
                    />
                  </InputContainer>
                  <InputContainer>
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Meta"
                      variant="outlined"
                    />
                  </InputContainer>
                </div>
                <InputContainer>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                    className="submitButton"
                  >
                    Adicionar
                  </Button>
                </InputContainer>
              </form>
            </FormContainer>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CreateGroupsModal;
