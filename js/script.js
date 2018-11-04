// When the user clicks the button, toggle between showing and hiding the dropdown content.
document.getElementById('dropdownButton').onclick = (function() {
    // alert('Hi!');
    document.getElementById('navDropdown').classList.toggle('show');
    
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if(!event.target.matches('.dropdown-btn') && !event.target.matches('.dropdown' ) && !event.target.matches('.dropdown span') && !event.target.matches('.dropdown img') && !event.target.matches('.dropdown i') && !event.target.matches('.dropdown .dropdown-content')) {

        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}