import _ from 'lodash';

const baseUrl = 'https://randomuser.me/api/';

export const HTTPStatus = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

const checkStatus = response => {
    if (response.status === 200) {
        return response;
    } else if (response.status === HTTPStatus.BAD_REQUEST) {
        const error = new Error("Server didn't like the request.");
        error.status = response.status;
        throw error;
    } else if (response.status === HTTPStatus.UNAUTHORIZED) {
        const error = new Error("Invalid email address or password.");
        error.status = response.status;
        throw error;
    } else if (response.status === HTTPStatus.NOT_FOUND) {
        const error = new Error("Server path doesn't exist.");
        error.status = response.status;
        throw error;
    } else {
        const message = response.statusText || 'HTTP error ' + response.status;
        const error = new Error(message);
        error.status = response.status;
        throw error;
    }
};

const fetchData = () => {
     return fetch(baseUrl + "?results=10")
    .then(checkStatus)
    .then(response => {
        return response.json();
    })
    .then(data => {
        return data.results;
    })
    .catch(error => console.log(error))
};

const filterData = (allData, ageRange, gender) => {
    const matchData = allData.filter( r => {
        const age = findAge(r);
        if( _.inRange(age, ageRange.min,ageRange.max+1)){
            if(gender === "any" || gender === r.gender) {
                return r;
            }
        }
        return null ;
    });
      return matchData;
}

const findAge = (r) =>{
    const birthdate = new Date(r.dob);
    const cur = new Date();
    const diff = cur-birthdate;
    const age = Math.floor(diff/31536000000);
    return age;
}

export default {
    fetchData,
    findAge,
    filterData,
};