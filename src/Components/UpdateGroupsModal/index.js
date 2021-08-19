import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  InputContainer,
  TitleContainer,
} from "../CreateHabitsModal/styles";
import {
  makeStyles,
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
  MenuItem,
} from "@material-ui/core";
import { useGroupsUser } from "../../Providers/GroupsUser";
import { InputId } from "../ActivitiesModal/styles";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "blue",
    backgroundImage: "linear-gradient(#1D64CB, #741DCB)",
    border: "1px solid #000",
    borderRadius: "20px",
    boxShadow: theme.shadows[9],
    padding: theme.spacing(2, 4, 3),
  },
  inputs: {
    backgroundColor: "#ffff",
    border: "1px solid #000",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0px 4px 4px rgba(116, 29, 203, 0.57)",
  },
  button: {
    borderRadius: "15px",
  },
  close: {
    width: "1px",
    borderRadius: "20px",
    marginLeft: "190px",
    marginBottom: "20px",
    fontSize: "10px",
  },
}));

const UpdateGroups = ({ groupsId }) => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const { register, handleSubmit } = useForm();
  const { updateGroups } = useGroupsUser();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>
        <CreateIcon className="updateIcon" color="primary" />
      </button>
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
                <Button
                  className={classes.close}
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={handleClose}
                >
                  x
                </Button>
                <h1>Atualize seu grupo</h1>
              </TitleContainer>
              <form onSubmit={handleSubmit(updateGroups)}>
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
                      label="Categoria"
                      variant="outlined"
                      color="primary"
                      {...register("category")}
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputId
                      className="hidden-id"
                      value={groupsId}
                      {...register("id")}
                    />
                  </InputContainer>
                </div>
                <InputContainer>
                  <Button
                    onClick={handleClose}
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

export default UpdateGroups;
