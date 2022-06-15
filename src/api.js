import axios from "axios";
import {api_url} from "@/utils/constants";
//
// export default axios.create({
//     baseURL:"http://127.0.0.1:8000/api/v1/",
// })
export default axios.create({
  baseURL:api_url,
})