import { EnvVariables } from '../utils';

interface Constituents {
  role: string;
  name: string;
  constituentULAN_URL: string;
  constituentWikidata_URL: string;
  gender: string;
}

interface Tag {
  term: string;
  AAT_URL: string;
}

export interface Object {
  objectID: number;
  isHighlight: boolean;
  accessionNumber: string;
  accessionYear: string;
  isPublicDomain: boolean;
  primaryImage: string;
  primaryImageSmall: string;
  additionalImages: string[];
  constituents: Constituents[];
  department: string;
  objectName: string;
  title: string;
  culture: string;
  period: string;
  dynasty: string;
  reign: string;
  portfolio: string;
  artistRole: string;
  artistPrefix: string;
  artistDisplayName: string;
  artistDisplayBio: string;
  artistSuffix: string;
  artistAlphaSort: string;
  artistNationality: string;
  artistBeginDate: string;
  artistEndDate: string;
  artistGender: string;
  artistWikidata_URL: string;
  artistULAN_URL: string;
  objectDate: string;
  objectBeginDate: number;
  objectEndDate: number;
  medium: string;
  dimensions: string;
  creditLine: string;
  geographyType: string;
  city: string;
  state: string;
  county: string;
  country: string;
  region: string;
  subregion: string;
  locale: string;
  locus: string;
  excavation: string;
  river: string;
  classification: string;
  rightsAndReproduction: string;
  linkResource: string;
  metadataDate: string;
  repository: string;
  objectURL: string;
  tags: Tag[];
  objectWikidata_URL: string;
  isTimelineWork: boolean;
}

export const fetchObject = async (objectId: number) => {
  const response = await fetch(`${EnvVariables.API_URL}/public/collection/v1/objects/${objectId}`);

  if (response.status >= 400) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as Object;
};

export const fetchDiscovery = async (objectId: number) => {
  const response = await fetch(`${EnvVariables.API_URL}/public/collection/v1/objects/${objectId}`);

  if (response.status >= 400) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as Object;
};
