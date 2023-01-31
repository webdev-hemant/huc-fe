import { API_ENDPOINT, HAND_SHAKE } from "@/constants/ApiEndPoints";
import axios from "axios";

export const SsoLoginApiCall = async () => {
  const response = await axios.get(`${API_ENDPOINT}/ssologin` || "", {
    headers: {
      Authorization: `Bearer ${HAND_SHAKE}`,
    },
  });
  const data = response?.data;
  return data;
};
