import { createContext, useEffect, useState, useContext } from 'react';

<<<<<<< HEAD
import jwtDecode from "jwt-decode";

=======
>>>>>>> 6e85fc79646397c728d886c5134e2f746001fa19
import api from '../../Services/api'

const HabitsContext = createContext();

export const HabitsProvider = ({children}) => {

    const [habits, setNewHabits] = useState([])

    const [token] = useState(JSON.parse(localStorage.getItem("@Kenzinho:token")) || "");

<<<<<<< HEAD
  


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
      const decoded = jwtDecode(token)
=======
    const createHabit = (data) =>{

>>>>>>> 6e85fc79646397c728d886c5134e2f746001fa19
        const { 
            title, 
            category,
            difficulty,
            frequency,
<<<<<<< HEAD
           } = data;
=======
            achieved,
            how_much_achieved,
            user } = data;
>>>>>>> 6e85fc79646397c728d886c5134e2f746001fa19

        api
        .post('habits/',
              { 
                title: title,
                category: category, 
                difficulty: difficulty,
                frequency: frequency,
<<<<<<< HEAD
                achieved: false,
                how_much_achieved: 0, 
                user: decoded.user_id,
=======
                achieved: achieved,
                how_much_achieved: how_much_achieved, 
                user: user,
>>>>>>> 6e85fc79646397c728d886c5134e2f746001fa19
              }
            ,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            }, 
<<<<<<< HEAD
            ).then(loadHabits())
=======
            ).then(e => console.log(e))
>>>>>>> 6e85fc79646397c728d886c5134e2f746001fa19
             .catch((e) => console.log(e));;

    }

    const deleteHabit = (id) =>{

        const newHabits = habits.filter((habit) => habit.id !== id);

        api
        .delete(`habits/${id}/`,{
            headers: {
            Authorization: `Bearer ${token}`,
            }
<<<<<<< HEAD
        }).then((response) => setNewHabits(newHabits))
          .then(loadHabits());
=======
        }).then((response) => setNewHabits(newHabits));
>>>>>>> 6e85fc79646397c728d886c5134e2f746001fa19

    }

    const updateHabit = (data) =>{

        const {
            how_much_achieved,
            achieved,
            id,
        } = data

<<<<<<< HEAD
=======
        const newHabits = habits.filter((habit) => habit.id !== id);

>>>>>>> 6e85fc79646397c728d886c5134e2f746001fa19
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
<<<<<<< HEAD
      loadHabits() 
      }, []);


    return(
        <HabitsContext.Provider value={{habits, createHabit, deleteHabit}}>
=======

        api
      .get('habits/personal/', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then((response) => setNewHabits(response.data))
        .catch((e) => console.log(e));

      }, [habits]);


    return(
        <HabitsContext.Provider value={{habits, createHabit,}}>
>>>>>>> 6e85fc79646397c728d886c5134e2f746001fa19
            {children}
        </HabitsContext.Provider>
    )
}

export const useHabits = () => useContext(HabitsContext);