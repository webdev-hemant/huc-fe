import { API_ENDPOINT } from "@/constants/ApiEndPoints";
import axios from "axios";

export const SsoLoginApiCall = async ({
  HAND_SHAKE,
}: {
  HAND_SHAKE: String;
}) => {
  const response = await axios.get(`${API_ENDPOINT}/ssologin` || "", {
    headers: {
      Authorization: `Bearer ${HAND_SHAKE}`,
    },
  });
  const data = response?.data;
  return data;
};
