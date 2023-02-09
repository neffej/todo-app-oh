let formInput = document.querySelector('#formInput');



formInput.addEventListener('submit', async (event) => {
    event.preventDefault();
    let todoInput = document.querySelector('#todo-input').value.trim();

    const info = await fetch('/harvey', {
        method: "POST",
        body: JSON.stringify({
            fromFrontEnd : todoInput
        }),
    });
});