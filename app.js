/* =========================================================
   Pilates Reformer — Class Coach (ES / EN)
   Script line syntax:  "Español || English"
   "## " = sub-heading   "* " = reps   anything else = spoken cue
   ========================================================= */

const UI = {
  es:{
    title:"Pilates Reformer — Clase para principiantes", sub:"50–55 min · guía para dar la clase",
    stages:"Etapas", start:"Empezar clase", pause:"Pausar clase", resume:"Continuar clase", reset:"Reiniciar",
    prevLine:"Frase anterior", nextLine:"Siguiente frase",
    hint:"Toca cualquier frase para ir a ella. Teclado: Espacio o → para la siguiente, ← para la anterior.",
    prevStage:"Etapa anterior", nextStage:"Siguiente etapa", finish:"Terminar clase",
    target:"tiempo de la etapa · objetivo {m} min", how:"Cómo hacerlo",
    video:"Ver vídeos de referencia reales en YouTube",
    animNote:"La animación es una vista lateral simplificada que muestra la dirección del movimiento y la respiración. No se muestra la configuración de los muelles: ajústala a tu máquina.",
    throughout:"Durante toda la clase: prioriza control y alineación sobre cantidad de repeticiones.",
    play:"Reproducir", pauseDemo:"Pausa", slower:"Más lento", normal:"Velocidad normal",
    done:"Clase terminada — tiempo total ", objLabel:"Objetivo:", noteLabel:"Nota para la instructora:",
    objective:"Conexión con el centro, movilidad, fuerza, estabilidad y control.",
    note:"La resistencia de los muelles depende de la máquina. Ajusta siempre según el modelo de Reformer y el nivel de la persona. Prioriza control y alineación sobre cantidad de repeticiones.",
    side:"tumbada de lado — pierna de arriba en la barra", bar:"barra", springs:"muelles",
    readLine:"🔊 Leer frase", autoOn:"▶ Manos libres", autoOff:"■ Detener", speed:"Velocidad", gap:"Pausa entre frases",
    voiceHint:"Manos libres lee cada frase en voz alta, espera mientras haces las repeticiones y pasa sola a la siguiente, etapa tras etapa. Tecla P: iniciar o detener.",
    repsLbl:"Tiempo por repetición", setLbl:"Ajustes de audio", repsOff:"no esperar", voiceLbl:"Voz", female:"Mujer", male:"Hombre", missF:"no hay voz de mujer", missM:"no hay voz de hombre", sample:"Hola, esta es tu voz para la clase.", autoVoice:"Automática", speaking:"Leyendo…", nextIn:"Siguiente frase en {s} s", repsLeft:"Haz las repeticiones: quedan {s} s", skip:"Saltar", classDone:"Clase terminada. ¡Bien hecho!", lvB:"Principiante", lvI:"Intermedio", lvA:"Avanzado", titleB:"Pilates Reformer — Clase para principiantes", titleI:"Pilates Reformer — Clase intermedia", titleA:"Pilates Reformer — Clase avanzada", objB:"Conexión con el centro, movilidad, fuerza, estabilidad y control.", objI:"Más fuerza y control del centro, articulación de la columna y trabajo con correas y cajón.", objA:"Fuerza, control y fluidez en ejercicios avanzados, con transiciones continuas.", focusLbl:"Enfoque:", bodyTitle:"Mapa corporal y correcciones", bankHint:"Toca una zona del cuerpo o una etiqueta para ver frases de corrección. Toca una frase para escucharla.", front:"Delante", back:"Detrás", cuesFor:"Correcciones:", testBtn:"Probar audio", testLine:"Hola, esto es una prueba de audio.",
    blocked:"No se oye el audio.", audioHelp:"¿Sin sonido? Sube el volumen, quita el modo silencio (iPhone) y comprueba que hay una voz en español instalada en los ajustes de texto a voz del móvil. Después toca Manos libres otra vez.",
    pausedHidden:"Pausado: la pantalla se apagó o cambiaste de app. Toca Manos libres para continuar.",
    inApp:"Para escuchar el audio, abre esta página en Safari o Chrome (menú ••• → Abrir en el navegador).",
    noSynth:"Este navegador no puede leer en voz alta. Prueba con Chrome, Safari o Edge.",
    noVoice:"No hay voz en {l} en este dispositivo. Añádela en los ajustes de voz / texto a voz del sistema.", es:"español", en:"inglés"
  },
  en:{
    title:"Pilates Reformer — Beginner class", sub:"50–55 min · class coach",
    stages:"Stages", start:"Start class", pause:"Pause class", resume:"Resume class", reset:"Reset",
    prevLine:"Previous line", nextLine:"Next line",
    hint:"Tap any line to jump to it. Keyboard: Space or → for the next line, ← for the previous one.",
    prevStage:"Previous stage", nextStage:"Next stage", finish:"Finish class",
    target:"stage time · target {m} min", how:"How to do it",
    video:"Watch real reference videos on YouTube",
    animNote:"The animation is a simplified side view showing the direction of movement and breathing. Spring settings are not shown — adjust them to your machine.",
    throughout:"Throughout the class: prioritize control and alignment over number of repetitions.",
    play:"Play", pauseDemo:"Pause", slower:"Slower", normal:"Normal speed",
    done:"Class complete — total time ", objLabel:"Goal:", noteLabel:"Note for the instructor:",
    objective:"Core connection, mobility, strength, stability and control.",
    note:"Spring resistance depends on the machine. Always adjust to the Reformer model and the person's level. Prioritize control and alignment over number of repetitions.",
    side:"lying on the side — top leg on the footbar", bar:"footbar", springs:"springs",
    readLine:"🔊 Read line", autoOn:"▶ Hands-free", autoOff:"■ Stop", speed:"Speed", gap:"Pause between lines",
    voiceHint:"Hands-free reads each line aloud, waits while you do the reps, then moves on by itself, stage after stage. Key P: start or stop.",
    repsLbl:"Time per rep", setLbl:"Audio settings", repsOff:"don't wait", voiceLbl:"Voice", female:"Female", male:"Male", missF:"no female voice", missM:"no male voice", sample:"Hi, this is your class voice.", autoVoice:"Automatic", speaking:"Speaking…", nextIn:"Next line in {s} s", repsLeft:"Do the reps: {s} s left", skip:"Skip", classDone:"Class complete. Well done!", lvB:"Beginner", lvI:"Intermediate", lvA:"Advanced", titleB:"Pilates Reformer — Beginner class", titleI:"Pilates Reformer — Intermediate class", titleA:"Pilates Reformer — Advanced class", objB:"Core connection, mobility, strength, stability and control.", objI:"More core strength and control, spinal articulation, and work with the straps and box.", objA:"Strength, control and flow in advanced exercises, with continuous transitions.", focusLbl:"Focus:", bodyTitle:"Body map & correction cues", bankHint:"Tap a body area or a tag to see correction cues. Tap a cue to hear it.", front:"Front", back:"Back", cuesFor:"Cues:", testBtn:"Test audio", testLine:"Hola, esto es una prueba de audio.",
    blocked:"No audio is playing.", audioHelp:"No sound? Turn up the volume, switch off silent mode (iPhone), and check a Spanish voice is installed in your phone's text-to-speech settings. Then tap Hands-free again.",
    pausedHidden:"Paused: the screen turned off or you switched apps. Tap Hands-free to continue.",
    inApp:"To hear the audio, open this page in Safari or Chrome (menu ••• → Open in browser).",
    noSynth:"This browser can't read aloud. Try Chrome, Safari or Edge.",
    noVoice:"No {l} voice on this device. Add one in your system's text-to-speech settings.", es:"Spanish", en:"English"
  }
};

const BEGINNER_STAGES = [
{t:{es:"Bienvenida y preparación",en:"Welcome & set-up"}, sub:{es:"Tumbada boca arriba, respiración",en:"Lying on the back, breathing"}, min:3, demos:["breath"],
yt:"reformer pilates supine set up breathing beginner",
how:{en:["Client lies on the back, head on the headrest, feet on the footbar hip-width apart, knees bent.","Look for neutral spine: a small natural curve in the low back, pelvis level.","Watch for: lifted shoulders, clenched jaw, gripping the belly too hard. The cue is a soft, constant connection."],
es:["La persona se tumba boca arriba, cabeza en el reposacabezas, pies en la barra al ancho de las caderas, rodillas flexionadas.","Busca la columna neutra: una pequeña curva natural en la zona lumbar y la pelvis nivelada.","Observa: hombros elevados, mandíbula apretada, abdomen demasiado apretado. La idea es una conexión suave y constante."]},
s:`## Preparación || Preparation
Bienvenidos a la clase. || Welcome to class.
Antes de empezar, vamos a tomarnos un momento para conectar con nuestra respiración y con nuestro cuerpo. || Before we start, let's take a moment to connect with our breath and our body.
Túmbate boca arriba sobre el carro, con la cabeza en el reposacabezas. || Lie on your back on the carriage, head on the headrest.
Los pies apoyados sobre la barra. || Feet resting on the footbar.
Las piernas paralelas y separadas aproximadamente al ancho de las caderas. || Legs parallel, about hip-width apart.
Los brazos descansan a los lados. || Arms resting by your sides.
Busca una posición cómoda y neutra de la columna. || Find a comfortable, neutral spine.
## Respiración || Breathing
Vamos a empezar con tres respiraciones profundas. || Let's start with three deep breaths.
Inhala por la nariz... || Inhale through your nose...
Y exhala lentamente por la boca. || And exhale slowly through your mouth.
Al inhalar, siente cómo las costillas se expanden hacia los lados. || As you inhale, feel your ribs expand out to the sides.
Al exhalar, siente cómo las costillas vuelven hacia dentro y activa suavemente el abdomen. || As you exhale, feel your ribs draw back in and gently engage your abdominals.
Recuerda: no queremos apretar el abdomen al máximo. || Remember: we don't want to squeeze the abs as hard as we can.
Queremos una conexión suave y constante. || We want a gentle, steady connection.
Relaja los hombros. || Relax your shoulders.
Alarga el cuello. || Lengthen your neck.
Y mantén la mandíbula relajada. || And keep your jaw relaxed.`},

{t:{es:"Footwork",en:"Footwork"}, sub:{es:"Presses de piernas en cuatro posiciones + pulsos",en:"Leg presses in four foot positions + pulses"}, min:8, demos:["footwork","pulses"],
yt:"reformer pilates footwork beginner",
how:{en:["The carriage slides away from the footbar as the legs straighten, then returns slowly. The return is where most of the control happens.","Legs straighten without locking the knees. Pelvis and ribs stay still, shoulders stay soft against the shoulder rests.","Knees track over the toes in every position. In V-position heels together, toes slightly apart, inner thighs gently squeeze.","Watch for: the carriage banging home, hips rocking, pushing from the shoulders."],
es:["El carro se aleja de la barra al estirar las piernas y vuelve despacio. En la vuelta está la mayor parte del control.","Las piernas se estiran sin bloquear las rodillas. Pelvis y costillas quietas, hombros suaves contra los apoyos.","Las rodillas siguen la línea de los pies en todas las posiciones. En V-pilates: talones juntos, puntas un poco abiertas, aductores activos.","Observa: el carro golpeando al volver, caderas que se mueven, empujar desde los hombros."]},
s:`## Preparación || Preparation
Vamos a comenzar con Footwork. || Let's begin with Footwork.
Coloca los pies sobre la barra. || Place your feet on the footbar.
Empezamos con los talones sobre la barra, separados al ancho de las caderas. || We start with your heels on the bar, hip-width apart.
Las piernas están paralelas entre sí. || The legs are parallel to each other.
Empuja suavemente el carro hacia atrás. || Gently push the carriage back.
Y vuelve lentamente. || And come back slowly.
## Primera serie — Talones || First set — Heels
Inhala para preparar. || Inhale to prepare.
Exhala y empuja. || Exhale and push.
Extiende las piernas. || Straighten your legs.
Sin bloquear las rodillas. || Without locking your knees.
Inhala y vuelve. || Inhale and come back.
* 10 repeticiones. || 10 reps.
Empuja... || Push...
Y vuelve con control. || And come back with control.
No dejes que el carro golpee al regresar. || Don't let the carriage bang when it comes back.
Imagina que quieres cerrar el carro suavemente. || Imagine you want to close the carriage softly.
## Segunda posición — Puntas || Second position — Toes
Ahora coloca las puntas de los pies sobre la barra. || Now place the balls of your feet on the footbar.
Los talones ligeramente elevados. || Heels slightly lifted.
Las rodillas siguen la dirección de los dedos de los pies. || Knees follow the direction of your toes.
Inhala. || Inhale.
Exhala y empuja. || Exhale and push.
Inhala y vuelve. || Inhale and come back.
* 10 repeticiones. || 10 reps.
Mantén los talones estables. || Keep your heels steady.
El movimiento viene de las piernas. || The movement comes from the legs.
No necesitamos mover la pelvis. || We don't need to move the pelvis.
## Arco del pie || Arches
Ahora coloca la parte media del pie sobre la barra. || Now place the middle of your foot on the footbar.
Los talones están debajo de la barra. || Your heels are under the bar.
Empuja el carro hacia atrás. || Push the carriage back.
Y vuelve. || And come back.
* 10 repeticiones. || 10 reps.
Piensa en alargar las piernas. || Think about lengthening your legs.
No empujes desde los hombros. || Don't push from your shoulders.
## V-pilates || Pilates V
Junta los talones. || Bring your heels together.
Abre ligeramente las puntas. || Open your toes slightly.
Las piernas están juntas. || Your legs are together.
Inhala. || Inhale.
Exhala y empuja. || Exhale and push.
Vuelve lentamente. || Come back slowly.
* 10 repeticiones. || 10 reps.
Aprieta suavemente la parte interna de los muslos. || Gently squeeze your inner thighs.
Rodillas alineadas con los pies. || Knees in line with your feet.
## Pulsos pequeños || Small pulses @pulses
Ahora vamos a mantener las piernas extendidas. || Now we keep the legs extended.
El carro está quieto. || The carriage stays still.
Vamos a hacer pequeños movimientos. || We'll make small movements.
Flexiona ligeramente... || Bend slightly...
Y extiende. || And straighten.
* 10 pulsos. || 10 pulses.
Pequeño movimiento. || Small movement.
Controlado. || Controlled.
Último. || Last one.
Y vuelve lentamente. || And come back slowly.`},

{t:{es:"Running / estiramiento de gemelos",en:"Running / calf stretch"}, sub:{es:"Bajar talones alternando",en:"Alternating heel drops"}, min:3, demos:["running"],
yt:"reformer pilates running prances beginner",
how:{en:["Legs extended with the balls of the feet on the bar. One heel drops under the bar while the other knee bends slightly, then switch — like walking in place.","The carriage stays almost still. Hips and pelvis stay quiet; only ankles and knees move.","Watch for: hips shifting side to side, bouncing the carriage."],
es:["Piernas extendidas con las puntas de los pies en la barra. Un talón baja bajo la barra mientras la otra rodilla se flexiona un poco, y se cambia — como caminar en el sitio.","El carro casi no se mueve. Caderas y pelvis tranquilas; solo se mueven tobillos y rodillas.","Observa: caderas que se desplazan de lado a lado, el carro rebotando."]},
s:`Ahora vamos a trabajar la movilidad de los tobillos. || Now we'll work on ankle mobility.
Puntas de los pies en la barra. || Balls of your feet on the bar.
Extiende las piernas. || Straighten your legs.
Una pierna se mantiene larga mientras flexionamos la otra. || One leg stays long while we bend the other.
Baja el talón derecho por debajo de la barra mientras doblas la rodilla izquierda. || Lower your right heel under the bar as you bend your left knee.
Ahora baja el talón izquierdo y dobla la rodilla derecha. || Now lower your left heel and bend your right knee.
Cambia. || Switch.
Continúa alternando. || Keep alternating.
* 10 por lado. || 10 per side.
Imagina que estás caminando. || Imagine you're walking.
Mantén las caderas estables. || Keep your hips stable.
Los talones se mueven, pero la pelvis permanece tranquila. || The heels move, but the pelvis stays calm.
Últimos cuatro. || Last four.
Cuatro... || Four...
Tres... || Three...
Dos... || Two...
Uno. || One.
Y vuelve a colocar ambos pies sobre la barra. || And place both feet back on the footbar.`},

{t:{es:"Pelvic curl / puente",en:"Pelvic curl / bridge"}, sub:{es:"Subir y bajar vértebra por vértebra",en:"Rolling up and down one vertebra at a time"}, min:5, demos:["bridge"],
yt:"reformer pilates pelvic curl bridge beginner",
how:{en:["Feet parallel on the bar, arms long by the sides. Exhale to tilt the pelvis and peel the spine up bone by bone.","At the top the weight is on the shoulder blades, never the neck. Knees point forward, not open or closed.","Roll down from the upper back, then middle back, and the pelvis last. Try to keep the carriage still (small movement is fine for beginners)."],
es:["Pies paralelos en la barra, brazos largos a los lados. Exhala para bascular la pelvis y despegar la columna vértebra a vértebra.","Arriba el peso está en las escápulas, nunca en el cuello. Rodillas hacia delante, ni abiertas ni cerradas.","Baja desde la parte alta de la espalda, después la zona media y la pelvis al final. Intenta que el carro no se mueva (un poco está bien para principiantes)."]},
s:`Vamos a colocar los pies paralelos sobre la barra. || Place your feet parallel on the footbar.
Los brazos descansan al lado del cuerpo. || Arms rest by your sides.
Presiona suavemente los pies contra la barra para que el carro no se mueva. || Press your feet gently into the bar so the carriage stays still.
Prepara el abdomen. || Prepare your abdominals.
Inhala. || Inhale.
Exhala y comienza a elevar la pelvis. || Exhale and start lifting your pelvis.
Despega la columna del carro poco a poco, empezando por el coxis. || Peel your spine off the carriage little by little, starting from your tailbone.
Sube vértebra por vértebra. || Roll up one vertebra at a time.
Quédate arriba. || Stay at the top.
Las rodillas apuntan hacia delante. || Your knees point forward.
No lleves el peso hacia el cuello. || Don't take the weight into your neck.
Inhala. || Inhale.
Y exhala mientras bajas. || And exhale as you roll down.
Primero la parte alta de la espalda... || First the upper back...
Después la zona media... || Then the middle back...
Y finalmente la pelvis. || And finally the pelvis.
* 6 repeticiones. || 6 reps.
Sube... || Up...
Y baja lentamente. || And down slowly.
## Última repetición || Last rep
Sube una última vez. || Roll up one last time.
Quédate arriba. || Stay at the top.
Activa los glúteos. || Engage your glutes.
Mantén el abdomen activo. || Keep your abs engaged.
Respira. || Breathe.
Y baja lentamente. || And roll down slowly.
Perfecto. || Perfect.`},

{t:{es:"Abdominal prep",en:"Abdominal prep"}, sub:{es:"Elevación de pecho con manos detrás de la cabeza",en:"Chest lift with hands behind the head"}, min:5, demos:["abprep","tabletop"],
yt:"reformer pilates abdominal prep chest lift beginner",
how:{en:["Hands cradle the head, elbows wide (still visible in peripheral vision). Feet stay on the bar.","Exhale and lift head and shoulders to the tips of the shoulder blades — ribs slide toward the pelvis. The lift is small.","Hands support the weight of the head; they don't pull. Watch for chin jammed into the chest or neck strain.","At the end, stay lifted and bring legs one at a time into tabletop (knees over hips, shins parallel to the floor), arms reaching forward."],
es:["Las manos sostienen la cabeza, codos abiertos (se ven con la visión periférica). Pies en la barra.","Exhala y eleva cabeza y hombros hasta la punta de las escápulas — las costillas van hacia la pelvis. La elevación es pequeña.","Las manos sostienen el peso de la cabeza, no tiran. Observa: barbilla pegada al pecho o tensión en el cuello.","Al final, se queda arriba y lleva las piernas una a una a mesa (rodillas sobre caderas, espinillas paralelas al suelo), brazos hacia delante."]},
s:`Ahora vamos a llevar las manos detrás de la cabeza. || Now bring your hands behind your head.
Los codos están abiertos. || Elbows are wide.
Las piernas vuelven a la barra. || Legs go back to the footbar.
Inhala. || Inhale.
Exhala y levanta suavemente la cabeza y los hombros. || Exhale and gently lift your head and shoulders.
Piensa en llevar las costillas hacia la pelvis. || Think about bringing your ribs toward your pelvis.
No tires de la cabeza. || Don't pull on your head.
Inhala arriba. || Inhale at the top.
Exhala y baja. || Exhale and lower.
* 8 repeticiones. || 8 reps.
Sube. || Up.
Y baja. || And down.
El movimiento es pequeño. || The movement is small.
Queremos sentir el abdomen, no el cuello. || We want to feel the abs, not the neck.
## Preparación para Hundred || Preparing for the Hundred @tabletop
En la siguiente repetición, mantén la cabeza y los hombros arriba. || On the next rep, keep your head and shoulders up.
Lleva las piernas a posición de mesa. || Bring your legs into tabletop.
Una pierna... || One leg...
Y la otra. || And the other.
Extiende los brazos hacia delante. || Reach your arms forward.`},

{t:{es:"Hundred en Reformer",en:"Hundred on the Reformer"}, sub:{es:"Bombeo de brazos con respiración en 5 tiempos",en:"Arm pumps with 5-count breathing"}, min:3, demos:["hundred"],
yt:"reformer pilates hundred beginner modification",
how:{en:["Head and shoulders lifted, legs in tabletop, arms long just above the carriage.","Small, quick arm pumps from the shoulders: 5 pumps inhaling, 5 pumps exhaling.","Shoulders stay away from the ears; the belly stays scooped. Offer the head-down option anytime the neck works."],
es:["Cabeza y hombros elevados, piernas en mesa, brazos largos justo por encima del carro.","Pequeños bombeos rápidos desde los hombros: 5 inhalando, 5 exhalando.","Hombros lejos de las orejas, abdomen hacia dentro. Ofrece bajar la cabeza siempre que trabaje el cuello."]},
s:`Brazos largos a la altura de las caderas, un poco por encima del carro. || Arms long at hip height, just above the carriage.
Bombea los brazos arriba y abajo, pequeño y rápido. || Pump your arms up and down, small and quick.
Inhala durante cinco tiempos. || Inhale for five counts.
Exhala durante cinco. || Exhale for five.
Inhala: dos, tres, cuatro, cinco. || Inhale: two, three, four, five.
Exhala: dos, tres, cuatro, cinco. || Exhale: two, three, four, five.
Continúa. || Keep going.
Los brazos se mueven desde los hombros. || The arms move from the shoulders.
Los hombros permanecen relajados. || The shoulders stay relaxed.
El abdomen está activo. || The abs are engaged.
Si necesitas descansar, baja la cabeza. || If you need a rest, lower your head.
Últimos diez. || Last ten.
Nueve... || Nine...
Ocho... || Eight...
Siete... || Seven...
Seis... || Six...
Cinco... || Five...
Cuatro... || Four...
Tres... || Three...
Dos... || Two...
Uno. || One.
Detén los brazos. || Stop your arms.
Baja la cabeza. || Lower your head.
Vuelve a colocar los pies en la barra. || Place your feet back on the footbar.
Respira. || Breathe.`},

{t:{es:"Coordinación de piernas",en:"Leg coordination"}, sub:{es:"Extensiones alternas + double leg stretch básico",en:"Alternating leg extensions + basic double leg stretch"}, min:4, demos:["legalt","dls"],
yt:"reformer pilates double leg stretch beginner",
how:{en:["From tabletop, one leg reaches forward on the exhale, returns on the inhale, then switch. The pelvis must not rock.","Double Leg Stretch (basic): knees in toward the chest, then arms and legs reach out, then hug back to center.","Legs only go as low as the low back stays stable and the belly stays connected. Higher legs = easier."],
es:["Desde mesa, una pierna se extiende al exhalar y vuelve al inhalar; luego se cambia. La pelvis no se mueve.","Double Leg Stretch (básico): rodillas al pecho, después brazos y piernas se extienden y vuelven al centro.","Las piernas bajan solo hasta donde la zona lumbar se mantiene estable y el abdomen conectado. Piernas más altas = más fácil."]},
s:`Vamos a llevar las piernas nuevamente a la posición de mesa. || Bring your legs back into tabletop.
Manos al lado del cuerpo. || Hands by your sides.
Extiende una pierna en diagonal, lejos de ti. || Reach one leg out on a diagonal, away from you.
Vuelve. || Come back.
Cambia. || Switch.
Continúa alternando. || Keep alternating.
* 8 por lado. || 8 per side.
Exhala al extender. || Exhale as you extend.
Inhala al volver. || Inhale as you come back.
Mantén la pelvis completamente estable. || Keep your pelvis completely stable.
## Double Leg Stretch — versión básica || Double Leg Stretch — basic version @dls
Lleva las dos rodillas hacia el pecho. || Bring both knees toward your chest.
Inhala. || Inhale.
Extiende brazos y piernas. || Reach your arms and legs out.
Exhala y vuelve al centro. || Exhale and come back to center.
* 6–8 repeticiones. || 6–8 reps.
No necesitamos bajar las piernas demasiado. || We don't need to lower the legs too much.
Solo hasta donde puedas mantener el abdomen conectado y la espalda estable. || Only as far as you can keep your abs connected and your back stable.`},

{t:{es:"Side lying",en:"Side lying"}, sub:{es:"Tumbada de lado: press, pulsos y círculos",en:"Side-lying single-leg press, pulses and circles"}, min:6, demos:["sidepress","sidecircle"],
yt:"reformer pilates side lying footwork beginner",
how:{en:["Lying on the side, head supported (arm or headrest). Top foot on the bar, bottom leg long.","Press the carriage out with the top leg without locking the knee; hips stacked, pelvis doesn't roll back.","Pulses and circles are small, torso completely still. Then change sides and repeat all three."],
es:["Tumbada de lado, cabeza apoyada (brazo o reposacabezas). Pie de arriba en la barra, pierna de abajo larga.","Empuja el carro con la pierna de arriba sin bloquear la rodilla; caderas apiladas, la pelvis no rueda hacia atrás.","Pulsos y círculos pequeños, torso totalmente quieto. Después cambia de lado y repite las tres partes."]},
s:`Ahora túmbate de lado sobre el carro. || Now lie on your side on the carriage.
Coloca el arco del pie de arriba sobre la barra, con la rodilla en línea con la cadera. || Place the arch of your top foot on the bar, knee in line with your hip.
La pierna de abajo permanece extendida. || Your bottom leg stays extended.
Apoya la cabeza sobre el brazo de abajo. || Rest your head on your bottom arm.
El abdomen está activo. || Your abs are engaged.
## Press || Press
Inhala. || Inhale.
Exhala y empuja la barra. || Exhale and push the bar.
Extiende la pierna. || Straighten your leg.
Inhala y vuelve. || Inhale and come back.
* 10 repeticiones. || 10 reps.
No bloquees la rodilla. || Don't lock your knee.
Mantén la pelvis estable. || Keep your pelvis stable.
## Pulsos || Pulses
Ahora deja la pierna extendida. || Now keep your leg extended.
Pequeños pulsos. || Small pulses.
* 10. || 10.
Cinco... || Five...
Cuatro... || Four...
Tres... || Three...
Dos... || Two...
Uno. || One.
## Círculos || Circles @sidecircle
Ahora hacemos pequeños círculos con la pierna. || Now we make small circles with the leg.
* 5 hacia delante. || 5 forward.
Y 5 hacia atrás. || And 5 backward.
El círculo es pequeño. || The circle is small.
El torso permanece quieto. || The torso stays still.
## Cambiar de lado || Change sides @sidepress
Vamos a cambiar de lado. || Let's change sides.
Gira al otro lado y coloca el arco del otro pie sobre la barra. || Turn to the other side and place the arch of your other foot on the bar.
Prepara. || Prepare.
Empuja... || Push...
Y vuelve. || And come back.
* 10 repeticiones. || 10 reps.
Ahora pulsos. || Now pulses.
* 10. || 10.
Y círculos. || And circles.
* 5 en cada dirección. || 5 in each direction.
Perfecto. || Perfect.`},

{t:{es:"Long stretch preparation",en:"Long stretch preparation"}, sub:{es:"Plancha en el Reformer + knee stretch básico",en:"Plank on the Reformer + basic knee stretch"}, min:4, demos:["longstretch","kneestretch"],
yt:"reformer pilates long stretch knee stretch beginner",
how:{en:["Plank: hands on the footbar under the shoulders, balls of the feet against the shoulder rests, one long line from head to heels.","Move the carriage back only as far as the body stays in one piece — no sagging hips, no shoulders pushing.","Knee stretch: knees on the carriage, back gently rounded, belly strongly in. The legs push the carriage back; arms stay strong and still.","This is the hardest part for beginners: use light springs as your machine allows and small ranges."],
es:["Plancha: manos en la barra bajo los hombros, puntas de los pies contra los apoyos de hombros, una línea larga de la cabeza a los talones.","Lleva el carro atrás solo hasta donde el cuerpo se mantenga en una pieza — sin caída de caderas ni empujar con los hombros.","Knee stretch: rodillas en el carro, espalda suavemente redondeada, abdomen muy activo. Las piernas mueven el carro; los brazos quedan fuertes y quietos.","Es la parte más difícil para principiantes: muelles ligeros según tu máquina y recorridos pequeños."]},
s:`Vamos a ponernos en plancha sobre el Reformer. || Let's come into a plank on the Reformer.
Coloca las manos sobre la barra, a la anchura de los hombros. || Place your hands on the bar, shoulder-width apart.
Apoya las puntas de los pies contra los apoyos de hombros, con los talones arriba. || Place the balls of your feet against the shoulder rests, heels lifted.
Extiende las piernas hacia atrás. || Extend your legs back.
El cuerpo forma una línea larga. || Your body forms one long line.
Abdomen activo. || Abs engaged.
Glúteos suaves. || Glutes soft.
Cuello largo. || Neck long.
## Movimiento || Movement
Inhala para preparar. || Inhale to prepare.
Exhala y lleva el carro hacia atrás. || Exhale and take the carriage back.
Solo hasta donde puedas mantener el cuerpo estable. || Only as far as you can keep your body stable.
Inhala y vuelve. || Inhale and come back.
* 5 repeticiones. || 5 reps.
No dejes caer la pelvis. || Don't let your pelvis drop.
No empujes con los hombros. || Don't push with your shoulders.
Piensa en mover todo el cuerpo como una sola pieza. || Think of moving your whole body as one piece.
## Knee Stretch — versión básica || Knee Stretch — basic version @kneestretch
Ahora baja las rodillas al carro, con los pies contra los apoyos de hombros. || Now lower your knees onto the carriage, feet against the shoulder rests.
Las manos permanecen sobre la barra. || Your hands stay on the footbar.
Redondea suavemente la espalda. || Gently round your back.
El abdomen está muy activo. || Your abs are very engaged.
Desde aquí, mueve el carro hacia atrás y hacia delante. || From here, move the carriage back and forward.
* 8 repeticiones. || 8 reps.
Exhala al llevar el carro atrás. || Exhale as you take the carriage back.
Inhala al volver. || Inhale as you come in.
El movimiento viene desde las piernas. || The movement comes from the legs.
Los brazos permanecen fuertes y estables. || Your arms stay strong and stable.`},

{t:{es:"Elephant",en:"Elephant"}, sub:{es:"V invertida, el carro se mueve bajo las caderas",en:"Inverted V, carriage moves under the hips"}, min:3, demos:["elephant"],
yt:"reformer pilates elephant beginner",
how:{en:["Standing on the carriage, heels against the shoulder rests, hands on the footbar, hips high in an upside-down V.","Knees may bend slightly. The carriage moves back and forward while the upper body and hips stay still.","Head hangs heavy, hands press into the bar, belly draws in."],
es:["De pie sobre el carro, talones contra los apoyos de hombros, manos en la barra, caderas altas en V invertida.","Las rodillas pueden flexionarse un poco. El carro va y viene mientras el tronco y las caderas se quedan quietos.","Cabeza pesada, manos empujando la barra, abdomen hacia dentro."]},
s:`Ahora sube las caderas hacia el techo. || Now lift your hips toward the ceiling.
Las manos siguen sobre la barra. || Your hands stay on the footbar.
Talones apoyados en el carro, contra los apoyos de hombros. || Heels down on the carriage, against the shoulder rests.
Las piernas pueden estar ligeramente flexionadas. || Your legs can be slightly bent.
Busca una forma de 'V' invertida. || Find an upside-down 'V' shape.
Inhala. || Inhale.
Exhala y lleva el carro hacia atrás. || Exhale and take the carriage back.
Inhala y vuelve. || Inhale and come back.
* 8 repeticiones. || 8 reps.
Relaja el cuello. || Relax your neck.
Deja que la cabeza esté pesada. || Let your head feel heavy.
Empuja el suelo con las manos. || Push the floor away with your hands.
Abdomen hacia dentro. || Belly in.
Últimas tres. || Last three.
Tres... || Three...
Dos... || Two...
Uno. || One.
Y vuelve a colocar el carro en posición inicial. || And bring the carriage back to the starting position.`},

{t:{es:"Mermaid / estiramiento lateral",en:"Mermaid / side stretch"}, sub:{es:"Estiramiento lateral sentada",en:"Seated side stretch"}, min:4, demos:["mermaid"],
yt:"reformer pilates mermaid beginner",
how:{en:["Seated sideways on the carriage, legs folded comfortably. One hand on the footbar, the other on the leg.","Exhale: press the bar away and lengthen sideways, making space between the ribs. Don't collapse the waist.","4 per side. Keep the springs light so the stretch stays gentle."],
es:["Sentada de lado en el carro, piernas cómodas. Una mano en la barra, la otra sobre la pierna.","Al exhalar: empuja la barra y alarga hacia el lado, creando espacio entre las costillas. Sin colapsar la cintura.","4 por lado. Muelles ligeros para que el estiramiento sea suave."]},
s:`Siéntate de lado sobre el carro. || Sit sideways on the carriage.
Dobla las piernas en Z o crúzalas. || Fold your legs in a Z-sit, or cross them.
La mano más cercana a la barra, sobre la barra. || The hand nearest the bar goes on the bar.
La otra mano descansa sobre la pierna. || The other hand rests on your leg.
Inhala. || Inhale.
Al exhalar, empuja suavemente la barra y alarga el cuerpo hacia el lado. || As you exhale, gently push the bar away and lengthen your body to the side.
Busca espacio entre las costillas. || Find space between your ribs.
No colapses el torso. || Don't collapse your torso.
Inhala y vuelve. || Inhale and come back.
* 4 repeticiones. || 4 reps.
Última. || Last one.
Y volvemos. || And we come back.
Cambiamos de lado: gira para mirar hacia el otro lado. || Let's change sides: turn to face the other way.
Prepara. || Prepare.
Inhala. || Inhale.
Exhala y alarga. || Exhale and lengthen.
* 4 repeticiones. || 4 reps.
Y vuelve. || And come back.`},

{t:{es:"Vuelta a la calma",en:"Cool-down"}, sub:{es:"Estiramiento hacia delante y respiraciones finales",en:"Seated forward stretch & final breaths"}, min:3.5, demos:["fold","breath"],
yt:"reformer pilates cool down stretch",
how:{en:["Seated tall, legs comfortable. Exhale and fold forward gently — no need to reach far.","Finish with three deep breaths and a body scan: legs, belly, back, breath.","Close the class slowly; this is where students take the feeling home."],
es:["Sentada alta, piernas cómodas. Exhala e inclínate hacia delante suavemente — no hace falta llegar lejos.","Termina con tres respiraciones profundas y un recorrido por el cuerpo: piernas, abdomen, espalda, respiración.","Cierra la clase despacio; aquí es donde las alumnas se llevan la sensación a casa."]},
s:`Vamos a terminar con unos estiramientos suaves. || Let's finish with some gentle stretches.
Siéntate en el carro mirando hacia la barra, con las piernas largas o cruzadas. || Sit on the carriage facing the bar, legs long or crossed.
Alarga la columna. || Lengthen your spine.
Inhala. || Inhale.
Y exhala mientras te inclinas suavemente hacia delante. || And exhale as you gently lean forward.
No necesitamos llegar lejos. || We don't need to go far.
Respira. || Breathe.
Relaja el cuello. || Relax your neck.
Vuelve lentamente. || Come back up slowly.
## Respiración final || Final breathing @breath
Vamos a hacer tres respiraciones profundas. || Let's take three deep breaths.
Inhala por la nariz... || Inhale through your nose...
Expande las costillas. || Expand your ribs.
Exhala lentamente. || Exhale slowly.
Otra vez. || Again.
Inhala... || Inhale...
Y exhala. || And exhale.
Última. || Last one.
Inhala profundamente... || Inhale deeply...
Y exhala. || And exhale.
Observa cómo se siente tu cuerpo. || Notice how your body feels.
Cómo se sienten las piernas. || How your legs feel.
El abdomen. || Your abdomen.
La espalda. || Your back.
Y la respiración. || And your breath.
Gracias por tu práctica. || Thank you for your practice.
Recuerda: Pilates no consiste en hacer más. || Remember: Pilates isn't about doing more.
Consiste en moverte con control, precisión y conciencia. || It's about moving with control, precision and awareness.
Nos vemos en la próxima clase. || See you in the next class.`}
];

const INTERMEDIATE_STAGES = [
{t:{es:"Bienvenida y centrado",en:"Welcome & centering"}, sub:{es:"Colocación, respiración y conexión del centro",en:"Set-up, breathing and core connection"}, min:3, demos:["breath"],
yt:"reformer pilates intermediate warm up breathing",
how:{en:["Same supine set-up as the beginner class, but settle the room quickly: intermediate classes keep a steadier flow.","Check neutral pelvis and the rib-to-pelvis connection before you start; everything later builds on it.","Tell the class which accessories you'll use today (straps, short box, long box) so they're ready to hand."],
es:["Misma colocación boca arriba que en principiantes, pero sin entretenerse: el ritmo intermedio es más continuo.","Comprueba la pelvis neutra y la conexión costillas-pelvis antes de empezar; todo lo demás se apoya en eso.","Anuncia los accesorios del día (correas, cajón corto, cajón largo) para tenerlos a mano."]},
s:`## Preparación || Set-up
Bienvenidos a la clase. || Welcome to class.
Hoy subimos un nivel: más ritmo, más control y trabajo con las correas y el cajón. || Today we step up a level: more flow, more control, and work with the straps and the box.
Túmbate boca arriba sobre el carro, con la cabeza en el reposacabezas. || Lie on your back on the carriage, head on the headrest.
Talones sobre la barra, separados al ancho de las caderas. || Heels on the bar, hip-width apart.
Brazos largos a los lados, palmas hacia abajo. || Arms long by your sides, palms down.
Busca la pelvis neutra: ni arqueada ni aplastada contra el carro. || Find a neutral pelvis: not arched, not flattened into the carriage.
## Respiración || Breathing
Inhala por la nariz y abre las costillas hacia los lados. || Inhale through your nose and widen your ribs to the sides.
Exhala por la boca y cierra las costillas hacia la pelvis. || Exhale through your mouth and close your ribs toward your pelvis.
Al exhalar, activa el centro: el ombligo suave hacia la columna. || As you exhale, engage your center: navel gently toward your spine.
Mantén esa conexión mientras sigues respirando. || Keep that connection as you keep breathing.
* 5 respiraciones. || 5 breaths.
Hombros lejos de las orejas. || Shoulders away from your ears.
Cuello largo, mandíbula relajada. || Neck long, jaw relaxed.
Estamos listos. || We're ready.`},

{t:{es:"Footwork completo",en:"Full footwork"}, sub:{es:"Cuatro posiciones, una pierna y elevaciones de talón",en:"Four positions, single leg and heel raises"}, min:7, demos:["footwork"],
yt:"reformer pilates intermediate footwork single leg",
how:{en:["Springs (typical): heavy, e.g. 3–4 springs. Single leg: take one spring off.","Keep a steady rhythm: exhale out, inhale in, no pause at either end.","Single leg: the pelvis stays level. If one hip lifts, shorten the range.","Wide second: knees track over the second toe; narrow the stance if the knees roll in."],
es:["Muelles (habitual): pesados, p. ej. 3–4 muelles. Una pierna: quita un muelle.","Ritmo constante: exhala al salir, inhala al volver, sin pausa en los extremos.","Una pierna: la pelvis se queda nivelada. Si una cadera se levanta, reduce el recorrido.","Segunda abierta: rodillas sobre el segundo dedo; cierra un poco si las rodillas caen hacia dentro."]},
s:`## Talones en paralelo || Parallel heels
Talones sobre la barra, separados al ancho de las caderas. || Heels on the bar, hip-width apart.
Inhala para preparar. || Inhale to prepare.
Exhala y empuja el carro hasta estirar las piernas. || Exhale and push the carriage out until your legs are long.
Inhala y vuelve con control, resistiendo los muelles. || Inhale and come back with control, resisting the springs.
* 10 repeticiones. || 10 reps.
Pelvis quieta, costillas cerradas. || Pelvis still, ribs closed.
## Puntas en V || Toes in V
Junta los talones y apoya las puntas de los pies en la barra, en forma de V. || Bring your heels together and place the balls of your feet on the bar in a V.
Rodillas abiertas en la dirección de los dedos. || Knees open in the direction of your toes.
Exhala, empuja. Inhala, vuelve. || Exhale, push. Inhale, return.
* 10 repeticiones. || 10 reps.
Talones altos y quietos, como si llevaras tacones. || Heels high and still, as if you were wearing heels.
## Segunda abierta || Wide second
Abre los pies hacia los extremos de la barra, con los talones apoyados. || Open your feet toward the ends of the bar, heels on.
Rodillas hacia fuera, alineadas con los pies. || Knees out, in line with your feet.
Exhala, empuja. Inhala, vuelve. || Exhale, push. Inhale, return.
* 10 repeticiones. || 10 reps.
Aprieta la parte interna de los muslos al empujar. || Squeeze your inner thighs as you push.
## Una pierna || Single leg @singleleg
Coloca el talón derecho en el centro de la barra. || Place your right heel in the center of the bar.
Lleva la pierna izquierda a mesa: rodilla sobre la cadera. || Bring your left leg into tabletop: knee over your hip.
Exhala y empuja con una sola pierna. || Exhale and push with one leg.
Inhala y vuelve. Las caderas no se inclinan. || Inhale and come back. Your hips don't tilt.
* 8 por lado. || 8 per side.
Cambia de pierna. || Switch legs.
## Elevaciones de talón || Heel raises @running
Las dos piernas estiradas, puntas de los pies en la barra. || Both legs straight, balls of the feet on the bar.
Baja los dos talones por debajo de la barra. || Lower both heels under the bar.
Sube los talones lo más alto que puedas. || Lift your heels as high as you can.
* 10 repeticiones. || 10 reps.
Ahora alterna, como si caminaras. || Now alternate, as if you were walking.
* 10 por lado. || 10 per side.
Dobla las rodillas y vuelve a casa sin golpear. || Bend your knees and come home without banging.`},

{t:{es:"Hundred con correas",en:"Hundred with straps"}, sub:{es:"Bombeo de brazos con resistencia",en:"Arm pumps with resistance"}, min:3, demos:["hundredstraps"],
yt:"reformer pilates hundred with straps",
how:{en:["Springs (typical): light–medium, e.g. 1–2 springs.","Straps: the arms press down from the shoulders, not the elbows. Keep tension in the straps the whole time.","Offer three leg levels: tabletop, legs to the ceiling, legs on a low diagonal. Choose the one where the low back stays still.","Head down is always an option if the neck works."],
es:["Muelles (habitual): ligeros–medios, p. ej. 1–2 muelles.","Correas: los brazos empujan desde los hombros, no desde los codos. Mantén tensión en las correas todo el tiempo.","Ofrece tres niveles de piernas: mesa, piernas al techo o diagonal baja. Elige el que mantiene quieta la zona lumbar.","Bajar la cabeza siempre es una opción si trabaja el cuello."]},
s:`## Preparación || Set-up
Coge una correa en cada mano. || Take a strap in each hand.
Lleva las piernas a mesa, primero una y después la otra. || Bring your legs into tabletop, one and then the other.
Brazos largos hacia el techo, sobre los hombros. || Arms long toward the ceiling, over your shoulders.
Exhala: baja los brazos hasta las caderas y eleva la cabeza y los hombros. || Exhale: press your arms down to your hips and lift your head and shoulders.
Mira hacia tus rodillas. || Look toward your knees.
## Hundred || Hundred
Bombea los brazos arriba y abajo, pequeño y rápido. || Pump your arms up and down, small and quick.
Inhala: dos, tres, cuatro, cinco. || Inhale: two, three, four, five.
Exhala: dos, tres, cuatro, cinco. || Exhale: two, three, four, five.
Continúa. || Keep going.
Si puedes mantener la espalda estable, estira las piernas en diagonal. || If you can keep your back stable, extend your legs on a diagonal.
Si no, quédate en mesa. || If not, stay in tabletop.
Cuello largo, la mirada en el ombligo. || Neck long, eyes on your navel.
* 10 series de respiración. || 10 breath cycles.
Últimas dos. || Last two.
Vuelve a mesa, brazos al techo y baja la cabeza. || Back to tabletop, arms to the ceiling, lower your head.
Deja las correas en su sitio con cuidado. || Put the straps back carefully.`},

{t:{es:"Pies en correas",en:"Feet in straps"}, sub:{es:"Rana, círculos y aperturas",en:"Frog, leg circles and openings"}, min:6, demos:["frog"],
yt:"reformer pilates feet in straps frog leg circles",
how:{en:["Springs (typical): medium, e.g. 2 springs.","Set up safely: one foot at a time into the straps, knees bent, then extend.","The rule for every exercise here: the pelvis doesn't move. Range comes second.","Watch the hip flexors: if the front of the hips grips, make the movements smaller and higher."],
es:["Muelles (habitual): medios, p. ej. 2 muelles.","Colocación segura: un pie cada vez en las correas, con las rodillas dobladas, y después estira.","La regla en todos estos ejercicios: la pelvis no se mueve. El recorrido viene después.","Vigila los flexores de cadera: si la parte delantera de la cadera se agarra, movimientos más pequeños y más altos."]},
s:`## Preparación || Set-up
Coloca las correas en los arcos de los pies, primero un pie y después el otro. || Place the straps around the arches of your feet, one foot and then the other.
Lleva las piernas hacia el techo. || Bring your legs toward the ceiling.
Brazos largos a los lados, presionando el carro. || Arms long by your sides, pressing into the carriage.
Pelvis neutra y quieta. || Pelvis neutral and still.
## Rana || Frog
Talones juntos, rodillas abiertas: dobla las piernas. || Heels together, knees open: bend your legs.
Exhala y estira las piernas en diagonal. || Exhale and extend your legs on a diagonal.
Inhala y vuelve a doblar sin que la pelvis se mueva. || Inhale and bend again without moving your pelvis.
* 8 repeticiones. || 8 reps.
Baja las piernas solo hasta donde la espalda se mantenga estable. || Only lower your legs as far as your back stays stable.
## Círculos de piernas || Leg circles @legcircles
Piernas largas y juntas, apuntando al techo. || Legs long and together, pointing to the ceiling.
Abre las piernas, bájalas, júntalas y vuelve arriba. || Open your legs, lower them, bring them together and come back up.
* 5 en cada dirección. || 5 in each direction.
Círculos solo del tamaño que puedas controlar. || Circles only as big as you can control.
La pelvis no se balancea. || The pelvis doesn't rock.
## Aperturas || Openings @legcircles
Piernas al techo, gíralas ligeramente hacia fuera desde la cadera. || Legs to the ceiling, turn them out slightly from the hip.
Inhala y abre las piernas hacia los lados. || Inhale and open your legs to the sides.
Exhala y júntalas, apretando la parte interna de los muslos. || Exhale and draw them together, squeezing your inner thighs.
* 8 repeticiones. || 8 reps.
Dobla las rodillas y saca las correas con cuidado. || Bend your knees and take the straps off carefully.`},

{t:{es:"Stomach massage",en:"Stomach massage"}, sub:{es:"Sentada: espalda redonda y manos atrás",en:"Seated: round back and hands back"}, min:5, demos:["stomach"],
yt:"reformer pilates stomach massage series",
how:{en:["Springs (typical): medium, e.g. 2–3 springs.","Sit close enough to the shoulder rests that the spine can round without leaning on them.","Round back: the shape of the spine stays fixed; the legs and ankles do all the moving.","Hands back: lift up out of the hips; don't let the chest collapse or the ribs flare."],
es:["Muelles (habitual): medios, p. ej. 2–3 muelles.","Siéntate lo bastante cerca de los apoyos de hombros para redondear sin apoyarte en ellos.","Espalda redonda: la forma de la columna no cambia; las piernas y los tobillos hacen todo el movimiento.","Manos atrás: crece desde las caderas; que el pecho no se hunda ni las costillas se abran."]},
s:`## Preparación || Set-up
Siéntate en el carro, cerca de los apoyos de hombros, mirando hacia la barra. || Sit on the carriage close to the shoulder rests, facing the bar.
Puntas de los pies en la barra, talones juntos en V. || Balls of your feet on the bar, heels together in a V.
Manos en el borde del carro, junto a las caderas. || Hands on the edge of the carriage, beside your hips.
Redondea la espalda, como una C. || Round your back into a C.
## Espalda redonda || Round back
Exhala y empuja el carro estirando las piernas. || Exhale and push the carriage out, straightening your legs.
Baja los talones por debajo de la barra. || Lower your heels under the bar.
Sube los talones. || Lift your heels.
Inhala, dobla las rodillas y vuelve. || Inhale, bend your knees and come back.
* 8 repeticiones. || 8 reps.
La C no cambia: solo se mueven las piernas. || The C doesn't change: only your legs move.
## Manos atrás || Hands back
Lleva las manos atrás, sobre los apoyos de hombros. || Take your hands back onto the shoulder rests.
Siéntate alto, con la columna larga. || Sit tall, spine long.
Empuja, baja los talones, súbelos y vuelve. || Push, lower your heels, lift them and come back.
* 6 repeticiones. || 6 reps.
Abre el pecho sin abrir las costillas. || Open your chest without flaring your ribs.
## Estiramiento final || Final stretch
Estira las piernas y quédate fuera. || Straighten your legs and stay out.
Lleva los brazos al frente y redondea hacia tus piernas. || Reach your arms forward and round toward your legs.
Respira. || Breathe.
Vuelve con control y bájate de la máquina con cuidado. || Come back with control and step off the machine carefully.`},

{t:{es:"Short box",en:"Short box"}, sub:{es:"Espalda redonda, espalda plana y torsión",en:"Round back, flat back and twist"}, min:6, demos:["shortbox"],
yt:"reformer pilates short box series round back flat back twist",
how:{en:["Springs: most teachers use a medium spring so the carriage doesn't move. Check the foot strap is secure before anyone leans back.","Round back: the movement starts with a pelvic tuck; stop when the abdomen starts to dome.","Flat back: a long line from head to tailbone, hinging from the hips. A small range is fine.","Twist: hips square and still; rotation comes from the ribcage, not the arms."],
es:["Muelles: lo habitual es un muelle medio para que el carro no se mueva. Comprueba que la correa de pies está bien sujeta antes de inclinarse hacia atrás.","Espalda redonda: el movimiento empieza basculando la pelvis; para cuando el abdomen se empiece a abombar.","Espalda plana: una línea larga de la cabeza al coxis, inclinando desde las caderas. Un recorrido pequeño está bien.","Torsión: caderas cuadradas y quietas; la rotación viene de la caja torácica, no de los brazos."]},
s:`## Preparación || Set-up
Coloca el cajón corto a lo ancho del carro, contra los apoyos de hombros. || Place the short box across the carriage, against the shoulder rests.
Siéntate en el centro del cajón, mirando hacia la barra. || Sit in the middle of the box, facing the bar.
Mete los pies por debajo de la correa de pies y flexiónalos. || Hook your feet under the foot strap and flex them.
Rodillas ligeramente dobladas. || Knees slightly bent.
## Espalda redonda || Round back
Cruza los brazos a la altura del pecho. || Cross your arms at chest height.
Inhala y crece hacia arriba. || Inhale and grow tall.
Exhala, bascula la pelvis y redondea hacia atrás. || Exhale, tuck your pelvis and round back.
Solo hasta donde puedas mantener el abdomen plano. || Only as far as you can keep your abdomen flat.
Inhala y quédate. || Inhale and stay.
Exhala y vuelve a sentarte alto. || Exhale and come back up to sitting tall.
* 6 repeticiones. || 6 reps.
## Espalda plana || Flat back @flatback
Brazos arriba, junto a las orejas. || Arms up, beside your ears.
Inhala y crece. || Inhale and grow tall.
Exhala e inclínate hacia atrás con la espalda recta, como una tabla. || Exhale and hinge back with a straight back, like a plank.
Inhala y vuelve arriba. || Inhale and come back up.
* 5 repeticiones. || 5 reps.
Las costillas no se abren. || Your ribs don't flare.
## Torsión || Twist @shortbox
Manos detrás de la cabeza, codos abiertos. || Hands behind your head, elbows wide.
Gira hacia la derecha desde la cintura. || Rotate to the right from your waist.
Vuelve al centro. Ahora hacia la izquierda. || Back to center. Now to the left.
* 4 por lado. || 4 per side.
Las caderas no se mueven: gira solo la caja torácica. || Your hips don't move: only your ribcage turns.`},

{t:{es:"Long box: tirar de las correas",en:"Long box: pulling straps"}, sub:{es:"Boca abajo: extensión de espalda",en:"Face down: back extension"}, min:4, demos:["pullstraps"],
yt:"reformer pilates long box pulling straps T pull",
how:{en:["Springs (typical): light, e.g. 1 spring.","Lift the chest only as high as the abs can support; the low back shouldn't pinch.","Lead with the shoulder blades sliding down, not with the hands.","Keep the neck in line with the spine: no looking up."],
es:["Muelles (habitual): ligeros, p. ej. 1 muelle.","Eleva el pecho solo hasta donde el abdomen te sostenga; la zona lumbar no debe pinzarse.","El movimiento lo empiezan las escápulas bajando, no las manos.","Cuello en línea con la columna: no mires hacia arriba."]},
s:`## Preparación || Set-up
Coloca el cajón largo a lo largo del carro, contra los apoyos de hombros. || Place the long box lengthwise on the carriage, against the shoulder rests.
Túmbate boca abajo, con el pecho en el extremo del cajón más cercano a las correas. || Lie face down, chest at the end of the box nearest the straps.
Coge las correas por las cuerdas, con los brazos largos hacia delante. || Hold the straps by the ropes, arms long in front of you.
Piernas largas y juntas, abdomen despegado del cajón. || Legs long and together, abdomen lifted off the box.
## Tirar de las correas || Pulling straps
Inhala y prepara. || Inhale to prepare.
Exhala y tira de los brazos rectos hacia las caderas, elevando el pecho. || Exhale and pull your straight arms down to your hips, lifting your chest.
Inhala y vuelve despacio, alargando la espalda. || Inhale and return slowly, lengthening your back.
* 6 repeticiones. || 6 reps.
La mirada hacia abajo y un poco al frente. || Eyes down and slightly forward.
## Brazos en T || T-pull
Abre los brazos hacia los lados, en forma de T. || Open your arms out to the sides, in a T.
Exhala y lleva los brazos hacia las caderas, juntando las escápulas. || Exhale and sweep your arms to your hips, drawing your shoulder blades together.
Inhala y vuelve. || Inhale and return.
* 6 repeticiones. || 6 reps.
Glúteos suaves, piernas largas. || Glutes soft, legs long.
Suelta las correas con cuidado y baja del cajón. || Release the straps carefully and come off the box.`},

{t:{es:"Knee stretch",en:"Knee stretch"}, sub:{es:"Espalda redonda y espalda plana",en:"Round back and flat back"}, min:4, demos:["kneestretch"],
yt:"reformer pilates knee stretch round back flat back",
how:{en:["Springs (typical): medium, e.g. 2 springs.","Shoulders stay stacked over the wrists for the whole set.","The carriage moves from the hips and thighs; the back keeps its shape.","Flat back is harder: don't let the low back sag. Go back to round back if it does."],
es:["Muelles (habitual): medios, p. ej. 2 muelles.","Los hombros se quedan sobre las muñecas durante toda la serie.","El carro se mueve desde las caderas y los muslos; la espalda mantiene su forma.","La espalda plana es más difícil: que la zona lumbar no se hunda. Si se hunde, vuelve a espalda redonda."]},
s:`## Espalda redonda || Round back
Arrodíllate en el carro, con los pies contra los apoyos de hombros. || Kneel on the carriage, feet against the shoulder rests.
Manos en la barra, a la anchura de los hombros. || Hands on the bar, shoulder-width apart.
Redondea la espalda y mira hacia las rodillas. || Round your back and look toward your knees.
Exhala y empuja el carro hacia atrás con las piernas. || Exhale and push the carriage back with your legs.
Inhala y vuelve. || Inhale and return.
* 10 repeticiones. || 10 reps.
## Espalda plana || Flat back
Alarga la espalda: plana como una mesa. || Lengthen your back: flat as a table.
Pecho hacia delante, coxis hacia atrás. || Chest forward, tailbone back.
Empuja y vuelve, con el mismo ritmo. || Push and return, same rhythm.
* 10 repeticiones. || 10 reps.
El tronco no se mueve; solo las piernas. || Your torso doesn't move; only your legs.
## Para terminar || To finish
Vuelve a casa sin golpear. || Come home without banging.
Siéntate sobre los talones y respira. || Sit back on your heels and breathe.`},

{t:{es:"Serie de long stretch",en:"Long stretch series"}, sub:{es:"Long stretch, down stretch, up stretch y elephant",en:"Long stretch, down stretch, up stretch and elephant"}, min:6, demos:["longstretch"],
yt:"reformer pilates long stretch series down stretch up stretch",
how:{en:["Springs (typical): light–medium, e.g. 1–2 springs. Never too light: the carriage can shoot out.","Plank: shoulders over wrists, ribs closed, glutes and inner thighs on.","Down stretch is a gentle extension: lift the chest, don't crunch the low back.","Step on and off with care; keep one hand on the bar until the feet are set."],
es:["Muelles (habitual): ligeros–medios, p. ej. 1–2 muelles. Nunca demasiado ligeros: el carro puede salir disparado.","Plancha: hombros sobre las muñecas, costillas cerradas, glúteos y aductores activos.","El down stretch es una extensión suave: eleva el pecho sin hundir la zona lumbar.","Sube y baja de la máquina con cuidado; una mano en la barra hasta tener los pies colocados."]},
s:`## Long stretch || Long stretch
Manos en la barra, a la anchura de los hombros. || Hands on the bar, shoulder-width apart.
Puntas de los pies contra los apoyos de hombros, talones arriba. || Balls of your feet against the shoulder rests, heels lifted.
Cuerpo en plancha: una línea de la cabeza a los talones. || Body in a plank: one line from head to heels.
Inhala y lleva el carro hacia atrás. || Inhale and take the carriage back.
Exhala y vuelve. || Exhale and come back.
* 5 repeticiones. || 5 reps.
Hombros sobre las muñecas al volver. || Shoulders over your wrists as you return.
## Down stretch || Down stretch @downstretch
Baja las rodillas al carro, con los pies contra los apoyos de hombros. || Lower your knees onto the carriage, feet against the shoulder rests.
Caderas adelante, pecho abierto: una extensión suave. || Hips forward, chest open: a gentle extension.
Inhala y empuja el carro hacia atrás. || Inhale and push the carriage back.
Exhala y vuelve, alargando la columna. || Exhale and return, lengthening your spine.
* 5 repeticiones. || 5 reps.
Abdomen activo para proteger la zona lumbar. || Abs on to protect your low back.
## Up stretch || Up stretch @upstretch
Sube a plancha y lleva las caderas hacia el techo. || Come up to plank and lift your hips toward the ceiling.
Inhala y empuja el carro hacia atrás, bajando a plancha. || Inhale and push the carriage back, lowering into plank.
Exhala y vuelve, subiendo las caderas. || Exhale and return, lifting your hips.
* 5 repeticiones. || 5 reps.
## Elephant || Elephant @elephant
Caderas altas, talones apoyados en el carro, contra los apoyos de hombros. || Hips high, heels down on the carriage against the shoulder rests.
Exhala y empuja el carro hacia atrás. || Exhale and push the carriage back.
Inhala y vuelve. || Inhale and return.
* 8 repeticiones. || 8 reps.
Cabeza pesada, abdomen hacia dentro. || Head heavy, belly in.
Vuelve a casa y bájate de la máquina. || Come home and step off the machine.`},

{t:{es:"Brazos de rodillas",en:"Kneeling arm work"}, sub:{es:"Expansión de pecho con correas",en:"Chest expansion with straps"}, min:3, demos:["chestexp"],
yt:"reformer pilates kneeling chest expansion",
how:{en:["Springs (typical): light, e.g. 1 spring.","Knees close to the shoulder rests for stability; pad the knees if needed.","The torso stays vertical: no leaning back as the arms pull.","Head turns are small and smooth; skip them for anyone with neck issues."],
es:["Muelles (habitual): ligeros, p. ej. 1 muelle.","Rodillas cerca de los apoyos de hombros para tener estabilidad; pon algo blando bajo las rodillas si hace falta.","El tronco se queda vertical: no te inclines hacia atrás al tirar.","Los giros de cabeza son pequeños y suaves; sáltalos si hay molestias en el cuello."]},
s:`## Preparación || Set-up
Arrodíllate en el carro mirando hacia las correas. || Kneel on the carriage facing the straps.
Rodillas cerca de los apoyos de hombros, separadas al ancho de las caderas. || Knees close to the shoulder rests, hip-width apart.
Coge las correas, con los brazos largos delante de ti. || Hold the straps, arms long in front of you.
Crece desde las rodillas hasta la coronilla. || Grow tall from your knees to the crown of your head.
## Expansión de pecho || Chest expansion
Exhala y tira de los brazos rectos hacia atrás, junto a las caderas. || Exhale and pull your straight arms back past your hips.
Gira la cabeza a la derecha, al centro, a la izquierda y al centro. || Turn your head right, center, left, center.
Inhala y vuelve con control. || Inhale and return with control.
* 6 repeticiones. || 6 reps.
El tronco no se inclina: solo se mueven los brazos. || Your torso doesn't lean: only your arms move.
Pecho abierto, costillas cerradas. || Chest open, ribs closed.`},

{t:{es:"Mermaid con torsión",en:"Mermaid with twist"}, sub:{es:"Estiramiento lateral y rotación",en:"Side stretch and rotation"}, min:4, demos:["mermaid"],
yt:"reformer pilates mermaid with twist",
how:{en:["Springs (typical): light, e.g. 1 spring.","The stretch comes from lengthening, not collapsing: keep the waist long on both sides.","In the twist, the hips stay grounded; rotation comes from the ribcage.","Do the full sequence on both sides."],
es:["Muelles (habitual): ligeros, p. ej. 1 muelle.","El estiramiento viene de alargar, no de hundirse: la cintura larga por los dos lados.","En la torsión, las caderas se quedan apoyadas; la rotación viene de la caja torácica.","Haz la secuencia completa por los dos lados."]},
s:`## Preparación || Set-up
Siéntate de lado en el carro, con las piernas dobladas en Z o cruzadas. || Sit sideways on the carriage, legs in a Z-sit or crossed.
La mano más cercana a la barra, sobre la barra. || The hand nearest the bar goes on the bar.
El otro brazo largo hacia el techo. || Reach your other arm long toward the ceiling.
## Mermaid || Mermaid
Exhala y empuja la barra, alargando el cuerpo hacia el lado. || Exhale and push the bar away, lengthening your body to the side.
Inhala y quédate: respira hacia las costillas de arriba. || Inhale and stay: breathe into your top ribs.
Exhala y vuelve, llevando el brazo hacia el lado contrario. || Exhale and return, reaching your arm over the other way.
* 3 repeticiones. || 3 reps.
## Torsión || Twist
Con el carro fuera, gira el pecho hacia la barra. || With the carriage out, turn your chest toward the bar.
Las dos manos en la barra. || Both hands on the bar.
Inhala y empuja el carro con la espalda larga. || Inhale and push the carriage with a long back.
Exhala y vuelve. || Exhale and come back.
* 3 repeticiones. || 3 reps.
Cambia de lado y repite. || Change sides and repeat.`},

{t:{es:"Vuelta a la calma",en:"Cool-down"}, sub:{es:"Estiramiento sentada y respiraciones finales",en:"Seated stretch and final breaths"}, min:3, demos:["fold"],
yt:"reformer pilates cool down stretch",
how:{en:["Bring the energy down: slower voice, fewer cues.","Invite students to notice the difference from the start of class.","If you can, use this moment for one piece of personal feedback per student."],
es:["Baja la energía: voz más lenta, menos indicaciones.","Invita a notar la diferencia con el principio de la clase.","Si puedes, aprovecha para dar un comentario personal a cada persona."]},
s:`Siéntate en el carro mirando hacia la barra, con las piernas largas o cruzadas. || Sit on the carriage facing the bar, legs long or crossed.
Alarga la columna. || Lengthen your spine.
Inhala, y al exhalar inclínate hacia delante. || Inhale, and as you exhale fold forward.
Deja la cabeza pesada. || Let your head hang heavy.
Respira. || Breathe.
Rueda hacia arriba, vértebra por vértebra. || Roll up one vertebra at a time.
## Respiración final || Final breathing @breath
Tres respiraciones profundas. || Three deep breaths.
Inhala y abre las costillas. || Inhale and open your ribs.
Exhala y suelta. || Exhale and let go.
Una vez más. || Once more.
Última. || Last one.
Hoy has trabajado con más carga y más control. || Today you worked with more load and more control.
Fíjate en cómo se siente tu centro. || Notice how your center feels.
Gracias por tu práctica. || Thank you for your practice.
Nos vemos en la próxima clase. || See you in the next class.`}
];
const INTERMEDIATE_FOCUS = [
  ["breath","ribs","core","pelvis"],
  ["pelvis","knees","feet","innerThighs","core"],
  ["core","breath","shoulders","neck"],
  ["pelvis","core","innerThighs","glutes"],
  ["core","spine","feet","ribs"],
  ["core","spine","ribs","pelvis"],
  ["shoulders","spine","core","neck"],
  ["core","shoulders","spine","glutes"],
  ["core","shoulders","glutes","spine"],
  ["shoulders","core","neck","ribs"],
  ["ribs","spine","shoulders","breath"],
  ["spine","neck","breath"]
];

const ADVANCED_STAGES = [
{t:{es:"Bienvenida",en:"Welcome"}, sub:{es:"Colocación rápida y conexión",en:"Quick set-up and connection"}, min:2, demos:["breath"],
yt:"advanced reformer pilates class",
how:{en:["Keep the intro short: advanced students should arrive warmed up and know the set-up.","Remind them that control matters more than range, even at this level.","Check in about injuries before you start: short spine, teaser and front split all need a healthy spine, shoulders and hips."],
es:["Introducción corta: el alumnado avanzado llega ya activado y conoce la colocación.","Recuerda que el control importa más que el recorrido, también en este nivel.","Pregunta por lesiones antes de empezar: short spine, teaser y front split necesitan columna, hombros y caderas sanos."]},
s:`Bienvenidos a la clase avanzada. || Welcome to the advanced class.
Hoy trabajamos con fluidez: pocas pausas y transiciones rápidas. || Today we work with flow: few pauses and quick transitions.
Túmbate boca arriba, con los talones en la barra al ancho de las caderas. || Lie on your back, heels on the bar, hip-width apart.
Inhala y abre las costillas. || Inhale and open your ribs.
Exhala y conecta el centro. || Exhale and connect your center.
* 3 respiraciones. || 3 breaths.
Mantén esa conexión durante toda la clase. || Keep that connection for the whole class.`},

{t:{es:"Footwork",en:"Footwork"}, sub:{es:"Continuo, a una pierna y running",en:"Continuous, single leg and running"}, min:6, demos:["footwork"],
yt:"advanced reformer footwork single leg",
how:{en:["Springs (typical): heavy, e.g. 3–4 springs; single leg with one spring less.","Advanced footwork is rhythm without losing alignment: no pause at either end.","Single leg with the free leg to the ceiling challenges pelvic stability: hips stay level.","Running: quick feet, quiet pelvis."],
es:["Muelles (habitual): pesados, p. ej. 3–4 muelles; a una pierna, un muelle menos.","El footwork avanzado es ritmo sin perder la alineación: sin pausa en los extremos.","A una pierna con la otra al techo se desafía la estabilidad de la pelvis: caderas niveladas.","Running: pies rápidos, pelvis tranquila."]},
s:`## Footwork continuo || Continuous footwork
Talones en paralelo. Exhala, empuja. Inhala, vuelve. || Heels in parallel. Exhale, push. Inhale, return.
* 10 repeticiones. || 10 reps.
Puntas en V, talones altos. || Toes in a V, heels high.
* 10 repeticiones. || 10 reps.
Segunda abierta, talones en la barra. || Wide second, heels on the bar.
* 10 repeticiones. || 10 reps.
Sin pausa en ningún extremo: movimiento continuo. || No pause at either end: continuous movement.
## Una pierna || Single leg @singleleg
Talón derecho en el centro de la barra, pierna izquierda hacia el techo. || Right heel in the center of the bar, left leg toward the ceiling.
Exhala, empuja. Inhala, vuelve. || Exhale, push. Inhale, return.
* 8 por lado. || 8 per side.
Ahora con la punta del pie, talón alto. || Now on the ball of the foot, heel high.
* 8 por lado. || 8 per side.
## Running || Running @running
Piernas estiradas, puntas de los pies en la barra. || Legs straight, balls of the feet on the bar.
Baja un talón mientras doblas la otra rodilla, y alterna. || Lower one heel as you bend the other knee, and alternate.
Más rápido, pero con control. || Faster, but with control.
* 20 por lado. || 20 per side.
Dobla las rodillas y vuelve a casa sin golpear. || Bend your knees and come home without banging.`},

{t:{es:"Hundred",en:"Hundred"}, sub:{es:"Con correas y piernas en diagonal baja",en:"With straps and legs on a low diagonal"}, min:3, demos:["hundredext"],
yt:"reformer pilates hundred straps legs extended",
how:{en:["Springs (typical): light–medium, e.g. 1–2 springs.","Legs only as low as the low back stays still; raise them the moment it lifts.","Long neck, eyes on the navel. Head down is still allowed.","Arms pump from the shoulders with constant tension in the straps."],
es:["Muelles (habitual): ligeros–medios, p. ej. 1–2 muelles.","Las piernas, solo tan bajas como la zona lumbar se mantenga quieta; súbelas en cuanto se levante.","Cuello largo, mirada al ombligo. Bajar la cabeza sigue siendo una opción.","Los brazos bombean desde los hombros, con tensión constante en las correas."]},
s:`Coge las correas y lleva las piernas a mesa. || Take the straps and bring your legs into tabletop.
Brazos hacia el techo. || Arms toward the ceiling.
Exhala: baja los brazos, eleva la cabeza y estira las piernas en diagonal baja. || Exhale: press your arms down, lift your head and extend your legs to a low diagonal.
Bombea los brazos. || Pump your arms.
Inhala: dos, tres, cuatro, cinco. || Inhale: two, three, four, five.
Exhala: dos, tres, cuatro, cinco. || Exhale: two, three, four, five.
* 10 series de respiración. || 10 breath cycles.
Las piernas, solo tan bajas como tu espalda permita. || Your legs only as low as your back allows.
Última serie. || Last cycle.
Dobla las rodillas, baja la cabeza y suelta las correas. || Bend your knees, lower your head and release the straps.`},

{t:{es:"Short spine",en:"Short spine"}, sub:{es:"Articulación de la columna con los pies en correas",en:"Spinal articulation with feet in straps"}, min:5, demos:["shortspine"],
yt:"reformer pilates short spine",
how:{en:["Springs (typical): medium, e.g. 2 springs.","Not for students with osteoporosis, disc problems or neck issues: give them frog or leg circles instead.","Weight on the shoulder blades, never the neck. Keep the head still and the arms pressing down.","The roll-down is the exercise: articulate slowly, knees stay bent until the tailbone lands."],
es:["Muelles (habitual): medios, p. ej. 2 muelles.","No es para personas con osteoporosis, problemas de disco o de cuello: ofréceles rana o círculos de piernas.","El peso en las escápulas, nunca en el cuello. Cabeza quieta y brazos presionando hacia abajo.","El ejercicio es la bajada: articula despacio, con las rodillas dobladas hasta que apoye el coxis."]},
s:`## Preparación || Set-up
Coloca las correas en los arcos de los pies. || Place the straps around the arches of your feet.
Piernas largas en diagonal, brazos largos presionando el carro. || Legs long on a diagonal, arms long pressing into the carriage.
## Short spine || Short spine
Inhala y lleva las piernas hacia el techo. || Inhale and bring your legs up toward the ceiling.
Exhala y rueda las caderas hacia arriba: piernas por encima de la cabeza, paralelas al suelo. || Exhale and roll your hips up: legs over your head, parallel to the floor.
El peso queda en las escápulas, nunca en el cuello. || Your weight stays on your shoulder blades, never on your neck.
Inhala y dobla las rodillas hacia los hombros. || Inhale and bend your knees toward your shoulders.
Exhala y baja la columna vértebra por vértebra, con las rodillas dobladas. || Exhale and roll down one vertebra at a time, knees bent.
Cuando el coxis llegue al carro, estira las piernas en diagonal. || When your tailbone reaches the carriage, extend your legs on a diagonal.
* 5 repeticiones. || 5 reps.
Lento y controlado: el carro no debe golpear. || Slow and controlled: the carriage shouldn't bang.
Al terminar, dobla las rodillas y saca las correas. || When you finish, bend your knees and take the straps off.`},

{t:{es:"Coordinación",en:"Coordination"}, sub:{es:"Brazos y piernas a la vez, con correas",en:"Arms and legs together, with straps"}, min:4, demos:["coordstraps"],
yt:"reformer pilates coordination exercise",
how:{en:["Springs (typical): medium, e.g. 2 springs.","The challenge is holding the curl and the arms still while the legs move.","Cue the order clearly: curl and extend together, open-close, knees, then arms and head.","If the neck tires, keep the head down and do the arm and leg pattern only."],
es:["Muelles (habitual): medios, p. ej. 2 muelles.","La dificultad está en mantener la flexión y los brazos quietos mientras se mueven las piernas.","Marca el orden con claridad: flexión y extensión a la vez, abrir-cerrar, rodillas, y después brazos y cabeza.","Si se cansa el cuello, cabeza abajo y solo el patrón de brazos y piernas."]},
s:`## Preparación || Set-up
Túmbate con una correa en cada mano. || Lie down with a strap in each hand.
Codos doblados a 90 grados, junto a las costillas. || Elbows bent at 90 degrees, beside your ribs.
Piernas en mesa. || Legs in tabletop.
## Coordinación || Coordination
Exhala: eleva la cabeza, estira los brazos junto a las caderas y las piernas en diagonal. || Exhale: lift your head, straighten your arms by your hips and your legs on a diagonal.
Inhala: abre y cierra las piernas. || Inhale: open and close your legs.
Exhala: dobla las rodillas a mesa. || Exhale: bend your knees back to tabletop.
Inhala: dobla los codos y baja la cabeza. || Inhale: bend your elbows and lower your head.
* 6 repeticiones. || 6 reps.
El tronco no se mueve mientras las piernas abren y cierran. || Your torso stays still while your legs open and close.`},

{t:{es:"Long box: swan y correas",en:"Long box: swan and straps"}, sub:{es:"Extensión de espalda boca abajo",en:"Face-down back extension"}, min:6, demos:["swan"],
yt:"reformer pilates long box swan pulling straps",
how:{en:["Springs (typical): light, e.g. 1 spring for both.","Swan: the extension spreads evenly along the spine; no hinging at the low back.","Box position: for swan the student faces the bar; for pulling straps they turn to face the straps.","Skip swan for anyone who can't extend comfortably; keep pulling straps."],
es:["Muelles (habitual): ligeros, p. ej. 1 muelle para los dos.","Swan: la extensión se reparte por toda la columna; sin doblarse en la zona lumbar.","Posición en el cajón: en swan se mira hacia la barra; en tirar de las correas, hacia las correas.","Si alguien no puede hacer la extensión con comodidad, sáltate swan y quédate con las correas."]},
s:`## Swan || Swan
Coloca el cajón largo sobre el carro, contra los apoyos de hombros. || Place the long box on the carriage, against the shoulder rests.
Túmbate boca abajo mirando hacia la barra, con las caderas sobre el cajón. || Lie face down facing the bar, hips on the box.
Manos en la barra, a la anchura de los hombros. || Hands on the bar, shoulder-width apart.
Inhala, empuja la barra y eleva el pecho en extensión. || Inhale, push the bar away and lift your chest into extension.
Exhala y vuelve, alargando la columna. || Exhale and come back, lengthening your spine.
* 5 repeticiones. || 5 reps.
Piernas largas, glúteos suaves, cuello en línea con la columna. || Legs long, glutes soft, neck in line with your spine.
## Tirar de las correas || Pulling straps @pullstraps
Date la vuelta en el cajón: el pecho en el extremo más cercano a las correas. || Turn around on the box: chest at the end nearest the straps.
Coge las correas, con los brazos largos delante. || Take the straps, arms long in front.
Exhala, tira hacia las caderas y eleva el pecho. || Exhale, pull down to your hips and lift your chest.
Inhala y vuelve. || Inhale and return.
* 6 repeticiones. || 6 reps.
Ahora en T: brazos abiertos hacia los lados. || Now in a T: arms open to the sides.
Exhala y lleva los brazos a las caderas. Inhala y vuelve. || Exhale and sweep your arms to your hips. Inhale and return.
* 6 repeticiones. || 6 reps.`},

{t:{es:"Short box avanzado",en:"Advanced short box"}, sub:{es:"Redonda, plana, torsión con alcance e inclinación lateral",en:"Round, flat, twist and reach, side bend"}, min:6, demos:["shortbox"],
yt:"reformer short box twist and reach side over",
how:{en:["Springs: medium so the carriage stays still. Check the foot strap before anyone leans back.","Twist and reach combines rotation and hinge: hips square, spine long, abs on.","Side bend: lengthen up before going over; don't collapse into the bottom side.","Stop the series if a student's abdomen domes or the low back grips."],
es:["Muelles: medios para que el carro no se mueva. Comprueba la correa de pies antes de inclinarse hacia atrás.","Torsión con alcance combina rotación e inclinación: caderas cuadradas, columna larga, abdomen activo.","Inclinación lateral: crece antes de inclinarte; no te hundas sobre el lado de abajo.","Para la serie si el abdomen se abomba o la zona lumbar se agarra."]},
s:`## Preparación || Set-up
Cajón corto a lo ancho del carro, contra los apoyos de hombros. || Short box across the carriage, against the shoulder rests.
Siéntate en el centro, con los pies flexionados bajo la correa de pies. || Sit in the middle, feet flexed under the foot strap.
## Espalda redonda || Round back
Brazos cruzados. Exhala y redondea hacia atrás. || Arms crossed. Exhale and round back.
Inhala y quédate. Exhala y vuelve. || Inhale and stay. Exhale and come back.
* 5 repeticiones. || 5 reps.
## Espalda plana || Flat back @flatback
Brazos arriba. Inclínate hacia atrás con la espalda recta. || Arms up. Hinge back with a straight back.
Inhala abajo; exhala y vuelve. || Inhale at the bottom; exhale and come back.
* 5 repeticiones. || 5 reps.
## Torsión con alcance || Twist and reach @flatback
Brazos en T. Gira hacia la derecha. || Arms in a T. Twist to the right.
En esa torsión, inclínate hacia atrás con la espalda recta. || Holding the twist, hinge back with a straight back.
Vuelve arriba y gira al centro. Ahora hacia la izquierda. || Come back up and return to center. Now to the left.
* 3 por lado. || 3 per side.
## Inclinación lateral || Side bend @shortbox
Manos detrás de la cabeza. || Hands behind your head.
Inclínate hacia la derecha, alargando la cintura. || Bend to the right, lengthening your waist.
Vuelve al centro. Ahora hacia la izquierda. || Back to center. Now to the left.
* 3 por lado. || 3 per side.
Las dos caderas firmes sobre el cajón. || Both hips stay grounded on the box.`},

{t:{es:"Serie de long stretch",en:"Long stretch series"}, sub:{es:"Fluida, con elephant a una pierna",en:"Flowing, with single-leg elephant"}, min:6, demos:["longstretch"],
yt:"reformer long stretch series single leg elephant",
how:{en:["Springs (typical): light–medium, e.g. 1–2 springs.","Flow from one exercise to the next without stepping off: the transitions are part of the work.","Single-leg elephant: the lifted leg stays in line with the spine; don't let the hip open.","If shoulders or wrists tire, go back to two-leg elephant."],
es:["Muelles (habitual): ligeros–medios, p. ej. 1–2 muelles.","Pasa de un ejercicio a otro sin bajarte: las transiciones también son trabajo.","Elephant a una pierna: la pierna elevada sigue la línea de la espalda; que la cadera no se abra.","Si se cansan los hombros o las muñecas, vuelve a elephant con las dos piernas."]},
s:`## Long stretch || Long stretch
Plancha: manos en la barra, puntas de los pies contra los apoyos de hombros. || Plank: hands on the bar, balls of your feet against the shoulder rests.
Inhala, carro atrás. Exhala, vuelve. || Inhale, carriage back. Exhale, return.
* 6 repeticiones. || 6 reps.
## Down stretch || Down stretch @downstretch
Rodillas al carro, pecho abierto. || Knees to the carriage, chest open.
Inhala, carro atrás. Exhala, vuelve. || Inhale, carriage back. Exhale, return.
* 5 repeticiones. || 5 reps.
## Up stretch || Up stretch @upstretch
Caderas al techo. Inhala y baja a plancha llevando el carro atrás. || Hips to the ceiling. Inhale and lower to plank as the carriage goes back.
Exhala, sube las caderas y vuelve. || Exhale, lift your hips and come back.
* 5 repeticiones. || 5 reps.
## Elephant a una pierna || Single-leg elephant @elephant
Elephant: caderas altas, talones apoyados contra los apoyos de hombros. || Elephant: hips high, heels down against the shoulder rests.
Eleva la pierna derecha hacia atrás, en línea con la espalda. || Lift your right leg back, in line with your back.
Exhala, carro atrás con la pierna de apoyo. Inhala, vuelve. || Exhale, carriage back with the standing leg. Inhale, return.
* 5 por lado. || 5 per side.
Las caderas se quedan cuadradas. || Your hips stay square.
Vuelve a casa y bájate de la máquina con cuidado. || Come home and step off carefully.`},

{t:{es:"Knee stretch completo",en:"Full knee stretch"}, sub:{es:"Redonda, plana y rodillas despegadas",en:"Round, flat and knees off"}, min:4, demos:["kneestretch"],
yt:"reformer knee stretch knees off",
how:{en:["Springs (typical): medium, e.g. 2 springs.","Knees off is very demanding on the abs and shoulders: offer it only once round and flat back are solid.","Shoulders stay over the wrists in all three versions.","Keep the range small in knees off; speed comes from the legs, not momentum."],
es:["Muelles (habitual): medios, p. ej. 2 muelles.","Rodillas despegadas exige mucho al abdomen y los hombros: ofrécelo solo si espalda redonda y plana están sólidas.","Hombros sobre las muñecas en las tres versiones.","Recorrido pequeño con las rodillas despegadas; la velocidad sale de las piernas, no del impulso."]},
s:`## Espalda redonda || Round back
Arrodíllate, con los pies contra los apoyos de hombros y las manos en la barra. || Kneel, feet against the shoulder rests, hands on the bar.
Espalda redonda. Exhala, carro atrás. Inhala, vuelve. || Round back. Exhale, carriage back. Inhale, return.
* 10 repeticiones. || 10 reps.
## Espalda plana || Flat back
Espalda plana, pecho hacia delante. || Flat back, chest forward.
* 10 repeticiones. || 10 reps.
## Rodillas despegadas || Knees off @kneesoff
Redondea la espalda y despega las rodillas unos centímetros del carro. || Round your back and lift your knees a few centimeters off the carriage.
Pequeño y rápido: carro atrás, carro adelante. || Small and quick: carriage back, carriage in.
* 10 repeticiones. || 10 reps.
Baja las rodillas, vuelve a casa y siéntate sobre los talones. || Lower your knees, come home and sit back on your heels.`},

{t:{es:"Teaser",en:"Teaser"}, sub:{es:"Con correas en las manos",en:"With straps in the hands"}, min:4, demos:["teaser"],
yt:"reformer teaser with straps",
how:{en:["Springs (typical): light, e.g. 1 spring; the straps help the roll-up.","Modification: knees bent in tabletop, or one foot on the bar.","The legs stay still while the spine rolls up and down: no swinging.","Not for students with osteoporosis or acute low-back pain."],
es:["Muelles (habitual): ligeros, p. ej. 1 muelle; las correas ayudan a subir.","Modificación: rodillas dobladas en mesa, o un pie en la barra.","Las piernas se quedan quietas mientras la columna sube y baja: sin balanceo.","No es para personas con osteoporosis o dolor lumbar agudo."]},
s:`## Preparación || Set-up
Túmbate con una correa en cada mano, brazos largos a los lados. || Lie down with a strap in each hand, arms long by your sides.
Piernas juntas, estiradas en diagonal. || Legs together, extended on a diagonal.
## Teaser || Teaser
Inhala y lleva los brazos hacia el techo. || Inhale and bring your arms toward the ceiling.
Exhala y rueda hacia arriba hasta la V: brazos paralelos a las piernas. || Exhale and roll up into a V: arms parallel to your legs.
Equilibrio justo detrás de los isquiones. || Balance just behind your sit bones.
Inhala, quédate y crece. || Inhale, stay and grow tall.
Exhala y rueda hacia abajo vértebra por vértebra, con las piernas quietas. || Exhale and roll down one vertebra at a time, legs still.
* 4 repeticiones. || 4 reps.
Si la espalda se arquea, dobla las rodillas. || If your back arches, bend your knees.
Dobla las rodillas y suelta las correas. || Bend your knees and release the straps.`},

{t:{es:"Front split",en:"Front split"}, sub:{es:"De pie: zancada sobre el carro",en:"Standing: lunge on the carriage"}, min:4, demos:["frontsplit"],
yt:"reformer pilates front split",
how:{en:["Springs (typical): medium, e.g. 2 springs. Too light and the carriage slides away.","Step on with the platform foot first; never step onto a moving carriage.","The front knee stays over the ankle; the range comes from the back hip.","Offer a hand on the bar or a wall for balance."],
es:["Muelles (habitual): medios, p. ej. 2 muelles. Si son demasiado ligeros, el carro se escapa.","Sube primero el pie de la plataforma; nunca pises un carro en movimiento.","La rodilla delantera se queda sobre el tobillo; el recorrido sale de la cadera de atrás.","Ofrece una mano en la barra o en la pared para el equilibrio."]},
s:`## Preparación || Set-up
Coloca el pie derecho en la plataforma, junto a la barra. || Place your right foot on the standing platform, next to the bar.
El pie izquierdo en el carro, contra el apoyo de hombros, con el talón levantado. || Left foot on the carriage against the shoulder rest, heel lifted.
Rodilla delantera sobre el tobillo, manos en las caderas. || Front knee over your ankle, hands on your hips.
## Front split || Front split
Exhala y lleva el carro hacia atrás con la pierna de atrás. || Exhale and slide the carriage back with your back leg.
Baja las caderas sin inclinar el tronco. || Lower your hips without leaning your torso.
Inhala y vuelve con control. || Inhale and come back with control.
* 6 por lado. || 6 per side.
Pelvis cuadrada hacia delante. || Pelvis square to the front.
Bájate del carro con cuidado y cambia de pierna. || Step off the carriage carefully and switch legs.`},

{t:{es:"Mermaid y vuelta a la calma",en:"Mermaid & cool-down"}, sub:{es:"Estiramiento lateral, estiramiento final y respiración",en:"Side stretch, final stretch and breathing"}, min:5, demos:["mermaid"],
yt:"reformer pilates mermaid cool down",
how:{en:["Springs (typical): light, e.g. 1 spring for mermaid.","Give the cool-down its full time even if the class runs long: advanced students need it most.","Close with one clear takeaway about control."],
es:["Muelles (habitual): ligeros, p. ej. 1 muelle para mermaid.","Dedica a la vuelta a la calma su tiempo completo aunque la clase se alargue: el alumnado avanzado es quien más lo necesita.","Cierra con una idea clara sobre el control."]},
s:`## Mermaid || Mermaid
Siéntate de lado, piernas en Z, y la mano más cercana sobre la barra. || Sit sideways, legs in a Z-sit, nearest hand on the bar.
Exhala, empuja la barra y alarga hacia el lado. || Exhale, push the bar away and lengthen to the side.
Inhala y quédate. Exhala y vuelve, con el brazo por encima. || Inhale and stay. Exhale and come back, arm reaching over.
* 3 por lado. || 3 per side.
## Estiramiento || Stretch @fold
Siéntate mirando hacia la barra, con las piernas largas. || Sit facing the bar, legs long.
Exhala e inclínate hacia delante. || Exhale and fold forward.
Respira. Cabeza pesada. || Breathe. Head heavy.
Rueda hacia arriba despacio. || Roll up slowly.
## Respiración final || Final breathing @breath
Tres respiraciones profundas. || Three deep breaths.
Inhala... y exhala. || Inhale... and exhale.
Una vez más. || Once more.
Última. || Last one.
Hoy has trabajado al máximo nivel. || Today you worked at the highest level.
Recuerda: más control, no más esfuerzo. || Remember: more control, not more effort.
Gracias por tu práctica. || Thank you for your practice.`}
];
const ADVANCED_FOCUS = [
  ["breath","core","spine"],
  ["pelvis","knees","feet","core"],
  ["core","breath","neck","shoulders"],
  ["spine","core","neck","shoulders"],
  ["core","breath","innerThighs","shoulders"],
  ["spine","shoulders","glutes","core"],
  ["core","spine","ribs","pelvis"],
  ["core","shoulders","glutes","spine"],
  ["core","shoulders","spine","glutes"],
  ["core","spine","shoulders","innerThighs"],
  ["pelvis","glutes","knees","core"],
  ["ribs","spine","breath","shoulders"]
];

/* ---------- Levels ---------- */
const LEVELS={beginner:BEGINNER_STAGES, intermediate:INTERMEDIATE_STAGES, advanced:ADVANCED_STAGES};
let level=(()=>{try{const v=JSON.parse(localStorage.getItem('rc_level'));return LEVELS[v]?v:'beginner'}catch(e){return 'beginner'}})();
let STAGES=LEVELS[level];

/* ---------- Animated demos (side view, head left, footbar right) ---------- */
const supA = {c:190, head:[200,146], sh:[228,156], el:[258,160], ha:[288,160], hip:[318,156], kn:[380,86], an:[448,110]};
const supB = {c:110, head:[120,146], sh:[148,156], el:[178,160], ha:[208,160], hip:[238,156], kn:[343,132], an:[448,110]};
const lift = {head:[218,120], sh:[240,142]};
const DEMOS = {
 breath:{n:{es:"Respiración en columna neutra",en:"Breathing in neutral spine"}, ab:{es:"Inhala",en:"Inhale"}, ba:{es:"Exhala",en:"Exhale"}, dur:4200,
   a:{...supA}, b:{...supA, sh:[228,151], head:[200,143], el:[258,157]}},
 footwork:{n:{es:"Footwork — press de piernas",en:"Footwork — leg press"}, ab:{es:"Exhala · empuja",en:"Exhale · push"}, ba:{es:"Inhala · vuelve",en:"Inhale · return"}, dur:3000, a:supA, b:supB},
 pulses:{n:{es:"Pulsos pequeños",en:"Small pulses"}, ab:{es:"Flexiona",en:"Bend"}, ba:{es:"Extiende",en:"Straighten"}, dur:900,
   a:supB, b:{...supB, c:125, head:[135,146], sh:[163,156], el:[193,160], ha:[223,160], hip:[253,156], kn:[352,122]}},
 running:{n:{es:"Running — talones alternos",en:"Running — alternate heels"}, ab:{es:"Baja el talón",en:"Lower the heel"}, ba:{es:"Cambia",en:"Switch"}, dur:1500,
   a:{...supB, kn:[345,120], an:[448,108], kn2:[343,134], an2:[446,122]},
   b:{...supB, kn:[343,134], an:[446,122], kn2:[345,120], an2:[448,108]}},
 bridge:{n:{es:"Pelvic curl / puente",en:"Pelvic curl / bridge"}, ab:{es:"Exhala · sube",en:"Exhale · roll up"}, ba:{es:"Exhala · baja",en:"Exhale · roll down"}, dur:4200,
   a:supA, b:{...supA, hip:[318,104], kn:[392,74], el:[256,162], ha:[286,162]}},
 abprep:{n:{es:"Abdominal prep — elevación",en:"Abdominal prep — chest lift"}, ab:{es:"Exhala · sube",en:"Exhale · lift"}, ba:{es:"Inhala · baja",en:"Inhale · lower"}, dur:2800,
   a:{...supA, el:[214,132], ha:[194,148]}, b:{...supA, head:[218,120], sh:[240,142], el:[232,112], ha:[210,122]}},
 tabletop:{n:{es:"A mesa, brazos al frente",en:"Into tabletop, arms forward"}, ab:{es:"Una pierna…",en:"One leg…"}, ba:{es:"…y la otra",en:"…and the other"}, dur:3200,
   a:{...supA, ...lift, el:[270,146], ha:[302,146]}, b:{...supA, ...lift, el:[272,146], ha:[304,144], kn:[350,100], an:[410,104]}},
 hundred:{n:{es:"Hundred — bombeo de brazos",en:"Hundred — arm pumps"}, ab:{es:"Inhala 2·3·4·5",en:"Inhale 2·3·4·5"}, ba:{es:"Exhala 2·3·4·5",en:"Exhale 2·3·4·5"}, dur:700,
   a:{...supA, ...lift, el:[272,142], ha:[306,140], kn:[350,100], an:[410,104]}, b:{...supA, ...lift, el:[272,148], ha:[306,154], kn:[350,100], an:[410,104]}},
 legalt:{n:{es:"Extensiones de pierna alternas",en:"Alternating leg extensions"}, ab:{es:"Exhala · extiende",en:"Exhale · extend"}, ba:{es:"Inhala · vuelve",en:"Inhale · return"}, dur:2600,
   a:{...supA, kn:[350,100], an:[410,104], kn2:[350,100], an2:[410,104]}, b:{...supA, kn:[395,124], an:[470,104], kn2:[350,100], an2:[410,104]}},
 dls:{n:{es:"Double leg stretch básico",en:"Double leg stretch — basic"}, ab:{es:"Inhala · extiende",en:"Inhale · reach out"}, ba:{es:"Exhala · al centro",en:"Exhale · to center"}, dur:3000,
   a:{...supA, ...lift, el:[290,112], ha:[330,104], kn:[300,92], an:[350,106]}, b:{...supA, ...lift, el:[204,120], ha:[170,108], kn:[395,110], an:[470,82]}},
 sidepress:{n:{es:"De lado — press a una pierna",en:"Side lying — single leg press"}, ab:{es:"Exhala · empuja",en:"Exhale · push"}, ba:{es:"Inhala · vuelve",en:"Inhale · return"}, dur:3000, side:true,
   a:{...supA, kn2:[400,158], an2:[470,160]}, b:{...supB, kn2:[322,158], an2:[392,160]}},
 sidecircle:{n:{es:"De lado — círculos pequeños",en:"Side lying — small circles"}, ab:{es:"Círculo",en:"Circle"}, ba:{es:"Círculo",en:"Circle"}, dur:1800, circle:true, side:true,
   a:{...supB, kn2:[322,158], an2:[392,160]}, b:{...supB, kn2:[322,158], an2:[392,160]}},
 longstretch:{n:{es:"Long stretch — plancha",en:"Long stretch prep — plank"}, ab:{es:"Exhala · carro atrás",en:"Exhale · carriage back"}, ba:{es:"Inhala · vuelve",en:"Inhale · return"}, dur:3400,
   a:{c:190, head:[468,68], sh:[446,80], el:[449,98], ha:[450,110], hip:[330,114], kn:[265,136], an:[200,158]},
   b:{c:150, head:[452,70], sh:[428,82], el:[440,98], ha:[450,110], hip:[300,118], kn:[228,140], an:[160,160]}},
 kneestretch:{n:{es:"Knee stretch básico",en:"Knee stretch — basic"}, ab:{es:"Exhala · carro atrás",en:"Exhale · carriage back"}, ba:{es:"Inhala · vuelve",en:"Inhale · return"}, dur:2200,
   a:{c:230, head:[462,92], sh:[436,78], el:[446,96], ha:[450,110], hip:[330,94], kn:[340,160], an:[250,160]},
   b:{c:180, head:[462,92], sh:[436,78], el:[446,96], ha:[450,110], hip:[308,100], kn:[292,160], an:[200,160]}},
 elephant:{n:{es:"Elephant — V invertida",en:"Elephant — inverted V"}, ab:{es:"Exhala · carro atrás",en:"Exhale · carriage back"}, ba:{es:"Inhala · vuelve",en:"Inhale · return"}, dur:3000,
   a:{c:230, head:[430,118], sh:[422,90], el:[440,100], ha:[450,110], hip:[350,42], kn:[322,104], an:[300,162]},
   b:{c:170, head:[430,118], sh:[422,90], el:[440,100], ha:[450,110], hip:[340,46], kn:[285,104], an:[242,162]}},
 mermaid:{n:{es:"Mermaid — estiramiento lateral",en:"Mermaid — side stretch"}, ab:{es:"Exhala · alarga",en:"Exhale · lengthen"}, ba:{es:"Inhala · vuelve",en:"Inhale · return"}, dur:4000,
   a:{c:230, head:[322,70], sh:[318,94], el:[380,104], ha:[446,110], hip:[306,158], kn:[366,156], an:[330,162]},
   b:{c:180, head:[330,92], sh:[310,106], el:[378,110], ha:[446,110], hip:[256,158], kn:[316,156], an:[280,162]}},
 fold:{n:{es:"Estiramiento sentada hacia delante",en:"Seated forward stretch"}, ab:{es:"Exhala · hacia delante",en:"Exhale · fold forward"}, ba:{es:"Inhala · vuelve",en:"Inhale · come up"}, dur:4400,
   a:{c:190, head:[262,70], sh:[258,94], el:[284,118], ha:[312,136], hip:[250,158], kn:[330,150], an:[410,158]},
   b:{c:190, head:[332,112], sh:[308,118], el:[346,138], ha:[384,150], hip:[250,158], kn:[330,150], an:[410,158]}},
 singleleg:{"n": {"es": "Footwork a una pierna", "en": "Single-leg footwork"}, "ab": {"es": "Exhala · empuja", "en": "Exhale · push"}, "ba": {"es": "Inhala · vuelve", "en": "Inhale · return"}, "dur": 3000, "a": {"c": 190, "head": [200, 146], "sh": [228, 156], "el": [258, 160], "ha": [288, 160], "hip": [318, 156], "kn": [380, 86], "an": [448, 110], "kn2": [350, 108], "an2": [408, 112]}, "b": {"c": 110, "head": [120, 146], "sh": [148, 156], "el": [178, 160], "ha": [208, 160], "hip": [238, 156], "kn": [343, 132], "an": [448, 110], "kn2": [270, 108], "an2": [328, 112]}},
 hundredstraps:{"n": {"es": "Hundred con correas", "en": "Hundred with straps"}, "ab": {"es": "Inhala 2·3·4·5", "en": "Inhale 2·3·4·5"}, "ba": {"es": "Exhala 2·3·4·5", "en": "Exhale 2·3·4·5"}, "dur": 700, "a": {"c": 190, "head": [218, 120], "sh": [240, 142], "el": [272, 142], "ha": [306, 140], "hip": [318, 156], "kn": [350, 100], "an": [410, 104]}, "b": {"c": 190, "head": [218, 120], "sh": [240, 142], "el": [272, 148], "ha": [306, 154], "hip": [318, 156], "kn": [350, 100], "an": [410, 104]}, "straps": "hands"},
 hundredext:{"n": {"es": "Hundred, piernas en diagonal", "en": "Hundred, legs on a diagonal"}, "ab": {"es": "Inhala 2·3·4·5", "en": "Inhale 2·3·4·5"}, "ba": {"es": "Exhala 2·3·4·5", "en": "Exhale 2·3·4·5"}, "dur": 700, "a": {"c": 190, "head": [218, 120], "sh": [240, 142], "el": [272, 142], "ha": [306, 140], "hip": [318, 156], "kn": [380, 124], "an": [442, 100]}, "b": {"c": 190, "head": [218, 120], "sh": [240, 142], "el": [272, 148], "ha": [306, 154], "hip": [318, 156], "kn": [380, 124], "an": [442, 100]}, "straps": "hands"},
 frog:{"n": {"es": "Rana con los pies en correas", "en": "Frog with feet in straps"}, "ab": {"es": "Exhala · estira", "en": "Exhale · extend"}, "ba": {"es": "Inhala · dobla", "en": "Inhale · bend"}, "dur": 3200, "a": {"c": 190, "head": [200, 146], "sh": [228, 156], "el": [258, 160], "ha": [288, 160], "hip": [318, 156], "kn": [340, 106], "an": [378, 120]}, "b": {"c": 168, "head": [178, 146], "sh": [206, 156], "el": [236, 160], "ha": [266, 160], "hip": [296, 156], "kn": [358, 112], "an": [418, 76]}, "straps": "feet"},
 legcircles:{"n": {"es": "Círculos de piernas en correas", "en": "Leg circles in straps"}, "ab": {"es": "Círculo", "en": "Circle"}, "ba": {"es": "Círculo", "en": "Circle"}, "dur": 2600, "a": {"c": 172, "head": [182, 146], "sh": [210, 156], "el": [240, 160], "ha": [270, 160], "hip": [300, 156], "kn": [344, 108], "an": [386, 70]}, "b": {"c": 172, "head": [182, 146], "sh": [210, 156], "el": [240, 160], "ha": [270, 160], "hip": [300, 156], "kn": [344, 108], "an": [386, 70]}, "straps": "feet", "circle": true, "cr": 16, "cdy": 0, "ckn": 0, "together": true},
 stomach:{"n": {"es": "Stomach massage — espalda redonda", "en": "Stomach massage — round back"}, "ab": {"es": "Exhala · empuja", "en": "Exhale · push"}, "ba": {"es": "Inhala · vuelve", "en": "Inhale · return"}, "dur": 3000, "a": {"c": 268, "hip": [308, 150], "sh": [340, 102], "head": [364, 90], "el": [316, 128], "ha": [298, 152], "kn": [385, 88], "an": [447, 112]}, "b": {"c": 205, "hip": [245, 150], "sh": [277, 102], "head": [301, 90], "el": [253, 128], "ha": [235, 152], "kn": [350, 118], "an": [447, 112]}},
 shortbox:{"n": {"es": "Short box — espalda redonda", "en": "Short box — round back"}, "ab": {"es": "Exhala · redondea atrás", "en": "Exhale · round back"}, "ba": {"es": "Inhala · vuelve", "en": "Inhale · come up"}, "dur": 3600, "a": {"c": 190, "hip": [226, 132], "sh": [230, 80], "head": [232, 58], "el": [256, 96], "ha": [274, 88], "kn": [300, 124], "an": [368, 140]}, "b": {"c": 190, "hip": [226, 132], "sh": [198, 98], "head": [214, 82], "el": [222, 104], "ha": [240, 98], "kn": [300, 124], "an": [368, 140]}, "box": "short"},
 flatback:{"n": {"es": "Short box — espalda plana", "en": "Short box — flat back"}, "ab": {"es": "Exhala · inclínate", "en": "Exhale · hinge back"}, "ba": {"es": "Inhala · vuelve", "en": "Inhale · come up"}, "dur": 3600, "a": {"c": 190, "hip": [226, 132], "sh": [230, 80], "head": [232, 58], "el": [236, 56], "ha": [240, 32], "kn": [300, 124], "an": [368, 140]}, "b": {"c": 190, "hip": [226, 132], "sh": [192, 96], "head": [178, 80], "el": [174, 78], "ha": [158, 60], "kn": [300, 124], "an": [368, 140]}, "box": "short"},
 pullstraps:{"n": {"es": "Long box — tirar de las correas", "en": "Long box — pulling straps"}, "ab": {"es": "Exhala · tira", "en": "Exhale · pull"}, "ba": {"es": "Inhala · vuelve", "en": "Inhale · return"}, "dur": 3200, "a": {"c": 200, "head": [192, 126], "sh": [222, 132], "el": [196, 140], "ha": [172, 146], "hip": [300, 132], "kn": [350, 134], "an": [400, 134]}, "b": {"c": 176, "head": [174, 110], "sh": [200, 122], "el": [228, 128], "ha": [264, 130], "hip": [276, 132], "kn": [326, 134], "an": [376, 134]}, "straps": "hands", "box": "long"},
 swan:{"n": {"es": "Long box — swan", "en": "Long box — swan"}, "ab": {"es": "Inhala · extiende", "en": "Inhale · extend"}, "ba": {"es": "Exhala · vuelve", "en": "Exhale · return"}, "dur": 3600, "a": {"c": 250, "hip": [320, 132], "kn": [272, 134], "an": [224, 132], "sh": [398, 132], "head": [422, 126], "el": [425, 124], "ha": [448, 112]}, "b": {"c": 200, "hip": [270, 132], "kn": [222, 134], "an": [174, 132], "sh": [340, 110], "head": [360, 94], "el": [395, 112], "ha": [448, 112]}, "box": "long"},
 downstretch:{"n": {"es": "Down stretch", "en": "Down stretch"}, "ab": {"es": "Inhala · carro atrás", "en": "Inhale · carriage back"}, "ba": {"es": "Exhala · vuelve", "en": "Exhale · return"}, "dur": 3200, "a": {"c": 240, "an": [254, 158], "kn": [280, 160], "hip": [296, 110], "sh": [392, 96], "head": [414, 84], "el": [422, 104], "ha": [448, 112]}, "b": {"c": 195, "an": [209, 158], "kn": [235, 160], "hip": [255, 112], "sh": [370, 100], "head": [392, 90], "el": [412, 106], "ha": [448, 112]}},
 upstretch:{"n": {"es": "Up stretch", "en": "Up stretch"}, "ab": {"es": "Inhala · baja a plancha", "en": "Inhale · lower to plank"}, "ba": {"es": "Exhala · caderas arriba", "en": "Exhale · hips up"}, "dur": 3400, "a": {"c": 215, "an": [221, 158], "kn": [270, 104], "hip": [320, 52], "sh": [428, 92], "head": [446, 108], "el": [440, 100], "ha": [448, 112]}, "b": {"c": 150, "an": [156, 158], "kn": [226, 138], "hip": [298, 118], "sh": [428, 84], "head": [452, 72], "el": [440, 98], "ha": [448, 112]}},
 chestexp:{"n": {"es": "Expansión de pecho de rodillas", "en": "Kneeling chest expansion"}, "ab": {"es": "Exhala · tira atrás", "en": "Exhale · pull back"}, "ba": {"es": "Inhala · vuelve", "en": "Inhale · return"}, "dur": 3000, "a": {"c": 200, "kn": [230, 160], "an": [280, 160], "hip": [230, 108], "sh": [230, 58], "head": [228, 36], "el": [206, 72], "ha": [182, 82]}, "b": {"c": 182, "kn": [212, 160], "an": [262, 160], "hip": [212, 108], "sh": [212, 58], "head": [210, 36], "el": [220, 90], "ha": [236, 112]}, "straps": "hands"},
 teaser:{"n": {"es": "Teaser con correas", "en": "Teaser with straps"}, "ab": {"es": "Exhala · sube a la V", "en": "Exhale · roll up to V"}, "ba": {"es": "Inhala · baja", "en": "Inhale · roll down"}, "dur": 4200, "a": {"c": 190, "head": [200, 146], "sh": [228, 156], "el": [258, 158], "ha": [288, 158], "hip": [318, 156], "kn": [380, 128], "an": [440, 100]}, "b": {"c": 190, "hip": [308, 152], "sh": [276, 104], "head": [268, 82], "el": [314, 96], "ha": [350, 90], "kn": [360, 108], "an": [404, 72]}, "straps": "hands"},
 shortspine:{"n": {"es": "Short spine", "en": "Short spine"}, "ab": {"es": "Exhala · caderas arriba", "en": "Exhale · hips up"}, "ba": {"es": "Exhala · baja vértebra a vértebra", "en": "Exhale · roll down"}, "dur": 4600, "a": {"c": 168, "head": [178, 146], "sh": [206, 156], "el": [236, 160], "ha": [266, 160], "hip": [296, 156], "kn": [340, 104], "an": [382, 66]}, "b": {"c": 200, "head": [210, 146], "sh": [238, 156], "el": [268, 160], "ha": [298, 160], "hip": [250, 104], "kn": [218, 84], "an": [176, 80]}, "straps": "feet"},
 coordstraps:{"n": {"es": "Coordinación con correas", "en": "Coordination with straps"}, "ab": {"es": "Exhala · estira", "en": "Exhale · extend"}, "ba": {"es": "Inhala · vuelve", "en": "Inhale · return"}, "dur": 3200, "a": {"c": 190, "head": [200, 146], "sh": [228, 156], "el": [252, 158], "ha": [254, 132], "hip": [318, 156], "kn": [350, 100], "an": [410, 104]}, "b": {"c": 190, "head": [218, 120], "sh": [240, 142], "el": [272, 148], "ha": [304, 150], "hip": [318, 156], "kn": [380, 122], "an": [440, 96]}, "straps": "hands"},
 kneesoff:{"n": {"es": "Knee stretch — rodillas despegadas", "en": "Knee stretch — knees off"}, "ab": {"es": "Exhala · carro atrás", "en": "Exhale · carriage back"}, "ba": {"es": "Inhala · vuelve", "en": "Inhale · return"}, "dur": 1600, "a": {"c": 230, "head": [462, 92], "sh": [436, 78], "el": [446, 96], "ha": [450, 110], "hip": [330, 92], "kn": [338, 150], "an": [250, 158]}, "b": {"c": 190, "head": [462, 92], "sh": [436, 78], "el": [446, 96], "ha": [450, 110], "hip": [310, 96], "kn": [296, 150], "an": [210, 158]}},
 frontsplit:{"n": {"es": "Front split", "en": "Front split"}, "ab": {"es": "Exhala · carro atrás", "en": "Exhale · carriage back"}, "ba": {"es": "Inhala · vuelve", "en": "Inhale · return"}, "dur": 3400, "a": {"c": 280, "an": [488, 168], "kn": [478, 124], "hip": [430, 92], "sh": [428, 40], "head": [430, 18], "el": [440, 66], "ha": [432, 90], "kn2": [362, 126], "an2": [288, 156]}, "b": {"c": 220, "an": [488, 168], "kn": [472, 128], "hip": [418, 108], "sh": [418, 56], "head": [420, 34], "el": [430, 82], "ha": [420, 106], "kn2": [322, 138], "an2": [228, 156]}}
};

/* ---------- Storage ---------- */
const store={get(k,d){try{const v=localStorage.getItem('rc_'+k);return v===null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('rc_'+k,JSON.stringify(v))}catch(e){}}};

/* ---------- Language ---------- */
let mode = store.get('lang','es');            // 'es' | 'en' | 'both'
const uiLang = () => mode==='es' ? 'es' : 'en'; // "both" uses English interface
const T = k => UI[uiLang()][k];
const pick = o => o[uiLang()];

/* ---------- SVG scene ---------- */
const svg=document.getElementById('stage'), NS='http://www.w3.org/2000/svg';
function mk(tag,attrs,parent){const e=document.createElementNS(NS,tag);for(const k in attrs)e.setAttribute(k,attrs[k]);(parent||svg).appendChild(e);return e}
const txt={'font-size':11,fill:'var(--muted)','text-anchor':'middle','font-family':'Atkinson Hyperlegible, sans-serif'};
mk('rect',{x:30,y:172,width:490,height:10,rx:3,fill:'var(--frame)'});
mk('rect',{x:40,y:182,width:10,height:40,fill:'var(--frame)'});
mk('rect',{x:500,y:182,width:10,height:40,fill:'var(--frame)'});
mk('line',{x1:20,y1:224,x2:580,y2:224,stroke:'var(--line)','stroke-width':2});
mk('line',{x1:450,y1:172,x2:450,y2:112,stroke:'var(--frame)','stroke-width':6,'stroke-linecap':'round'});
mk('circle',{cx:450,cy:110,r:6,fill:'var(--frame)'});
const barLbl=mk('text',{x:470,y:212,...txt}), springLbl=mk('text',{x:405,y:212,...txt});
mk('line',{x1:36,y1:172,x2:36,y2:92,stroke:'var(--frame)','stroke-width':5,'stroke-linecap':'round'});   // risers (strap end)
mk('circle',{cx:36,cy:92,r:5,fill:'var(--frame)'});
const spring=mk('path',{fill:'none',stroke:'var(--spring)','stroke-width':2});
const strap=mk('line',{x1:36,y1:92,x2:36,y2:92,stroke:'var(--accent2)','stroke-width':2.5,opacity:0});
const carriage=mk('g',{});
mk('rect',{x:0,y:162,width:170,height:10,rx:3,fill:'var(--carriage)',opacity:.85},carriage);
mk('rect',{x:2,y:150,width:8,height:14,rx:2,fill:'var(--carriage)'},carriage);
mk('rect',{x:-2,y:156,width:22,height:8,rx:2,fill:'var(--carriage)',opacity:.6},carriage);
const boxEl=mk('rect',{x:0,y:0,width:0,height:0,rx:3,fill:'var(--violet)',opacity:.55},carriage);
const limb=(c,w)=>mk('polyline',{fill:'none',stroke:c,'stroke-width':w,'stroke-linecap':'round','stroke-linejoin':'round'});
const leg2=limb('var(--leg2)',9), torso=limb('var(--body)',11), leg1=limb('var(--body)',9), arm=limb('var(--body)',7);
const neck=limb('var(--body)',8);
const head=mk('circle',{r:12,fill:'var(--body)'});
const sideTag=mk('text',{x:300,y:30,...txt,'font-size':12});

const lerp=(a,b,t)=>a+(b-a)*t, lp=(p,q,t)=>[lerp(p[0],q[0],t),lerp(p[1],q[1],t)];
const pts=(...ps)=>ps.map(p=>p.join(',')).join(' ');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
let demoKey='breath', playing=true, speed=reduce?1.8:1, t0=performance.now(), lastPhase='';
const phaseTxt=document.getElementById('phaseTxt');

function frame(now){
  const d=DEMOS[demoKey];
  if(playing){
    const dur=d.dur*speed, cyc=((now-t0)%(dur*2))/dur, first=cyc<1, raw=first?cyc:2-cyc;
    const t=(1-Math.cos(Math.PI*raw))/2, A=d.a, B=d.b;
    const J=k=>lp(A[k]||A[k.replace('2','')],B[k]||B[k.replace('2','')],t);
    const c=lerp(A.c,B.c,t);
    carriage.setAttribute('transform',`translate(${c},0)`);
    const sx0=c+170,sx1=498; let s=`M${sx0} 176`; for(let i=1;i<=10;i++) s+=` L${sx0+(sx1-sx0)*i/10} ${i%2?170:182}`;
    spring.setAttribute('d',s);
    const hd=J('head'),sh=J('sh'),elb=J('el'),ha=J('ha'),hip=J('hip');
    let kn=J('kn'),an=J('an'); const kn2=J('kn2'),an2=J('an2');
    if(d.circle){const g=now/(d.dur*speed)*2*Math.PI, r=d.cr||14, dy=(d.cdy!=null?d.cdy:-30), dk=(d.ckn!=null?d.ckn:8); kn=[kn[0],kn[1]-dk]; an=[an[0]+Math.cos(g)*r,an[1]+dy+Math.sin(g)*r];}
    head.setAttribute('cx',hd[0]); head.setAttribute('cy',hd[1]);
    torso.setAttribute('points',pts(sh,hip));
    neck.setAttribute('points',pts(sh,hd));
    arm.setAttribute('points',pts(sh,elb,ha));
    leg1.setAttribute('points',pts(hip,kn,an,[an[0]+6,an[1]-14]));
    leg2.setAttribute('points',d.together?pts(hip,kn,an,[an[0]+6,an[1]-14]):pts(hip,kn2,an2,[an2[0]+6,an2[1]-14]));
    if(d.straps){const p=d.straps==='feet'?an:ha; strap.setAttribute('x2',p[0]); strap.setAttribute('y2',p[1]); strap.setAttribute('opacity',1)} else strap.setAttribute('opacity',0);
    const ph=pick(d.circle||first?d.ab:d.ba);
    if(ph!==lastPhase){phaseTxt.textContent=ph;lastPhase=ph}
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

const demoPick=document.getElementById('demoPick');
function fillDemoPick(){demoPick.innerHTML='';Object.entries(DEMOS).forEach(([k,d])=>{const o=document.createElement('option');o.value=k;o.textContent=pick(d.n);demoPick.appendChild(o)});demoPick.value=demoKey}
demoPick.onchange=()=>setDemo(demoPick.value);
function setDemo(k){demoKey=k;demoPick.value=k;lastPhase='';t0=performance.now();
  const bx=DEMOS[k].box; const B=bx==='short'?[4,136,62,26]:bx==='long'?[12,138,146,24]:[0,0,0,0];
  boxEl.setAttribute('x',B[0]);boxEl.setAttribute('y',B[1]);boxEl.setAttribute('width',B[2]);boxEl.setAttribute('height',B[3]);
  sideTag.textContent=DEMOS[k].side?T('side'):'';}

/* ---------- Class state ---------- */
let cur=Math.min(store.get('stage',0),STAGES.length-1), cue=store.get('cue',0), done=store.get('done',[]);
let classSec=store.get('classSec',0), stageSec=0, running=false, fs=store.get('fs',1.15);
document.documentElement.style.setProperty('--fs',fs+'rem');
const savedTheme=store.get('theme',null); if(savedTheme)document.documentElement.dataset.theme=savedTheme;

const split=x=>{const [es,en]=x.split(' || ');return{es:es.trim(),en:(en||es).trim()}};
Object.values(LEVELS).forEach(arr=>arr.forEach(st=>{st.lines=st.s.split('\n').map(l=>{
  if(l.startsWith('## ')){const m=l.match(/\s@(\w+)\s*$/);return{k:'h',demo:m?m[1]:null,...split(m?l.slice(3,m.index):l.slice(3))}}
  if(l.startsWith('* '))return{k:'r',...split(l.slice(2))};
  return{k:'c',...split(l)};
})}));

const fmt=s=>{s=Math.max(0,Math.round(s));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')};
const $=id=>document.getElementById(id);

/* text for a script line depending on mode */
function lineHTML(l){
  const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  if(mode==='both') return l.k==='h' ? `${esc(l.es)} · ${esc(l.en)}` : `${esc(l.es)}<span class="tr">${esc(l.en)}</span>`;
  return esc(l[mode]);
}

function cueHTML(l){
  const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  return mode==='both' ? `“${esc(l.es)}”<span class="tr">${esc(l.en)}</span>` : `“${esc(l[mode])}”`;
}
function scrollCue(smooth){
  const sc=$('script'), b=cueEls[cue]; if(!b)return;
  if(sc.scrollHeight>sc.clientHeight+4){
    sc.scrollTo({top:Math.max(0,b.offsetTop-sc.offsetTop-sc.clientHeight/3),behavior:smooth&&!reduce?'smooth':'auto'});
  } else if(smooth){ b.scrollIntoView({block:'center',behavior:reduce?'auto':'smooth'}); }
}
function renderRail(){
  const ol=$('stageList');ol.innerHTML='';
  STAGES.forEach((st,i)=>{
    const li=document.createElement('li');if(done.includes(i))li.className='done';
    const b=document.createElement('button');
    b.innerHTML=`<span class="n">${i+1}</span><span>${mode==='en'?st.t.en:st.t.es}</span><span class="m">${st.min} min</span>`;
    if(i===cur)b.setAttribute('aria-current','step');
    b.onclick=()=>{go(i);$('rail').classList.remove('open');if(autoOn)speakCurrent()};
    li.appendChild(b);ol.appendChild(li);
  });
}

let cueEls=[];
function renderStage(){
  const st=STAGES[cur];
  if(typeof renderFocus==='function')renderFocus();
  $('sNum').textContent=cur+1;
  $('sTitle').textContent=mode==='en'?st.t.en:st.t.es;
  $('sEn').textContent=mode==='both'?`${st.t.en} — ${st.sub.en}`:pick(st.sub);
  $('sTarget').textContent=T('target').replace('{m}',st.min);
  $('how').innerHTML=`<h3>${T('how')}</h3><ul>${pick(st.how).map(h=>`<li>${h}</li>`).join('')}</ul>`+
    (cur===0?`<p class="note">${T('throughout')}</p>`:'')+
    `<a class="vid" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=${encodeURIComponent(st.yt)}">${T('video')}</a>`+
    `<p class="note">${T('animNote')}</p>`;
  const sc=$('script');sc.innerHTML='';cueEls=[];
  st.lines.forEach(l=>{
    if(l.k==='h'){const h=document.createElement('h3');h.innerHTML=lineHTML(l);sc.appendChild(h)}
    else if(l.k==='r'){const r=document.createElement('span');r.className='reps';r.innerHTML=mode==='both'?`${l.es} <span class="tr">· ${l.en}</span>`:l[mode];sc.appendChild(r);sc.appendChild(document.createElement('br'))}
    else{const b=document.createElement('button');b.className='cue';b.innerHTML=cueHTML(l);const idx=cueEls.length;b.onclick=()=>{setCue(idx);if(autoOn)speakCurrent()};cueEls.push(b);sc.appendChild(b)}
  });
  setDemo(st.demos[0]);
  $('prevStage').disabled=cur===0;
  $('nextStage').textContent=cur===STAGES.length-1?T('finish'):T('nextStage');
  setCue(Math.min(cue,cueEls.length-1),true);
  updateClocks();
}

/* switch demo when the script reaches a sub-section tagged with @demo */
function setCue(i,noScroll){
  cue=Math.max(0,Math.min(i,cueEls.length-1));store.set('cue',cue);
  cueEls.forEach((b,j)=>{b.classList.toggle('now',j===cue);b.classList.toggle('past',j<cue)});
  const st=STAGES[cur];
  let dk=st.demos[0],seen=-1;
  for(const l of st.lines){
    if(l.k==='c'){seen++;if(seen===cue)break}
    if(l.k==='h'&&l.demo&&DEMOS[l.demo])dk=l.demo;
  }
  if(dk!==demoKey)setDemo(dk);
  scrollCue(!noScroll);
}

function go(i){
  if(i>cur&&!done.includes(cur)){done.push(cur);store.set('done',done)}
  cur=Math.max(0,Math.min(i,STAGES.length-1));cue=0;stageSec=0;
  store.set('stage',cur);renderRail();renderStage();window.scrollTo({top:0});
}
function updateClocks(){
  $('classClock').textContent=fmt(classSec);
  const sc=$('sClock');sc.textContent=fmt(stageSec);
  sc.classList.toggle('over',stageSec>STAGES[cur].min*60);
}
setInterval(()=>{if(running){classSec++;stageSec++;store.set('classSec',classSec);updateClocks()}},1000);

/* static interface text */
function classBtnText(){$('classBtn').textContent=running?T('pause'):(classSec?T('resume'):T('start'))}
function applyUI(){
  document.documentElement.lang=uiLang();
  document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=T(e.dataset.i18n));
  $('playBtn').textContent=playing?T('pauseDemo'):T('play');
  $('slowBtn').textContent=speed>1?T('normal'):T('slower');
  barLbl.textContent=T('bar'); springLbl.textContent=T('springs');
  ['ES','EN','Both'].forEach(m=>$('lang'+m).setAttribute('aria-pressed',String(mode===m.toLowerCase())));
  const LK={beginner:'B',intermediate:'I',advanced:'A'}[level];
  document.querySelector('[data-i18n="title"]').textContent=T('title'+LK);
  document.querySelector('[data-i18n="objective"]').textContent=T('obj'+LK);
  ['B','I','A'].forEach(x=>{const b=$('lv'+x); b.textContent=T('lv'+x); b.setAttribute('aria-pressed',String(x===LK))});
  classBtnText(); fillDemoPick(); renderRail(); renderStage(); updateVoiceUI();
}
function setMode(m){mode=m;store.set('lang',m);lastPhase='';applyUI();if(autoOn)speakCurrent()}
$('langES').onclick=()=>setMode('es');
$('langEN').onclick=()=>setMode('en');
$('langBoth').onclick=()=>setMode('both');

/* controls */
$('playBtn').onclick=()=>{playing=!playing;$('playBtn').textContent=playing?T('pauseDemo'):T('play');if(playing)t0=performance.now()};
$('slowBtn').onclick=()=>{speed=speed>1?1:1.8;$('slowBtn').textContent=speed>1?T('normal'):T('slower');t0=performance.now()};
$('classBtn').onclick=()=>{running=!running;classBtnText()};
$('resetBtn').onclick=()=>{running=false;classSec=0;stageSec=0;done=[];store.set('done',[]);store.set('classSec',0);classBtnText();go(0)};
$('nextCue').onclick=()=>{if(cue<cueEls.length-1)setCue(cue+1);else if(cur<STAGES.length-1)go(cur+1);if(autoOn)speakCurrent()};
$('prevCue').onclick=()=>{setCue(cue-1);if(autoOn)speakCurrent()};
$('prevStage').onclick=()=>{go(cur-1);if(autoOn)speakCurrent()};
$('nextStage').onclick=()=>{
  if(cur===STAGES.length-1){stopAuto();if(!done.includes(cur)){done.push(cur);store.set('done',done)}running=false;classBtnText();renderRail();alert(T('done')+fmt(classSec))}
  else{go(cur+1);if(autoOn)speakCurrent()}
};
$('fsUp').onclick=()=>{fs=Math.min(1.9,fs+.1);document.documentElement.style.setProperty('--fs',fs+'rem');store.set('fs',fs)};
$('fsDown').onclick=()=>{fs=Math.max(.9,fs-.1);document.documentElement.style.setProperty('--fs',fs+'rem');store.set('fs',fs)};
$('themeBtn').onclick=()=>{const r=document.documentElement;const dark=r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;r.dataset.theme=dark?'light':'dark';store.set('theme',r.dataset.theme)};
$('menuBtn').onclick=()=>{const r=$('rail');r.classList.toggle('open');$('menuBtn').setAttribute('aria-expanded',r.classList.contains('open'))};
document.addEventListener('keydown',e=>{
  if(e.target.tagName==='SELECT')return;
  if(e.key===' '||e.key==='ArrowRight'){e.preventDefault();$('nextCue').click()}
  if(e.key==='ArrowLeft'){e.preventDefault();setCue(cue-1)}
});

/* ---------- Voice: reads the cues aloud (browser text-to-speech) ---------- */
const synth = ('speechSynthesis' in window) ? window.speechSynthesis : null;
let voices=[], autoOn=false, speakToken=0, wakeLock=null, skipWait=null;
let rate=store.get('rate',0.95), gap=store.get('gap',1.5), repSec=store.get('repSec',3);
function loadVoices(){try{voices=synth?synth.getVoices():[]}catch(e){voices=[]}fillVoices();updateVoiceUI()}
const langOf=v=>(v.lang||'').replace('_','-').toLowerCase();
/* Voice choice: just Female / Male. On browsers that have Google voices (Chrome on a
   computer) only those are used, because the system voices listed there are often silent. */
let gender=store.get('gender','f');
const badVoices=new Set();
const FEMALE=/female|samantha|karen|moira|tessa|victoria|fiona|veena|serena|allison|\bava\b|susan|zira|hazel|catherine|m[oó]nica|paulina|marisol|soledad|helena|laura|sabina|elvira|dalia|luciana|francisca|google us english|^google español$/i;
const MALE=/\bmale\b|daniel|\balex\b|fred|rishi|oliver|arthur|aaron|\btom\b|david|\bmark\b|george|james|jorge|juan|diego|carlos|pablo|ra[uú]l|[aá]lvaro|enrique|jos[eé]/i;
const isF=v=>FEMALE.test(v.name), isM=v=>!isF(v)&&MALE.test(v.name);
function voicePool(lang){
  const NOVELTY=/bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|albert|kathy|ralph|junior|eddy|\bflo\b|grandma|grandpa|\breed\b|rocko|sandy|shelley/i;
  const any=voices.filter(v=>langOf(v).startsWith(lang)&&!badVoices.has(v.voiceURI));
  const all=any.filter(v=>!NOVELTY.test(v.name)).length?any.filter(v=>!NOVELTY.test(v.name)):any;
  const google=all.filter(v=>/^google/i.test(v.name));
  const pool=google.length?google:all;
  const reg=lang==='es'?['es-es','es-mx','es-us']:['en-gb','en-us'];
  const rank=v=>{const i=reg.findIndex(r=>langOf(v).startsWith(r));return i<0?9:i};
  return pool.slice().sort((x,y)=>rank(x)-rank(y));
}
function voiceFor(lang){
  const pool=voicePool(lang); if(!pool.length)return null;
  const want=gender==='m'?isM:isF;
  return pool.find(want) || pool.find(v=>!isF(v)&&!isM(v)) || pool[0];
}
function fillVoices(){}   // no long voice lists any more
if(synth){loadVoices(); synth.onvoiceschanged=loadVoices; setTimeout(loadVoices,800); setTimeout(loadVoices,2500)}   // mobile browsers load voices late
function say(text,lang){return new Promise(res=>{
  if(!synth){res();return}
  const u=new SpeechSynthesisUtterance(text.replace(/\.\.\.$/,'…'));
  u.lang=lang==='es'?'es-ES':'en-GB'; const v=voiceFor(lang); if(v){try{u.voice=v;u.lang=v.lang}catch(e){}} u.rate=rate;
  let fin=false; const end=()=>{if(!fin){fin=true;res()}};
  u.onend=end; u.onerror=e=>{ const er=e&&e.error; if(v&&er&&er!=='interrupted'&&er!=='canceled')badVoices.add(v.voiceURI); end() };
  setTimeout(end,1800+text.length*110/rate);   // safety net if a browser never fires onend
  synth.speak(u);
})}
const sayLine=async(l,token)=>{
  if(mode==='both'){await say(l.es,'es'); if(token===speakToken)await say(l.en,'en')}
  else await say(l[mode],mode);
};
function setStatus(text,canSkip){
  $('voiceStatus').textContent=text||''; $('skipBtn').hidden=!canSkip;
}
function markSpeaking(on){cueEls.forEach(b=>b.classList.remove('speaking'));if(on&&cueEls[cue])cueEls[cue].classList.add('speaking')}
function repsAfter(){
  const ls=STAGES[cur].lines; let seen=-1;
  for(let i=0;i<ls.length;i++){ if(ls[i].k==='c'){seen++; if(seen===cue) return ls[i+1]&&ls[i+1].k==='r'?ls[i+1]:null} }
  return null;
}
const repCount=r=>{const n=parseInt(r.es,10)||0;return /por lado|en cada dirección/.test(r.es)?n*2:n};
function wait(secs,token,key){return new Promise(res=>{
  let left=secs; const show=()=>setStatus(T(key).replace('{s}',Math.ceil(left)),true);
  show();
  const iv=setInterval(()=>{ if(token!==speakToken){done();return} left-=.25; if(left<=0)done(); else show() },250);
  function done(){clearInterval(iv);skipWait=null;res()}
  skipWait=done;
})}
async function speakCurrent(){
  const token=++speakToken; if(skipWait)skipWait();
  if(synth)synth.cancel();
  document.querySelectorAll('.reps.counting').forEach(r=>r.classList.remove('counting'));
  const l=STAGES[cur].lines.filter(x=>x.k==='c')[cue]; if(!l)return;
  await new Promise(r=>setTimeout(r,60));            // some browsers drop speech right after cancel()
  if(token!==speakToken)return;
  markSpeaking(true); setStatus(T('speaking'));
  await sayLine(l,token);
  if(token!==speakToken)return;
  markSpeaking(false);
  if(!autoOn){setStatus('');return}
  const r=repsAfter();
  if(r){
    await sayLine(r,token); if(token!==speakToken)return;
    const secs=repCount(r)*repSec;
    if(secs>0){
      const badge=cueEls[cue]&&cueEls[cue].nextElementSibling;
      if(badge&&badge.classList.contains('reps'))badge.classList.add('counting');
      await wait(secs,token,'repsLeft');
      if(badge)badge.classList.remove('counting');
    }
  } else await wait(gap,token,'nextIn');
  if(token===speakToken&&autoOn)advanceAuto();
}
function advanceAuto(){
  if(cue<cueEls.length-1)setCue(cue+1);
  else if(cur<STAGES.length-1)go(cur+1);
  else{stopAuto();setStatus(T('classDone'));return}
  speakCurrent();
}
async function keepAwake(on){
  try{ if(on&&'wakeLock' in navigator){wakeLock=await navigator.wakeLock.request('screen')}
       else if(!on&&wakeLock){await wakeLock.release();wakeLock=null} }catch(e){}
}
function unlockSpeech(){try{if(synth&&!synth.speaking){const u=new SpeechSynthesisUtterance(' ');u.volume=0;synth.speak(u)}}catch(e){}}  // iOS needs a first utterance inside a tap
function startAuto(){
  unlockSpeech(); autoOn=true; keepAwake(true);
  if(!running){running=true;classBtnText()}
  updateVoiceUI(); speakCurrent();
}
function stopAuto(){
  autoOn=false; speakToken++; if(skipWait)skipWait();
  if(synth)synth.cancel(); markSpeaking(false); keepAwake(false); updateVoiceUI(); setStatus('');
  document.querySelectorAll('.reps.counting').forEach(r=>r.classList.remove('counting'));
}
function updateVoiceUI(){
  const ab=$('autoBtn'), rb=$('readBtn'); if(!ab)return;
  ab.textContent=autoOn?T('autoOff'):T('autoOn'); ab.classList.toggle('primary',autoOn); ab.setAttribute('aria-pressed',String(autoOn));
  rb.textContent=T('readLine'); if($('testBtn'))$('testBtn').textContent=T('testBtn'); $('skipBtn').textContent=T('skip');
  $('speedLbl').textContent=T('speed'); $('gapLbl').textContent=T('gap'); $('repsLbl').textContent=T('repsLbl'); $('setLbl').textContent=T('setLbl');
  $('voiceLbl').textContent=T('voiceLbl'); $('gF').textContent=T('female'); $('gM').textContent=T('male');
  $('gF').setAttribute('aria-pressed',String(gender==='f')); $('gM').setAttribute('aria-pressed',String(gender==='m'));
  if(synth&&voices.length){
    const want=gender==='m'?isM:isF;
    $('voiceUsed').textContent=['es','en'].map(l=>{const v=voiceFor(l); const nm=l==='es'?'Español':'English';
      return v? nm+': '+v.name+((gender==='m'?isF(v):isM(v))?' ('+T(gender==='m'?'missM':'missF')+')':'') : nm+': —'}).join('  ·  ');
  } else $('voiceUsed').textContent='';
  $('repSel').options[0].textContent=T('repsOff');
  let note='';
  if(!synth){note=T('noSynth');ab.disabled=rb.disabled=true}
  else if(voices.length){
    const need=mode==='both'?['es','en']:[mode];
    const miss=need.filter(l=>!voiceFor(l));
    if(miss.length)note=T('noVoice').replace('{l}',miss.map(l=>T(l)).join(' / '));
  }
  $('voiceNote').textContent=note||T('voiceHint');
}
$('readBtn').onclick=()=>{unlockSpeech();speakCurrent()};
$('autoBtn').onclick=()=>autoOn?stopAuto():startAuto();
$('skipBtn').onclick=()=>{if(skipWait)skipWait()};
$('rateSel').value=String(rate); $('gapSel').value=String(gap); $('repSel').value=String(repSec);
$('rateSel').onchange=e=>{rate=parseFloat(e.target.value);store.set('rate',rate)};
$('gapSel').onchange=e=>{gap=parseFloat(e.target.value);store.set('gap',gap)};
$('repSel').onchange=e=>{repSec=parseFloat(e.target.value);store.set('repSec',repSec)};
function pickGender(g){
  gender=g; store.set('gender',g); updateVoiceUI();
  if(autoOn)stopAuto();
  unlockSpeech(); speakToken++; if(synth){try{synth.cancel()}catch(e){}}
  const lg=mode==='en'?'en':'es'; say(UI[lg].sample,lg);          // play a sample right away, inside the tap
}
$('gF').onclick=()=>pickGender('f');
$('gM').onclick=()=>pickGender('m');
document.addEventListener('keydown',e=>{
  if(e.target.tagName==='SELECT'||e.ctrlKey||e.metaKey)return;
  if(e.key==='p'||e.key==='P'){e.preventDefault();autoOn?stopAuto():startAuto()}
});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&autoOn)keepAwake(true)});


/* ---- additions kept from the mobile update (do not change how speech is played) ---- */
function showHelp(on,msg){ const h=$('voiceHelp'); if(!h)return; h.hidden=!on; if(on)h.textContent=msg||''; }
$('prevCue').setAttribute('aria-label',T('prevLine'));
/* Audio test: same speaking method as the class, then reports what the phone did */
$('testBtn').onclick=()=>{
  if(autoOn)stopAuto();
  unlockSpeech();
  const lg=langOf, es=voices.filter(v=>lg(v).startsWith('es')).length, en=voices.filter(v=>lg(v).startsWith('en')).length;
  const v=voiceFor('es'); let started=false, err='';
  showHelp(true,'…');
  if(synth){
    const u=new SpeechSynthesisUtterance(T('testLine'));
    u.lang='es-ES'; if(v){try{u.voice=v;u.lang=v.lang}catch(e){}} u.rate=rate;
    u.onstart=()=>{started=true}; u.onerror=e=>{err=(e&&e.error)||'error'};
    window.__testUtt=u; synth.speak(u);
  }
  setTimeout(()=>{
    showHelp(true,[
      'Text-to-speech: '+(synth?'yes':'NO'),
      'Voices: '+voices.length+' (ES '+es+', EN '+en+')',
      'Spanish voice: '+(v?v.name+' · '+v.lang:'none'),
      'Speech started: '+(started||(synth&&synth.speaking)?'yes':'not detected')+(err?' · error: '+err:''),
      navigator.userAgent
    ].join('\n'));
  },3000);
};


/* ---------- Focus tags, body map and correction-cue bank ---------- */
const AREAS={
  core:{es:"Centro (abdomen)",en:"Core"},
  pelvicFloor:{es:"Suelo pélvico",en:"Pelvic floor"},
  pelvis:{es:"Pelvis",en:"Pelvis"},
  ribs:{es:"Costillas",en:"Ribs"},
  breath:{es:"Respiración",en:"Breath"},
  spine:{es:"Columna",en:"Spine"},
  shoulders:{es:"Hombros y escápulas",en:"Shoulders"},
  neck:{es:"Cuello",en:"Neck"},
  glutes:{es:"Glúteos y caderas",en:"Glutes & hips"},
  innerThighs:{es:"Aductores",en:"Inner thighs"},
  knees:{es:"Rodillas",en:"Knees"},
  feet:{es:"Pies y tobillos",en:"Feet & ankles"}
};
/* what to watch in each stage, most important first */
const BEGINNER_FOCUS=[
  ["breath","ribs","core","neck","shoulders"],                 // 1 Bienvenida
  ["pelvis","knees","core","innerThighs","feet","shoulders"],  // 2 Footwork
  ["feet","pelvis","knees"],                                   // 3 Running
  ["spine","glutes","pelvis","core","knees","neck"],           // 4 Pelvic curl
  ["core","ribs","neck","breath"],                             // 5 Abdominal prep
  ["core","breath","shoulders","neck"],                        // 6 Hundred
  ["core","pelvis","spine","breath"],                          // 7 Coordinación
  ["pelvis","glutes","core","knees"],                          // 8 Side lying
  ["core","shoulders","pelvis","spine","glutes"],              // 9 Long stretch
  ["core","shoulders","neck","spine"],                         // 10 Elephant
  ["ribs","spine","shoulders","breath"],                       // 11 Mermaid
  ["spine","neck","breath"]                                    // 12 Vuelta a la calma
];
const LEVEL_FOCUS={beginner:BEGINNER_FOCUS,intermediate:INTERMEDIATE_FOCUS,advanced:ADVANCED_FOCUS};
let FOCUS=LEVEL_FOCUS[level];
/* extra correction cues: "Español || English" */
const CUES={
  core:`Lleva el ombligo suavemente hacia la columna. || Gently draw your navel toward your spine.
Imagina que cierras una cremallera desde el pubis hasta el ombligo. || Imagine zipping up from your pubic bone to your navel.
Activa el abdomen sin contener la respiración. || Engage your abs without holding your breath.
Mantén el abdomen plano, sin que se abombe. || Keep your abdomen flat, don't let it dome.
El movimiento empieza en tu centro. || The movement starts from your center.`,
  pelvicFloor:`Activa suavemente el suelo pélvico, como un ascensor que sube. || Gently lift your pelvic floor, like an elevator going up.
Conecta el suelo pélvico al exhalar. || Connect your pelvic floor as you exhale.
Suelta el suelo pélvico al inhalar. || Release your pelvic floor as you inhale.
Es una activación suave, no un apretón. || It's a gentle lift, not a squeeze.`,
  pelvis:`Mantén la pelvis neutra: las crestas de la cadera y el pubis al mismo nivel. || Keep your pelvis neutral: hip bones and pubic bone level.
Imagina un vaso de agua sobre tu pelvis que no se puede derramar. || Imagine a glass of water on your pelvis that mustn't spill.
Las dos caderas a la misma altura. || Keep both hips level.
No dejes que la pelvis se balancee. || Don't let your pelvis rock.
Si la zona lumbar se arquea, sube un poco las piernas. || If your lower back arches, lift your legs a little higher.`,
  ribs:`Cierra las costillas hacia la pelvis. || Close your ribs down toward your pelvis.
No dejes que las costillas se abran hacia delante. || Don't let your ribs flare forward.
Respira hacia los lados y hacia la espalda. || Breathe into the sides and back of your ribs.
Siente las costillas pesadas sobre el carro. || Feel your ribs heavy on the carriage.`,
  breath:`Inhala por la nariz, exhala por la boca. || Inhale through your nose, exhale through your mouth.
Exhala en el esfuerzo. || Exhale on the effort.
No contengas la respiración. || Don't hold your breath.
Deja que la respiración marque el ritmo del movimiento. || Let your breath set the rhythm of the movement.
Exhala del todo, como si soplaras una vela despacio. || Exhale fully, like slowly blowing out a candle.`,
  spine:`Alarga la columna desde la coronilla hasta el coxis. || Lengthen your spine from the crown of your head to your tailbone.
Mueve la columna vértebra por vértebra. || Move your spine one vertebra at a time.
Imagina que tu columna es un collar de perlas. || Imagine your spine is a string of pearls.
Crece hacia arriba antes de moverte. || Grow taller before you move.`,
  shoulders:`Lleva los hombros lejos de las orejas. || Draw your shoulders away from your ears.
Desliza las escápulas hacia abajo por la espalda. || Slide your shoulder blades down your back.
Abre las clavículas. || Widen across your collarbones.
Empuja la barra sin hundirte entre los hombros. || Press the bar away without sinking between your shoulders.
Brazos fuertes, hombros relajados. || Strong arms, relaxed shoulders.`,
  neck:`Alarga la nuca. || Lengthen the back of your neck.
Deja espacio entre la barbilla y el pecho, como si sostuvieras una mandarina. || Leave space between chin and chest, as if holding a tangerine.
Relaja la mandíbula. || Relax your jaw.
Si sientes el cuello, baja la cabeza y descansa. || If you feel it in your neck, lower your head and rest.
La mirada sigue la línea de la columna. || Let your gaze follow the line of your spine.`,
  glutes:`Activa suavemente los glúteos. || Gently engage your glutes.
Empuja desde los talones para sentir los glúteos. || Press through your heels to feel your glutes.
Glúteos activos, pero sin apretar de más. || Glutes on, but don't over-squeeze.
Coloca la cadera de arriba justo encima de la de abajo. || Stack your top hip right over your bottom hip.`,
  innerThighs:`Aprieta suavemente la parte interna de los muslos. || Gently squeeze your inner thighs.
Imagina que sostienes una pelota pequeña entre las rodillas. || Imagine holding a small ball between your knees.
Junta las piernas desde la parte alta de los muslos. || Draw your legs together from the top of your thighs.
Talones juntos y conecta hasta los aductores. || Heels together, and feel it all the way up your inner thighs.`,
  knees:`No bloquees las rodillas. || Don't lock your knees.
Las rodillas siguen la dirección de los dedos de los pies. || Your knees follow the direction of your toes.
Mantén las rodillas en línea con las caderas. || Keep your knees in line with your hips.
Estira las piernas con una ligera flexión. || Straighten your legs with a soft bend.`,
  feet:`Reparte el peso por todo el pie. || Spread the weight across your whole foot.
Talones estables, sin que caigan hacia dentro ni hacia fuera. || Keep your heels steady, not rolling in or out.
Activa el arco del pie. || Lift through the arch of your foot.
Mueve el tobillo con control, sin rebotar. || Move your ankles with control, no bouncing.
Dedos relajados, no los agarres. || Relax your toes, don't grip.`
};
Object.keys(CUES).forEach(k=>{CUES[k]=CUES[k].split('\n').map(l=>{const [es,en]=l.split(' || ');return{es:es.trim(),en:(en||es).trim()}})});

const areaName=a=>mode==='both'?`${AREAS[a].es} / ${AREAS[a].en}`:AREAS[a][mode];
let selArea=null, selStage=-1;

/* simple front + back body drawing; each shaded part lists the areas it shows */
const BODY_SVG=(()=>{
  const fig=(dx,back)=>{
    const g=[];
    const base=(s)=>g.push(s.replace('<','<').replace(/^<(\w+)/,`<$1 class="base"`));
    // neutral silhouette
    base(`<rect x="${dx+24}" y="58" width="14" height="82" rx="7"/>`);
    base(`<rect x="${dx+102}" y="58" width="14" height="82" rx="7"/>`);
    base(`<rect x="${dx+40}" y="52" width="60" height="98" rx="18"/>`);
    base(`<rect x="${dx+46}" y="146" width="22" height="74" rx="10"/>`);
    base(`<rect x="${dx+72}" y="146" width="22" height="74" rx="10"/>`);
    base(`<rect x="${dx+48}" y="226" width="18" height="54" rx="8"/>`);
    base(`<rect x="${dx+74}" y="226" width="18" height="54" rx="8"/>`);
    const ar=(areas,shape)=>g.push(shape.replace(/^<(\w+)/,`<$1 class="ar" data-a="${areas}"`));
    ar('neck',`<circle cx="${dx+70}" cy="24" r="16"/>`);
    ar('neck',`<rect x="${dx+63}" y="38" width="14" height="14" rx="4"/>`);
    if(!back){
      ar('shoulders',`<ellipse cx="${dx+44}" cy="60" rx="12" ry="8"/>`);
      ar('shoulders',`<ellipse cx="${dx+96}" cy="60" rx="12" ry="8"/>`);
      ar('ribs breath',`<rect x="${dx+47}" y="64" width="46" height="34" rx="14"/>`);
      ar('core',`<rect x="${dx+50}" y="100" width="40" height="27" rx="10"/>`);
      ar('pelvis',`<rect x="${dx+44}" y="129" width="52" height="19" rx="9"/>`);
      ar('pelvicFloor',`<ellipse cx="${dx+70}" cy="151" rx="9" ry="5"/>`);
      ar('innerThighs',`<rect x="${dx+60}" y="158" width="8" height="52" rx="4"/>`);
      ar('innerThighs',`<rect x="${dx+72}" y="158" width="8" height="52" rx="4"/>`);
      ar('knees',`<circle cx="${dx+57}" cy="222" r="9"/>`);
      ar('knees',`<circle cx="${dx+83}" cy="222" r="9"/>`);
    } else {
      ar('ribs breath',`<rect x="${dx+46}" y="62" width="48" height="38" rx="14"/>`);
      ar('shoulders',`<ellipse cx="${dx+55}" cy="76" rx="10" ry="15"/>`);
      ar('shoulders',`<ellipse cx="${dx+85}" cy="76" rx="10" ry="15"/>`);
      for(let y=54;y<=132;y+=9) ar('spine',`<circle cx="${dx+70}" cy="${y}" r="3.6"/>`);
      ar('glutes',`<ellipse cx="${dx+57}" cy="140" rx="13" ry="12"/>`);
      ar('glutes',`<ellipse cx="${dx+83}" cy="140" rx="13" ry="12"/>`);
    }
    ar('feet',`<ellipse cx="${dx+56}" cy="286" rx="12" ry="6"/>`);
    ar('feet',`<ellipse cx="${dx+84}" cy="286" rx="12" ry="6"/>`);
    return g.join('');
  };
  return fig(5,false)+fig(155,true)+`<text x="75" y="308" id="bmFront"></text><text x="225" y="308" id="bmBack"></text>`;
})();

function renderFocus(){
  const f=FOCUS[cur]||[];
  if(selStage!==cur||!selArea){selArea=f[0]||'core';selStage=cur}
  // tags under the stage title
  $('focusTags').innerHTML=`<span class="flbl">${T('focusLbl')}</span>`+f.map(a=>`<button class="ftag" type="button" data-a="${a}">${areaName(a)}</button>`).join('');
  $('focusTags').querySelectorAll('.ftag').forEach(b=>b.onclick=()=>{selectArea(b.dataset.a);$('bodyPanel').scrollIntoView({block:'start',behavior:reduce?'auto':'smooth'})});
  // body map
  const map=$('bodyMap'); if(!map.dataset.ready){map.innerHTML=BODY_SVG;map.dataset.ready='1';
    map.querySelectorAll('.ar').forEach(el=>el.addEventListener('click',()=>{
      const list=el.dataset.a.split(' '); selectArea(list.find(a=>FOCUS[cur].includes(a)&&a!==selArea)||list[0]);
    }));}
  $('bmFront').textContent=T('front'); $('bmBack').textContent=T('back');
  map.setAttribute('aria-label',T('bodyTitle'));
  $('bodyTitle').textContent=T('bodyTitle'); $('bankHint').textContent=T('bankHint');
  // all area chips, this stage's focus first
  const order=[...f,...Object.keys(AREAS).filter(a=>!f.includes(a))];
  $('areaChips').innerHTML=order.map(a=>`<button type="button" class="achip${f.includes(a)?' infocus':''}" data-a="${a}" aria-pressed="false">${areaName(a)}</button>`).join('');
  $('areaChips').querySelectorAll('.achip').forEach(b=>b.onclick=()=>selectArea(b.dataset.a));
  paintFocus();
}
function selectArea(a){selArea=a;paintFocus()}
function paintFocus(){
  const f=FOCUS[cur]||[];
  $('bodyMap').querySelectorAll('.ar').forEach(el=>{
    const list=el.dataset.a.split(' ');
    el.classList.toggle('on',list.some(a=>f.includes(a)));
    el.classList.toggle('sel',list.includes(selArea));
  });
  $('areaChips').querySelectorAll('.achip').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.a===selArea)));
  $('bankTitle').textContent=`${T('cuesFor')} ${areaName(selArea)}`;
  const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  $('bankList').innerHTML=CUES[selArea].map((c,i)=>`<li><button type="button" data-i="${i}">${
    mode==='both'?`“${esc(c.es)}”<span class="tr">${esc(c.en)}</span>`:`“${esc(c[mode])}”`}</button></li>`).join('');
  $('bankList').querySelectorAll('button').forEach(b=>b.onclick=()=>{
    if(autoOn)return;                                   // don't talk over the hands-free class
    const c=CUES[selArea][+b.dataset.i]; const lg=mode==='en'?'en':'es';
    try{unlockSpeech()}catch(e){} speakToken++; if(synth){try{synth.cancel()}catch(e){}}
    say(c[lg],lg);
  });
}


/* switch class level: starts that class from the beginning */
function setLevel(lv){
  if(!LEVELS[lv]||lv===level)return;
  if(typeof autoOn!=='undefined'&&autoOn)stopAuto();
  level=lv; store.set('level',lv);
  STAGES=LEVELS[lv]; FOCUS=LEVEL_FOCUS[lv];
  cur=0; cue=0; done=[]; stageSec=0; classSec=0; running=false;
  store.set('stage',0); store.set('cue',0); store.set('done',[]); store.set('classSec',0);
  selStage=-1; applyUI(); window.scrollTo({top:0});
}
$('lvB').onclick=()=>setLevel('beginner');
$('lvI').onclick=()=>setLevel('intermediate');
$('lvA').onclick=()=>setLevel('advanced');
applyUI();
