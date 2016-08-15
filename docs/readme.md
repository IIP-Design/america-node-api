### America Node API Documentation ###

Interactive documentation developed using [Swagger] (http://swagger.io/)

To update the documentation with Swagger:

1. Install swagger if it is not already installed: ```npm install -g swagger```
2. Switch to the swagger directory and run ```npm install```
3. Start the project with: ```swagger project start```
4. Open a second command line and launch the editor with: ```swagger project edit```

###### View Swagger documentation  ######
```swagger docs```

###### Run in  mock mode ######
Swagger provides all the responses and no controllers are needed when run in mock mode. Use ```-m``` flag like so:  ```swagger project start -m```