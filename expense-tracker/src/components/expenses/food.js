import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import './food.css'; // Ensure CSS is properly set up

function FoodExpenses() {
  const [foodData, setFoodData] = useState([
    { id: 1, name: "Apples", price: "4.99", dateBought: "2024-04-25" },
    { id: 2, name: "Bread", price: "2.49", dateBought: "2024-04-24" },
    { id: 3, name: "Chicken", price: "8.95", dateBought: "2024-04-23" }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newFood, setNewFood] = useState({ name: '', price: '', dateBought: '' });

  const handleAddFood = (event) => {
    event.preventDefault();
    setFoodData([...foodData, { ...newFood, id: foodData.length + 1 }]);
    setShowModal(false);
    setNewFood({ name: '', price: '', dateBought: '' });
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <button className="btn-icon add-btn" onClick={() => setShowModal(true)}><FiPlus /> Add Food</button>
      </div>
      {showModal && (
       <div className="modal">
       <div className="modal-content">
         <h2>Add New Food Item</h2>
         <form onSubmit={handleAddFood}>
           <label htmlFor="name">Name:</label>
           <input
             id="name"
             type="text"
             value={newFood.name}
             onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
             required
           />
           <label htmlFor="price">Price:</label>
           <input
             id="price"
             type="text"
             value={newFood.price}
             onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
             required
           />
           <label htmlFor="dateBought">Date Bought:</label>
           <input
             id="dateBought"
             type="date"
             value={newFood.dateBought}
             onChange={(e) => setNewFood({ ...newFood, dateBought: e.target.value })}
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
            <th>Name</th>
            <th>Price ($)</th>
            <th>Date Bought</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foodData.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.dateBought}</td>
              <td>
                <button className="btn-icon" onClick={() => console.log('Edit', item.id)}><FiEdit2 /></button>
                <button className="btn-icon" onClick={() => console.log('Delete', item.id)}><FiTrash2 /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodExpenses;
