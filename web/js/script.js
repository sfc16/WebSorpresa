// ==========================================
// BASE DE DATOS DE NOTAS Y CANCIONES DE IRENE
// Formato de fecha: "YYYY-MM-DD"
// ==========================================
const notas = [
    {
        fecha: "2026-09-01",
        titulo: "¡Feliz cumpleaños, mi madrileña!",
        texto: "Hoy empieza esto. Aunque esté lejos, quería que cada día tengas un ratito de mí. Gracias por aparecer en mi vida y ponerlo todo patas arriba. ¡Disfruta muchísimo de tu día!",
        spotifyTrackId: "0VjIjW4GlUZAMYd2vXMi3b" 
    },
    {
        fecha: "2026-09-02",
        titulo: "El café de la mañana",
        texto: "Hoy seguro que estás con mil cosas del curso y agobiada, pero acuérdate de lo fuerte y constante que eres. Te admiro un montón por cómo te lo curras todo.",
        spotifyTrackId: "38A3fLh9y3KjN4oDInG9S0"
    },
    {
        fecha: "2026-09-03",
        titulo: "Esa charla en la playa",
        texto: "Estaba escuchando esta canción y me he acordado de la noche en la playa. Desde ese día supe que habías llegado para romper todas mis ideas sobre la amistad y el amor.",
        spotifyTrackId: "6RUKP1R2p83I29L2pM3m41"
    }
];

// Obtener la fecha actual en formato YYYY-MM-DD
function obtenerFechaHoy() {
    const hoy = new Date();
    const yyyy = hoy.getFullYear();
    const mm = String(hoy.getMonth() + 1).padStart(2, '0');
    const dd = String(hoy.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function cargarApp() {
    const fechaHoy = obtenerFechaHoy();
    
    // Buscar la nota asignada a la fecha de hoy
    let notaHoy = notas.find(n => n.fecha === fechaHoy);
    
    // Si no hay nota para la fecha exacta de hoy, muestra la primera como vista previa de pruebas
    if (!notaHoy) {
        notaHoy = notas[0];
    }

    // Insertar el contenido en el bloque principal
    document.getElementById("noteDate").innerText = notaHoy.fecha;
    document.getElementById("noteTitle").innerText = notaHoy.titulo;
    document.getElementById("noteText").innerText = notaHoy.texto;
    
    // Cargar reproductor interactivo de Spotify
    document.getElementById("songContainer").innerHTML = `
        <iframe src="https://open.spotify.com/embed/track/${notaHoy.spotifyTrackId}?utm_source=generator&theme=0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
        </iframe>
    `;

    // Cargar lista de notas anteriores (solo aquellas cuya fecha sea menor a la de hoy)
    const pastListDiv = document.getElementById("pastList");
    pastListDiv.innerHTML = "";

    const notasAnteriores = notas.filter(n => n.fecha < notaHoy.fecha);

    if (notasAnteriores.length === 0) {
        pastListDiv.innerHTML = "<p style='color: var(--text-muted); font-size: 0.85rem;'>Aún no hay notas pasadas. ¡Mañana aparecerá la primera!</p>";
    } else {
        notasAnteriores.forEach(nota => {
            const item = document.createElement("div");
            item.className = "past-item";
            item.innerHTML = `
                <div>
                    <div class="past-date">${nota.fecha}</div>
                    <div class="past-snippet">${nota.titulo}</div>
                </div>
                <span style="color: var(--primary-accent); font-weight: bold;">→</span>
            `;
            item.onclick = () => {
                document.getElementById("noteDate").innerText = nota.fecha;
                document.getElementById("noteTitle").innerText = nota.titulo;
                document.getElementById("noteText").innerText = nota.texto;
                document.getElementById("songContainer").innerHTML = `
                    <iframe src="https://open.spotify.com/embed/track/${nota.spotifyTrackId}?utm_source=generator&theme=0" 
                            allowfullscreen="" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy">
                    </iframe>
                `;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
            pastListDiv.appendChild(item);
        });
    }
}

// Inicializar la App al cargar la página
cargarApp();