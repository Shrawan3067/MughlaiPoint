export const PHONE_NUMBER = "918360705978";
export const PHONE_DISPLAY = "+91 83607 05978";

export function getWhatsAppUrl(selectedItem: string | null): string {
  const baseUrl = `https://wa.me/${PHONE_NUMBER}`;
  const defaultMessage = "Hi, I'd like to order two chicken biryanis";
  
  if (selectedItem) {
    const message = `Hi Mughlai Point Biryani, I want ${encodeURIComponent(selectedItem)}`;
    return `${baseUrl}?text=${message}`;
  }
  
  return `${baseUrl}?text=${encodeURIComponent(defaultMessage)}`;
}

export const WHATSAPP_URL = getWhatsAppUrl(null);
