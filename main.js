// Electron
const { app } = require("electron");

app.whenReady().then(() => {
  // Main window
  const window = require("./src/window");
  mainWindow = window.createBrowserWindow(app);

  // Option 1: Uses Webtag and load a custom html file with external content
  mainWindow.loadFile("index.html");
  //mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Option 2: Load directly an URL if you don't need interface customization
  //mainWindow.loadURL("https://card-legality-frontend.vercel.app");

  // Option 3: Uses BrowserView to load an URL
  //const view = require("./src/view");
  //view.createBrowserView(mainWindow);

  // Display Dev Tools
  //mainWindow.openDevTools();

  // Menu (for standard keyboard shortcuts)

  // Print function (if enabled)
  require("./src/print");
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  //if (process.platform !== "darwin") {
  app.quit();
  //}
});
