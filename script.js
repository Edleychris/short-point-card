document.addEventListener("DOMContentLoaded", function () {
    const usersContainer = document.querySelector('.users-container');
    const template = document.getElementById('user-template');

    const users = [
        {
            name: "John Doe",
            email: "john@example.com",
            age: "30 years old",
            info: "Some info about John",
            imageUrl: "https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22261-panda-face-icon.png"
        },
        {
            name: "Jane Smith",
            email: "jane@example.com",
            age: "25 years old",
            info: "Some info about Jane",
            imageUrl: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDc5LW1rLTk2OTAtam9iNTgzXzEucG5n.png"
        },
        {
            name: "Alice Johnson",
            email: "alice@example.com",
            age: "28 years old",
            info: "Some info about Alice",
            imageUrl: "https://via.placeholder.com/150"
        },
        {
            name: "Bob Brown",
            email: "bob@example.com",
            age: "35 years old",
            info: "Some info about Bob",
            imageUrl: "https://via.placeholder.com/150"
        },
        {
            name: "Charlie Green",
            email: "charlie@example.com",
            age: "22 years old",
            info: "Some info about Charlie",
            imageUrl: "https://via.placeholder.com/150"
        }
    ];

    users.forEach(user => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.user-name').textContent = user.name;
        clone.querySelector('.user-email').textContent = user.email;
        clone.querySelector('.user-age').textContent = user.age;
        clone.querySelector('.user-info').textContent = user.info;
        clone.querySelector('.user-image').src = user.imageUrl;

        const closeButton = clone.querySelector('.btn-close');
        closeButton.textContent = 'X';
        closeButton.addEventListener('click', function () {
            usersContainer.removeChild(closeButton.closest('.user-container'));
        });

        usersContainer.appendChild(clone);
    });
});