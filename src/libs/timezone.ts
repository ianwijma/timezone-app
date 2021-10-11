import { DateTime } from 'luxon';
import { zones } from 'tzdata';

// TODO: Change Luxon for other tool or even native Date.

export type TimeZoneName = string;

export function changeTimeZone(
  time: number,
  fromZone: TimeZoneName,
  toZone: TimeZoneName
): string {
  const fromDate = DateTime.fromMillis(time, {
    zone: fromZone,
  });
  const toDate = fromDate.setZone(toZone);
  return toDate.toLocaleString(DateTime.TIME_SIMPLE);
}

export function listTimeZones(): TimeZoneName[] {
  return Object.entries(zones)
    .filter(([__, v]) => Array.isArray(v))
    .map(([zoneName]) => zoneName);
}

export function isValidTimeZone(zoneName: TimeZoneName): boolean {
  const supported = DateTime.local().setZone(zoneName as string).isValid;
  const used = zoneName.includes('/') && !zoneName.startsWith('Etc');
  return supported && used;
}

export function filterValidTimeZones(
  timeZones: TimeZoneName[]
): TimeZoneName[] {
  return timeZones.filter(isValidTimeZone);
}

export function matchTimeZone(timeZone: TimeZoneName, search: string): boolean {
  const searchTarget = timeZone.toLowerCase();
  return searchTarget.indexOf(search) !== -1;
}

export function searchTimeZones(
  timeZones: TimeZoneName[],
  searchTerm: string
): TimeZoneName[] {
  const search = searchTerm.toLowerCase();
  return timeZones.filter((timeZone: TimeZoneName) => {
    const searchTarget = timeZone.toLowerCase();
    return searchTarget.indexOf(search) !== -1;
  });
}

export function sortTimeZones(timeZones: TimeZoneName[]): TimeZoneName[] {
  return timeZones.sort();
}

export function formatTimeZone(timeZone: TimeZoneName): string {
  return timeZone.split('/').join(' / ').replaceAll('_', ' ');
}

export function formatTimeZones(timeZones: TimeZoneName[]): string[] {
  return timeZones.map(formatTimeZone);
}
