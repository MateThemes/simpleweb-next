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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 dark:bg-gray-800">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"
                    >
                      Cookie-Einstellungen
                    </Dialog.Title>
                    <div className="mt-4">
                      <div className="space-y-4">
                        {/* Necessary Cookies */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col items-start">
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              Notwendige Cookies
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              Diese Cookies sind für die Grundfunktionen der Website erforderlich
                            </span>
                          </div>
                          <Switch
                            checked={true}
                            disabled
                            className={clsx(
                              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-not-allowed rounded-full border-2 border-transparent',
                              'bg-blue-600',
                              'transition-colors duration-200 ease-in-out'
                            )}
                          >
                            <span className="sr-only">Notwendige Cookies</span>
                            <span
                              className={clsx(
                                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow',
                                'translate-x-5',
                                'transition duration-200 ease-in-out'
                              )}
                            />
                          </Switch>
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col items-start">
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              Analyse-Cookies
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
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
                              preferences.analytics ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700',
                              'transition-colors duration-200 ease-in-out'
                            )}
                          >
                            <span className="sr-only">Analyse-Cookies</span>
                            <span
                              className={clsx(
                                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow',
                                preferences.analytics ? 'translate-x-5' : 'translate-x-0',
                                'transition duration-200 ease-in-out'
                              )}
                            />
                          </Switch>
                        </div>

                        {/* Marketing Cookies */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col items-start">
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              Marketing-Cookies
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
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
                              preferences.marketing ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700',
                              'transition-colors duration-200 ease-in-out'
                            )}
                          >
                            <span className="sr-only">Marketing-Cookies</span>
                            <span
                              className={clsx(
                                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow',
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
                      'inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm',
                      'bg-blue-600 hover:bg-blue-500',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
                      'sm:col-start-2'
                    )}
                    onClick={handleSave}
                  >
                    Speichern
                  </button>
                  <button
                    type="button"
                    className={clsx(
                      'mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm',
                      'bg-white text-gray-900 ring-1 ring-inset ring-gray-300',
                      'hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
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