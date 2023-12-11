const { app, BrowserWindow } = require('electron')
const loadingWindow = async () => {
    let loading = new BrowserWindow({
        width: 500,
        height: 300,
        autoHideMenuBar: true,
        icon: "./images/Icon.ico",
        frame: false,
        resizable: false,
        maximizable: false,
        minimizable: false,
        title: "Loading",
        webPreferences: {
            devTools: true,
            nodeIntegration: true,
        }
    })
    loading.loadFile('./app/pages/loading.html')
}

app.whenReady().then(async () => {
    loadingWindow()

})
