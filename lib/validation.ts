/**
 * Shared form validation helpers.
 *
 * Rules used across every form in the site:
 * - Name fields  -> letters and spaces only (no numbers / symbols)
 * - Phone fields -> exactly 10 digits, must start with 6, 7, 8 or 9 (Indian mobile numbers)
 * - Email fields -> standard email format
 * - Message/textarea -> required, minimum length
 */

export const NAME_REGEX = /^[A-Za-z][A-Za-z\s]*$/;
export const PHONE_REGEX = /^[6-9]\d{9}$/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Strips anything that isn't a letter or space, e.g. while typing in a name field. */
export function sanitizeNameInput(value: string): string {
  return value.replace(/[^A-Za-z\s]/g, "").replace(/\s{2,}/g, " ");
}

/**
 * Keeps only digits, caps the length at 10, and blocks a leading digit
 * that isn't 6/7/8/9 (the character is simply rejected, previous value kept).
 */
export function sanitizePhoneInput(value: string, prevValue: string = ""): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length > 0 && !/^[6-9]/.test(digits)) {
    return prevValue;
  }
  return digits;
}

export function isValidName(value: string, minLength = 2): boolean {
  const trimmed = value.trim();
  return trimmed.length >= minLength && NAME_REGEX.test(trimmed);
}

export function isValidPhone(value: string): boolean {
  return PHONE_REGEX.test(value.trim());
}

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim());
}

export function isValidMessage(value: string, minLength = 10): boolean {
  return value.trim().length >= minLength;
}

export const errorMessages = {
  name: "Only letters and spaces are allowed (min 2 characters).",
  firstName: "Only letters and spaces are allowed (min 2 characters).",
  lastName: "Only letters and spaces are allowed (min 2 characters).",
  phone: "Enter a valid 10-digit number starting with 6, 7, 8 or 9.",
  email: "Enter a valid email address.",
  message: "Message should be at least 10 characters.",
};
