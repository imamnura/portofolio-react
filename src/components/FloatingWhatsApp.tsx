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
      className="brutal press fixed z-40 bg-leaf p-3 text-white bottom-[max(1rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:right-[max(1.5rem,env(safe-area-inset-right,0px))]"
      aria-label="Contact via WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" aria-hidden />
    </a>
  );
}
