import api from "./axios";

/* ================= TYPES ================= */
export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data: any;
}

/* ================= CREATE CONTACT ================= */
export async function createContact(
  payload: ContactPayload
): Promise<ContactResponse> {
  try {
    const { data } = await api.post<ContactResponse>(
      "/api/contacts",
      payload
    );
    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to submit contact form"
    );
  }
}
