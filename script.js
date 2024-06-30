document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration_form');
    const studentList = document.getElementById('student_list');
  
    registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const student = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        course: document.getElementById('course').value,
        phone: document.getElementById('phone').value,
        dob: document.getElementById('dob').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value,
        country: document.getElementById('country').value
      };
  
      // Create list item to display the student info
      const listItem = document.createElement('li');
      listItem.textContent = `Name: ${student.name}, Email: ${student.email}, Course: ${student.course}, Phone: ${student.phone}, DOB: ${student.dob}, Address: ${student.address}, City: ${student.city}, State: ${student.state}, Zip: ${student.zip}, Country: ${student.country}`;
  
      // Append the list item to the student list
      studentList.appendChild(listItem);
  
      // Reset the form after submission
      registrationForm.reset();
    });
  });
  