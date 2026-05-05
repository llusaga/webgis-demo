// ── Gràfic de barres ──────────────────────────────────────────
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Senderisme', 'Ciclisme', 'Patrimoni', 'Mirador', 'Platja', 'Gastronomia'],
        datasets: [{
            label: 'Nombre de punts d\'interès',
            data: [24, 18, 12, 9, 15, 7],
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 99, 132, 0.7)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: {
                display: true,
                text: 'Punts d\'interès per categoria'
            }
        },
        scales: {
            y: { beginAtZero: true, ticks: { stepSize: 5 } }
        }
    }
});

// ── Gràfic de donuts ──────────────────────────────────────────
const donutCtx = document.getElementById('donutChart').getContext('2d');
new Chart(donutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Fàcil', 'Moderat', 'Difícil', 'Molt difícil'],
        datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: [
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(255, 99, 132, 0.8)'
            ],
            borderColor: '#fff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'right' },
            title: {
                display: true,
                text: 'Distribució de rutes per dificultat (%)'
            }
        }
    }
});

// ── Núvol de paraules ─────────────────────────────────────────
const words = [
    { key: 'GIS', value: 95 },
    { key: 'QGIS', value: 88 },
    { key: 'mapa', value: 80 },
    { key: 'ruta', value: 75 },
    { key: 'senderisme', value: 70 },
    { key: 'dades', value: 65 },
    { key: 'territori', value: 60 },
    { key: 'natura', value: 55 },
    { key: 'cartografia', value: 50 },
    { key: 'bosc', value: 45 },
    { key: 'muntanya', value: 42 },
    { key: 'web', value: 40 },
    { key: 'Leaflet', value: 38 },
    { key: 'topografia', value: 35 },
    { key: 'GPS', value: 33 },
    { key: 'geodades', value: 30 },
    { key: 'ciclisme', value: 28 },
    { key: 'paisatge', value: 25 },
    { key: 'mirador', value: 22 },
    { key: 'patrimoni', value: 20 }
];

const wcCtx = document.getElementById('wordCloud').getContext('2d');
new Chart(wcCtx, {
    type: 'wordCloud',
    data: {
        labels: words.map(w => w.key),
        datasets: [{
            label: 'Freqüència',
            data: words.map(w => w.value),
            color: words.map(() => `hsl(${Math.floor(Math.random() * 360)}, 60%, 40%)`)
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Termes més freqüents a les descripcions'
            }
        }
    }
});
