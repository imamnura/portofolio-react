export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-lighten" />
      <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-lighten" />
      <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-cyan-400/20 dark:bg-cyan-600/10 blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-lighten" />
    </div>
  );
}
