const {app,BrowserWindow,Menu}=require('electron'),path=require('path');
function win(){const w=new BrowserWindow({width:1200,height:800,title:'Eazy Textile',icon:path.join(__dirname,'..','build','icon.png'),autoHideMenuBar:true,webPreferences:{contextIsolation:true}});Menu.setApplicationMenu(null);w.loadFile(path.join(__dirname,'..','index.html'))}
app.whenReady().then(win);app.on('window-all-closed',()=>app.quit());
