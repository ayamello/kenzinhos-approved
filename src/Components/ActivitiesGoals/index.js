import api from "../../Services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { useListActivitiesGoals } from "../../Providers/ActivitiesGoals";

const ActivitiesGoals = ({ goals, activitiesGroup }) => {
  const [value, setValue] = useState();
  const [edit, setEdit] = useState(false);

  const { handleActivieDelete, handleGoalDelete } =
    useListActivitiesGoals() || [];

  const schema = yup.object().shape({
    title: yup.string(),
    difficulty: yup.string(),
    how_much_achieved: yup.number(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleActivieEdit = (data, id) => {
    const newObj = { ...data, how_much_achieved: value };
    api
      .patch(`activities/${data.id}/`, newObj, {})
      .then(() => {
        toast.success("Meta atualizada!");
      })
      .catch(() => {
        toast.error("Erro ao atualizar meta.");
      });
  };

  const handleGoalEdit = (data) => {
    const newObj = { ...data, how_much_achieved: value };
    api
      .patch(`goals/${data.id}/`, newObj, {})
      .then(() => {
        toast.success("Meta atualizada!");
        setEdit(!edit);
      })
      .catch(() => {
        toast.error("Erro ao atualizar meta.");
        setEdit(!edit);
      });
  };

  const handleActivitieCreation = (data) => {
    const newObj = { ...data, how_much_achieved: value };
    api
      .post("/activities/", newObj, {})
      .then(() => toast.success("Objetivo atualizado!"));
  };

  const handleGoalCreation = (data) => {
    const newObj = { ...data, how_much_achieved: value };
    api
      .post("/goals/", newObj, {})
      .then(() => {
        toast.success("Objetivo atualizado!");
      })
      .catch(() => {
        toast.error("Erro ao atualizar objetivo. Verificar dados");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleGoalEdit)}></form>
    </div>
  );
};
export default ActivitiesGoals;
