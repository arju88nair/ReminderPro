import {ADD_REMINDER} from '../constants';


const reminder = (action) =>{
    return{
        rext:action.text,
        id:Math.random()
    }
}


const reminders = (state = [],action) => {
    let reminders = null;
    switch(action.type)
    {
        case ADD_REMINDER:
        reminders=[...state,reminders(action)];
        console.log(reminders,"Reminders")
        return reminders;
        default:
        return state;
    }

}


export default reminders;