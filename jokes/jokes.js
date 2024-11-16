function loadJoke() {
    $.get("jokes.txt", function(data) {
        let jokes = data.split("\n");
        let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        document.getElementById("joke").innerText = randomJoke;
    });
}