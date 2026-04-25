/**
 * Einbindung von JSON-LD ohne sonstige Markup-Änderungen.
 */
export function JsonLd({ json }: { json: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
