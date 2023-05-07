import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'abekodai1234',
  apiKey: process.env.API_KEY || '',
})