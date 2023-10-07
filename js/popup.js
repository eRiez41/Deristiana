// JavaScript for Popup
document.addEventListener('DOMContentLoaded', function() {
    var popups = document.querySelectorAll('[data-popup]');
    var closeBtns = document.querySelectorAll('[data-popup-close]');

    popups.forEach(function(popup) {
        popup.addEventListener('click', function() {
            var popupId = this.getAttribute('data-popup');
            var targetPopup = document.getElementById(popupId);
            targetPopup.style.display = 'block';
        });
    });

    closeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var popupId = this.getAttribute('data-popup-close');
            var targetPopup = document.getElementById(popupId);
            targetPopup.style.display = 'none';
        });
    });
});
