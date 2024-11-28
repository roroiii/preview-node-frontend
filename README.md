##

This is an executable package specifically for node.js, which can directly provide web files to people who do not know how to program. It does not need to be published on the internet. Simply place the dist folder packaged by vite into the build directory.

- First, download the corresponding node.js file from the official node.js website. The version used here is node-v18.20.4-win-x64.
- Just click `start.bat` and the webpage will be displayed at http://localhost:8080
- To modify the API URL, find VITE_WS_URL: 'ws://localhost:9000' in `server.js` and replace it. (The VITE_WS_URL name corresponds to import.meta.env.VITE_WS_URL in the development file, and related environment variables should be set in .env)
- To modify the corresponding node.js version, change the name node-v18.20.4-win-x64 in `start.bat`. This corresponds to the node.js file folder downloaded from the official website.

這是一個 node.js 專用的打包執行檔，可以直接提供網頁檔案給不會寫程式的人，不須透過網路發布，直接將 vite 打包後的 dist 資料夾放入 build 內即可。

- 先到 node.js 官網下載對應的 node.js 檔案， 這裡使用的版本是 node-v18.20.4-win-x64。
- 只需要點擊 `start.bat` 網頁就會顯示在 http://localhost:8080
- 如果要修改 API 網址，到 `server.js` 內找到 VITE_WS_URL: 'ws://localhost:9000' 替換即可。(VITE_WS_URL 名稱對應的是開發檔案內的 import.meta.env.VITE_WS_URL，相關環境變數應設置在 .env)
- 要修改對應的 node.js 版本，到 `start.bat` 內修改 node-v18.20.4-win-x64 的名稱，這裡對應的是官網下載的 node.js 檔案資料夾。
