// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import * as dotenv from 'dotenv';
dotenv.config();

declare global {
	namespace App {
		interface ProcessEnv {
			BLOX: string;
		}
	}
}

export {};
