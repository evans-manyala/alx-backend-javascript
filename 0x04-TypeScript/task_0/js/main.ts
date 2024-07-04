// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
  };
  
  // Create an array named studentsList containing the two students
  const studentsList: Student[] = [student1, student2];
  
  // Function to render the table
  function renderTable() {
    // Create table element
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
  
    // Append a new row to the table for each student
    studentsList.forEach(student => {
      const row = document.createElement('tr');
      
      const firstNameCell = document.createElement('td');
      firstNameCell.textContent = student.firstName;
      row.appendChild(firstNameCell);
  
      const locationCell = document.createElement('td');
      locationCell.textContent = student.location;
      row.appendChild(locationCell);
  
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    document.body.appendChild(table);
  }
  
  // Call the renderTable function to display the table
  renderTable();
  