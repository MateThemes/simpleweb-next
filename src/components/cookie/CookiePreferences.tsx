'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition, Switch } from '@headlessui/react'
import clsx from 'clsx'
import { getCookiePreferences, setCookiePreferences } from './CookieStore'
import type { CookiePreferences as CookiePreferencesType } from './CookieStore'

interface CookiePreferencesProps {
  open: boolean
  onClose: () => void
}

export function CookiePreferences({ open, onClose }: CookiePreferencesProps) {
  const [preferences, setPreferences] = useState<CookiePreferencesType>(getCookiePreferences())

  const handleSave = () => {
    setCookiePreferences(preferences)
    onClose()
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', {
      detail: { analytics: preferences.analytics, marketing: preferences.marketing }
    }))
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-[var(--surface)] border border-[var(--border)] px-4 pb-4 pt-5 text-left shadow-[var(--shadow-3)] transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-[var(--foreground)]"
                    >
                      Cookie-Einstellungen
                    </Dialog.Title>
                    <div className="mt-4">
                      <div className="space-y-4">
                        {/* Necessary Cookies */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col items-start">
                            <span className="text-sm font-medium text-[var(--foreground)]">
                              Notwendige Cookies
                            </span>
                            <span className="text-sm text-[var(--muted-foreground)]">
                              Diese Cookies sind für die Grundfunktionen der Website erforderlich
                            </span>
                          </div>
                          <Switch
                            checked={true}
                            disabled
                            className={clsx(
                              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-not-allowed rounded-full border-2 border-transparent',
                              'bg-[var(--primary)]',
                              'transition-colors duration-200 ease-in-out'
                            )}
                          >
                            <span className="sr-only">Notwendige Cookies</span>
                            <span
                              className={clsx(
                                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[var(--primary-foreground)] shadow',
                                'translate-x-5',
                                'transition duration-200 ease-in-out'
                              )}
                            />
                          </Switch>
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col items-start">
                            <span className="text-sm font-medium text-[var(--foreground)]">
                              Analyse-Cookies
                            </span>
                            <span className="text-sm text-[var(--muted-foreground)]">
                              Helfen uns zu verstehen, wie Besucher mit der Website interagieren
                            </span>
                          </div>
                          <Switch
                            checked={preferences.analytics}
                            onChange={(checked) =>
                              setPreferences((prev) => ({ ...prev, analytics: checked }))
                            }
                            className={clsx(
                              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent',
                              preferences.analytics ? 'bg-[var(--primary)]' : 'bg-[var(--muted)]',
                              'transition-colors duration-200 ease-in-out'
                            )}
                          >
                            <span className="sr-only">Analyse-Cookies</span>
                            <span
                              className={clsx(
                                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[var(--primary-foreground)] shadow',
                                preferences.analytics ? 'translate-x-5' : 'translate-x-0',
                                'transition duration-200 ease-in-out'
                              )}
                            />
                          </Switch>
                        </div>

                        {/* Marketing Cookies */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col items-start">
                            <span className="text-sm font-medium text-[var(--foreground)]">
                              Marketing-Cookies
                            </span>
                            <span className="text-sm text-[var(--muted-foreground)]">
                              Werden verwendet, um Besuchern relevante Werbung zu zeigen
                            </span>
                          </div>
                          <Switch
                            checked={preferences.marketing}
                            onChange={(checked) =>
                              setPreferences((prev) => ({ ...prev, marketing: checked }))
                            }
                            className={clsx(
                              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent',
                              preferences.marketing ? 'bg-[var(--primary)]' : 'bg-[var(--muted)]',
                              'transition-colors duration-200 ease-in-out'
                            )}
                          >
                            <span className="sr-only">Marketing-Cookies</span>
                            <span
                              className={clsx(
                                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[var(--primary-foreground)] shadow',
                                preferences.marketing ? 'translate-x-5' : 'translate-x-0',
                                'transition duration-200 ease-in-out'
                              )}
                            />
                          </Switch>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className={clsx(
                      'inline-flex w-full justify-center rounded-xl px-4 py-2.5 text-sm font-semibold',
                      'bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]',
                      'sm:col-start-2'
                    )}
                    onClick={handleSave}
                  >
                    Speichern
                  </button>
                  <button
                    type="button"
                    className={clsx(
                      'mt-3 inline-flex w-full justify-center rounded-xl px-4 py-2.5 text-sm font-semibold',
                      'bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border)]',
                      'hover:bg-[var(--surface)] transition-colors',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]',
                      'sm:col-start-1 sm:mt-0'
                    )}
                    onClick={onClose}
                  >
                    Abbrechen
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}