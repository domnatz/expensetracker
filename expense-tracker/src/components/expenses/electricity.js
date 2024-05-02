import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import './electricity.css'; // Adjusted CSS file path

function ElectricExpenses() {
  const [expensesData, setExpensesData] = useState([
    { id: 1, amount: "120.00", dueDate: "2024-05-01" },
    { id: 2, amount: "140.00", dueDate: "2024-06-01" },
    { id: 3, amount: "130.00", dueDate: "2024-07-01" }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newExpense, setNewExpense] = useState({ amount: '', dueDate: '' });

  const handleAddExpense = () => {
    setExpensesData([...expensesData, { ...newExpense, id: expensesData.length + 1 }]);
    setShowModal(false);
    setNewExpense({ amount: '', dueDate: '' });
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <button className="btn-icon add-btn" onClick={() => setShowModal(true)}><FiPlus /> Add Record</button>
      </div>
      {showModal && (
       <div className="modal">
         <div className="modal-content">
           <h2>Add New Expense</h2>
           <form onSubmit={handleAddExpense}>
             <label htmlFor="amount">Amount:</label>
             <input
               id="amount"
               type="text"
               value={newExpense.amount}
               onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
               required
             />
             <label htmlFor="dueDate">Due Date:</label>
             <input
               id="dueDate"
               type="date"
               value={newExpense.dueDate}
               onChange={(e) => setNewExpense({ ...newExpense, dueDate: e.target.value })}
               required
             />
             <div className="modal-buttons">
               <button type="submit" className="modal-btn">Submit</button>
               <button type="button" className="modal-btn" onClick={() => setShowModal(false)}>Close</button>
             </div>
           </form>
         </div>
       </div>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expensesData.map(expense => (
            <tr key={expense.id}>
              <td>{expense.amount}</td>
              <td>{expense.dueDate}</td>
              <td>
                <button className="btn-icon" onClick={() => console.log('Edit', expense.id)}><FiEdit2 /></button>
                <button className="btn-icon" onClick={() => console.log('Delete', expense.id)}><FiTrash2 /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ElectricExpenses;
