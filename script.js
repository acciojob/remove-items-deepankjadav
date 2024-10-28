window.onload = function() {
    let colorSelect = document.getElementById("colorSelect");
    let removeButton = document.querySelector("input[type='button']");

    removeButton.addEventListener("click", function() {
        let selectedIndex = colorSelect.selectedIndex;
        colorSelect.remove(selectedIndex);
    });
}
