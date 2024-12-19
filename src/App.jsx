import './styles/App.css';
import routesConfig from './routes/routesConfig';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createContext, useState } from 'react';

const router = createBrowserRouter(routesConfig);

// export const ExpenseContext = createContext({
//   expenseTable: [],
//   addToTable: () => {},
// });

function App() {
  const [expenseTable, setExpenseTable] = useState([]);

  const addToTable = (row) => {
    let newTable = [...expenseTable];
    newTable.push(row);
    setExpenseTable(newTable);
  };

  return (
    // <ExpenseContext.Provider value={{ expenseTable, addToTable }}>
    <RouterProvider router={router} />
    // </ExpenseContext.Provider>
  );
}

export default App;
