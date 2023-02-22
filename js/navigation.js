(
    function () {
        var navigation, windowWidth, windowHeight;
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        navigation = document.getElementById("navigation");
        navigation.className = "show";

        main();
        addListeners();

        function main() {
            navigation.style.marginTop = (windowHeight - navigation.clientHeight) / 2 + "px";
        }

        function addListeners() {
            window.addEventListener('resize', resize);
        }

        function resize() {
            windowWidth = window.innerWidth;
            windowHeight = window.innerHeight;
            main();
        }
    }
)();