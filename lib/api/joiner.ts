import api from "./axios";

/* ================= TYPES ================= */
export interface JoinerPayload {
  name: string;
  email: string;
  phone: string;
  course: string;
}

export interface JoinerResponse {
  success: boolean;
  message: string;
  data: any;
}

/* ================= CREATE JOINER ================= */
export async function createJoiner(
  payload: JoinerPayload
): Promise<JoinerResponse> {
  try {
    const { data } = await api.post<JoinerResponse>(
      "/api/joiner",
      payload
    );
    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to join"
    );
  }
}



