const buttons = document.querySelectorAll('.inventory-button');
const contentContainer = document.querySelector('.content-container');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.innerText;
        contentContainer.innerHTML = `You clicked: ${buttonText}`; // Update content based on clicked button
    });
});
