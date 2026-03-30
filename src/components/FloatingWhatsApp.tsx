import { WhatsAppIcon } from "./icons/WhatsAppIcon";

type FloatingWhatsAppProps = {
  waNumber: string;
};

export function FloatingWhatsApp({ waNumber }: FloatingWhatsAppProps) {
  return (
    <a
      href={`https://wa.me/${waNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-3.5 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 hover:scale-110 hover:bg-green-600 transition-all focus:outline-none"
      aria-label="Contact via WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
