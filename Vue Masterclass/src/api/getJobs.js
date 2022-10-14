import axios from "axios";
import constants from "@/data/constants";

const getJobs = async () => {
  const baseUrl = constants.api.url;
  const response = await axios.get(`${baseUrl}/jobs`);
  return response.data;
};

export default getJobs;
