function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const Img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    Img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    Img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
