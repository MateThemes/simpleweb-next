'use client'

export default function Banner() {
  return (
    <div className="relative">
      <div className="bg-blue-50 dark:bg-slate-800 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="text-center sm:px-16">
            <p className="font-medium text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <StarIcon className="w-5 h-5" />
              <span>Ihre Website: Modern, SEO-optimiert, benutzerfreundlich und schnell</span>
              <StarIcon className="w-5 h-5" />
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-gradient-to-r {
          position: relative;
          overflow: hidden;
        }

        .bg-gradient-to-r::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
    </svg>
  )
}