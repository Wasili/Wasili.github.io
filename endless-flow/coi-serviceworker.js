if (typeof window === 'undefined') {
    importScripts('https://cdn.jsdelivr.net/gh/gzuidhof/coi-serviceworker/coi-serviceworker.min.js');
} else {
    (async () => {
        if (window.crossOriginIsolated !== false) return;
        await import('https://cdn.jsdelivr.net/gh/gzuidhof/coi-serviceworker/coi-serviceworker.min.js');
    })();
}
