// Dublin Core Metadata Helper
// Dublin Core ist ein internationaler Metadaten-Standard für Webressourcen

export interface DublinCoreMetadata {
  // Core Elements
  title: string;                    // DC.title - Der Name der Ressource
  creator?: string;                 // DC.creator - Ersteller/Autor
  subject?: string | string[];      // DC.subject - Thema/Schlagwörter
  description: string;              // DC.description - Beschreibung
  publisher?: string;               // DC.publisher - Herausgeber
  contributor?: string | string[];  // DC.contributor - Mitwirkende
  date: string;                     // DC.date - Datum (ISO 8601 Format)
  type: string;                     // DC.type - Art der Ressource
  format?: string;                  // DC.format - Dateiformat/Medium
  identifier: string;               // DC.identifier - Eindeutige Kennung (URL)
  source?: string;                  // DC.source - Quelle
  language: string;                 // DC.language - Sprache (ISO 639)
  relation?: string;                // DC.relation - Verwandte Ressource
  coverage?: string;                // DC.coverage - Räumlich/zeitlich
  rights?: string;                  // DC.rights - Rechteinhaber
}

/**
 * Generiert Dublin Core Meta Tags als Objekt für Next.js Metadata
 * Diese können direkt in die Metadata eines Pages exportiert werden
 */
export function generateDublinCoreTags(metadata: DublinCoreMetadata) {
  const tags: Record<string, string> = {
    'DC.title': metadata.title,
    'DC.description': metadata.description,
    'DC.date': metadata.date,
    'DC.type': metadata.type,
    'DC.identifier': metadata.identifier,
    'DC.language': metadata.language,
  };

  // Optionale Felder nur hinzufügen wenn vorhanden
  if (metadata.creator) {
    tags['DC.creator'] = metadata.creator;
  }

  if (metadata.subject) {
    tags['DC.subject'] = Array.isArray(metadata.subject) 
      ? metadata.subject.join(', ') 
      : metadata.subject;
  }

  if (metadata.publisher) {
    tags['DC.publisher'] = metadata.publisher;
  }

  if (metadata.contributor) {
    tags['DC.contributor'] = Array.isArray(metadata.contributor) 
      ? metadata.contributor.join(', ') 
      : metadata.contributor;
  }

  if (metadata.format) {
    tags['DC.format'] = metadata.format;
  }

  if (metadata.source) {
    tags['DC.source'] = metadata.source;
  }

  if (metadata.relation) {
    tags['DC.relation'] = metadata.relation;
  }

  if (metadata.coverage) {
    tags['DC.coverage'] = metadata.coverage;
  }

  if (metadata.rights) {
    tags['DC.rights'] = metadata.rights;
  }

  return tags;
}

/**
 * Generiert Dublin Core Meta Tags für Next.js Metadata API
 * Kann direkt in metadata.other verwendet werden
 */
export function getDublinCoreMetadata(metadata: Partial<DublinCoreMetadata>): Record<string, string> {
  const dcData: DublinCoreMetadata = {
    title: metadata.title || 'SimpleWebDesign',
    description: metadata.description || 'Professional Webdesign Services',
    date: metadata.date || new Date().toISOString().split('T')[0],
    type: metadata.type || 'Text',
    identifier: metadata.identifier || 'https://simplewebdesign.at',
    language: metadata.language || 'de',
    creator: metadata.creator || 'Gerald Böhm',
    publisher: metadata.publisher || 'SimpleWebDesign',
    rights: metadata.rights || '© SimpleWebDesign. Alle Rechte vorbehalten.',
    ...metadata
  };

  return generateDublinCoreTags(dcData);
}

/**
 * Vordefinierte Dublin Core Typen gemäß DCMI Type Vocabulary
 */
export const DublinCoreTypes = {
  TEXT: 'Text',
  IMAGE: 'Image',
  INTERACTIVE_RESOURCE: 'InteractiveResource',
  SERVICE: 'Service',
  SOFTWARE: 'Software',
  SOUND: 'Sound',
  STILL_IMAGE: 'StillImage',
  MOVING_IMAGE: 'MovingImage',
  PHYSICAL_OBJECT: 'PhysicalObject',
  EVENT: 'Event',
  DATASET: 'Dataset',
  COLLECTION: 'Collection',
} as const;

/**
 * Helper für Blog-Artikel
 */
export function getBlogArticleDC(params: {
  title: string;
  description: string;
  author: string;
  date: string;
  url: string;
  category?: string;
}): Record<string, string> {
  return getDublinCoreMetadata({
    title: params.title,
    description: params.description,
    creator: params.author,
    date: params.date,
    type: DublinCoreTypes.TEXT,
    identifier: params.url,
    language: 'de',
    publisher: 'SimpleWebDesign',
    subject: params.category,
    rights: '© SimpleWebDesign. Alle Rechte vorbehalten.',
  });
}

/**
 * Helper für Service-Seiten
 */
export function getServicePageDC(params: {
  title: string;
  description: string;
  url: string;
}): Record<string, string> {
  return getDublinCoreMetadata({
    title: params.title,
    description: params.description,
    type: DublinCoreTypes.SERVICE,
    identifier: params.url,
    language: 'de',
    creator: 'Gerald Böhm',
    publisher: 'SimpleWebDesign',
    rights: '© SimpleWebDesign. Alle Rechte vorbehalten.',
  });
}

/**
 * Helper für allgemeine Webseiten
 */
export function getWebPageDC(params: {
  title: string;
  description: string;
  url: string;
}): Record<string, string> {
  return getDublinCoreMetadata({
    title: params.title,
    description: params.description,
    type: DublinCoreTypes.TEXT,
    identifier: params.url,
    language: 'de',
    creator: 'Gerald Böhm',
    publisher: 'SimpleWebDesign',
    rights: '© SimpleWebDesign. Alle Rechte vorbehalten.',
  });
}

