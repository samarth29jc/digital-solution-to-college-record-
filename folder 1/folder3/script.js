const tableBody = document.querySelector('#inventory-table tbody');

// Example Data (you would likely fetch data from a source)
const inventoryData = [
    {svvvEncoding: "S123", facultyName: "Dr. Smith", itemNumber: "L4567", processorGeneration: "10th", purchaseDate: "2023-12-15", department: "Computer Science"},
    // ... more data
];

// Populate the table
inventoryData.forEach(item => {
    const row = document.createElement('tr');

    for (const key in item) {
        const cell = document.createElement('td');
        cell.textContent = item[key];
        row.appendChild(cell);
    }

    tableBody.appendChild(row);
});
