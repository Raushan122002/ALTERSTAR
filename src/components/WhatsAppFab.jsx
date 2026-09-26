import Icon from "./Icon";
import { SITE, WHATSAPP_TEXT_DEFAULT } from "../data/site";

export default function WhatsAppFab() {
  return (
    <a
      href={`${SITE.whatsappHref}?text=${encodeURIComponent(WHATSAPP_TEXT_DEFAULT)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with AlterStar on WhatsApp"
      className="fixed bottom-5 right-5 z-30 w-12 h-12 grid place-items-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.35)] transition-transform duration-150 hover:scale-105 focus-visible:scale-105"
    >
      <Icon name="whatsappFilled" className="w-6 h-6" />
    </a>
  );
}
