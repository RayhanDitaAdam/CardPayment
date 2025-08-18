const path = require("path");
const { BrowserWindow } = require("electron");

exports.createBrowserWindow = () => {
  return new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, "assets/icons/png/64x64.png"),
    // TAMBAHKAN INI UNTUK HAPUS MENU BAR
    autoHideMenuBar: true,  // Auto hide menu bar (bisa dimunculkan dengan Alt)
    // ATAU gunakan ini untuk benar-benar hapus menu bar:
    // menuBarVisible: false,  // Completely hide menu bar
    
    // Uncomment salah satu dari ini jika mau hapus title bar juga:
    // titleBarStyle: 'hidden',  // Hide title bar (macOS style)
    // frame: false,             // Remove entire window frame
    
    backgroundColor: "#fff",
    webPreferences: {
      nativeWindowOpen: true,
      devTools: true,
      contextIsolation: true,
      webviewTag: true,
      preload: path.join(__dirname, "../preload.js"),
    },
  });
};