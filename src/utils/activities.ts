import { getImage } from 'astro:assets';
import { getCollection, render, type CollectionEntry } from 'astro:content';
import { findImage } from '~/utils/images';

/** Optimized URLs for the activity viewer, larger than the card thumbnails. Public (`/...`) paths pass through. */
export const viewerPhotos = async (paths: Array<string | undefined>): Promise<string[]> => {
  const urls = await Promise.all(
    paths.filter(Boolean).map(async (path) => {
      const src = await findImage(path);
      if (!src || typeof src === 'string') return src ?? undefined;
      return (await getImage({ src, width: 1200, format: 'webp' })).src;
    })
  );
  return urls.filter(Boolean) as string[];
};

type EventType = CollectionEntry<'events'>['data']['type'];

const EVENT_LABELS: Record<EventType, string> = {
  competição: 'Competição',
  entrevista: 'Entrevista',
  mentoria: 'Mentoria',
  oficina: 'Oficina',
  organização: 'Organização',
  palestra: 'Palestra',
  participação: 'Participação',
  premiação: 'Premiação',
  'visita técnica': 'Visita técnica',
};

export const byDateDesc = (a: { date: Date }, b: { date: Date }) => b.date.valueOf() - a.date.valueOf();

/** ActivityCard props (plus `date` and the rendered `Content`) for the events of the given types, newest first. */
export const eventCards = async (types: EventType[], filter: (entry: CollectionEntry<'events'>) => boolean = () => true) => {
  const entries = (await getCollection('events')).filter((entry) => types.includes(entry.data.type) && filter(entry));
  const cards = await Promise.all(
    entries.map(async (entry) => ({
      title: entry.data.title,
      date: entry.data.date,
      meta: `${entry.data.date.getUTCFullYear()} · ${EVENT_LABELS[entry.data.type]}`,
      cover: entry.data.cover,
      photos: await viewerPhotos([entry.data.cover, ...entry.data.images]),
      Content: (await render(entry)).Content,
    }))
  );
  return cards.sort(byDateDesc);
};

type ProjectKind = CollectionEntry<'projects'>['data']['kind'];

const PROJECT_LABELS: Record<ProjectKind, string> = {
  'p&d': 'P&D',
  consultoria: 'Consultoria',
  orientação: 'Orientação de TCC',
};

/** ActivityCard props (plus `date` and the rendered `Content`) for the projects of the given kind, newest first. */
export const projectCards = async (kind: ProjectKind) => {
  const entries = (await getCollection('projects')).filter((entry) => entry.data.kind === kind);
  const cards = await Promise.all(
    entries.map(async (entry) => ({
      title: entry.data.title,
      date: entry.data.date,
      meta: `${entry.data.period ?? entry.data.date.getUTCFullYear()} · ${PROJECT_LABELS[entry.data.kind]}`,
      cover: entry.data.cover,
      photos: await viewerPhotos([entry.data.cover, ...entry.data.images]),
      Content: (await render(entry)).Content,
    }))
  );
  return cards.sort(byDateDesc);
};
