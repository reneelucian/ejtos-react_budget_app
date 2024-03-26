import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
              // Budget component
               <div className='col-sm'>
                <Budget />
                </div>

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                            import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Budget = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      <h2>Budget</h2>
      <p>Current Budget: ${state.budget}</p>
    </div>
  );
};

export default Budget;

                        
                        }        

                        {
                            /* Add Remaining component here*/
                            import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Remaining = () => {
  const { state } = useContext(AppContext);
  const remaining = state.budget - state.expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div>
      <h2>Remaining</h2>
      <p>Remaining Budget: ${remaining}</p>
    </div>
  );
};

export default Remaining;

                        }        

                        {
                            /* Add ExpenseTotal component here */
                            import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const ExpenseTotal = () => {
  const { state } = useContext(AppContext);
  const totalExpenses = state.expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div>
      <h2>Expense Total</h2>
      <p>Total Expenses: ${totalExpenses}</p>
    </div>
  );
};

export default ExpenseTotal;

                        }        
                       
                        {
                            /* Add ExpenseList component here */
                            import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      <h2>Expense List</h2>
      {state.expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;

                        }         

                        {
                            /* Add ExpenseItem component here */
                            import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const ExpenseItem = ({ expense }) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_EXPENSE', payload: expense.id });
  };

  return (
    <div>
      <p>{expense.name}: ${expense.amount}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ExpenseItem;

                        }        

                        {
                            /* Add AllocationForm component here under */
                            import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';

const AllocationForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { dispatch } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Math.random(),
      name,
      amount: parseFloat(amount),
    };
    dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
    setName('');
    setAmount('');
  };

  return (
    <div>
      <h2>Allocation Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Expense Name" />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Expense Amount" />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AllocationForm;

                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
