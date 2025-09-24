'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';

// Simple password protection - use default for local testing
const DEFAULT_PASSWORD = 'admin123';

interface AuditLog {
  timestamp: string;
  email?: string;
  url: string;
  score: number;
  newsletter: boolean;
  leadId: string;
  ip: string;
}

export default function SeoLogsPage() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  
  // Filter states
  const [filters, setFilters] = useState({
    email: '',
    url: '',
    score: '',
    newsletter: ''
  });
  const [stats, setStats] = useState({
    total: 0,
    filtered: 0
  });

  useEffect(() => {
    // Check if session is still valid
    const authStatus = localStorage.getItem('admin-authenticated');
    const sessionToken = localStorage.getItem('admin-session-token');
    const sessionExpires = localStorage.getItem('admin-session-expires');
    
    if (authStatus === 'true' && sessionToken && sessionExpires && parseInt(sessionExpires) > Date.now()) {
      setIsAuthenticated(true);
      fetchLogs();
    } else {
      // Session expired or invalid, clear storage
      handleLogout();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsAuthenticated(true);
        localStorage.setItem('admin-authenticated', 'true');
        localStorage.setItem('admin-session-token', data.sessionToken); // Store session token
        localStorage.setItem('admin-session-expires', data.expires.toString()); // Store expiration
        fetchLogs();
        
        if (data.type === 'emergency') {
          setAuthError('⚠️ Notfall-Zugang aktiviert! Bitte ändere das Passwort.');
        } else {
          setAuthError(null);
        }
      } else {
        setAuthError(data.error || 'Falsches Passwort');
      }
    } catch (error) {
      setAuthError('Verbindungsfehler - bitte versuche es erneut');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin-authenticated');
    localStorage.removeItem('admin-session-token');
    localStorage.removeItem('admin-session-expires');
    setPassword('');
    setAuthError(null);
    setLogs([]);
    setStats({ total: 0, filtered: 0 });
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwörter stimmen nicht überein');
      return;
    }
    
    if (newPassword.length < 6) {
      setPasswordError('Passwort muss mindestens 6 Zeichen haben');
      return;
    }
    
    // In einer echten Implementierung würdest du hier das Passwort
    // über eine API an den Server senden
    console.log('Neues Passwort:', newPassword);
    
    // Für Demo: Speichere das neue Passwort im localStorage
    localStorage.setItem('admin-password', newPassword);
    
    setPasswordError(null);
    setShowPasswordChange(false);
    setNewPassword('');
    setConfirmPassword('');
    
    alert('✅ Passwort erfolgreich geändert!');
  };

  const fetchLogs = async (filterParams = {}) => {
    try {
      setLoading(true);
      
      // Build query string from filters
      const queryParams = new URLSearchParams();
      Object.entries({ ...filters, ...filterParams }).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });
      
      const queryString = queryParams.toString();
      const url = `/api/admin/audit-logs${queryString ? `?${queryString}` : ''}`;
      
      // Get stored session token for API call
      const sessionToken = localStorage.getItem('admin-session-token');
      const sessionExpires = localStorage.getItem('admin-session-expires');
      
      // Check if session is expired
      if (!sessionToken || !sessionExpires || parseInt(sessionExpires) < Date.now()) {
        handleLogout();
        return;
      }
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Fehler beim Laden der Logs');
      }
      
      const data = await response.json();
      setLogs(data.logs || []);
      setStats({
        total: data.total || 0,
        filtered: data.filtered || 0
      });
    } catch (err) {
      setError('Fehler beim Laden der Logs');
      console.error('Error fetching logs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    fetchLogs();
  };

  const clearFilters = () => {
    setFilters({ email: '', url: '', score: '', newsletter: '' });
    fetchLogs({ email: '', url: '', score: '', newsletter: '' });
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('de-DE');
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const isAuditExpired = (timestamp: string) => {
    const auditDate = new Date(timestamp);
    const now = new Date();
    const daysDiff = (now.getTime() - auditDate.getTime()) / (1000 * 60 * 60 * 24);
    return daysDiff > 7;
  };

  if (!isAuthenticated) {
    return (
      <Container size="small" className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🔒 Admin Login
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Bitte gib das Admin-Passwort ein
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Admin-Passwort
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Passwort eingeben"
                  required
                />
              </div>

              {authError && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                  <p className="text-sm text-red-600 dark:text-red-400">{authError}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                🔓 Anmelden
              </button>
            </div>
          </form>
        </div>
      </Container>
    );
  }

  return (
    <Container size="small" className="py-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              📊 SEO-Audit Logs
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Übersicht aller SEO-Audit-Anfragen und Leads
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowPasswordChange(true)}
              className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
            >
              🔑 Passwort ändern
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              🚪 Abmelden
            </button>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.total}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Gesamt Audits</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {logs.filter(log => log.newsletter).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Newsletter-Anmeldungen</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {logs.filter(log => log.email).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Mit E-Mail</div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="text-yellow-600 dark:text-yellow-400 text-xl">ℹ️</div>
          <div>
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              Audit-Berichte und Speicherung
            </h3>
            <div className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <p>• <strong>Log-Einträge:</strong> Bleiben dauerhaft für CRM und Lead-Tracking</p>
              <p>• <strong>Audit-Berichte:</strong> Werden nach 7 Tagen automatisch gelöscht</p>
              <p>• <strong>Shareable Links:</strong> Werden nach 7 Tagen ungültig</p>
              <p>• <strong>Status:</strong> ⏰ = Abgelaufen, 📄 = Verfügbar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">🔍 Filter</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              E-Mail
            </label>
            <input
              type="text"
              value={filters.email}
              onChange={(e) => handleFilterChange('email', e.target.value)}
              placeholder="E-Mail suchen..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Website
            </label>
            <input
              type="text"
              value={filters.url}
              onChange={(e) => handleFilterChange('url', e.target.value)}
              placeholder="Website suchen..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Min. Score
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={filters.score}
              onChange={(e) => handleFilterChange('score', e.target.value)}
              placeholder="z.B. 70"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Newsletter
            </label>
            <select
              value={filters.newsletter}
              onChange={(e) => handleFilterChange('newsletter', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Alle</option>
              <option value="true">Ja</option>
              <option value="false">Nein</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex space-x-2">
          <button
            onClick={applyFilters}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            🔍 Filter anwenden
          </button>
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            🗑️ Filter löschen
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Lade Logs...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600">{error}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {logs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Keine Logs gefunden</p>
            </div>
          ) : (
            logs.map((log, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Zeitstempel</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {formatDate(log.timestamp)}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">E-Mail</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {log.email || 'Keine E-Mail'}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Website</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {log.url}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Score</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(log.score)}`}>
                      {log.score}/100
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        log.newsletter 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                      }`}>
                        {log.newsletter ? '📧 Newsletter' : '📧 Nur Audit'}
                      </span>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        Lead-ID: {log.leadId}
                      </p>
                      <a
                        href={`/audit-result/${log.leadId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          isAuditExpired(log.timestamp)
                            ? 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 cursor-not-allowed'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800'
                        }`}
                        title={isAuditExpired(log.timestamp) ? 'Audit-Bericht ist abgelaufen (7 Tage)' : 'Audit-Bericht ansehen'}
                      >
                        {isAuditExpired(log.timestamp) ? '⏰ Abgelaufen' : '📄 Audit-Bericht'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      <div className="mt-8 text-center">
        <button
          onClick={fetchLogs}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          🔄 Aktualisieren
        </button>
      </div>

      {/* Password Change Modal */}
      {showPasswordChange && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🔑 Passwort ändern
            </h2>
            
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Neues Passwort
                </label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Neues Passwort eingeben"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Passwort bestätigen
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Passwort wiederholen"
                  required
                />
              </div>
              
              {passwordError && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                  <p className="text-sm text-red-600 dark:text-red-400">{passwordError}</p>
                </div>
              )}
              
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                >
                  ✅ Ändern
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordChange(false);
                    setPasswordError(null);
                    setNewPassword('');
                    setConfirmPassword('');
                  }}
                  className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                >
                  ❌ Abbrechen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Container>
  );
}
