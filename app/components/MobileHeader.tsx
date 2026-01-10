import { Menu } from "lucide-react"; // Install lucide-react or use an SVG


export default function MobileHeader({ onOpen }: { onOpen: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between bg-white/70 backdrop-blur-md px-6 py-4 lg:hidden">
      <MainLogo size="small" />
      <button 
        onClick={onOpen}
        className="p-2 text-brand-dark hover:bg-brand-bg rounded-lg transition-colors"
      >
        <Menu size={28} />
      </button>
    </header>
  );
}