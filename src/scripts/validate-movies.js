// Simple validation runner for movies database
const path = require('path');

// Resolve path to movies.ts or compiled js
// Since Next.js uses TS, we can run it using ts-node or dynamically require the typescript module
// But to keep it simple, we can run a check inside a ts file and execute it with ts-node
// We'll write validate-movies.ts instead to run seamlessly with ts-node/tsx!
