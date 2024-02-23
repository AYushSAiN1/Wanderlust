const taxSwitch = document.getElementById("flexSwitchCheckDefault");

taxSwitch.addEventListener("click", () => {
    const taxInfo = document.querySelectorAll(".tax-info");
    taxInfo.forEach(info => {
        info.classList.toggle("hidden");
    });
});
