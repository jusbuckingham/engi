const axios = require("axios");

axios.get('')
        .then((response) => {
            console.log(response.data)
            
        })
        .catch((error) => {
            console.log('error hitting api', error);
        });
  