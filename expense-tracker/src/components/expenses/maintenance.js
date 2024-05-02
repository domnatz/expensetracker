import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import './maintenance.css'; // Ensure CSS is properly set up

function MaintenanceExpenses() {
  const [maintenanceData, setMaintenanceData] = useState([
    { id: 1, description: "AC Repair", cost: "150.00", dateConducted: "2024-04-20" },
    { id: 2, description: "Plumbing Fix", cost: "80.00", dateConducted: "2024-04-15" },
    { id: 3, description: "Roof Patching", cost: "200.00", dateConducted: "2024-04-10" }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newMaintenance, setNewMaintenance] = useState({ description: '', cost: '', dateConducted: '' });

  const handleAddMaintenance = (event) => {
    event.preventDefault();
    setMaintenanceData([...maintenanceData, { ...newMaintenance, id: maintenanceData.length + 1 }]);
    setShowModal(false);
    setNewMaintenance({ description: '', cost: '', dateConducted: '' });
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <button className="btn-icon add-btn" onClick={() => setShowModal(true)}><FiPlus /> Add Maintenance</button>
      </div>
      {showModal && (
       <div className="modal">
       <div className="modal-content">
         <h2>Add New Maintenance</h2>
         <form onSubmit={handleAddMaintenance}>
           <label htmlFor="description">Description:</label>
           <input
             id="description"
             type="text"
             value={newMaintenance.description}
             onChange={(e) => setNewMaintenance({ ...newMaintenance, description: e.target.value })}
             required
           />
           <label htmlFor="cost">Cost:</label>
           <input
             id="cost"
             type="text"
             value={newMaintenance.cost}
             onChange={(e) => setNewMaintenance({ ...newMaintenance, cost: e.target.value })}
             required
           />
           <label htmlFor="dateConducted">Date Conducted:</label>
           <input
             id="dateConducted"
             type="date"
             value={newMaintenance.dateConducted}
             onChange={(e) => setNewMaintenance({ ...newMaintenance, dateConducted: e.target.value })}
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
            <th>Description</th>
            <th>Cost ($)</th>
            <th>Date Conducted</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {maintenanceData.map(item => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.cost}</td>
              <td>{item.dateConducted}</td>
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

export default MaintenanceExpenses;
