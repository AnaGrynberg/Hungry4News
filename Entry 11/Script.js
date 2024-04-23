document.addEventListener("DOMContentLoaded", function() {
    let words = [
        "food experience", "food photography", "food design thinking", "collaboration", "culinary",
        "restaurants", "atmosphere", "architecture", "problem solving", "life", "love", "passion", "creativity", "food industry", "farm", "space", "company", "adaptability", "story", "inspiration", "research", "networking", "global cause", "positive change", "future"
    ];

    const cloud = document.getElementById("word-cloud");

    function createWordCloud() {
        cloud.innerHTML = "";

        words.forEach(word => {
            const span = document.createElement("span");
            span.textContent = word;
            span.style.fontSize = `${Math.floor(Math.random() * 20) + 15}px`;
            span.style.color = getRandomColor();
            span.style.position = "absolute";
            span.style.left = `${Math.random() * 80}%`;
            span.style.top = `${Math.random() * 80}%`;
            cloud.appendChild(span);
        });
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    document.getElementById("shuffle-btn").addEventListener("click", function() {
        words = shuffleArray(words);
        createWordCloud();
    });

    document.getElementById("add-word-btn").addEventListener("click", function() {
        const newWordInput = document.getElementById("new-word-input");
        const newWord = newWordInput.value.trim();

        if (newWord !== "") {
            words.push(newWord);
            newWordInput.value = "";
            createWordCloud();
        }
    });

    createWordCloud();
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.getElementById("subscribe-form").addEventListener("submit", function(event) {
  event.preventDefault(); 


 document.getElementById("name-input").value = "";
 document.getElementById("email-input").value = "";
});


