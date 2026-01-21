export interface IROMRevision {
  version: string;
  file: string;
  name: string;
}

export const roms: {
  esp32: string;
  'esp32-s2': string;
  'esp32-s3': string;
  'esp32-c3': string;
  'esp32-c5': string;
  'esp32-c6': string;
  'esp32-h2': string;
  'esp32-p4': string;
};

export const romRevisions: {
  'esp32-p4': IROMRevision[];
};

export const symbols: {
  esp32: string;
  'esp32-s2': string;
  'esp32-s3': string;
  'esp32-c3': string;
  'esp32-c5': string;
  'esp32-c6': string;
  'esp32-h2': string;
  'esp32-p4': string;
};
