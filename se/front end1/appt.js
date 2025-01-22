document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const doctor = document.getElementById("doctor").value;
  
    // Validate input
    if (!name || !email || !date || !time || !doctor) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Create appointment object
    const appointment = {
      id: Date.now(),
      name,
      email,
      date,
      time,
      doctor,
    };
  
    // Add appointment to the list
    addAppointmentToList(appointment);
  
    // Clear the form
    e.target.reset();
  });
  
  // Function to add appointment to the list
  function addAppointmentToList(appointment) {
    const appointmentList = document.getElementById("appointments");
  
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <p><strong>Name:</strong> ${appointment.name}</p>
        <p><strong>Email:</strong> ${appointment.email}</p>
        <p><strong>Date:</strong> ${appointment.date}</p>
        <p><strong>Time:</strong> ${appointment.time}</p>
        <p><strong>Doctor:</strong> ${appointment.doctor}</p>
      </div>
      <button class="delete-btn" onclick="deleteAppointment(${appointment.id}, this)">Delete</button>
    `;
    li.setAttribute("data-id", appointment.id);
    appointmentList.appendChild(li);
  }
  
  // Function to delete appointment
  function deleteAppointment(id, element) {
    const appointmentList = document.getElementById("appointments");
    appointmentList.removeChild(element.parentElement);
  }
  