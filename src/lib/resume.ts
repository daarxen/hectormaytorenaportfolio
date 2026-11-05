import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { profile } from '../data/site';

/** True once the résumé PDF has been added to /public. Checked at build time. */
export const resumeAvailable = existsSync(join(process.cwd(), 'public', profile.resumeFile));
export const resumeHref = `/${profile.resumeFile}`;
