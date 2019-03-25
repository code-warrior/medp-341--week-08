window.onload = () => {
    let firstDiv = document.getElementById(`first-div`),
        secondDiv = document.querySelector(`[data-second-div]`),
        thirdDiv = document.getElementsByClassName(`third-div`)[0],
        css = `background-color: #bada55; border-radius: 4px; padding: 4px;`;

    console.log(`%c${firstDiv.textContent}`, css);
    console.log(`%c${secondDiv.textContent}`, css);
    console.log(`%c${thirdDiv.textContent}`, css);
};
