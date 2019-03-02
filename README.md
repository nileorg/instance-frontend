# Nile Instance Frontend

Instance administrator can:
* Login
* Activate / Deactivate nodes
* Delete nodes
* Publish nodes list on IPFS

## Getting started
1. Copy paste `./config.example.js` and rename it to `./config.js`
2. Change the following values into `./config.js`
    * **dev.BASE_API** is the url to the running `instance-backend-nodejs` process
    * **dev.host** is the host used to run the vuejs development server
    * **dev.PORT** is the port used to run the vuejs development server
3. Run 
    ```bash
    npm run dev
    ```