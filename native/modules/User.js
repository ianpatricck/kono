const { ipcRenderer } = require('electron')

/*
 * Self explanatory function haha, which will simply 
 * send the username to ipcMain, if there is an error, it appears on the screen
 *
 */

const submitUsername = (e) => {
  e.preventDefault()

  const username = document.getElementById("home_input__username").value

  if (username === "" || username === undefined) {
    document.querySelector(".home__error").innerText = 'Empty username'
    document.querySelector(".home__error").style.display = 'block'
    
    return 0
  }

  ipcRenderer.send('username', username)
}
