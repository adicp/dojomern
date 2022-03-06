
import React, { useReducer } from 'react';
 
// const initialState = {
//     name: '',
//     email: ''
// };

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
}

function reducer(state, action) {
    console.log(state);
    console.log(action);
    return {
        ...state,
        [action.type]: action.payload
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(reducer);
    function handleChange(e) {
        const { name, value, error} = e.target;
        if (name === "firstName" && value.length < 3 ) {
            state.firstName.error = "more than 2 chars";
            console.log(state.firstName.error);

        } else {
            state.firstName.error = '';
        }

        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <div>
            {/* {JSON.stringify(state)} */}
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        name ="firstName"
                        value={state.firstName.value}
                        onChange={ handleChange }
                        error= {state.firstName.error}
                    />
                </label>
                {
                    state.firstName.error ? state.firstName.error : ''
                }
            </div>
            {/* {
                <p>{ firstName.value }</p>
            } */}
            <div>
                <label>
                    <span>Last Name:</span>
                    <input
                        name ="lastName"
                        value={state.lastName.value}
                        onChange={ handleChange }
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span> {' '}
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={ handleChange }
                    />
                </label>
            </div>
        </div>
    );
}