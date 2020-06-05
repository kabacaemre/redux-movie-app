This project is still being developed!

### Getting started

To get the Node server running locally:

- Clone this repo
- cd backend
- `npm install` to install all required dependencies
- Create MongoDb Cluster and Get Connection MongoDb URI
- Set environment variables in `config.env` under `./config/env`
  * Set `MONGO_URI = <YOUR_MONGO_URI>`
- `npm run start` to start the local server

# Movies

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/movies | `GET` | Empty | List all movies. |
| /api/movies/:id | `GET` | Empty | Get a movie. |
