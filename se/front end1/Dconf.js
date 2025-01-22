// Sample appointments data
const appointments = [
    {
      id: 1,
      patientName: "John Doe",
      date: "2024-11-20",
      time: "10:00 AM",
      reason: "General Checkup",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      date: "2024-11-21",
      time: "11:30 AM",
      reason: "Fever and Cough",
    },
  ];
  
  const pendingAppointmentsList = document.getElementById("pendingAppointments");
  const confirmedAppointmentsList = document.getElementById("confirmedAppointments");
  
  // Render pending appointments
  function renderPendingAppointments() {
    pendingAppointmentsList.innerHTML = "";
  
    appointments.forEach((appointment) => {
      const li = document.createElement("li");
  
      li.innerHTML = `
        <div>
          <p><strong>Patient:</strong> ${appointment.patientName}</p>
          <p><strong>Date:</strong> ${appointment.date}</p>
          <p><strong>Time:</strong> ${appointment.time}</p>
          <p><strong>Reason:</strong> ${appointment.reason}</p>
        </div>
        <div>
          <button class="confirm-btn" onclick="confirmAppointment(${appointment.id})">Confirm</button>
          <button class="reject-btn" onclick="rejectAppointment(${appointment.id})">Reject</button>
        </div>
      `;
      pendingAppointmentsList.appendChild(li);
    });
  }
  
  // Confirm an appointment
  function confirmAppointment(id) {
    const appointment = appointments.find((a) => a.id === id);
  
    if (appointment) {
      // Move the appointment to confirmed section
      const li = document.createElement("li");
  
      li.innerHTML = `
        <div>
          <p><strong>Patient:</strong> ${appointment.patientName}</p>
          <p><strong>Date:</strong> ${appointment.date}</p>
          <p><strong>Time:</strong> ${appointment.time}</p>
          <p><strong>Reason:</strong> ${appointment.reason}</p>
          <p class="confirmed-title">Confirmed</p>
        </div>
      `;
  
      confirmedAppointmentsList.appendChild(li);
  
      // Remove from pending list
      const index = appointments.findIndex((a) => a.id === id);
      if (index !== -1) {
        appointments.splice(index, 1);
      }
  
      renderPendingAppointments();
    }
  }
  
  // Reject an appointment
  function rejectAppointment(id) {
    const index = appointments.findIndex((a) => a.id === id);
    if (index !== -1) {
      appointments.splice(index, 1);
      renderPendingAppointments();
    }
  }
  
  // Initial render
  renderPendingAppointments();
  