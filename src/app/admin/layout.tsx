import { NextRequest } from 'next/server';
import { redirect } from 'next/navigation';

// IP Whitelist - nur bestimmte IPs dürfen zugreifen
const ALLOWED_IPS = [
  '127.0.0.1',           // localhost
  '::1',                 // localhost IPv6
  '192.168.1.1',         // Beispiel: Deine Heim-IP
  // Füge hier deine IP-Adressen hinzu
];

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  return 'unknown';
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Diese Funktion würde in einer echten Implementierung
  // die IP-Adresse des Clients prüfen
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {children}
    </div>
  );
}
