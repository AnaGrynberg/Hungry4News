const menuItems = {
    location: ["big city", "farm", "by the sea", "middle of nowhere", "local village"],
    space: ["modern", "classic", "innovative", "natural", "casual"],
    atmosphere: ["cozy", "elegant", "lively", "quiet", "romantic"],
    company: ["friends", "family", "work colleagues", "lover", "dog"],
    food: ["Japanese", "French", "Mediterranean", "American", "Mexican"],
};

const menuButtons = document.querySelectorAll('.menu-categories button');
const menuItemsContainer = document.getElementById('menu-items');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayMenuItems(category) {
    const shuffledItems = [...menuItems[category]];
    shuffleArray(shuffledItems);

    menuItemsContainer.innerHTML = "";
    shuffledItems.forEach((item, index) => {
        const menuItem = document.createElement('p');
        menuItem.textContent = item;
        menuItemsContainer.appendChild(menuItem);

        // Hide elements that are not the first child
        if (index !== 0) {
            menuItem.style.display = 'none';
        }
    });
}

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.id;
        displayMenuItems(category);
        toggleMenuItemsVisibility();
    });
});

function toggleMenuItemsVisibility() {
    const menuItems = document.querySelectorAll('#menu-items p');
    menuItems.forEach((item, index) => {
        item.style.display = index === 0 ? 'block' : 'none';
    });
}

function showLeaf(myLeaf) {
    var myimg = document.getElementById("justFrame");

    if (myLeaf == "location") {
        myimg.src = "1.png";
    } else if (myLeaf == "space") {
        myimg.src = "2.png";
    } else if (myLeaf == "atmosphere") {
        myimg.src = "3.png";
    } else if (myLeaf == "company") {
        myimg.src = "4.png";
    } else {
        myimg.src = "5.png";
    }
}
