function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');
    var hamburgerMenu = document.querySelector('.hamburger-menu');

    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        content.style.marginLeft = '0';
        hamburgerMenu.style.display = 'block';
    } else {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
        hamburgerMenu.style.display = 'none';
    }
}
