
document.addEventListener('DOMContentLoaded', (event) => {
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const updateProfileBtn = document.getElementById('update-profile-btn');
    const editOverlay = document.getElementById('edit-overlay');
    const profileName = document.querySelector('.profile-info h2');
    const profileBio = document.querySelector('.profile-info .bio');

    // Show the edit profile overlay with current name and bio
    editProfileBtn.addEventListener('click', () => {
        document.getElementById('edit-name').value = profileName.textContent;
        document.getElementById('edit-bio').value = profileBio.textContent;
        editOverlay.style.display = 'flex';
    });

    // Directly updates innerHTML with user content, creating a vulnerability
    updateProfileBtn.addEventListener('click', () => {
        // UNSAFE: Directly set innerHTML to user-provided values
        profileName.innerHTML = document.getElementById('edit-name').value;
        profileBio.innerHTML = document.getElementById('edit-bio').value;
        editOverlay.style.display = 'none';
    });
});

