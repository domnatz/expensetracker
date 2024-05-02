import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import './misc.css'; // Ensure CSS is properly set up

function MiscellaneousExpenses() {
  const [miscData, setMiscData] = useState([
    { id: 1, name: "Stationery", purpose: "Office Supplies", price: "25.00", dateBought: "2024-04-01" },
    { id: 2, name: "Decorations", purpose: "Office Decor", price: "45.00", dateBought: "2024-04-05" },
    { id: 3, name: "Snacks", purpose: "Office Pantry", price: "30.00", dateBought: "2024-04-10" }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newMisc, setNewMisc] = useState({ name: '', purpose: '', price: '', dateBought: '' });

  const handleAddMisc = (event) => {
    event.preventDefault();
    setMiscData([...miscData, { ...newMisc, id: miscData.length + 1 }]);
    setShowModal(false);
    setNewMisc({ name: '', purpose: '', price: '', dateBought: '' });
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <button className="btn-icon add-btn" onClick={() => setShowModal(true)}><FiPlus /> Add Record</button>
      </div>
      {showModal && (
       <div className="modal">
       <div className="modal-content">
         <h2>Add New Miscellaneous Expense</h2>
         <form onSubmit={handleAddMisc}>
           <label htmlFor="name">Name:</label>
           <input
             id="name"
             type="text"
             value={newMisc.name}
             onChange={(e) => setNewMisc({ ...newMisc, name: e.target.value })}
             required
           />
           <label htmlFor="purpose">Purpose:</label>
           <input
             id="purpose"
             type="text"
             value={newMisc.purpose}
             onChange={(e) => setNewMisc({ ...newMisc, purpose: e.target.value })}
             required
           />
           <label htmlFor="price">Price:</label>
           <input
             id="price"
             type="text"
             value={newMisc.price}
             onChange={(e) => setNewMisc({ ...newMisc, price: e.target.value })}
             required
           />
           <label htmlFor="dateBought">Date Bought:</label>
           <input
             id="dateBought"
             type="date"
             value={newMisc.dateBought}
             onChange={(e) => setNewMisc({ ...newMisc, dateBought: e.target.value })}
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
            <th>Purpose</th>
            <th>Price</th>
            <th>Date Bought</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {miscData.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.purpose}</td>
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

export default MiscellaneousExpenses;
