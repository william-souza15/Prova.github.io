// pegamos o valor no localStorage
const nightModeStorage = localStorage.getItem('gmtNightMode')
const nightMode = document.querySelector('#switch')

// caso tenha o valor no localStorage
if (nightModeStorage) {
  // ativa o night mode
  document.documentElement.classList.add('dark-mode')

  // já deixa o input marcado como ativo
  nightMode.checked = true
}

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('dark-mode')

  // se tiver a classe night-mode
  if (document.documentElement.classList.contains('dark-mode')) {
    // salva o tema no localStorage
    localStorage.setItem('gmtNightMode', true)
    return
  }
  // senão remove
  localStorage.removeItem('gmtNightMode')
})