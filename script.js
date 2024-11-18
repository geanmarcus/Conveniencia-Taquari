function toggleMode ()  {
    const html = document.documentElement

    if (html.classList.contains("light")) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
}

//Ou apenas colocar
//html.classList.toggle("light")