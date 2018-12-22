const { app, BrowserWindow, Menu } = require('electron')

app.on('ready', () => {
  mainWindow = new BrowserWindow({ height: 600, width: 600 })
  mainWindow.loadFile('index.html')
  }),

app.on('ready', () => {
  const template = [{ label: 'Lep pozdrav' }]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)	
})
