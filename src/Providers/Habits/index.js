import { createContext, useEffect, useState, useContext } from 'react';

import jwtDecode from "jwt-decode";

import api from '../../Services/api'

const HabitsContext = createContext();

export const HabitsProvider = ({children}) => {

    const [habits, setNewHabits] = useState([])

    const [token] = useState(JSON.parse(localStorage.getItem("@Kenzinho:token")) || "");

    const decoded = jwtDecode(token)


    const loadHabits = () =>{
      api
      .get('habits/personal/', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then((response) => setNewHabits(response.data))
        .catch((e) => console.log(e));
    }
   
    const createHabit = (data) => {
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
            ).then(loadHabits())
             .catch((e) => console.log(e));;

    }

    const deleteHabit = (id) =>{

        const newHabits = habits.filter((habit) => habit.id !== id);

        api
        .delete(`habits/${id}/`,{
            headers: {
            Authorization: `Bearer ${token}`,
            }
        }).then((response) => setNewHabits(newHabits));

    }

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
            }).catch((e) => console.log(e));

    }

    useEffect(() => {
      loadHabits() 
      }, []);


    return(
        <HabitsContext.Provider value={{habits, createHabit,}}>
            {children}
        </HabitsContext.Provider>
    )
}

export const useHabits = () => useContext(HabitsContext);