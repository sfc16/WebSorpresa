// ==========================================
// BASE DE DATOS DE NOTAS Y CANCIONES DE IRENE
// Formato de fecha: "YYYY-MM-DD"
// ==========================================
const notas = [
    {
        fecha: "2026-09-02",
        titulo: "El arranque del diario",
        texto: "Bienvenida a tu rinconcito diario. Prepárate porque cada día te va a tocar aguantarme un poquito desde la distancia.",
        spotifyTrackId: "4Dudxfs93t2B6s2LxgVJ3s" 
    },
    {
        fecha: "2026-09-03",
        titulo: "Calentando motores",
        texto: "Pa que mañana entres a trabajar con un buen sabor de boca, qué mejor que el sabor del vino.",
        spotifyTrackId: "15m2Op4d1ZtX0ScPaDNKcd"
    },
    {
        fecha: "2026-09-04",
        titulo: "Fotos que no borro",
        texto: "Digo que las borro luego para hacerme la interesante, pero en verdad me alegra el día encontrarme tu cara en mi galería.",
        spotifyTrackId: "1LuW4h5s9ZumBbMh7qhDDj" 
    },
    {
        fecha: "2026-09-05",
        titulo: "Tu racha en TikTok manda",
        texto: "Lo primero que hago al levantarme es mirar si la racha sigue viva. Prioridades claras siempre.",
        spotifyTrackId: "0DXI6c9tNWsI4tvUftkQN8"
    },
    {
        fecha: "2026-09-06",
        titulo: "De Despeñaperros pa'rriba",
        texto: "Da igual los kilómetros o donde te pille el día: las costumbres buenas del sur se llevan por dentro.",
        spotifyTrackId: "5UOzQpO62ljPFDqquxGDqT"
    },
    {
        fecha: "2026-09-07",
        titulo: "Orgullo en mayúsculas",
        texto: "Para cuando se te olvide lo crack que eres sacándote tus cosas adelante: yo te lo recuerdo por si acaso.",
        spotifyTrackId: "6ZdMBm5ei0SCfqvm6CEtse"
    },
    {
        fecha: "2026-09-08",
        titulo: "Mi diario personal",
        texto: "Si no respondes no pasa nada, yo te sigo contando mi vida por aquí que para eso eres mi oyente favorita.",
        spotifyTrackId: "6bMRELN9nclL87w9XEMMnw"
    },
    {
        fecha: "2026-09-09",
        titulo: "Dando por culo en los bares",
        texto: "Paso por cualquier sitio chulo o terraza y solo pienso en lo bien que nos lo pasaríamos montando el espectáculo.",
        spotifyTrackId: "3v1dCP3hk2djfWryqfp7sx"
    },
    {
        fecha: "2026-09-10",
        titulo: "Porque lo bueno se extraña",
        texto: "Porque desde que te fuiste, haces que todo aquí se sienta un poco más vacío.",
        spotifyTrackId: "6W5SNqU2tJLDJHItWBCMMd"
    },
    {
        fecha: "2026-09-11",
        titulo: "Una historia de tantas",
        texto: "Porque las experiencias contigo sigan trayendo risas e historias que contar.",
        spotifyTrackId: "2iZnx5jRngSbQfI68PjWn9"
    },
    {
        fecha: "2026-09-12",
        titulo: "Porque no vuelvan los princesos",
        texto: "Me encanta la gente que es libre sin pedir permiso a nadie. Sigue siendo así siempre, madrileña.",
        spotifyTrackId: "3hlWUNjAlbZ6nOjAbrivBv"
    },
    {
        fecha: "2026-09-13",
        titulo: "Rumores inciertos",
        texto: "Cuando mi familia se piensa que estamos liadas, significa que eres más amiga mía que nunca.",
        spotifyTrackId: "15tHagkk8z306XkyOHqiip"
    },
    {
        fecha: "2026-09-14",
        titulo: "Cero mentiras por aquí",
        texto: "Siempre te fui sincera y si fuera por mí, nos veríamos todas las semanas.",
        spotifyTrackId: "59bqZ237MW9CvFRLqu6Dgg"
    },
    {
        fecha: "2026-09-15",
        titulo: "Cosas que solo te gustarían a ti",
        texto: "Tengo una lista enorme de planes guardados que solo tienen sentido si los hago contigo.",
        spotifyTrackId: "5gEUDNQvoQjdjklrwPdGwD"
    },
    {
        fecha: "2026-09-16",
        titulo: "Pa cuando la tranquilidad brilla por su ausencia",
        texto: "Un tema tranquilo para acompañar el agobio de mitad de semana. Tómate un respiro, que puedes con todo.",
        spotifyTrackId: "5knXUTpU08RXG6QD0DvONV"
    },
    {
        fecha: "2026-09-17",
        titulo: "De iglesias y rincones",
        texto: "Pasear por según qué sitios e imaginarme tu cara opinando de todo es ya una tradición.",
        spotifyTrackId: "4UIvzmMCkEZj8cZclXpKun"
    },
    {
        fecha: "2026-09-18",
        titulo: "Un poquito más feliz",
        texto: "Literalmente desde que entraste en mi vida el porcentaje de felicidad subió bastante. Datos reales, no opiniones.",
        spotifyTrackId: "32SaRYYxS7SXjNNvIY9VBE"
    },
    {
        fecha: "2026-09-19",
        titulo: "Un sábado toca algo alegre",
        texto: "Aunque trabajes, hay que despertar ese ambiente fiestero niniaa.",
        spotifyTrackId: "1kQqiC1rS1FiuVpeBKN0QN"
    },
    {
        fecha: "2026-09-20",
        titulo: "Domingos de motivaciones y no de resacas",
        texto: "Afrontamos la semana con ganas. Palante como los de Alicante, que no se diga. Ya dejo el requetón lo prometo.",
        spotifyTrackId: "48NXpYRuvv9izul4oXhqS9"
    },
    {
        fecha: "2026-09-21",
        titulo: "El tipo de tía que arrasa",
        texto: "Llegaste para desmontar esquemas y teorías sobre la amistad. Y qué bien que lo hiciste.",
        spotifyTrackId: "50TEoQVlvElP7GYPKD82kD"
    },
    {
        fecha: "2026-09-22",
        titulo: "Diferencias que suman",
        texto: "En las cosas que no nos parecemos en nada es donde más he aprendido de ti este tiempo.",
        spotifyTrackId: "04UsuCGu6llkgOldCUCgZo"
    },
    {
        fecha: "2026-09-23",
        titulo: "Ganas de lío",
        texto: "Demasiada tranquilidad llevo últimamente, me hace falta un ratito de los tuyos cerca.",
        spotifyTrackId: "4Aco6tWxQkMyfRSDrpA82C"
    },
    {
        fecha: "2026-09-24",
        titulo: "Por si las cosas se tuercen un poco",
        texto: "Para que recuerdes que no eres un robot y que si las cosas no salen siempre perfectas, es porque somos humanos.",
        spotifyTrackId: "58zsLZPvfflaiIbNWoA22O"
    },
    {
        fecha: "2026-09-25",
        titulo: "Aterrador pero abierta a ello",
        texto: "Mira que da miedo abrirse del todo, pero contigo da la sensación de que es el sitio seguro.",
        spotifyTrackId: "4AsrtM9cxSYQJLp1978fm4"
    },
    {
        fecha: "2026-09-26",
        titulo: "Casi un mes de notas",
        texto: "Y las que quedan... porque lo que es fácil de sentir es fácil de escribir.",
        spotifyTrackId: "3AJwUDP919kvQ9QcozQPxg"
    },
    {
        fecha: "2026-09-27",
        titulo: "Un por qué",
        texto: "Porque levantarte cada día es para hacer que todo merezca la pena. Que siempre te vaya bonito.",
        spotifyTrackId: "309tBdjUGCYvzDJDEin9Ua" 
    },
    {
        fecha: "2026-09-28",
        titulo: "Un día más es un día menos",
        texto: "Porque los kilómetros hacen menos mella sabiendo que tarde o temprano nos volveremos a ver",
        spotifyTrackId: "3prOrWojlVzltxgK1vZrq6"
    },
    {
        fecha: "2026-09-29",
        titulo: "Los gustos se pegan",
        texto: "Porque hay cantantes, canciones y ritmos que suenan a ti",
        spotifyTrackId: "3WFmq2n3RValfsDQKSJWvc"
    },
    {
        fecha: "2026-09-30",
        titulo: "Los temazos nunca pasan de moda",
        texto: "Porque es un TEMARDO y porque, flaca, qué quieres que te diga...",
        spotifyTrackId: "2LsbizbOeNa4x6qsi2jAMb"
    },
    {
        fecha: "2026-10-01",
        titulo: "Regalos nunca vistos",
        texto: "Porque que nunca te hayan regalado flores, no significa que no te las vayan a regalar",
        spotifyTrackId: "7DSAEUvxU8FajXtRloy8M0"
    },
    {
        fecha: "2026-10-02",
        titulo: "Las casualidades no existen",
        texto: "Llámalo plan de Dios o del destino, pero no puedo estar más agradecida a quien te puso en mi camino",
        spotifyTrackId: "4vtCOyIhm2SSaG79kGfc5L"
    },
    {
        fecha: "2026-10-03",
        titulo: "Decir adiós nunca es fácil",
        texto: "Es gracioso que lo que empezó siendo 'porque te ibas' haya acabado sonando a 'por qué te fuiste'.",
        spotifyTrackId: "0fqrZVSenCW6vD2eFMx5pt"
    },
    {
        fecha: "2026-10-04",
        titulo: "Lo bonito a veces es objetivo",
        texto: "Sé que te gustan las sevillanas y que te encanta la feria, así que te dejo una de mis sevillanas favoritas. Una de las sevillanas más bonitas pa que la escuche la niña más bonita.",
        spotifyTrackId: "3If5032X7snJ557lZmUp0U"
    },
    {
        fecha: "2026-10-05",
        titulo: "Por las anécdotas, enfadada💜",
        texto: "Porque esta canción te lleve siempre a recuerdos y lugares graciosos de recordar",
        spotifyTrackId: "5MwUr7hfHWWqezOCtDsFOn"
    },
    {
        fecha: "2026-10-06",
        titulo: "Odio al Carrefour",
        texto: "Lo que suena en mi cabeza cuando pienso que pa ir a verte no puedo usar un fin de semana 😔",
        spotifyTrackId: "5bDRGw4njjPCO5ZYvSgRXr"
    },
    {
        fecha: "2026-10-07",
        titulo: "Nada más que añadir",
        texto: "Que ella tenga 20 novios a mí me da igual, yo solo quiero que me quiera más que a los demás...",
        spotifyTrackId: "6lkQJR2cAK8DMeuqBpdTbg"
    },
    {
        fecha: "2026-10-08",
        titulo: "La Jude sabe cosas",
        texto: "Este temazo porque me encanta y s'acabao",
        spotifyTrackId: "5Bng1Bwy7PFQys6qByKmdT"
    },
    {
        fecha: "2026-10-09",
        titulo: "Una indirecta de verdad...",
        texto: "A ver si después de esto entiendes que estoy deseando irme de verbena contigo",
        spotifyTrackId: "0GzQB5WXavUEU8tfTCAd8m"
    },
    {
        fecha: "2026-10-10",
        titulo: "Una niña, una canción",
        texto: "Porque cuando escucho esta canción solo puedo pensar en mi lady Madriz",
        spotifyTrackId: "5NQw5WJwKRPaaSDHXD04Fs"
    },
    {
        fecha: "2026-10-11",
        titulo: "El cariño no entiende de tiempos",
        texto: "En tan poco tiempo te has vuelto incondicional y eso me hace admirar mi suerte",
        spotifyTrackId: "3t7xKj2YWeiFm92ApJ2FAt"
    },
    {
        fecha: "2026-10-12",
        titulo: "Porque rompiste mis barreras desde el minuto uno",
        texto: "Es buena señal que me abra, es algo raro...",
        spotifyTrackId: "4kjoLo65L88Eepi1hV1Gt2"
    },
    {
        fecha: "2026-10-13",
        titulo: "Que el mundo siga rodando",
        texto: "Que el mundo fue y será una porquería, pero si estoy contigo siento que todo va bien",
        spotifyTrackId: "6vsoiuJGSyCPD6lbTVTLCY"
    },
    {
        fecha: "2026-10-14",
        titulo: "Los aniversarios no son solo de amigos",
        texto: "Cuentas las lenguas antiguas, que un catorce de octubre nació una ilusión...",
        spotifyTrackId: "4UqHkgithEYNr32AbABaDr"
    },
    {
        fecha: "2026-10-15",
        titulo: "Life's for the living",
        texto: "But most days I can't agree. 'Cause it don't make much sense to be here if you're not here with me",
        spotifyTrackId: "2ySKl9oGwZMZzXJraNiNgl"
    },
    {
        fecha: "2026-10-16",
        titulo: "Tu libertad me maravilla",
        texto: "Y aunque 'no me quieres queré' me encanta que no te dejas gobernar por na ni por nadie",
        spotifyTrackId: "3SK45LddxlEkzI8OWO9Eyo"
    },
    {
        fecha: "2026-10-17",
        titulo: "La semana más mágica",
        texto: "Estaría bueno ayudarte a ampliar tu colección de estampitas sin ponerte mi marcha favorita",
        spotifyTrackId: "062N8EvEJyDuMc8enZCoqX"
    },
    {
        fecha: "2026-10-18",
        titulo: "Nos vemos en primavera",
        texto: "Porque te acuerdes de bajar a tu segunda casa cada vez que empiece a oler a primavera.",        
        spotifyTrackId: "77ozu4uuxwEUcz9bcvRMHx"
    },
    {
        fecha: "2026-10-19",
        titulo: "No podía faltar EL HOMBRE",
        texto: "Habrá hombres y hombres, que ninguno superará a Juan Luis JAJAJAJAAJ",
        spotifyTrackId: "1iEwyiSLAunPR6uouANE0O"
    },
    {
        fecha: "2026-10-20",
        titulo: "Filosofía de vida",
        texto: "Extrañar hasta discutir contigo es una filosofía de vida y es la mía",
        spotifyTrackId: "7lOLQ52wY0FmqEKn7LKtQG"
    },
    {
        fecha: "2026-10-21",
        titulo: "Sin necesidad de dar explicaciones",
        texto: "Lo que me gusta de nosotras es que podemos estar horas hablando o en silencio y todo sigue estando bien.",
        spotifyTrackId: "1N0pXVlgb69HTKWEbsA0W1"
    },
    {
        fecha: "2026-10-22",
        titulo: "Para los días de cabreo",
        texto: "Ponte los cascos 3 minutos, respira y acuérdate de que puedes con todo lo que te echen y con todos los que se te echen encima.",
        spotifyTrackId: "43y7AvcG0HjDSO46RxA8lX"
    },
    {
        fecha: "2026-10-23",
        titulo: "Ganas de un ratito juntas",
        texto: "Si no voy a verte pronto no será porque no lo vaya a intentar por todos los medios.",
        spotifyTrackId: "0HYj1k4x1awDQLNZW96MYA"
    },
    {
        fecha: "2026-10-24",
        titulo: "Mi persona incondicional",
        texto: "Hablar todos los días con alguien y no cansarse es algo que pasa una vez cada mil años.",
        spotifyTrackId: "59h9rjiU4MAvW9E1A9hJUK"
    },
    {
        fecha: "2026-10-25",
        titulo: "Domingos de relax",
        texto: "Temazo tranquilito pa finiquitar la semanita.",
        spotifyTrackId: "53IBRi1foJyOrFs70aCsXk"
    },
    {
        fecha: "2026-10-26",
        titulo: "Pa que te comas el mundo",
        texto: "Que nada ni nadie te quite esa fuerza tan tuya y que nadie te impida seguir creando tu imperio.",
        spotifyTrackId: "63rRgkllF0FDeZ9fpOkFKl"
    },
    {
        fecha: "2026-10-27",
        titulo: "Cumpleaños de mi niña",
        texto: "Tu nota de hoy está en la carta",
        spotifyTrackId: "3BS9n4iafEIruvhqroGBSe"
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
    /*if (!notaHoy) {
        notaHoy = notas[0];
    }*/

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
