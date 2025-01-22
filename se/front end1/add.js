let appointments = [];
let editingAppointmentId = null; // Tracks the appointment being edited

document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const doctor = document.getElementById("doctor").value;

  if (editingAppointmentId) {
    // Update existing appointment
    const appointment = appointments.find((a) => a.id === editingAppointmentId);
    appointment.name = name;
    appointment.email = email;
    appointment.date = date;
    appointment.time = time;
    appointment.doctor = doctor;

    editingAppointmentId = null;
    document.getElementById("form-title").textContent = "Book an Appointment";
    document.getElementById("cancelUpdate").classList.add("hidden");
  } else {
    // Add new appointment
    const appointment = {
      id: Date.now(),
      name,
      email,
      date,
      time,
      doctor,
    };
    appointments.push(appointment);
  }

  renderAppointments();
  e.target.reset(); // Clear form
});

document.getElementById("cancelUpdate").addEventListener("click", function () {
  resetForm();
});

// Function to render appointments
function renderAppointments() {
  const appointmentList = document.getElementById("appointments");
  appointmentList.innerHTML = "";

  appointments.forEach((appointment) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <p><strong>Name:</strong> ${appointment.name}</p>
        <p><strong>Email:</strong> ${appointment.email}</p>
        <p><strong>Date:</strong> ${appointment.date}</p>
        <p><strong>Time:</strong> ${appointment.time}</p>
        <p><strong>Doctor:</strong> ${appointment.doctor}</p>
      </div>
      <button class="edit-btn" onclick="editAppointment(${appointment.id})">Edit</button>
      <button class="delete-btn" onclick="deleteAppointment(${appointment.id})">Delete</button>
    `;
    li.setAttribute("data-id", appointment.id);
    appointmentList.appendChild(li);
  });
}

// Function to delete appointment
function deleteAppointment(id) {
  appointments = appointments.filter((a) => a.id !== id);
  renderAppointments();
}

// Function to edit appointment
function editAppointment(id) {
  const appointment = appointments.find((a) => a.id === id);
  document.getElementById("name").value = appointment.name;
  document.getElementById("email").value = appointment.email;
  document.getElementById("date").value = appointment.date;
  document.getElementById("time").value = appointment.time;
  document.getElementById("doctor").value = appointment.doctor;

  editingAppointmentId = id;

  document.getElementById("form-title").textContent = "Update Appointment";
  document.getElementById("cancelUpdate").classList.remove("hidden");
}

// Function to reset the form
function resetForm() {
  document.getElementById("appointmentForm").reset();
  editingAppointmentId = null;
  document.getElementById("form-title").textContent = "Book an Appointment";
  document.getElementById("cancelUpdate").classList.add("hidden");
}
