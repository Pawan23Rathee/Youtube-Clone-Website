function toggleNav() {
    const sidebar = document.getElementById("mySidenav");
    const mainContent = document.getElementById("mainContent");
    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        mainContent.style.marginLeft = "80px";
    } else {
        sidebar.classList.add("open");
        mainContent.style.marginLeft = "250px";
    }
}
