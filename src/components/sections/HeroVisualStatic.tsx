import Image from 'next/image'

export default function HeroVisualStatic() {
  return (
    <div className="relative w-full">
      {/* Main image - container controls layout width */}
      <div className="relative w-full rounded-2xl overflow-hidden md:shadow-2xl shadow-xl">
        <Image
          src="/img/hero.png"
          alt="Webdesign Agentur für KMU - Moderne Websites Österreich Deutschland"
          width={920}
          height={520}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-auto w-full rounded-2xl"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
      </div>

      {/* Floating card */}
      <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Websites, die Orientierung geben.</p>
      </div>
    </div>
  )
}

