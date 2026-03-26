// check radio button on load

const theme = localStorage.getItem('theme');
if(theme) {
    const themeRadio = document.getElementById(`theme-${theme}`) ?? document.getElementById(`theme-space`) ?? null;
    if(themeRadio) {
        themeRadio.checked = true;
        saveTheme(theme);
    }
}
// save theme on toggle
document.querySelectorAll('#config-theme input[type="radio"]').forEach(i => i.addEventListener("change", (e) => {
    saveTheme(e.target.dataset.theme)
}
)); 


function saveTheme(name) {
    localStorage.setItem("theme", name);
    document.documentElement.classList.value = "";
    document.documentElement.classList.add('theme-' + name);
}