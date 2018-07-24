// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote } from "electron";
import jetpack from "fs-jetpack";
import env from "env";

const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

const manifest = appDir.read("package.json", "json");

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

function setTitle(params) {

document.querySelector("#app").style.display = "block";
document.querySelector("#name").innerHTML = manifest.productName;
document.querySelector("#tittleName").innerHTML = manifest.productName;
document.querySelector("#os").innerHTML = osMap[process.platform];
document.querySelector("#author").innerHTML = manifest.author;
document.querySelector("#env").innerHTML = env.name;
document.querySelector("#electron-version").innerHTML = process.versions.electron;

// set the tittle.
document.querySelector('#application_name').innerHTML = manifest.appName;
document.querySelector('#application_version').innerHTML = manifest.version;

}

export default { setTitle }
