document.getElementById("color-theme").addEventListener("click", function(){
    function getColorTheme(){
        const darkSide = Math.floor(220 + Math.random() * 65);
        const whitSide = Math.floor(215 +Math.random() * 65);
        const redSide = Math.floor(210 + Math.random() * 65);
        return `rgb(${darkSide}, ${whitSide}, ${redSide})`;
    }
    document.body.style.background = getColorTheme();
})
