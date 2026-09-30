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
    repsLbl:"Tiempo por repetición", setLbl:"Ajustes de audio", repsOff:"no esperar", voiceEsLbl:"Voz en español", voiceEnLbl:"Voz en inglés", autoVoice:"Automática", speaking:"Leyendo…", nextIn:"Siguiente frase en {s} s", repsLeft:"Haz las repeticiones: quedan {s} s", skip:"Saltar", classDone:"Clase terminada. ¡Bien hecho!", testBtn:"Probar audio", testLine:"Hola, esto es una prueba de audio.",
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
    repsLbl:"Time per rep", setLbl:"Audio settings", repsOff:"don't wait", voiceEsLbl:"Spanish voice", voiceEnLbl:"English voice", autoVoice:"Automatic", speaking:"Speaking…", nextIn:"Next line in {s} s", repsLeft:"Do the reps: {s} s left", skip:"Skip", classDone:"Class complete. Well done!", testBtn:"Test audio", testLine:"Hola, esto es una prueba de audio.",
    blocked:"No audio is playing.", audioHelp:"No sound? Turn up the volume, switch off silent mode (iPhone), and check a Spanish voice is installed in your phone's text-to-speech settings. Then tap Hands-free again.",
    pausedHidden:"Paused: the screen turned off or you switched apps. Tap Hands-free to continue.",
    inApp:"To hear the audio, open this page in Safari or Chrome (menu ••• → Open in browser).",
    noSynth:"This browser can't read aloud. Try Chrome, Safari or Edge.",
    noVoice:"No {l} voice on this device. Add one in your system's text-to-speech settings.", es:"Spanish", en:"English"
  }
};

const STAGES = [
{t:{es:"Bienvenida y preparación",en:"Welcome & set-up"}, sub:{es:"Tumbada boca arriba, respiración",en:"Lying on the back, breathing"}, min:3, demos:["breath"],
yt:"reformer pilates supine set up breathing beginner",
how:{en:["Client lies on the back, head on the headrest, feet on the footbar hip-width apart, knees bent.","Look for neutral spine: a small natural curve in the low back, pelvis level.","Watch for: lifted shoulders, clenched jaw, gripping the belly too hard. The cue is a soft, constant connection."],
es:["La persona se tumba boca arriba, cabeza en el reposacabezas, pies en la barra al ancho de las caderas, rodillas flexionadas.","Busca la columna neutra: una pequeña curva natural en la zona lumbar y la pelvis nivelada.","Observa: hombros elevados, mandíbula apretada, abdomen demasiado apretado. La idea es una conexión suave y constante."]},
s:`## Preparación || Preparation
Bienvenidos a la clase. || Welcome to class.
Antes de empezar, vamos a tomarnos un momento para conectar con nuestra respiración y con nuestro cuerpo. || Before we start, let's take a moment to connect with our breath and our body.
Colócate tumbado boca arriba sobre el Reformer. || Lie down on your back on the Reformer.
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
Empezamos con los talones juntos y las puntas ligeramente separadas. || We start with heels together and toes slightly apart.
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
## Pulsos pequeños || Small pulses
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
Extiende las piernas. || Straighten your legs.
Una pierna se mantiene larga mientras flexionamos la otra. || One leg stays long while we bend the other.
Baja el talón derecho. || Lower your right heel.
Sube. || Lift.
Ahora el izquierdo. || Now the left one.
Baja. || Lower.
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
Prepara el abdomen. || Prepare your abdominals.
Inhala. || Inhale.
Exhala y comienza a elevar la pelvis. || Exhale and start lifting your pelvis.
Despega la columna de la colchoneta poco a poco. || Peel your spine off the mat little by little.
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
## Preparación para Hundred || Preparing for the Hundred
En la siguiente repetición, mantén la cabeza y los hombros arriba. || On the next rep, keep your head and shoulders up.
Lleva las piernas a posición de mesa. || Bring your legs into tabletop.
Una pierna... || One leg...
Y la otra. || And the other.
Extiende los brazos hacia delante. || Reach your arms forward.`},

{t:{es:"Hundred en Reformer",en:"Hundred on the Reformer"}, sub:{es:"Bombeo de brazos con respiración en 5 tiempos",en:"Arm pumps with 5-count breathing"}, min:3, demos:["hundred"],
yt:"reformer pilates hundred beginner modification",
how:{en:["Head and shoulders lifted, legs in tabletop, arms long just above the carriage.","Small, quick arm pumps from the shoulders: 5 pumps inhaling, 5 pumps exhaling.","Shoulders stay away from the ears; the belly stays scooped. Offer the head-down option anytime the neck works."],
es:["Cabeza y hombros elevados, piernas en mesa, brazos largos justo por encima del carro.","Pequeños bombeos rápidos desde los hombros: 5 inhalando, 5 exhalando.","Hombros lejos de las orejas, abdomen hacia dentro. Ofrece bajar la cabeza siempre que trabaje el cuello."]},
s:`Comenzamos con pequeños movimientos de brazos. || We begin with small arm movements.
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
Extiende una pierna hacia delante. || Reach one leg forward.
Vuelve. || Come back.
Cambia. || Switch.
Continúa alternando. || Keep alternating.
* 8 por lado. || 8 per side.
Exhala al extender. || Exhale as you extend.
Inhala al volver. || Inhale as you come back.
Mantén la pelvis completamente estable. || Keep your pelvis completely stable.
## Double Leg Stretch — versión básica || Double Leg Stretch — basic version
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
s:`Ahora vamos a girarnos hacia nuestro lado. || Now turn onto your side.
Coloca el pie superior sobre la barra. || Place your top foot on the footbar.
La pierna de abajo permanece extendida. || Your bottom leg stays extended.
Apoya la cabeza cómodamente. || Rest your head comfortably.
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
## Círculos || Circles
Ahora hacemos pequeños círculos con la pierna. || Now we make small circles with the leg.
* 5 hacia delante. || 5 forward.
Y 5 hacia atrás. || And 5 backward.
El círculo es pequeño. || The circle is small.
El torso permanece quieto. || The torso stays still.
## Cambiar de lado || Change sides
Vamos a cambiar de lado. || Let's change sides.
Coloca el otro pie sobre la barra. || Place your other foot on the footbar.
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
s:`Vamos a colocarnos de pie sobre el Reformer. || Let's stand up on the Reformer.
Coloca las manos sobre la barra. || Place your hands on the footbar.
Los pies sobre la plataforma. || Feet on the platform.
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
## Knee Stretch — versión básica || Knee Stretch — basic version
Ahora lleva las rodillas hacia la colchoneta. || Now bring your knees down to the mat.
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
s:`Ahora lleva las caderas hacia atrás. || Now shift your hips back.
Las manos siguen sobre la barra. || Your hands stay on the footbar.
Los talones están apoyados. || Your heels are down.
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
s:`Vamos a sentarnos de lado. || Let's sit sideways.
Coloca las piernas cómodamente. || Place your legs comfortably.
Una mano sobre la barra. || One hand on the footbar.
La otra mano descansa sobre la pierna. || The other hand rests on your leg.
Inhala. || Inhale.
Al exhalar, empuja suavemente la barra y alarga el cuerpo hacia el lado. || As you exhale, gently push the bar away and lengthen your body to the side.
Busca espacio entre las costillas. || Find space between your ribs.
No colapses el torso. || Don't collapse your torso.
Inhala y vuelve. || Inhale and come back.
* 4 repeticiones. || 4 reps.
Última. || Last one.
Y volvemos. || And we come back.
Cambiamos de lado. || Let's change sides.
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
Siéntate cómodamente. || Sit comfortably.
Alarga la columna. || Lengthen your spine.
Inhala. || Inhale.
Y exhala mientras te inclinas suavemente hacia delante. || And exhale as you gently lean forward.
No necesitamos llegar lejos. || We don't need to go far.
Respira. || Breathe.
Relaja el cuello. || Relax your neck.
Vuelve lentamente. || Come back up slowly.
## Respiración final || Final breathing
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
   b:{c:190, head:[332,112], sh:[308,118], el:[346,138], ha:[384,150], hip:[250,158], kn:[330,150], an:[410,158]}}
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
const barLbl=mk('text',{x:452,y:212,...txt}), springLbl=mk('text',{x:95,y:212,...txt});
const spring=mk('path',{fill:'none',stroke:'var(--spring)','stroke-width':2});
const carriage=mk('g',{});
mk('rect',{x:0,y:162,width:170,height:10,rx:3,fill:'var(--carriage)',opacity:.85},carriage);
mk('rect',{x:2,y:150,width:8,height:14,rx:2,fill:'var(--carriage)'},carriage);
mk('rect',{x:-2,y:156,width:22,height:8,rx:2,fill:'var(--carriage)',opacity:.6},carriage);
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
    let s='M50 176'; for(let i=1;i<=10;i++) s+=` L${50+(c-50)*i/10} ${i%2?170:182}`;
    spring.setAttribute('d',s);
    const hd=J('head'),sh=J('sh'),elb=J('el'),ha=J('ha'),hip=J('hip');
    let kn=J('kn'),an=J('an'); const kn2=J('kn2'),an2=J('an2');
    if(d.circle){const g=now/(d.dur*speed)*2*Math.PI; kn=[kn[0],kn[1]-8]; an=[an[0]+Math.cos(g)*14,an[1]-30+Math.sin(g)*14];}
    head.setAttribute('cx',hd[0]); head.setAttribute('cy',hd[1]);
    torso.setAttribute('points',pts(sh,hip));
    neck.setAttribute('points',pts(sh,hd));
    arm.setAttribute('points',pts(sh,elb,ha));
    leg1.setAttribute('points',pts(hip,kn,an,[an[0]+6,an[1]-14]));
    leg2.setAttribute('points',pts(hip,kn2,an2,[an2[0]+6,an2[1]-14]));
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
  sideTag.textContent=DEMOS[k].side?T('side'):'';}

/* ---------- Class state ---------- */
let cur=store.get('stage',0), cue=store.get('cue',0), done=store.get('done',[]);
let classSec=store.get('classSec',0), stageSec=0, running=false, fs=store.get('fs',1.15);
document.documentElement.style.setProperty('--fs',fs+'rem');
const savedTheme=store.get('theme',null); if(savedTheme)document.documentElement.dataset.theme=savedTheme;

const split=x=>{const [es,en]=x.split(' || ');return{es:es.trim(),en:(en||es).trim()}};
STAGES.forEach(st=>{st.lines=st.s.split('\n').map(l=>{
  if(l.startsWith('## '))return{k:'h',...split(l.slice(3))};
  if(l.startsWith('* '))return{k:'r',...split(l.slice(2))};
  return{k:'c',...split(l)};
})});

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

/* switch to the 2nd demo when the script reaches its sub-section */
const SUB2=/Pulsos pequeños|Preparación para Hundred|Double Leg|Círculos|Knee Stretch|Respiración final/;
function setCue(i,noScroll){
  cue=Math.max(0,Math.min(i,cueEls.length-1));store.set('cue',cue);
  cueEls.forEach((b,j)=>{b.classList.toggle('now',j===cue);b.classList.toggle('past',j<cue)});
  const st=STAGES[cur];
  if(st.demos.length>1){
    let sub=0,seen=-1;
    for(const l of st.lines){
      if(l.k==='c'){seen++;if(seen===cue)break}
      if(l.k==='h'){if(SUB2.test(l.es))sub=1;else if(/Cambiar de lado/.test(l.es))sub=0}
    }
    if(st.demos[sub]!==demoKey)setDemo(st.demos[sub]);
  }
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

/* ---------- Voice: reads the cues aloud (browser text-to-speech) ----------
   Mobile rules this follows:
   - iPhone/iPad only allow speech that starts inside a tap, so the first line is spoken
     synchronously in the button handler (no waiting before speak()).
   - If speech never starts (blocked, no voice, silent mode) we stop and show help,
     instead of silently running through the class.
   - Phones stop speech when the screen turns off, so we keep the screen awake and
     pause cleanly if the page is hidden.                                              */
const synth = ('speechSynthesis' in window) ? window.speechSynthesis : null;
const inApp = /Instagram|FBAN|FBAV|FB_IAB|Line\/|TikTok|Pinterest|Snapchat|; wv\)/i.test(navigator.userAgent);
let voices=[], autoOn=false, speakToken=0, wakeLock=null, skipWait=null, pausedByHide=false;
let rate=store.get('rate',0.95), gap=store.get('gap',1.5), repSec=store.get('repSec',3);
function loadVoices(){try{voices=synth?synth.getVoices():[]}catch(e){voices=[]}fillVoices();updateVoiceUI()}
if(synth){loadVoices(); if('onvoiceschanged' in synth)synth.onvoiceschanged=loadVoices; setTimeout(loadVoices,700); setTimeout(loadVoices,2500)}
const langOf=v=>(v.lang||'').replace('_','-').toLowerCase();
function voiceFor(lang){
  const saved=store.get('voice_'+lang,''); if(saved){const v=voices.find(v=>v.voiceURI===saved);if(v)return v}
  const pref=lang==='es'?['es-es','es-mx','es-us','es']:['en-gb','en-us','en'];
  for(const p of pref){const v=voices.find(v=>langOf(v).startsWith(p)); if(v)return v}
  return null;
}
function fillVoices(){
  ['es','en'].forEach(lang=>{
    const sel=$(lang==='es'?'voiceEs':'voiceEn'); if(!sel)return;
    const list=voices.filter(v=>langOf(v).startsWith(lang));
    sel.innerHTML=`<option value="">${T('autoVoice')}</option>`+list.map(v=>`<option value="${v.voiceURI.replace(/"/g,'&quot;')}">${v.name} (${v.lang})</option>`).join('');
    const saved=store.get('voice_'+lang,''); sel.value=saved; if(sel.value!==saved)sel.value='';
  });
}
/* Speak one text. Resolves {started, error}. speak() is called synchronously.
   Phones don't always fire onstart/onend, so ANY sign of life counts as "started":
   onstart, onend, or synth.speaking seen true while polling. We never cancel speech
   just because an event is missing. */
let lastErr='';
window.__utts=[];                                   // keep utterances referenced (avoids a Chrome/Safari GC bug)
function say(text,lang){return new Promise(res=>{
  if(!synth){res({started:false,error:'no-synth'});return}
  const u=new SpeechSynthesisUtterance(text.replace(/\.\.\.$/,'…'));
  const v=voiceFor(lang);
  u.lang=(v&&v.lang?v.lang:(lang==='es'?'es-ES':'en-GB')).replace('_','-');
  if(v)u.voice=v; u.rate=rate; u.volume=1;
  window.__utts.push(u); if(window.__utts.length>6)window.__utts.shift();
  let started=false, fin=false, err='';
  const poll=setInterval(()=>{ if(synth.speaking)started=true },200);
  const end=()=>{ if(fin)return; fin=true; clearInterval(poll); clearTimeout(noStart); clearTimeout(maxT); res({started,error:err}) };
  u.onstart=()=>{started=true};
  u.onend=()=>{started=true; end()};
  u.onerror=e=>{ err=(e&&e.error)||'error'; lastErr=err; if(err==='interrupted'||err==='canceled')started=true; end() };
  // no sign of life at all after 5 s -> report as not started (but don't cancel anything)
  const noStart=setTimeout(()=>{ if(!started&&!synth.speaking&&!synth.pending)end() },5000);
  // safety net if onend never fires
  const maxT=setTimeout(end,6000+text.length*160/rate);
  try{ if(synth.paused)synth.resume(); synth.speak(u) }catch(e){ err=String(e); end() }
})}
async function sayLine(l,token){
  if(mode==='both'){
    const r=await say(l.es,'es'); if(token!==speakToken||!r.started)return r;
    return await say(l.en,'en');
  }
  return await say(l[mode],mode);
}
function setStatus(text,canSkip){ $('voiceStatus').textContent=text||''; $('skipBtn').hidden=!canSkip; }
function showHelp(on,msg){ const h=$('voiceHelp'); h.hidden=!on; if(on)h.textContent=msg||T('audioHelp'); }
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
function clearCounting(){document.querySelectorAll('.reps.counting').forEach(r=>r.classList.remove('counting'))}
/* Must stay free of `await` before the first say(): that keeps speech inside the tap on iOS. */
async function speakCurrent(){
  const token=++speakToken; if(skipWait)skipWait();
  const busy=synth&&(synth.speaking||synth.pending);
  if(busy){try{synth.cancel()}catch(e){}}
  clearCounting();
  const l=STAGES[cur].lines.filter(x=>x.k==='c')[cue]; if(!l)return;
  markSpeaking(true); setStatus(T('speaking')); showHelp(false);
  if(busy){ await new Promise(r=>setTimeout(r,120)); if(token!==speakToken)return }   // engines drop speech right after cancel()
  const r=await sayLine(l,token);
  if(token!==speakToken)return;
  markSpeaking(false);
  if(!r.started){ blocked(); return }
  if(!autoOn){setStatus('');return}
  const reps=repsAfter();
  if(reps){
    await sayLine(reps,token); if(token!==speakToken)return;
    const secs=repCount(reps)*repSec;
    if(secs>0){
      const badge=cueEls[cue]&&cueEls[cue].nextElementSibling;
      if(badge&&badge.classList.contains('reps'))badge.classList.add('counting');
      await wait(secs,token,'repsLeft');
      clearCounting();
    }
  } else await wait(gap,token,'nextIn');
  if(token===speakToken&&autoOn)advanceAuto();
}
function blocked(){
  const wasAuto=autoOn; if(wasAuto)stopAuto();
  setStatus(T('blocked')); showHelp(true, inApp?T('inApp'):T('audioHelp'));
}
function advanceAuto(){
  if(cue<cueEls.length-1)setCue(cue+1);
  else if(cur<STAGES.length-1)go(cur+1);
  else{stopAuto();setStatus(T('classDone'));return}
  speakCurrent();
}
async function keepAwake(on){
  try{ if(on&&'wakeLock' in navigator){ if(!wakeLock){wakeLock=await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release',()=>{wakeLock=null})} }
       else if(!on&&wakeLock){await wakeLock.release();wakeLock=null} }catch(e){}
}
function startAuto(){
  autoOn=true; pausedByHide=false;
  if(!running){running=true;classBtnText()}
  updateVoiceUI();
  speakCurrent();            // called synchronously inside the tap
  keepAwake(true);
}
function stopAuto(){
  autoOn=false; speakToken++; if(skipWait)skipWait();
  if(synth){try{synth.cancel()}catch(e){}} markSpeaking(false); keepAwake(false); updateVoiceUI(); setStatus(''); clearCounting();
}
function updateVoiceUI(){
  const ab=$('autoBtn'), rb=$('readBtn'); if(!ab)return;
  ab.textContent=autoOn?T('autoOff'):T('autoOn'); ab.classList.toggle('primary',autoOn); ab.setAttribute('aria-pressed',String(autoOn));
  rb.textContent=T('readLine'); $('testBtn').textContent=T('testBtn'); $('skipBtn').textContent=T('skip');
  $('speedLbl').textContent=T('speed'); $('gapLbl').textContent=T('gap'); $('repsLbl').textContent=T('repsLbl'); $('setLbl').textContent=T('setLbl');
  $('voiceEsLbl').textContent=T('voiceEsLbl'); $('voiceEnLbl').textContent=T('voiceEnLbl');
  $('repSel').options[0].textContent=T('repsOff');
  const va=$('voiceEs').options[0], vb=$('voiceEn').options[0]; if(va)va.textContent=T('autoVoice'); if(vb)vb.textContent=T('autoVoice');
  $('prevCue').setAttribute('aria-label',T('prevLine'));
  let note='';
  if(!synth){note=inApp?T('inApp'):T('noSynth');ab.disabled=rb.disabled=true}
  else if(inApp){note=T('inApp')}
  else if(voices.length){
    const need=mode==='both'?['es','en']:[mode];
    const miss=need.filter(l=>!voiceFor(l));
    if(miss.length)note=T('noVoice').replace('{l}',miss.map(l=>T(l)).join(' / '));
  }
  $('voiceNote').textContent=note||T('voiceHint');
}
$('readBtn').onclick=()=>{ if(autoOn)stopAuto(); speakCurrent() };
$('autoBtn').onclick=()=>autoOn?stopAuto():startAuto();

/* Audio test: speaks one Spanish line inside the tap and reports what the device did */
async function audioTest(){
  if(autoOn)stopAuto(); speakToken++;
  if(synth&&(synth.speaking||synth.pending)){try{synth.cancel()}catch(e){}}
  const es=voices.filter(v=>langOf(v).startsWith('es')).length, en=voices.filter(v=>langOf(v).startsWith('en')).length;
  const v=voiceFor('es');
  showHelp(true,'…'); setStatus(T('speaking'));
  const r=await say(T('testLine'),'es');
  setStatus('');
  const lines=[
    'Text-to-speech: '+(synth?'yes':'NO'),
    'Voices: '+voices.length+' (ES '+es+', EN '+en+')',
    'Spanish voice: '+(v?v.name+' · '+v.lang:'none'),
    'Speech started: '+(r.started?'yes':'NO')+(r.error?' · error: '+r.error:''),
    'In-app browser: '+(inApp?'YES':'no'),
    navigator.userAgent
  ];
  showHelp(true, lines.join('\n'));
}
$('testBtn').onclick=()=>audioTest();
$('skipBtn').onclick=()=>{if(skipWait)skipWait()};
$('rateSel').value=String(rate); $('gapSel').value=String(gap); $('repSel').value=String(repSec);
$('rateSel').onchange=e=>{rate=parseFloat(e.target.value);store.set('rate',rate)};
$('gapSel').onchange=e=>{gap=parseFloat(e.target.value);store.set('gap',gap)};
$('repSel').onchange=e=>{repSec=parseFloat(e.target.value);store.set('repSec',repSec)};
$('voiceEs').onchange=e=>{store.set('voice_es',e.target.value);updateVoiceUI()};
$('voiceEn').onchange=e=>{store.set('voice_en',e.target.value);updateVoiceUI()};
document.addEventListener('keydown',e=>{
  if(e.target.tagName==='SELECT'||e.ctrlKey||e.metaKey)return;
  if(e.key==='p'||e.key==='P'){e.preventDefault();autoOn?stopAuto():startAuto()}
});
document.addEventListener('visibilitychange',()=>{
  if(document.hidden){ if(autoOn){stopAuto();pausedByHide=true} }
  else if(pausedByHide){ pausedByHide=false; setStatus(T('pausedHidden')) }
});

applyUI();
