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
      className="fixed z-40 p-3 sm:p-3.5 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 hover:scale-110 hover:bg-green-600 transition-all focus:outline-none bottom-[max(1rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:right-[max(1.5rem,env(safe-area-inset-right,0px))]"
      aria-label="Contact via WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" aria-hidden />
    </a>
  );
}
