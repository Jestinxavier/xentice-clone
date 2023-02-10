import axios from "axios";
export const getAllData = async () => {
 let result = await  axios({
    method: "get",
    url: "https://api.xentice.com/api/postadSelect",
    responseType: "stream",
  })
  return result.data
};
