// maybe fix circular dependency, hopefully.

import { env } from '$env/dynamic/public'
import { writable } from 'svelte/store'

export const LINKED_INSTANCE_URL = env.PUBLIC_INSTANCE_URL
export const DEFAULT_INSTANCE_URL = env.PUBLIC_INSTANCE_URL || 'lemmy.ml'
export let instance = writable(DEFAULT_INSTANCE_URL)