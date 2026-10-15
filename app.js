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
{t:{es:"Bienvenida y centrado",en:"Welcome & centering"}, sub:{es:"Colocación, pelvis neutra y respiración",en:"Set-up, neutral pelvis and breathing"}, min:3, demos:["breath"],
yt:"reformer pilates intermediate warm up breathing",
how:{en:["Same supine set-up as the beginner class, but settle the room quickly: intermediate classes keep a steadier flow.","Check neutral pelvis and the rib-to-pelvis connection before you start; everything later builds on it.","Tell the class which accessories you'll use today (straps, short box, long box) so they're ready to hand."],
es:["Misma colocación boca arriba que en principiantes, pero sin entretenerse: el ritmo intermedio es más continuo.","Comprueba la pelvis neutra y la conexión costillas-pelvis antes de empezar; todo lo demás se apoya en eso.","Anuncia los accesorios del día (correas, cajón corto, cajón largo) para tenerlos a mano."]},
s:`## Preparación || Set-up
Bienvenidos a la clase de nivel intermedio. || Welcome to the intermediate class.
Hoy vamos a trabajar con más ritmo y más control, y usaremos las correas y el cajón. || Today we'll work with more flow and more control, and we'll use the straps and the box.
Antes de empezar, comprueba que tienes el cajón cerca de tu máquina. || Before we start, check that the box is close to your machine.
Ajusta los muelles a una resistencia pesada para el footwork. || Set the springs to a heavy resistance for footwork.
Siéntate en el centro del carro y túmbate boca arriba, despacio. || Sit in the middle of the carriage and slowly lie down on your back.
La cabeza en el reposacabezas y los hombros tocando los apoyos de hombros. || Head on the headrest and shoulders touching the shoulder rests.
Coloca los talones sobre la barra, separados al ancho de las caderas. || Place your heels on the bar, hip-width apart.
Las rodillas apuntan al techo y las piernas están paralelas. || Your knees point to the ceiling and your legs are parallel.
Brazos largos a los lados, con las palmas hacia abajo. || Arms long by your sides, palms down.
## Pelvis neutra || Neutral pelvis
Ahora vamos a buscar la pelvis neutra. || Now let's find a neutral pelvis.
Imagina que los huesos de la cadera y el pubis forman un triángulo plano. || Imagine your hip bones and pubic bone form a flat triangle.
Ese triángulo está paralelo al techo. || That triangle is parallel to the ceiling.
Debajo de la zona lumbar hay un pequeño espacio natural. || There is a small natural space under your low back.
No lo aplastes contra el carro y no lo arquees. || Don't press it into the carriage and don't arch it.
## Respiración || Breathing
Inhala por la nariz y deja que las costillas se abran hacia los lados. || Inhale through your nose and let your ribs widen to the sides.
Exhala por la boca y siente cómo las costillas se cierran hacia la pelvis. || Exhale through your mouth and feel your ribs close toward your pelvis.
Al final de la exhalación, lleva el ombligo suavemente hacia la columna. || At the end of the exhale, draw your navel gently toward your spine.
Esa es la conexión del centro que vamos a mantener durante toda la clase. || That's the core connection we'll keep for the whole class.
Inhala... || Inhale...
Exhala y conecta. || Exhale and connect.
* 5 respiraciones. || 5 breaths.
Relaja los hombros, lejos de las orejas. || Relax your shoulders away from your ears.
Alarga la nuca y relaja la mandíbula. || Lengthen the back of your neck and relax your jaw.
Muy bien. Empezamos. || Very good. Let's begin.`},

{t:{es:"Footwork completo",en:"Full footwork"}, sub:{es:"Cuatro posiciones, una pierna y elevaciones de talón",en:"Four positions, single leg and heel raises"}, min:7, demos:["footwork"],
yt:"reformer pilates intermediate footwork single leg",
how:{en:["Springs (typical): heavy, e.g. 3–4 springs. Single leg: take one spring off.","Keep a steady rhythm: exhale out, inhale in, no pause at either end.","Single leg: the pelvis stays level. If one hip lifts, shorten the range.","Wide second: knees track over the second toe; narrow the stance if the knees roll in."],
es:["Muelles (habitual): pesados, p. ej. 3–4 muelles. Una pierna: quita un muelle.","Ritmo constante: exhala al salir, inhala al volver, sin pausa en los extremos.","Una pierna: la pelvis se queda nivelada. Si una cadera se levanta, reduce el recorrido.","Segunda abierta: rodillas sobre el segundo dedo; cierra un poco si las rodillas caen hacia dentro."]},
s:`## Talones en paralelo || Parallel heels
Empezamos con los talones sobre la barra, separados al ancho de las caderas. || We start with your heels on the bar, hip-width apart.
Flexiona los pies: los dedos apuntan al techo. || Flex your feet: your toes point to the ceiling.
Inhala para preparar. || Inhale to prepare.
Exhala y empuja la barra con los talones: el carro se aleja. || Exhale and press the bar with your heels: the carriage moves away.
Estira las piernas por completo, pero sin bloquear las rodillas. || Straighten your legs fully, but don't lock your knees.
Inhala y vuelve despacio, resistiendo los muelles. || Inhale and come back slowly, resisting the springs.
El carro vuelve sin golpear. || The carriage comes back without banging.
Continúa: exhala al salir, inhala al volver. || Keep going: exhale out, inhale in.
* 10 repeticiones. || 10 reps.
Mientras te mueves, la pelvis se queda quieta. || As you move, your pelvis stays still.
Las costillas siguen cerradas. || Your ribs stay closed.
Últimas tres. Tres... dos... uno. || Last three. Three... two... one.
## Puntas en V || Toes in V
Ahora junta los talones. || Now bring your heels together.
Sube los talones y apoya solo la parte delantera de los pies en la barra. || Lift your heels and rest only the balls of your feet on the bar.
Abre las puntas en una V pequeña. || Open your toes into a small V.
Las rodillas se abren en la misma dirección que los dedos. || Your knees open in the same direction as your toes.
Aprieta suavemente los talones entre sí. || Gently squeeze your heels together.
Exhala y empuja. || Exhale and push.
Inhala y vuelve. || Inhale and return.
* 10 repeticiones. || 10 reps.
Los talones se quedan altos y quietos, como si llevaras tacones. || Your heels stay high and still, as if you were wearing heels.
No dejes que los talones bajen al volver. || Don't let your heels drop as you come back.
## Segunda abierta || Wide second
Separa los pies hacia los extremos de la barra. || Move your feet out toward the ends of the bar.
Apoya los talones en la barra y gira las piernas hacia fuera desde la cadera. || Put your heels on the bar and turn your legs out from the hip.
Las rodillas apuntan en la misma dirección que los pies. || Your knees point the same way as your feet.
Exhala, empuja. || Exhale, push.
Inhala, vuelve. || Inhale, return.
* 10 repeticiones. || 10 reps.
Al empujar, aprieta la parte interna de los muslos, como si quisieras juntar las piernas. || As you push, squeeze your inner thighs, as if you wanted to bring your legs together.
Si las rodillas caen hacia dentro, acerca un poco los pies. || If your knees fall inward, bring your feet a little closer together.
## Una pierna || Single leg @singleleg
Ahora quita un muelle para trabajar con una sola pierna. || Now take one spring off to work on one leg.
Coloca el talón derecho en el centro de la barra. || Place your right heel in the center of the bar.
Lleva la pierna izquierda a mesa: rodilla sobre la cadera, espinilla paralela al techo. || Bring your left leg into tabletop: knee over your hip, shin parallel to the ceiling.
Inhala para preparar. || Inhale to prepare.
Exhala y empuja solo con la pierna derecha. || Exhale and push with your right leg only.
Inhala y vuelve. || Inhale and come back.
La pierna en mesa no se mueve. || The tabletop leg doesn't move.
Las dos caderas pesan igual sobre el carro. || Both hips weigh the same on the carriage.
* 8 por lado. || 8 per side.
Últimas dos. Y vuelve. || Last two. And come back.
Cambia: talón izquierdo en la barra y pierna derecha en mesa. || Switch: left heel on the bar and right leg in tabletop.
Exhala, empuja. Inhala, vuelve. || Exhale, push. Inhale, return.
## Elevaciones de talón || Heel raises @running
Vuelve a poner los muelles pesados. || Put the heavy springs back on.
Apoya las dos puntas de los pies en la barra, en paralelo. || Place both balls of the feet on the bar, parallel.
Empuja el carro hasta estirar las piernas y quédate fuera. || Push the carriage out until your legs are straight and stay there.
Inhala y baja los dos talones por debajo de la barra. || Inhale and lower both heels under the bar.
Siente el estiramiento en los gemelos. || Feel the stretch in your calves.
Exhala y sube los talones lo más alto que puedas. || Exhale and lift your heels as high as you can.
* 10 repeticiones. || 10 reps.
Ahora alterna: baja un talón mientras doblas la otra rodilla. || Now alternate: lower one heel as you bend the other knee.
Como si caminaras sin moverte del sitio. || As if you were walking on the spot.
* 10 por lado. || 10 per side.
Termina con las dos piernas estiradas. || Finish with both legs straight.
Dobla las rodillas y vuelve a casa sin golpear. || Bend your knees and come home without banging.`},

{t:{es:"Hundred con correas",en:"Hundred with straps"}, sub:{es:"Bombeo de brazos con resistencia",en:"Arm pumps with resistance"}, min:3, demos:["hundredstraps"],
yt:"reformer pilates hundred with straps",
how:{en:["Springs (typical): light–medium, e.g. 1–2 springs.","Straps: the arms press down from the shoulders, not the elbows. Keep tension in the straps the whole time.","Offer three leg levels: tabletop, legs to the ceiling, legs on a low diagonal. Choose the one where the low back stays still.","Head down is always an option if the neck works."],
es:["Muelles (habitual): ligeros–medios, p. ej. 1–2 muelles.","Correas: los brazos empujan desde los hombros, no desde los codos. Mantén tensión en las correas todo el tiempo.","Ofrece tres niveles de piernas: mesa, piernas al techo o diagonal baja. Elige el que mantiene quieta la zona lumbar.","Bajar la cabeza siempre es una opción si trabaja el cuello."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia ligera o media. || Set the springs to a light or medium resistance.
Sin levantarte, alarga los brazos por encima de la cabeza y coge las correas. || Without getting up, reach your arms overhead and take the straps.
Mete las manos en las asas, una en cada mano. || Slide your hands into the handles, one in each hand.
Lleva los brazos hacia el techo, justo encima de los hombros. || Bring your arms up toward the ceiling, right above your shoulders.
Levanta una pierna a mesa... y después la otra. || Lift one leg to tabletop... and then the other.
Rodillas sobre las caderas, espinillas paralelas al techo. || Knees over your hips, shins parallel to the ceiling.
## Entrar en la posición || Coming into position
Inhala para preparar. || Inhale to prepare.
Exhala y baja los brazos rectos hasta los lados de las caderas. || Exhale and press your straight arms down beside your hips.
Al mismo tiempo, eleva la cabeza y los hombros del carro. || At the same time, lift your head and shoulders off the carriage.
Mira hacia tus rodillas. || Look toward your knees.
Las manos quedan unos centímetros por encima del carro. || Your hands stay a few centimetres above the carriage.
## Hundred || Hundred
Bombea los brazos arriba y abajo: pequeño, rápido y con energía. || Pump your arms up and down: small, quick and energetic.
Inhala en cinco tiempos: uno, dos, tres, cuatro, cinco. || Inhale for five counts: one, two, three, four, five.
Exhala en cinco tiempos: uno, dos, tres, cuatro, cinco. || Exhale for five counts: one, two, three, four, five.
Inhala: dos, tres, cuatro, cinco. || Inhale: two, three, four, five.
Exhala: dos, tres, cuatro, cinco. || Exhale: two, three, four, five.
Continúa con ese ritmo. || Keep that rhythm.
El movimiento sale de los hombros, no de las muñecas. || The movement comes from your shoulders, not your wrists.
Mantén las correas siempre con tensión. || Keep the straps under tension the whole time.
Si tu espalda está estable, estira las piernas en diagonal hacia arriba. || If your back is stable, extend your legs upward on a diagonal.
Si sientes la zona lumbar, vuelve a mesa. || If you feel your lower back, go back to tabletop.
Si se te cansa el cuello, baja la cabeza y sigue con los brazos. || If your neck gets tired, lower your head and keep going with your arms.
* 10 series de respiración. || 10 breath cycles.
Últimas dos series. || Last two cycles.
Última. || Last one.
## Salir || Coming out
Dobla las rodillas a mesa. || Bend your knees back to tabletop.
Lleva los brazos de nuevo hacia el techo. || Bring your arms back up toward the ceiling.
Baja la cabeza al reposacabezas. || Lower your head onto the headrest.
Deja las correas en las manos: las vamos a usar ahora en los pies. || Keep the straps in your hands: we're going to use them on your feet next.`},

{t:{es:"Pies en correas",en:"Feet in straps"}, sub:{es:"Rana, círculos y aperturas",en:"Frog, leg circles and openings"}, min:6, demos:["frog"],
yt:"reformer pilates feet in straps frog leg circles",
how:{en:["Springs (typical): medium, e.g. 2 springs.","Set up safely: one foot at a time into the straps, knees bent, then extend.","The rule for every exercise here: the pelvis doesn't move. Range comes second.","Watch the hip flexors: if the front of the hips grips, make the movements smaller and higher."],
es:["Muelles (habitual): medios, p. ej. 2 muelles.","Colocación segura: un pie cada vez en las correas, con las rodillas dobladas, y después estira.","La regla en todos estos ejercicios: la pelvis no se mueve. El recorrido viene después.","Vigila los flexores de cadera: si la parte delantera de la cadera se agarra, movimientos más pequeños y más altos."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia media. || Set the springs to a medium resistance.
Dobla las rodillas hacia el pecho. || Bend your knees in toward your chest.
Coloca la correa derecha en el arco del pie derecho. || Place the right strap around the arch of your right foot.
Ahora la correa izquierda en el arco del pie izquierdo. || Now the left strap around the arch of your left foot.
Estira las piernas hacia el techo. || Straighten your legs toward the ceiling.
Brazos largos a los lados, presionando suavemente el carro. || Arms long by your sides, pressing gently into the carriage.
Pelvis neutra y quieta: así se queda en todos estos ejercicios. || Pelvis neutral and still: that's how it stays for all of these exercises.
## Rana || Frog
Junta los talones y abre las rodillas, en forma de diamante. || Bring your heels together and open your knees into a diamond shape.
Dobla las rodillas hacia ti, sin que la pelvis se levante. || Bend your knees toward you, without your pelvis lifting.
Inhala para preparar. || Inhale to prepare.
Exhala y estira las piernas en diagonal, apretando los talones. || Exhale and extend your legs on a diagonal, squeezing your heels together.
Inhala y vuelve a doblar las rodillas, despacio. || Inhale and bend your knees again, slowly.
El carro se mueve; la pelvis no. || The carriage moves; the pelvis doesn't.
* 8 repeticiones. || 8 reps.
Baja las piernas solo hasta donde la espalda se mantenga estable. || Only lower your legs as far as your back stays stable.
Últimas tres. Tres... dos... uno. || Last three. Three... two... one.
## Círculos de piernas || Leg circles @legcircles
Estira las piernas hacia el techo, juntas y largas. || Extend your legs toward the ceiling, long and together.
Gira las piernas un poco hacia fuera desde la cadera. || Turn your legs out slightly from the hip.
Inhala y abre las piernas hacia los lados. || Inhale and open your legs to the sides.
Exhala, bájalas en diagonal y júntalas. || Exhale, lower them on a diagonal and bring them together.
Sube de nuevo hacia el techo: eso es un círculo. || Come back up toward the ceiling: that's one circle.
* 5 en cada dirección. || 5 in each direction.
Ahora cambiamos de dirección: baja las piernas juntas, ábrelas y sube. || Now reverse: lower your legs together, open them and come up.
Haz círculos solo del tamaño que puedas controlar. || Make circles only as big as you can control.
La pelvis no se balancea de lado a lado. || Your pelvis doesn't rock from side to side.
## Aperturas || Openings @legcircles
Piernas hacia el techo, ligeramente giradas hacia fuera. || Legs toward the ceiling, slightly turned out.
Inhala y abre las piernas hacia los lados, hasta donde sea cómodo. || Inhale and open your legs to the sides, as far as is comfortable.
Exhala y júntalas, apretando la parte interna de los muslos. || Exhale and draw them together, squeezing your inner thighs.
Imagina que cierras una puerta pesada con las piernas. || Imagine closing a heavy door with your legs.
* 8 repeticiones. || 8 reps.
## Salir || Coming out
Dobla las rodillas hacia el pecho. || Bend your knees in toward your chest.
Saca las correas de los pies, primero una y después la otra. || Take the straps off your feet, one and then the other.
Deja las correas en su sitio con cuidado. || Put the straps back carefully.
Rueda hacia un lado y siéntate despacio. || Roll to one side and sit up slowly.`},

{t:{es:"Stomach massage",en:"Stomach massage"}, sub:{es:"Sentada: espalda redonda y manos atrás",en:"Seated: round back and hands back"}, min:5, demos:["stomach"],
yt:"reformer pilates stomach massage series",
how:{en:["Springs (typical): medium, e.g. 2–3 springs.","Sit close enough to the shoulder rests that the spine can round without leaning on them.","Round back: the shape of the spine stays fixed; the legs and ankles do all the moving.","Hands back: lift up out of the hips; don't let the chest collapse or the ribs flare."],
es:["Muelles (habitual): medios, p. ej. 2–3 muelles.","Siéntate lo bastante cerca de los apoyos de hombros para redondear sin apoyarte en ellos.","Espalda redonda: la forma de la columna no cambia; las piernas y los tobillos hacen todo el movimiento.","Manos atrás: crece desde las caderas; que el pecho no se hunda ni las costillas se abran."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia media. || Set the springs to a medium resistance.
Siéntate en el carro, mirando hacia la barra. || Sit on the carriage, facing the bar.
Acércate a los apoyos de hombros, pero sin apoyarte en ellos. || Move close to the shoulder rests, but don't lean on them.
Junta los talones y apoya las puntas de los pies en la barra, en V. || Bring your heels together and place the balls of your feet on the bar in a V.
Las rodillas están dobladas y abiertas en la dirección de los pies. || Your knees are bent and open in the direction of your feet.
Coloca las manos en el borde del carro, junto a las caderas. || Place your hands on the edge of the carriage, beside your hips.
Ahora redondea la espalda: lleva el ombligo hacia dentro y forma una C con la columna. || Now round your back: draw your navel in and make a C with your spine.
La mirada va hacia el ombligo. || Your gaze goes toward your navel.
## Espalda redonda || Round back
Inhala para preparar. || Inhale to prepare.
Exhala y empuja la barra para estirar las piernas. || Exhale and press the bar to straighten your legs.
Con las piernas estiradas, baja los talones por debajo de la barra. || With your legs straight, lower your heels under the bar.
Sube los talones de nuevo. || Lift your heels again.
Inhala, dobla las rodillas y vuelve con control. || Inhale, bend your knees and come back with control.
Ese es el ciclo: estira, baja, sube y vuelve. || That's the cycle: straighten, lower, lift and return.
* 8 repeticiones. || 8 reps.
La forma de C no cambia: solo se mueven las piernas y los tobillos. || The C shape doesn't change: only your legs and ankles move.
No te apoyes en las manos; el abdomen te sostiene. || Don't lean on your hands; your abs hold you up.
Últimas dos. || Last two.
## Manos atrás || Hands back
Ahora lleva las manos atrás y apóyalas sobre los apoyos de hombros. || Now take your hands back and rest them on the shoulder rests.
Siéntate alto: crece desde las caderas hasta la coronilla. || Sit tall: grow from your hips up to the crown of your head.
Abre el pecho, pero mantén las costillas cerradas. || Open your chest, but keep your ribs closed.
Exhala y estira las piernas. || Exhale and straighten your legs.
Baja los talones... y súbelos. || Lower your heels... and lift them.
Inhala y vuelve. || Inhale and return.
* 6 repeticiones. || 6 reps.
La espalda no se mueve mientras las piernas trabajan. || Your back doesn't move while your legs work.
## Estiramiento final || Final stretch
Estira las piernas y deja el carro fuera. || Straighten your legs and keep the carriage out.
Lleva los brazos al frente, a la altura de los hombros. || Reach your arms forward, at shoulder height.
Redondea suavemente hacia tus piernas. || Round gently toward your legs.
Respira aquí. || Breathe here.
Rueda hacia arriba y vuelve a casa con control. || Roll up and come home with control.
Bájate de la máquina con cuidado: ahora vamos a colocar el cajón. || Step off the machine carefully: now we're going to set up the box.`},

{t:{es:"Short box",en:"Short box"}, sub:{es:"Espalda redonda, espalda plana y torsión",en:"Round back, flat back and twist"}, min:6, demos:["shortbox"],
yt:"reformer pilates short box series round back flat back twist",
how:{en:["Springs: most teachers use a medium spring so the carriage doesn't move. Check the foot strap is secure before anyone leans back.","Round back: the movement starts with a pelvic tuck; stop when the abdomen starts to dome.","Flat back: a long line from head to tailbone, hinging from the hips. A small range is fine.","Twist: hips square and still; rotation comes from the ribcage, not the arms."],
es:["Muelles: lo habitual es un muelle medio para que el carro no se mueva. Comprueba que la correa de pies está bien sujeta antes de inclinarse hacia atrás.","Espalda redonda: el movimiento empieza basculando la pelvis; para cuando el abdomen se empiece a abombar.","Espalda plana: una línea larga de la cabeza al coxis, inclinando desde las caderas. Un recorrido pequeño está bien.","Torsión: caderas cuadradas y quietas; la rotación viene de la caja torácica, no de los brazos."]},
s:`## Preparación || Set-up
Coloca el cajón corto a lo ancho del carro, pegado a los apoyos de hombros. || Place the short box across the carriage, against the shoulder rests.
Pon un muelle medio: el carro tiene que quedarse quieto. || Use a medium spring: the carriage needs to stay still.
Comprueba que la correa de pies está bien sujeta. || Check that the foot strap is secure.
Siéntate en el centro del cajón, mirando hacia la barra. || Sit in the middle of the box, facing the bar.
Mete los pies por debajo de la correa y flexiónalos, empujando la correa hacia arriba. || Slide your feet under the strap and flex them, pressing up into the strap.
Las rodillas, ligeramente dobladas y al ancho de las caderas. || Knees slightly bent and hip-width apart.
Siéntate alto, justo encima de los isquiones. || Sit tall, right on top of your sit bones.
## Espalda redonda || Round back
Cruza los brazos a la altura del pecho. || Cross your arms at chest height.
Inhala y crece hacia arriba. || Inhale and grow tall.
Exhala y bascula la pelvis: el coxis va hacia debajo de ti. || Exhale and tuck your pelvis: your tailbone curls under you.
Redondea la espalda y baja hacia atrás, vértebra por vértebra. || Round your back and lower back, one vertebra at a time.
Baja solo hasta donde el abdomen se quede plano. || Only go as far as your abdomen stays flat.
Inhala y quédate ahí. || Inhale and stay there.
Exhala y vuelve a subir, redondeando hacia delante. || Exhale and come back up, rounding forward.
Termina creciendo otra vez hacia arriba. || Finish by growing tall again.
* 6 repeticiones. || 6 reps.
Si el abdomen se abomba, reduce el recorrido. || If your abdomen domes, make the range smaller.
## Espalda plana || Flat back @flatback
Ahora lleva los brazos arriba, junto a las orejas. || Now raise your arms up beside your ears.
Inhala y crece. || Inhale and grow tall.
Exhala e inclínate hacia atrás desde las caderas, con la espalda totalmente recta. || Exhale and hinge back from your hips, with your back completely straight.
Imagina que tu cuerpo es una tabla, de la cabeza al coxis. || Imagine your body is a plank, from head to tailbone.
Inhala y vuelve arriba con la espalda recta. || Inhale and come back up with your back straight.
* 5 repeticiones. || 5 reps.
Las costillas no se abren y los brazos no se van hacia atrás. || Your ribs don't flare and your arms don't drop back.
Un recorrido pequeño está bien. || A small range is fine.
## Torsión || Twist @shortbox
Pon las manos detrás de la cabeza, con los codos abiertos. || Put your hands behind your head, elbows wide.
Siéntate alto. || Sit tall.
Exhala y gira hacia la derecha desde la cintura. || Exhale and rotate to the right from your waist.
Las caderas miran hacia la barra; solo gira el pecho. || Your hips face the bar; only your chest turns.
Inhala y vuelve al centro. || Inhale and return to center.
Exhala y gira hacia la izquierda. || Exhale and rotate to the left.
Inhala y al centro. || Inhale and back to center.
* 4 por lado. || 4 per side.
Crece un poco más con cada giro. || Grow a little taller with each twist.
Saca los pies de la correa y bájate del cajón. || Take your feet out of the strap and come off the box.`},

{t:{es:"Long box: tirar de las correas",en:"Long box: pulling straps"}, sub:{es:"Boca abajo: extensión de espalda",en:"Face down: back extension"}, min:4, demos:["pullstraps"],
yt:"reformer pilates long box pulling straps T pull",
how:{en:["Springs (typical): light, e.g. 1 spring.","Lift the chest only as high as the abs can support; the low back shouldn't pinch.","Lead with the shoulder blades sliding down, not with the hands.","Keep the neck in line with the spine: no looking up."],
es:["Muelles (habitual): ligeros, p. ej. 1 muelle.","Eleva el pecho solo hasta donde el abdomen te sostenga; la zona lumbar no debe pinzarse.","El movimiento lo empiezan las escápulas bajando, no las manos.","Cuello en línea con la columna: no mires hacia arriba."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia ligera. || Set the springs to a light resistance.
Gira el cajón y colócalo a lo largo del carro, contra los apoyos de hombros. || Turn the box and place it lengthwise on the carriage, against the shoulder rests.
Túmbate boca abajo sobre el cajón, con la cabeza hacia las correas. || Lie face down on the box with your head toward the straps.
El pecho queda justo en el borde del cajón; los hombros, por fuera. || Your chest is right at the edge of the box; your shoulders are past it.
Coge las correas por las cuerdas, por encima de las hebillas. || Hold the straps by the ropes, above the buckles.
Brazos largos hacia delante y hacia abajo, en línea con los hombros. || Arms long, forward and down, in line with your shoulders.
Piernas largas y juntas, apoyadas sobre el cajón. || Legs long and together, resting on the box.
Activa el abdomen: despega el ombligo del cajón. || Engage your abs: lift your navel away from the box.
## Tirar de las correas || Pulling straps
Inhala para preparar. || Inhale to prepare.
Exhala: baja las escápulas y tira de los brazos rectos hacia las caderas. || Exhale: draw your shoulder blades down and pull your straight arms toward your hips.
Mientras tiras, eleva un poco el pecho. || As you pull, lift your chest a little.
El carro se acerca a las correas. || The carriage moves toward the straps.
Inhala y vuelve despacio, alargando la espalda. || Inhale and return slowly, lengthening your back.
* 6 repeticiones. || 6 reps.
Mira hacia abajo y un poco al frente: el cuello sigue la línea de la columna. || Look down and slightly forward: your neck follows the line of your spine.
Las piernas no se levantan. || Your legs don't lift.
## Brazos en T || T-pull
Ahora abre los brazos hacia los lados, en forma de T. || Now open your arms out to the sides, in a T.
Las palmas miran hacia el suelo. || Your palms face the floor.
Exhala y lleva los brazos hacia las caderas, juntando las escápulas. || Exhale and sweep your arms to your hips, drawing your shoulder blades together.
Eleva un poco el pecho. || Lift your chest a little.
Inhala y vuelve a la T, despacio. || Inhale and return to the T, slowly.
* 6 repeticiones. || 6 reps.
Glúteos suaves, piernas largas. || Glutes soft, legs long.
## Salir || Coming out
Lleva los brazos al frente y deja que el carro vuelva a casa. || Reach your arms forward and let the carriage come home.
Suelta las correas con cuidado. || Release the straps carefully.
Bájate del cajón y quítalo de la máquina. || Come off the box and take it off the machine.`},

{t:{es:"Knee stretch",en:"Knee stretch"}, sub:{es:"Espalda redonda y espalda plana",en:"Round back and flat back"}, min:4, demos:["kneestretch"],
yt:"reformer pilates knee stretch round back flat back",
how:{en:["Springs (typical): medium, e.g. 2 springs.","Shoulders stay stacked over the wrists for the whole set.","The carriage moves from the hips and thighs; the back keeps its shape.","Flat back is harder: don't let the low back sag. Go back to round back if it does."],
es:["Muelles (habitual): medios, p. ej. 2 muelles.","Los hombros se quedan sobre las muñecas durante toda la serie.","El carro se mueve desde las caderas y los muslos; la espalda mantiene su forma.","La espalda plana es más difícil: que la zona lumbar no se hunda. Si se hunde, vuelve a espalda redonda."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia media. || Set the springs to a medium resistance.
Arrodíllate en el carro, mirando hacia la barra. || Kneel on the carriage, facing the bar.
Apoya los pies contra los apoyos de hombros. || Put your feet against the shoulder rests.
Coloca las manos sobre la barra, a la anchura de los hombros. || Place your hands on the bar, shoulder-width apart.
Los hombros quedan justo encima de las muñecas. || Your shoulders are right above your wrists.
## Espalda redonda || Round back
Redondea la espalda, como un gato. || Round your back, like a cat.
La mirada va hacia las rodillas. || Your gaze goes toward your knees.
Exhala y empuja el carro hacia atrás con las piernas. || Exhale and push the carriage back with your legs.
Inhala y vuelve con control. || Inhale and come back with control.
* 10 repeticiones. || 10 reps.
La espalda se queda redonda; solo se mueven las piernas. || Your back stays round; only your legs move.
Los brazos se quedan fuertes y quietos. || Your arms stay strong and still.
Últimas tres. Tres... dos... uno. || Last three. Three... two... one.
## Espalda plana || Flat back
Ahora alarga la espalda: plana como una mesa. || Now lengthen your back: flat as a table.
El pecho va hacia delante y el coxis hacia atrás. || Your chest goes forward and your tailbone goes back.
Mira al suelo, justo delante de la barra. || Look at the floor, just in front of the bar.
Exhala y empuja el carro. || Exhale and push the carriage.
Inhala y vuelve. || Inhale and return.
* 10 repeticiones. || 10 reps.
Que la zona lumbar no se hunda. || Don't let your low back sag.
Si se hunde, vuelve a la espalda redonda. || If it sags, go back to round back.
## Para terminar || To finish
Vuelve a casa sin golpear. || Come home without banging.
Siéntate sobre los talones y deja las manos en la barra. || Sit back on your heels and leave your hands on the bar.
Respira y relaja los hombros. || Breathe and relax your shoulders.`},

{t:{es:"Serie de long stretch",en:"Long stretch series"}, sub:{es:"Long stretch, down stretch, up stretch y elephant",en:"Long stretch, down stretch, up stretch and elephant"}, min:6, demos:["longstretch"],
yt:"reformer pilates long stretch series down stretch up stretch",
how:{en:["Springs (typical): light–medium, e.g. 1–2 springs. Never too light: the carriage can shoot out.","Plank: shoulders over wrists, ribs closed, glutes and inner thighs on.","Down stretch is a gentle extension: lift the chest, don't crunch the low back.","Step on and off with care; keep one hand on the bar until the feet are set."],
es:["Muelles (habitual): ligeros–medios, p. ej. 1–2 muelles. Nunca demasiado ligeros: el carro puede salir disparado.","Plancha: hombros sobre las muñecas, costillas cerradas, glúteos y aductores activos.","El down stretch es una extensión suave: eleva el pecho sin hundir la zona lumbar.","Sube y baja de la máquina con cuidado; una mano en la barra hasta tener los pies colocados."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia ligera o media; nunca demasiado ligera. || Set the springs to a light or medium resistance; never too light.
Coloca las manos sobre la barra, a la anchura de los hombros. || Place your hands on the bar, shoulder-width apart.
Pisa el carro con un pie y apoya la punta contra el apoyo de hombros. || Step one foot onto the carriage and put the ball of the foot against the shoulder rest.
Ahora el otro pie, también contra el apoyo de hombros. || Now the other foot, also against the shoulder rest.
## Long stretch || Long stretch
Estira las piernas y forma una plancha. || Straighten your legs and come into a plank.
Una línea recta de la cabeza a los talones. || One straight line from your head to your heels.
Los hombros, encima de las muñecas. || Shoulders over your wrists.
Glúteos y aductores activos, costillas cerradas. || Glutes and inner thighs on, ribs closed.
Inhala y empuja el carro hacia atrás con los pies, sin romper la línea. || Inhale and push the carriage back with your feet, without breaking the line.
Exhala y vuelve, hasta tener otra vez los hombros sobre las muñecas. || Exhale and come back until your shoulders are over your wrists again.
* 5 repeticiones. || 5 reps.
Mueves todo el cuerpo como una sola pieza. || You move your whole body as one piece.
No dejes caer las caderas. || Don't let your hips drop.
## Down stretch || Down stretch @downstretch
Desde la plancha, baja las rodillas al carro. || From the plank, lower your knees onto the carriage.
Los pies siguen contra los apoyos de hombros. || Your feet stay against the shoulder rests.
Lleva las caderas hacia delante y abre el pecho. || Bring your hips forward and open your chest.
Es una extensión suave: piensa en alargarte hacia arriba, no en hundirte. || It's a gentle extension: think of lengthening up, not sinking down.
Inhala y empuja el carro hacia atrás con los brazos. || Inhale and push the carriage back with your arms.
Exhala y vuelve, llevando el carro con el abdomen. || Exhale and come back, drawing the carriage in with your abs.
* 5 repeticiones. || 5 reps.
Abdomen activo para proteger la zona lumbar. || Abs on to protect your low back.
## Up stretch || Up stretch @upstretch
Vuelve a la plancha, y ahora sube las caderas hacia el techo. || Come back to plank, and now lift your hips toward the ceiling.
Los hombros siguen encima de las muñecas. || Your shoulders stay over your wrists.
Inhala y empuja el carro hacia atrás, bajando las caderas hasta la plancha. || Inhale and push the carriage back, lowering your hips into plank.
Exhala y vuelve, subiendo las caderas hacia el techo. || Exhale and come back, lifting your hips toward the ceiling.
* 5 repeticiones. || 5 reps.
El abdomen tira de las caderas hacia arriba. || Your abs pull your hips up.
## Elephant || Elephant @elephant
Con las caderas altas, baja los talones al carro, contra los apoyos de hombros. || With your hips high, lower your heels onto the carriage, against the shoulder rests.
Forma una V invertida; la cabeza cuelga entre los brazos. || Make an upside-down V; your head hangs between your arms.
Exhala y empuja el carro hacia atrás con las piernas. || Exhale and push the carriage back with your legs.
Inhala y vuelve. || Inhale and return.
* 8 repeticiones. || 8 reps.
El tronco y las caderas no se mueven: solo se mueve el carro. || Your torso and hips don't move: only the carriage moves.
Últimas tres. Tres... dos... uno. || Last three. Three... two... one.
Vuelve a casa y baja al suelo, primero un pie y después el otro. || Come home and step down to the floor, one foot and then the other.`},

{t:{es:"Brazos de rodillas",en:"Kneeling arm work"}, sub:{es:"Expansión de pecho con correas",en:"Chest expansion with straps"}, min:3, demos:["chestexp"],
yt:"reformer pilates kneeling chest expansion",
how:{en:["Springs (typical): light, e.g. 1 spring.","Knees close to the shoulder rests for stability; pad the knees if needed.","The torso stays vertical: no leaning back as the arms pull.","Head turns are small and smooth; skip them for anyone with neck issues."],
es:["Muelles (habitual): ligeros, p. ej. 1 muelle.","Rodillas cerca de los apoyos de hombros para tener estabilidad; pon algo blando bajo las rodillas si hace falta.","El tronco se queda vertical: no te inclines hacia atrás al tirar.","Los giros de cabeza son pequeños y suaves; sáltalos si hay molestias en el cuello."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia ligera. || Set the springs to a light resistance.
Sube al carro y arrodíllate mirando hacia las correas. || Get onto the carriage and kneel facing the straps.
Las rodillas, cerca de los apoyos de hombros y al ancho de las caderas. || Knees close to the shoulder rests and hip-width apart.
Los pies, relajados hacia la barra. || Feet relaxed toward the bar.
Coge una correa en cada mano. || Take a strap in each hand.
Brazos largos al frente, a la altura de las caderas. || Arms long in front, at hip height.
Crece desde las rodillas hasta la coronilla. || Grow tall from your knees to the crown of your head.
## Expansión de pecho || Chest expansion
Inhala para preparar. || Inhale to prepare.
Exhala y tira de los brazos rectos hacia atrás, por detrás de las caderas. || Exhale and pull your straight arms back, behind your hips.
Abre el pecho. || Open your chest.
Gira la cabeza a la derecha... al centro... a la izquierda... y al centro. || Turn your head to the right... center... to the left... and center.
Inhala y deja que los brazos vuelvan al frente, con control. || Inhale and let your arms come back to the front, with control.
* 6 repeticiones. || 6 reps.
El tronco no se inclina hacia atrás: solo se mueven los brazos. || Your torso doesn't lean back: only your arms move.
Las costillas siguen cerradas aunque el pecho se abra. || Your ribs stay closed even as your chest opens.
Suelta las correas con cuidado y siéntate sobre los talones. || Release the straps carefully and sit back on your heels.`},

{t:{es:"Mermaid con torsión",en:"Mermaid with twist"}, sub:{es:"Estiramiento lateral y rotación",en:"Side stretch and rotation"}, min:4, demos:["mermaid"],
yt:"reformer pilates mermaid with twist",
how:{en:["Springs (typical): light, e.g. 1 spring.","The stretch comes from lengthening, not collapsing: keep the waist long on both sides.","In the twist, the hips stay grounded; rotation comes from the ribcage.","Do the full sequence on both sides."],
es:["Muelles (habitual): ligeros, p. ej. 1 muelle.","El estiramiento viene de alargar, no de hundirse: la cintura larga por los dos lados.","En la torsión, las caderas se quedan apoyadas; la rotación viene de la caja torácica.","Haz la secuencia completa por los dos lados."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia ligera. || Set the springs to a light resistance.
Siéntate de lado sobre el carro, con la barra a tu derecha. || Sit sideways on the carriage, with the bar on your right.
Dobla las piernas en Z o crúzalas, como te resulte más cómodo. || Fold your legs in a Z-sit or cross them, whichever is more comfortable.
La mano derecha, sobre la barra. || Your right hand on the bar.
El brazo izquierdo, largo hacia el techo. || Your left arm long toward the ceiling.
## Mermaid || Mermaid
Inhala y crece. || Inhale and grow tall.
Exhala, empuja la barra con la mano derecha y alarga el cuerpo hacia la derecha. || Exhale, push the bar with your right hand and lengthen your body to the right.
El brazo izquierdo dibuja un arco por encima de la cabeza. || Your left arm draws an arc over your head.
Inhala aquí y respira hacia las costillas de la izquierda. || Inhale here and breathe into your left ribs.
Exhala y vuelve al centro. || Exhale and come back to center.
Ahora inclínate hacia la izquierda, alejándote de la barra. || Now bend to the left, away from the bar.
* 3 repeticiones. || 3 reps.
Alarga la cintura por los dos lados; no te hundas. || Lengthen your waist on both sides; don't collapse.
## Torsión || Twist
Empuja el carro hacia fuera y quédate. || Push the carriage out and stay.
Gira el pecho hacia la barra y pon las dos manos sobre ella. || Turn your chest toward the bar and put both hands on it.
Las caderas se quedan apoyadas en el carro. || Your hips stay down on the carriage.
Inhala y empuja el carro con la espalda larga. || Inhale and push the carriage with a long back.
Exhala y vuelve, redondeando un poco. || Exhale and come back, rounding slightly.
* 3 repeticiones. || 3 reps.
Vuelve al centro y deja que el carro vuelva a casa. || Come back to center and let the carriage come home.
## Cambiar de lado || Change sides
Gira hacia el otro lado: ahora la barra está a tu izquierda. || Turn around: now the bar is on your left.
Mano izquierda en la barra, brazo derecho hacia el techo. || Left hand on the bar, right arm toward the ceiling.
Repite el mermaid y la torsión hacia este lado. || Repeat the mermaid and the twist on this side.
* 3 repeticiones. || 3 reps.
Muy bien. || Very good.`},

{t:{es:"Vuelta a la calma",en:"Cool-down"}, sub:{es:"Estiramiento sentada y respiraciones finales",en:"Seated stretch and final breaths"}, min:3, demos:["fold"],
yt:"reformer pilates cool down stretch",
how:{en:["Bring the energy down: slower voice, fewer cues.","Invite students to notice the difference from the start of class.","If you can, use this moment for one piece of personal feedback per student."],
es:["Baja la energía: voz más lenta, menos indicaciones.","Invita a notar la diferencia con el principio de la clase.","Si puedes, aprovecha para dar un comentario personal a cada persona."]},
s:`Siéntate en el carro mirando hacia la barra. || Sit on the carriage facing the bar.
Estira las piernas o crúzalas, como te resulte más cómodo. || Stretch your legs out or cross them, whichever is more comfortable.
Alarga la columna. || Lengthen your spine.
Inhala y lleva los brazos hacia el techo. || Inhale and reach your arms up toward the ceiling.
Exhala e inclínate hacia delante, despacio. || Exhale and fold forward, slowly.
Deja la cabeza pesada y los hombros relajados. || Let your head hang heavy and your shoulders relax.
No hace falta llegar lejos. || You don't need to go far.
Respira aquí tres veces. || Breathe here three times.
Rueda hacia arriba, vértebra por vértebra. || Roll up one vertebra at a time.
La cabeza es lo último en subir. || Your head is the last thing to come up.
## Respiración final || Final breathing @breath
Vamos a terminar con tres respiraciones profundas. || Let's finish with three deep breaths.
Inhala por la nariz y abre las costillas. || Inhale through your nose and open your ribs.
Exhala por la boca y suelta. || Exhale through your mouth and let go.
Una vez más. || Once more.
Inhala... || Inhale...
Y exhala. || And exhale.
Última. || Last one.
Hoy has trabajado con más carga, más control y nuevos accesorios. || Today you worked with more load, more control and new equipment.
Fíjate en cómo se siente tu centro. || Notice how your center feels.
Y en cómo está tu espalda. || And how your back feels.
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
s:`## Preparación || Set-up
Bienvenidos a la clase avanzada. || Welcome to the advanced class.
Hoy vamos a trabajar con fluidez: pocas pausas y transiciones rápidas. || Today we'll work with flow: few pauses and quick transitions.
Si tienes alguna lesión, avísame antes de empezar. || If you have any injury, let me know before we start.
Ajusta los muelles a una resistencia pesada. || Set the springs to a heavy resistance.
Túmbate boca arriba, con la cabeza en el reposacabezas. || Lie on your back, head on the headrest.
Talones en la barra, separados al ancho de las caderas. || Heels on the bar, hip-width apart.
Brazos largos a los lados, palmas hacia abajo. || Arms long by your sides, palms down.
## Respiración || Breathing
Inhala y abre las costillas hacia los lados. || Inhale and widen your ribs to the sides.
Exhala, cierra las costillas y conecta el centro. || Exhale, close your ribs and connect your center.
* 3 respiraciones. || 3 breaths.
Mantén esta conexión durante toda la clase, también en las transiciones. || Keep this connection for the whole class, including the transitions.
Recuerda: el control es más importante que el recorrido. || Remember: control matters more than range.`},

{t:{es:"Footwork",en:"Footwork"}, sub:{es:"Continuo, a una pierna y running",en:"Continuous, single leg and running"}, min:6, demos:["footwork"],
yt:"advanced reformer footwork single leg",
how:{en:["Springs (typical): heavy, e.g. 3–4 springs; single leg with one spring less.","Advanced footwork is rhythm without losing alignment: no pause at either end.","Single leg with the free leg to the ceiling challenges pelvic stability: hips stay level.","Running: quick feet, quiet pelvis."],
es:["Muelles (habitual): pesados, p. ej. 3–4 muelles; a una pierna, un muelle menos.","El footwork avanzado es ritmo sin perder la alineación: sin pausa en los extremos.","A una pierna con la otra al techo se desafía la estabilidad de la pelvis: caderas niveladas.","Running: pies rápidos, pelvis tranquila."]},
s:`## Talones en paralelo || Parallel heels
Talones en la barra, en paralelo, con los pies flexionados. || Heels on the bar, in parallel, feet flexed.
Inhala para preparar. || Inhale to prepare.
Exhala y empuja hasta estirar las piernas, sin bloquear las rodillas. || Exhale and push until your legs are straight, without locking your knees.
Inhala y vuelve, sin pausa en ningún extremo. || Inhale and come back, without pausing at either end.
* 10 repeticiones. || 10 reps.
Movimiento continuo, como un pistón. || Continuous movement, like a piston.
## Puntas en V || Toes in V
Ahora puntas en V: talones juntos y altos. || Now toes in a V: heels together and high.
Rodillas abiertas en la dirección de los dedos. || Knees open in the direction of your toes.
Exhala, empuja. Inhala, vuelve. || Exhale, push. Inhale, return.
* 10 repeticiones. || 10 reps.
Los talones no bajan en ningún momento. || Your heels never drop.
## Segunda abierta || Wide second
Segunda abierta: pies hacia los extremos de la barra, talones apoyados. || Wide second: feet toward the ends of the bar, heels on.
Rodillas hacia fuera, alineadas con los pies. || Knees out, in line with your feet.
Exhala, empuja. Inhala, vuelve. || Exhale, push. Inhale, return.
* 10 repeticiones. || 10 reps.
La pelvis y las costillas no se mueven en ninguna posición. || Your pelvis and ribs don't move in any position.
## Una pierna || Single leg @singleleg
Quita un muelle. || Take one spring off.
Coloca el talón derecho en el centro de la barra. || Place your right heel in the center of the bar.
Estira la pierna izquierda hacia el techo. || Extend your left leg toward the ceiling.
Exhala y empuja con la pierna derecha. || Exhale and push with your right leg.
Inhala y vuelve. La pierna del techo no se mueve. || Inhale and come back. The leg to the ceiling doesn't move.
* 8 por lado. || 8 per side.
Ahora con la punta del pie: talón alto. || Now on the ball of the foot: heel high.
Exhala, empuja. Inhala, vuelve. || Exhale, push. Inhale, return.
* 8 por lado. || 8 per side.
Cambia de pierna y repite las dos versiones. || Switch legs and repeat both versions.
Las dos caderas pesan igual sobre el carro. || Both hips weigh the same on the carriage.
## Running || Running @running
Vuelve a poner los muelles pesados. || Put the heavy springs back on.
Las dos puntas de los pies en la barra. Empuja y estira las piernas. || Both balls of the feet on the bar. Push out and straighten your legs.
Baja el talón derecho por debajo de la barra mientras doblas la rodilla izquierda. || Lower your right heel under the bar as you bend your left knee.
Cambia, y sigue alternando. || Switch, and keep alternating.
Cada vez un poco más rápido, pero con control. || A little faster each time, but with control.
* 20 por lado. || 20 per side.
Pies rápidos, pelvis tranquila. || Quick feet, quiet pelvis.
Termina con las dos piernas estiradas. || Finish with both legs straight.
Dobla las rodillas y vuelve a casa sin golpear. || Bend your knees and come home without banging.`},

{t:{es:"Hundred",en:"Hundred"}, sub:{es:"Con correas y piernas en diagonal baja",en:"With straps and legs on a low diagonal"}, min:3, demos:["hundredext"],
yt:"reformer pilates hundred straps legs extended",
how:{en:["Springs (typical): light–medium, e.g. 1–2 springs.","Legs only as low as the low back stays still; raise them the moment it lifts.","Long neck, eyes on the navel. Head down is still allowed.","Arms pump from the shoulders with constant tension in the straps."],
es:["Muelles (habitual): ligeros–medios, p. ej. 1–2 muelles.","Las piernas, solo tan bajas como la zona lumbar se mantenga quieta; súbelas en cuanto se levante.","Cuello largo, mirada al ombligo. Bajar la cabeza sigue siendo una opción.","Los brazos bombean desde los hombros, con tensión constante en las correas."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia ligera o media. || Set the springs to a light or medium resistance.
Alarga los brazos por encima de la cabeza y coge las correas, una en cada mano. || Reach overhead and take the straps, one in each hand.
Lleva los brazos hacia el techo, sobre los hombros. || Bring your arms up toward the ceiling, over your shoulders.
Lleva las piernas a mesa. || Bring your legs into tabletop.
## Hundred || Hundred
Inhala para preparar. || Inhale to prepare.
Exhala: baja los brazos junto a las caderas, eleva la cabeza y los hombros y estira las piernas en diagonal baja. || Exhale: press your arms down by your hips, lift your head and shoulders, and extend your legs to a low diagonal.
Todo a la vez, en una sola exhalación. || All at once, in one exhale.
Bombea los brazos: pequeño, rápido y con fuerza. || Pump your arms: small, quick and strong.
Inhala: dos, tres, cuatro, cinco. || Inhale: two, three, four, five.
Exhala: dos, tres, cuatro, cinco. || Exhale: two, three, four, five.
Inhala... || Inhale...
Exhala... || Exhale...
Las piernas, solo tan bajas como tu zona lumbar se mantenga quieta. || Your legs only as low as your low back stays still.
Si la espalda se levanta, sube las piernas. || If your back lifts, raise your legs.
* 10 series de respiración. || 10 breath cycles.
Últimas dos series. || Last two cycles.
Última. || Last one.
## Salir || Coming out
Dobla las rodillas a mesa y lleva los brazos al techo. || Bend your knees to tabletop and bring your arms to the ceiling.
Baja la cabeza. || Lower your head.
Deja las correas en las manos: ahora las pasamos a los pies. || Keep the straps in your hands: next we move them to your feet.`},

{t:{es:"Short spine",en:"Short spine"}, sub:{es:"Articulación de la columna con los pies en correas",en:"Spinal articulation with feet in straps"}, min:5, demos:["shortspine"],
yt:"reformer pilates short spine",
how:{en:["Springs (typical): medium, e.g. 2 springs.","Not for students with osteoporosis, disc problems or neck issues: give them frog or leg circles instead.","Weight on the shoulder blades, never the neck. Keep the head still and the arms pressing down.","The roll-down is the exercise: articulate slowly, knees stay bent until the tailbone lands."],
es:["Muelles (habitual): medios, p. ej. 2 muelles.","No es para personas con osteoporosis, problemas de disco o de cuello: ofréceles rana o círculos de piernas.","El peso en las escápulas, nunca en el cuello. Cabeza quieta y brazos presionando hacia abajo.","El ejercicio es la bajada: articula despacio, con las rodillas dobladas hasta que apoye el coxis."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia media. || Set the springs to a medium resistance.
Dobla las rodillas hacia el pecho. || Bend your knees in toward your chest.
Pasa las correas a los arcos de los pies, primero una y después la otra. || Move the straps to the arches of your feet, one and then the other.
Estira las piernas en diagonal. || Extend your legs on a diagonal.
Brazos largos a los lados, presionando el carro. || Arms long by your sides, pressing into the carriage.
Si tienes problemas de cuello, de disco u osteoporosis, haz rana en lugar de este ejercicio. || If you have neck, disc or osteoporosis issues, do frog instead of this exercise.
## Short spine || Short spine
Inhala y lleva las piernas hacia el techo, juntas y estiradas. || Inhale and bring your legs up toward the ceiling, together and straight.
Exhala y usa el abdomen para rodar las caderas hacia arriba. || Exhale and use your abs to roll your hips up.
Las piernas pasan por encima de la cabeza, paralelas al suelo. || Your legs go over your head, parallel to the floor.
El peso está en las escápulas, nunca en el cuello. || Your weight is on your shoulder blades, never on your neck.
La cabeza se queda quieta y los brazos presionan el carro. || Your head stays still and your arms press into the carriage.
Inhala y dobla las rodillas hacia los hombros. || Inhale and bend your knees toward your shoulders.
Exhala y empieza a bajar la columna, vértebra por vértebra. || Exhale and start rolling your spine down, one vertebra at a time.
Las rodillas se quedan dobladas mientras bajas. || Your knees stay bent as you roll down.
Siente cómo cada vértebra toca el carro. || Feel each vertebra touch the carriage.
Cuando el coxis llegue al carro, estira las piernas en diagonal. || When your tailbone reaches the carriage, extend your legs on a diagonal.
Esa es una repetición. || That's one rep.
* 5 repeticiones. || 5 reps.
Lento y controlado: el carro no debe golpear al volver. || Slow and controlled: the carriage shouldn't bang as it comes back.
La bajada es el ejercicio: tómate tu tiempo. || The roll-down is the exercise: take your time.
Última repetición. || Last rep.
## Salir || Coming out
Dobla las rodillas hacia el pecho. || Bend your knees in toward your chest.
Saca las correas de los pies y vuelve a cogerlas con las manos. || Take the straps off your feet and hold them in your hands again.`},

{t:{es:"Coordinación",en:"Coordination"}, sub:{es:"Brazos y piernas a la vez, con correas",en:"Arms and legs together, with straps"}, min:4, demos:["coordstraps"],
yt:"reformer pilates coordination exercise",
how:{en:["Springs (typical): medium, e.g. 2 springs.","The challenge is holding the curl and the arms still while the legs move.","Cue the order clearly: curl and extend together, open-close, knees, then arms and head.","If the neck tires, keep the head down and do the arm and leg pattern only."],
es:["Muelles (habitual): medios, p. ej. 2 muelles.","La dificultad está en mantener la flexión y los brazos quietos mientras se mueven las piernas.","Marca el orden con claridad: flexión y extensión a la vez, abrir-cerrar, rodillas, y después brazos y cabeza.","Si se cansa el cuello, cabeza abajo y solo el patrón de brazos y piernas."]},
s:`## Preparación || Set-up
Mantén los muelles medios. || Keep the medium springs.
Con una correa en cada mano, dobla los codos a 90 grados. || With a strap in each hand, bend your elbows to 90 degrees.
Los codos se apoyan junto a las costillas y las manos miran al techo. || Your elbows rest beside your ribs and your hands point to the ceiling.
Lleva las piernas a mesa. || Bring your legs into tabletop.
## Coordinación || Coordination
Vamos a aprender la secuencia en cuatro tiempos. || Let's learn the sequence in four counts.
Uno. Exhala: eleva la cabeza y los hombros, estira los brazos junto a las caderas y estira las piernas en diagonal. || One. Exhale: lift your head and shoulders, straighten your arms beside your hips and extend your legs on a diagonal.
Dos. Inhala: abre las piernas... y ciérralas. || Two. Inhale: open your legs... and close them.
Tres. Exhala: dobla las rodillas a mesa. || Three. Exhale: bend your knees back to tabletop.
Cuatro. Inhala: dobla los codos y baja la cabeza. || Four. Inhale: bend your elbows and lower your head.
Otra vez: estira... abre y cierra... rodillas... codos y cabeza. || Again: extend... open and close... knees... elbows and head.
* 6 repeticiones. || 6 reps.
El tronco y los brazos se quedan quietos mientras las piernas abren y cierran. || Your torso and arms stay still while your legs open and close.
Si se te cansa el cuello, deja la cabeza abajo y haz solo los brazos y las piernas. || If your neck tires, keep your head down and do just the arms and legs.
Deja las correas en su sitio y siéntate con cuidado. || Put the straps back and sit up carefully.`},

{t:{es:"Long box: swan y correas",en:"Long box: swan and straps"}, sub:{es:"Extensión de espalda boca abajo",en:"Face-down back extension"}, min:6, demos:["swan"],
yt:"reformer pilates long box swan pulling straps",
how:{en:["Springs (typical): light, e.g. 1 spring for both.","Swan: the extension spreads evenly along the spine; no hinging at the low back.","Box position: for swan the student faces the bar; for pulling straps they turn to face the straps.","Skip swan for anyone who can't extend comfortably; keep pulling straps."],
es:["Muelles (habitual): ligeros, p. ej. 1 muelle para los dos.","Swan: la extensión se reparte por toda la columna; sin doblarse en la zona lumbar.","Posición en el cajón: en swan se mira hacia la barra; en tirar de las correas, hacia las correas.","Si alguien no puede hacer la extensión con comodidad, sáltate swan y quédate con las correas."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia ligera. || Set the springs to a light resistance.
Coloca el cajón largo a lo largo del carro, contra los apoyos de hombros. || Place the long box lengthwise on the carriage, against the shoulder rests.
## Swan || Swan
Túmbate boca abajo sobre el cajón, mirando hacia la barra. || Lie face down on the box, facing the bar.
Las caderas apoyadas en el cajón y las piernas largas detrás de ti. || Hips on the box and legs long behind you.
Coloca las manos sobre la barra, a la anchura de los hombros, con los codos doblados. || Place your hands on the bar, shoulder-width apart, elbows bent.
Activa el abdomen y alarga las piernas. || Engage your abs and lengthen your legs.
Inhala, empuja la barra y estira los brazos. || Inhale, push the bar and straighten your arms.
Al mismo tiempo, eleva el pecho en extensión, mirando al frente. || At the same time, lift your chest into extension, looking ahead.
Exhala y dobla los brazos, bajando el pecho y alargando la columna. || Exhale and bend your arms, lowering your chest and lengthening your spine.
* 5 repeticiones. || 5 reps.
La extensión se reparte por toda la espalda, no solo en la zona lumbar. || The extension spreads along your whole back, not just your low back.
Glúteos suaves, piernas largas. || Glutes soft, legs long.
## Tirar de las correas || Pulling straps @pullstraps
Bájate del cajón y túmbate al revés: ahora la cabeza va hacia las correas. || Come off the box and lie the other way: now your head goes toward the straps.
El pecho queda justo en el borde del cajón. || Your chest is right at the edge of the box.
Coge las correas por las cuerdas, con los brazos largos hacia delante y hacia abajo. || Hold the straps by the ropes, arms long, forward and down.
Exhala: baja las escápulas y tira de los brazos rectos hacia las caderas, elevando el pecho. || Exhale: draw your shoulder blades down and pull your straight arms toward your hips, lifting your chest.
Inhala y vuelve despacio. || Inhale and return slowly.
* 6 repeticiones. || 6 reps.
## Brazos en T || T-pull @pullstraps
Ahora abre los brazos hacia los lados, en T. || Now open your arms out to the sides, in a T.
Exhala y lleva los brazos hacia las caderas, juntando las escápulas. || Exhale and sweep your arms to your hips, drawing your shoulder blades together.
Inhala y vuelve a la T. || Inhale and return to the T.
* 6 repeticiones. || 6 reps.
El cuello sigue la línea de la columna: no mires hacia arriba. || Your neck follows the line of your spine: don't look up.
Suelta las correas, bájate del cajón y gíralo a lo ancho para el short box. || Release the straps, come off the box and turn it crosswise for short box.`},

{t:{es:"Short box avanzado",en:"Advanced short box"}, sub:{es:"Redonda, plana, torsión con alcance e inclinación lateral",en:"Round, flat, twist and reach, side bend"}, min:6, demos:["shortbox"],
yt:"reformer short box twist and reach side over",
how:{en:["Springs: medium so the carriage stays still. Check the foot strap before anyone leans back.","Twist and reach combines rotation and hinge: hips square, spine long, abs on.","Side bend: lengthen up before going over; don't collapse into the bottom side.","Stop the series if a student's abdomen domes or the low back grips."],
es:["Muelles: medios para que el carro no se mueva. Comprueba la correa de pies antes de inclinarse hacia atrás.","Torsión con alcance combina rotación e inclinación: caderas cuadradas, columna larga, abdomen activo.","Inclinación lateral: crece antes de inclinarte; no te hundas sobre el lado de abajo.","Para la serie si el abdomen se abomba o la zona lumbar se agarra."]},
s:`## Preparación || Set-up
Coloca el cajón corto a lo ancho del carro, contra los apoyos de hombros. || Place the short box across the carriage, against the shoulder rests.
Pon un muelle medio para que el carro no se mueva. || Use a medium spring so the carriage doesn't move.
Comprueba que la correa de pies está bien sujeta. || Check that the foot strap is secure.
Siéntate en el centro del cajón y mete los pies bajo la correa, flexionados. || Sit in the middle of the box and slide your feet under the strap, flexed.
Siéntate alto, encima de los isquiones. || Sit tall, on top of your sit bones.
## Espalda redonda || Round back
Cruza los brazos a la altura del pecho. || Cross your arms at chest height.
Inhala y crece. || Inhale and grow tall.
Exhala, bascula la pelvis y redondea hacia atrás. || Exhale, tuck your pelvis and round back.
Inhala y quédate. || Inhale and stay.
Exhala y vuelve, redondeando hacia delante. || Exhale and come back, rounding forward.
* 5 repeticiones. || 5 reps.
## Espalda plana || Flat back @flatback
Brazos arriba, junto a las orejas. || Arms up, beside your ears.
Exhala e inclínate hacia atrás desde las caderas, con la espalda recta. || Exhale and hinge back from your hips with a straight back.
Inhala abajo. || Inhale down there.
Exhala y vuelve arriba. || Exhale and come back up.
* 5 repeticiones. || 5 reps.
## Torsión con alcance || Twist and reach @flatback
Abre los brazos en T. || Open your arms in a T.
Inhala y gira el pecho hacia la derecha. || Inhale and turn your chest to the right.
Exhala y, manteniendo el giro, inclínate hacia atrás con la espalda recta. || Exhale and, keeping the twist, hinge back with a straight back.
Inhala y vuelve arriba, todavía en el giro. || Inhale and come back up, still in the twist.
Exhala y vuelve al centro. || Exhale and return to center.
Ahora hacia la izquierda: gira, inclínate atrás, sube y al centro. || Now to the left: twist, hinge back, come up and back to center.
* 3 por lado. || 3 per side.
Las caderas miran siempre hacia la barra. || Your hips always face the bar.
## Inclinación lateral || Side bend @shortbox
Manos detrás de la cabeza, codos abiertos. || Hands behind your head, elbows wide.
Inhala y crece hacia arriba. || Inhale and grow tall.
Exhala e inclínate hacia la derecha, alargando la cintura izquierda. || Exhale and bend to the right, lengthening your left waist.
Inhala y vuelve al centro. || Inhale and come back to center.
Exhala e inclínate hacia la izquierda. || Exhale and bend to the left.
* 3 por lado. || 3 per side.
Las dos caderas se quedan firmes sobre el cajón. || Both hips stay grounded on the box.
Saca los pies de la correa y retira el cajón. || Take your feet out of the strap and remove the box.`},

{t:{es:"Serie de long stretch",en:"Long stretch series"}, sub:{es:"Fluida, con elephant a una pierna",en:"Flowing, with single-leg elephant"}, min:6, demos:["longstretch"],
yt:"reformer long stretch series single leg elephant",
how:{en:["Springs (typical): light–medium, e.g. 1–2 springs.","Flow from one exercise to the next without stepping off: the transitions are part of the work.","Single-leg elephant: the lifted leg stays in line with the spine; don't let the hip open.","If shoulders or wrists tire, go back to two-leg elephant."],
es:["Muelles (habitual): ligeros–medios, p. ej. 1–2 muelles.","Pasa de un ejercicio a otro sin bajarte: las transiciones también son trabajo.","Elephant a una pierna: la pierna elevada sigue la línea de la espalda; que la cadera no se abra.","Si se cansan los hombros o las muñecas, vuelve a elephant con las dos piernas."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia ligera o media. || Set the springs to a light or medium resistance.
Manos en la barra, a la anchura de los hombros. || Hands on the bar, shoulder-width apart.
Pisa el carro y apoya las puntas de los pies contra los apoyos de hombros. || Step onto the carriage and put the balls of your feet against the shoulder rests.
## Long stretch || Long stretch
Estira las piernas y forma una plancha: una línea de la cabeza a los talones. || Straighten your legs into a plank: one line from your head to your heels.
Inhala y empuja el carro hacia atrás. || Inhale and push the carriage back.
Exhala y vuelve, con los hombros sobre las muñecas. || Exhale and come back, shoulders over your wrists.
* 6 repeticiones. || 6 reps.
Todo el cuerpo se mueve como una sola pieza. || Your whole body moves as one piece.
## Down stretch || Down stretch @downstretch
Sin bajarte, apoya las rodillas en el carro. || Without stepping off, lower your knees onto the carriage.
Caderas hacia delante y pecho abierto, en una extensión suave. || Hips forward and chest open, in a gentle extension.
Inhala y empuja el carro hacia atrás con los brazos. || Inhale and push the carriage back with your arms.
Exhala y vuelve, llevando el carro con el abdomen. || Exhale and come back, drawing the carriage in with your abs.
* 5 repeticiones. || 5 reps.
## Up stretch || Up stretch @upstretch
Vuelve a la plancha y sube las caderas hacia el techo. || Come back to plank and lift your hips toward the ceiling.
Inhala y empuja el carro hacia atrás, bajando hasta la plancha. || Inhale and push the carriage back, lowering into plank.
Exhala y vuelve, subiendo las caderas otra vez. || Exhale and come back, lifting your hips again.
* 5 repeticiones. || 5 reps.
## Elephant a una pierna || Single-leg elephant @elephant
Con las caderas altas, baja los talones al carro, contra los apoyos de hombros. || With your hips high, lower your heels onto the carriage, against the shoulder rests.
Ahora eleva la pierna derecha hacia atrás, en línea con la espalda. || Now lift your right leg back, in line with your back.
Exhala y empuja el carro hacia atrás con la pierna de apoyo. || Exhale and push the carriage back with your standing leg.
Inhala y vuelve. || Inhale and return.
* 5 por lado. || 5 per side.
Las caderas se quedan cuadradas: la pierna elevada no se abre hacia un lado. || Your hips stay square: the lifted leg doesn't open out to the side.
Cambia de pierna. || Switch legs.
Si los hombros se cansan, vuelve a elephant con las dos piernas. || If your shoulders get tired, go back to elephant on both legs.
Vuelve a casa y baja al suelo con cuidado. || Come home and step down to the floor carefully.`},

{t:{es:"Knee stretch completo",en:"Full knee stretch"}, sub:{es:"Redonda, plana y rodillas despegadas",en:"Round, flat and knees off"}, min:4, demos:["kneestretch"],
yt:"reformer knee stretch knees off",
how:{en:["Springs (typical): medium, e.g. 2 springs.","Knees off is very demanding on the abs and shoulders: offer it only once round and flat back are solid.","Shoulders stay over the wrists in all three versions.","Keep the range small in knees off; speed comes from the legs, not momentum."],
es:["Muelles (habitual): medios, p. ej. 2 muelles.","Rodillas despegadas exige mucho al abdomen y los hombros: ofrécelo solo si espalda redonda y plana están sólidas.","Hombros sobre las muñecas en las tres versiones.","Recorrido pequeño con las rodillas despegadas; la velocidad sale de las piernas, no del impulso."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia media. || Set the springs to a medium resistance.
Arrodíllate en el carro, con los pies contra los apoyos de hombros. || Kneel on the carriage, feet against the shoulder rests.
Manos en la barra, con los hombros sobre las muñecas. || Hands on the bar, shoulders over your wrists.
## Espalda redonda || Round back
Redondea la espalda y mira hacia las rodillas. || Round your back and look toward your knees.
Exhala, empuja el carro hacia atrás. Inhala, vuelve. || Exhale, push the carriage back. Inhale, return.
* 10 repeticiones. || 10 reps.
La espalda no cambia de forma: solo se mueven las piernas. || Your back doesn't change shape: only your legs move.
## Espalda plana || Flat back
Ahora alarga la espalda: plana, con el pecho hacia delante. || Now lengthen your back: flat, chest forward.
Exhala, empuja. Inhala, vuelve. || Exhale, push. Inhale, return.
* 10 repeticiones. || 10 reps.
Que la zona lumbar no se hunda. || Don't let your low back sag.
## Rodillas despegadas || Knees off @kneesoff
Vuelve a redondear la espalda. || Round your back again.
Mete los dedos de los pies y despega las rodillas unos centímetros del carro. || Tuck your toes under and lift your knees a few centimetres off the carriage.
Pequeño y rápido: carro atrás, carro adelante. || Small and quick: carriage back, carriage in.
* 10 repeticiones. || 10 reps.
El abdomen sostiene; los hombros no se mueven. || Your abs hold you; your shoulders don't move.
Últimas tres. Tres... dos... uno. || Last three. Three... two... one.
Baja las rodillas, vuelve a casa y siéntate sobre los talones. || Lower your knees, come home and sit back on your heels.`},

{t:{es:"Teaser",en:"Teaser"}, sub:{es:"Con correas en las manos",en:"With straps in the hands"}, min:4, demos:["teaser"],
yt:"reformer teaser with straps",
how:{en:["Springs (typical): light, e.g. 1 spring; the straps help the roll-up.","Modification: knees bent in tabletop, or one foot on the bar.","The legs stay still while the spine rolls up and down: no swinging.","Not for students with osteoporosis or acute low-back pain."],
es:["Muelles (habitual): ligeros, p. ej. 1 muelle; las correas ayudan a subir.","Modificación: rodillas dobladas en mesa, o un pie en la barra.","Las piernas se quedan quietas mientras la columna sube y baja: sin balanceo.","No es para personas con osteoporosis o dolor lumbar agudo."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia ligera. || Set the springs to a light resistance.
Túmbate boca arriba y coge una correa en cada mano, con los brazos largos a los lados. || Lie on your back and take a strap in each hand, arms long by your sides.
Junta las piernas y estíralas en diagonal hacia arriba. || Bring your legs together and extend them upward on a diagonal.
Si tu espalda lo necesita, dobla las rodillas en mesa. || If your back needs it, bend your knees into tabletop.
## Teaser || Teaser
Inhala y lleva los brazos hacia el techo. || Inhale and bring your arms up toward the ceiling.
Exhala: barbilla hacia el pecho y rueda hacia arriba, vértebra por vértebra. || Exhale: chin toward your chest and roll up, one vertebra at a time.
Llega a la V: los brazos paralelos a las piernas. || Arrive in the V: arms parallel to your legs.
El equilibrio está justo detrás de los isquiones. || Your balance is just behind your sit bones.
Inhala, quédate y crece. || Inhale, stay and grow tall.
Exhala y rueda hacia abajo, vértebra por vértebra. || Exhale and roll down, one vertebra at a time.
Las piernas se quedan quietas mientras bajas. || Your legs stay still as you roll down.
* 4 repeticiones. || 4 reps.
Sin impulso: el abdomen hace el trabajo. || No momentum: your abs do the work.
Si la espalda se arquea, dobla las rodillas. || If your back arches, bend your knees.
Última. || Last one.
## Salir || Coming out
Dobla las rodillas al pecho y suelta las correas con cuidado. || Bend your knees to your chest and release the straps carefully.
Rueda hacia un lado y siéntate despacio. || Roll to one side and sit up slowly.`},

{t:{es:"Front split",en:"Front split"}, sub:{es:"De pie: zancada sobre el carro",en:"Standing: lunge on the carriage"}, min:4, demos:["frontsplit"],
yt:"reformer pilates front split",
how:{en:["Springs (typical): medium, e.g. 2 springs. Too light and the carriage slides away.","Step on with the platform foot first; never step onto a moving carriage.","The front knee stays over the ankle; the range comes from the back hip.","Offer a hand on the bar or a wall for balance."],
es:["Muelles (habitual): medios, p. ej. 2 muelles. Si son demasiado ligeros, el carro se escapa.","Sube primero el pie de la plataforma; nunca pises un carro en movimiento.","La rodilla delantera se queda sobre el tobillo; el recorrido sale de la cadera de atrás.","Ofrece una mano en la barra o en la pared para el equilibrio."]},
s:`## Preparación || Set-up
Ajusta los muelles a una resistencia media. || Set the springs to a medium resistance.
Ponte de pie junto a la máquina, a la altura de la barra. || Stand next to the machine, level with the bar.
Coloca el pie derecho en la plataforma, junto a la barra. || Place your right foot on the standing platform, next to the bar.
Con una mano en la barra, sube el pie izquierdo al carro. || With one hand on the bar, step your left foot onto the carriage.
Apóyalo contra el apoyo de hombros, con el talón levantado. || Place it against the shoulder rest, heel lifted.
Rodilla delantera sobre el tobillo, manos en las caderas. || Front knee over your ankle, hands on your hips.
Pelvis cuadrada hacia delante. || Pelvis square to the front.
## Front split || Front split
Inhala para preparar. || Inhale to prepare.
Exhala y lleva el carro hacia atrás con la pierna de atrás. || Exhale and slide the carriage back with your back leg.
Baja las caderas hacia el suelo, sin inclinar el tronco. || Lower your hips toward the floor, without leaning your torso.
Inhala y vuelve con control, tirando del carro con la cadera de atrás. || Inhale and come back with control, drawing the carriage in with your back hip.
* 6 por lado. || 6 per side.
La rodilla delantera no pasa de la punta del pie. || Your front knee doesn't go past your toes.
Si pierdes el equilibrio, pon una mano en la barra. || If you lose your balance, put a hand on the bar.
## Cambiar de lado || Change sides
Vuelve a casa y baja del carro con cuidado, primero el pie de atrás. || Come home and step off the carriage carefully, back foot first.
Cambia de lado: pie izquierdo en la plataforma, pie derecho en el carro. || Switch sides: left foot on the platform, right foot on the carriage.
Exhala, carro atrás. Inhala, vuelve. || Exhale, carriage back. Inhale, return.
Bájate del carro con cuidado. || Step off the carriage carefully.`},

{t:{es:"Mermaid y vuelta a la calma",en:"Mermaid & cool-down"}, sub:{es:"Estiramiento lateral, estiramiento final y respiración",en:"Side stretch, final stretch and breathing"}, min:5, demos:["mermaid"],
yt:"reformer pilates mermaid cool down",
how:{en:["Springs (typical): light, e.g. 1 spring for mermaid.","Give the cool-down its full time even if the class runs long: advanced students need it most.","Close with one clear takeaway about control."],
es:["Muelles (habitual): ligeros, p. ej. 1 muelle para mermaid.","Dedica a la vuelta a la calma su tiempo completo aunque la clase se alargue: el alumnado avanzado es quien más lo necesita.","Cierra con una idea clara sobre el control."]},
s:`## Mermaid || Mermaid
Ajusta los muelles a una resistencia ligera. || Set the springs to a light resistance.
Siéntate de lado sobre el carro, con la barra a tu derecha y las piernas en Z. || Sit sideways on the carriage, bar on your right, legs in a Z-sit.
La mano derecha sobre la barra, el brazo izquierdo hacia el techo. || Right hand on the bar, left arm toward the ceiling.
Exhala, empuja la barra y alarga el cuerpo hacia la derecha. || Exhale, push the bar and lengthen your body to the right.
Inhala y quédate, respirando hacia las costillas de arriba. || Inhale and stay, breathing into your top ribs.
Exhala y vuelve al centro, llevando el brazo por encima de la cabeza. || Exhale and come back to center, reaching your arm over your head.
* 3 por lado. || 3 per side.
Cambia de lado y repite. || Change sides and repeat.
## Estiramiento || Stretch @fold
Siéntate mirando hacia la barra, con las piernas largas o cruzadas. || Sit facing the bar, legs long or crossed.
Inhala y crece. || Inhale and grow tall.
Exhala e inclínate hacia delante, despacio. || Exhale and fold forward, slowly.
Respira. La cabeza pesa. || Breathe. Your head is heavy.
Rueda hacia arriba despacio, vértebra por vértebra. || Roll up slowly, one vertebra at a time.
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
const FEMALE=/female|samantha|karen|moira|tessa|victoria|fiona|veena|serena|allison|\bava\b|susan|zira|hazel|catherine|m[oó]nica|paulina|marisol|soledad|helena|laura|sabina|elvira|dalia|luciana|francisca|google us english|google español de estados unidos/i;
const MALE=/\bmale\b|^google español$|daniel|\balex\b|fred|rishi|oliver|arthur|aaron|\btom\b|david|\bmark\b|george|james|jorge|juan|diego|carlos|pablo|ra[uú]l|[aá]lvaro|enrique|jos[eé]/i;
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
