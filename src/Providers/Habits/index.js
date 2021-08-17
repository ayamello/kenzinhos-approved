import { createContext, useState, useContext } from 'react';
import jwtDecode from 'jwt-decode';
import api from '../../Services/api';
import { toast } from 'react-toastify';

const HabitsContext = createContext();

export const HabitsProvider = ({children}) => {

    const [habits, setNewHabits] = useState([]);
    const [token] = useState(JSON.parse(localStorage.getItem('@Kenzinho:token')) || '');

    const loadHabits = () =>{
        api
        .get('habits/personal/', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }).then((response) => setNewHabits(response.data))
          .catch((err) => 
            toast.error('Hábitos não pode ser carregado'));
    };
   
    const createHabit = (data) => {

      const decoded = jwtDecode(token)

        const { 
            title, 
            category,
            difficulty,
            frequency,
           } = data;

        api
        .post('habits/',
              { 
                title: title,
                category: category, 
                difficulty: difficulty,
                frequency: frequency,
                achieved: false,
                how_much_achieved: 0, 
                user: decoded.user_id,
              }
            ,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            }, 
            )
            .then(() => {
              toast.info('Hábito criado');
              loadHabits()
            })  
            .catch((err) => 
              toast.error('Não foi possível criar um hábito. Verifique dados informados'));

    };

    const deleteHabit = (id) =>{

        const newHabits = habits.filter((habit) => habit.id !== id);

        api
        .delete(`habits/${id}/`,{
            headers: {
            Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => {
          setNewHabits(newHabits);
          toast.error('Hábito excluído');
          loadHabits()
        })
        .catch((err) => toast.error('Não foi possível excluir o hábito.'));

    };

    const updateHabit = (data) =>{

        const {
            how_much_achieved,
            achieved,
            id,
        } = data

        const newHabits = habits.filter((habit) => habit.id !== id);

        api
        .patch(`habits/${id}/`,
            {
                how_much_achieved: how_much_achieved,
                achieved: achieved,
            }
            ,
            {
                headers: {
                Authorization: `Bearer ${token}`,
                }
            })
            .then(loadHabits())
            .then(toast.success('Hábito atualizado'))
            .catch((err) => toast.error('Não foi possível atualizar o hábito.'));

    };

    return(
        <HabitsContext.Provider value={{habits, createHabit, deleteHabit, updateHabit, loadHabits}}>
            {children}
        </HabitsContext.Provider>
    )
}

export const useHabits = () => useContext(HabitsContext);