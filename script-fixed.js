const QUESTIONS = [
["Why can roads develop cracks, especially during winter?",["Water enters small cracks, freezes, expands, and can widen them","Cold air turns pavement into water","Snow makes pavement grow roots","Cars become heavier in winter"]],
["What happens to most materials when they are heated?",["They expand","They disappear","They freeze","They always become lighter"]],
["What happens to most materials when they are cooled?",["They contract","They always melt","They create particles","They double in mass"]],
["When a substance is heated, what usually happens to its particles?",["They move faster and tend to spread farther apart","They stop moving","They vanish","They become much larger particles"]],
["When a substance is cooled, what usually happens to its particles?",["They move more slowly and tend to come closer together","They move faster","They multiply","They turn into light"]],
["What is thermal expansion?",["An increase in size caused by heating","A decrease in size caused by heating","Freezing caused by pressure","A change in colour"]],
["What is thermal contraction?",["A decrease in size caused by cooling","An increase in size caused by cooling","Boiling caused by heat","A change in mass"]],
["Why do engineers allow space for expansion in some structures?",["So materials can expand without causing damage","To make structures heavier","To keep particles motionless","To make materials freeze"]],
["Why might a bridge need expansion joints?",["To allow parts to expand and contract with temperature","To let rain into the bridge","To make the bridge colder","To stop vehicles"]],
["What could happen if a long metal structure had no room to expand on a hot day?",["It could bend, buckle, or become damaged","It would turn into ice","It would lose all its mass","Nothing could happen"]],
["Why is understanding thermal expansion useful when designing buildings?",["It helps designers allow for temperature-related size changes","It prevents gravity","It makes all materials identical","It stops weather from changing"]],
["Which situation is an example of thermal contraction?",["A metal object becoming slightly smaller as it cools","Ice melting in a glass","Water boiling","Paper being cut"]],
["Which situation is an example of thermal expansion?",["A metal rail becoming slightly longer as it heats","A puddle freezing","A rock breaking when hit","Salt dissolving"]],
["If materials did not expand or contract with temperature, which design concern would be reduced?",["Allowing gaps for temperature-related size changes","Supporting weight","Keeping roofs waterproof","Providing fire exits"]],
["If materials never changed size with temperature, what would happen to expansion joints used only for thermal movement?",["They would be less necessary for that purpose","They would make materials boil","They would create gravity","They would freeze buildings"]],
["Why can repeated freezing and thawing damage a road?",["Water can enter cracks and expand when it freezes","Ice removes particles from pavement","Cold makes pavement weightless","Snow changes asphalt into metal"]],
["Water freezes in a small pavement crack. What can the expanding ice do?",["Push on the sides of the crack","Make the crack instantly disappear","Remove the pavement's mass","Turn the road into liquid"]],
["Which change generally makes particles in a substance move faster?",["Heating","Cooling","Freezing only","Removing colour"]],
["Which change generally makes particles in a substance move more slowly?",["Cooling","Heating","Adding light","Changing shape by cutting"]],
["Why does heating often make a solid slightly larger?",["Its particles vibrate more and their average spacing increases","New matter appears","Gravity stops","Every particle doubles in size"]],
["What unusual property does water have when it freezes?",["It expands and the solid ice is less dense than liquid water","It becomes more dense than every liquid","It loses all its mass","It becomes a gas"]],
["Why does ice float on liquid water?",["Ice is less dense than liquid water","Ice has no mass","Water pushes only cold objects upward","Ice is always filled with air"]],
["How does water's behaviour when freezing differ from most substances?",["Frozen water is less dense than its liquid form","Frozen water has no particles","Water cannot change state","Liquid water is always less dense than its solid form"]],
["What happens to water's volume when it freezes?",["It increases","It becomes zero","It always halves","It cannot change"]],
["What happens to the density of water when it freezes into ice?",["It becomes lower","It becomes infinitely high","It becomes zero","Density no longer exists"]],
["Which statement best explains the lower density of ice?",["Water molecules form a more open arrangement when water freezes","Ice has no molecules","Ice loses all oxygen atoms","Frozen particles have no mass"]],
["If ice were denser than liquid water, what would it do after forming?",["Sink","Float higher","Turn immediately into steam","Lose its mass"]],
["If newly formed ice sank, how might a cold pond freeze differently?",["More of the pond could freeze instead of keeping floating surface ice","Only the top could ever freeze","The water would become hotter","The pond would lose gravity"]],
["Why is floating surface ice important to organisms in a pond during winter?",["It helps insulate liquid water below","It removes all oxygen","It makes the entire pond freeze faster","It turns fish into warm-blooded animals"]],
["What is found beneath the ice of many frozen lakes?",["Liquid water","Only empty space","Only solid ice in every case","Boiling water"]],
["How can a layer of ice help aquatic life survive winter?",["It slows heat loss from the water beneath it","It heats the lake above boiling","It removes the need for water","It makes ice denser than water"]],
["Which is denser?",["Liquid water is denser than ice","Ice is always denser than liquid water","They have no density","Density cannot be compared"]],
["An ice cube floats in a glass. What does this show?",["The ice is less dense than the liquid water","The ice has no mass","The water is a solid","The ice is hotter than the water"]],
["A student says, 'All solids are denser than their liquids.' What is a useful counterexample?",["Ice and liquid water","A metal spoon and a table","Sand and a rock","Paper and cardboard"]],
["Why can frozen water split or damage a completely full container?",["Water expands as it freezes","Water disappears as it freezes","Ice has no volume","Cold removes the container's particles"]],
["Which example best connects thermal change to infrastructure?",["Leaving room for bridge sections to expand and contract","Painting all bridges the same colour","Making every road straight","Building only at night"]],
["On a hot day, particles in a metal rail generally do what compared with on a cold day?",["Vibrate more rapidly","Stop moving","Disappear","Lose all mass"]],
["As a metal rail cools, what usually happens to its length?",["It becomes slightly shorter","It always doubles","It becomes liquid immediately","It gains new atoms"]],
["Engineers know a material will expand in summer. What is a sensible design response?",["Provide space or a joint for movement","Clamp every part so it can never move","Ignore temperature","Remove all supports"]],
["Why are temperature changes important when choosing materials for outdoor structures?",["Outdoor materials may repeatedly expand and contract","Outdoor materials have no particles","Temperature only affects colour","Outdoor structures do not experience forces"]],
["A tightly fitted material expands when heated. What can result?",["Stress or deformation","Instant weightlessness","Loss of all particles","Permanent freezing"]],
["Which particle description best matches a heated solid?",["Particles vibrate faster around their positions","Particles completely stop","Particles disappear","Particles become living cells"]],
["Which particle description best matches a cooled solid?",["Particles vibrate more slowly","Particles always fly apart","Particles multiply","Particles lose all mass"]],
["What causes thermal expansion?",["Increased particle motion and spacing as thermal energy increases","The creation of new matter","A loss of gravity","A change in an object's name"]],
["What causes thermal contraction in most materials?",["Reduced particle motion and spacing as thermal energy decreases","The creation of extra particles","An increase in gravity","A change in colour"]],
["Suppose a pond begins freezing on a cold night. Where does ice normally form first?",["At the surface","Only at the bottom","In surrounding soil only","Nowhere because water cannot freeze"]],
["Why does the first ice usually remain at the surface of a pond?",["It is less dense than the liquid water","It has no mass","It is pulled upward by gravity","It is a gas"]],
["If ice sank instead of floated, which winter habitat would be most affected?",["The liquid-water habitat beneath surface ice","The dry soil above the pond","Clouds above the pond","Sunlight in space"]],
["Which pair is correctly matched?",["Heating: expansion; cooling: contraction","Heating: contraction; cooling: expansion","Heating: freezing; cooling: boiling","Heating: no particle motion; cooling: faster motion"]],
["What idea connects road cracks, bridge joints, and changes in particle motion?",["Temperature can cause materials to expand or contract","All materials have the same density","Ice is denser than liquid water","Particles disappear when cooled"]],["What is the particle model of matter?",["The idea that all matter is made up of tiny particles","The theory that energy is created from matter","The concept that matter cannot be created or destroyed","The belief that temperature does not affect matter"]]
,["What happens to particle movement when temperature increases?",["Particles move faster","Particles move more slowly","Particles stop moving","Temperature has no effect on particles"]]
,["What happens to water particles when water freezes?",["They move more slowly and form an organized structure","They move faster and spread out","Their attractive forces disappear","They turn into different particles"]]
,["At what temperatures does water freeze and boil on the Celsius scale?",["Water freezes at 0 degrees Celsius and boils at 100 degrees Celsius","Water freezes at 32 degrees Celsius and boils at 212 degrees Celsius","Water freezes at 0 degrees Fahrenheit and boils at 100 degrees Fahrenheit","Water freezes at 32 degrees Celsius and boils at 100 degrees Celsius"]]
,["What is the change from a gas to a liquid called?",["Condensation","Evaporation","Freezing","Melting"]]
,["Which action would increase the rate of evaporation of water?",["Heating the water","Cooling the water","Freezing the water","Lowering its temperature"]]
,["What is the process in which a solid changes directly into a gas?",["Sublimation","Melting","Freezing","Condensation"]]
,["Why can heating a balloon filled with air cause it to expand or eventually pop?",["Air particles move faster and spread out","Air particles shrink","Air particles stop moving","Air particles disappear"]]
,["Why is thermal expansion and contraction important to consider when constructing buildings and other structures?",["It helps prevent cracking, bending, or other damage","It makes structures more colourful","It reduces their weight","It prevents all heat loss"]]
,["Why do bridges often have expansion joints?",["To allow materials to expand and contract as temperatures change","To reduce the bridge's weight","To make the bridge look better","To make the bridge shorter"]]
,["Which property of matter stays the same when matter changes state in a closed system?",["Mass","Volume","Density","Shape"]]
,["Why is particle theory useful?",["It helps explain changes of state, expansion, contraction, and the behaviour of materials","It only explains why objects have colour","It proves that particles never move","It only applies to solids"]]
,["True or false: Particles in solids do not move.",["False","True"]]
,["True or false: The arrangement and movement of particles help determine the state of matter.",["True","False"]]
,["True or false: Gas particles are far apart and move rapidly.",["True","False"]]
,["True or false: The volume of a substance always stays the same during a phase change.",["False","True"]]
,["True or false: Ice is less dense than liquid water.",["True","False"]]
,["True or false: Attractive forces between particles generally become less effective as particles gain thermal energy and move farther apart.",["True","False"]]
,["What does expansion mean?",["An increase in size or volume","A decrease in size or volume","A liquid becoming a solid","A gas becoming a liquid"]]
,["Which state of matter has no definite shape or definite volume?",["Gas","Solid","Liquid","Ice"]]
,["What is a phase change?",["Matter changing from one state to another","Matter disappearing","Matter gaining mass","Matter changing into energy"]]
,["What is contraction?",["A decrease in size or volume","An increase in size or volume","A solid becoming a liquid","A liquid becoming a gas"]]
,["Which state of matter has a definite volume but takes the shape of its container?",["Liquid","Solid","Gas","All states"]]
,["What is the process of a solid changing into a liquid?",["Melting","Freezing","Condensation","Sublimation"]]
,["Which state of matter has a definite shape and a definite volume?",["Solid","Liquid","Gas","All three"]]
,["What is the process of a liquid changing into a solid?",["Freezing","Melting","Evaporation","Condensation"]]
,["How does a liquid thermometer work?",["The liquid expands when heated and contracts when cooled","The liquid changes into a gas whenever it gets warm","The glass expands but the liquid does not","The liquid changes colour because its particles stop moving"]]
,["Why can a layer of ice on a lake help protect aquatic life during winter?",["Ice floats and helps insulate the liquid water underneath","Ice sinks and heats the bottom of the lake","Ice causes all the water underneath to freeze","Fish can breathe through ice"]]
,["What could happen if solid water were denser than liquid water?",["Ice would sink","Ice would float higher","Water would no longer freeze","Water would boil at a lower temperature"]]
,["When ice is heated and begins to melt, what happens to its particles?",["They gain energy and can move more freely","They lose energy and stop moving","They disappear","They become gas immediately"]]
,["When liquid water is heated enough to become a gas, what happens to its particles?",["They gain energy and move farther apart","They lose energy","They become smaller","They stop moving"]]
,["Which sequence correctly describes water changing from ice to water vapour?",["Melting, then evaporation","Freezing, then condensation","Condensation, then freezing","Evaporation, then melting"]]
,["Which is a real-world example of condensation?",["Water droplets forming on the outside of a cold glass","An ice cube melting","A puddle drying","Water freezing in an ice tray"]]
,["Which is a real-world example of evaporation?",["A puddle slowly disappearing on a warm day","Water turning into ice","Frost forming","Water droplets forming on a cold surface"]]
];
const QUIZ_SIZE=10;let quiz=[],current=0,score=0,answered=false;
const $=id=>document.getElementById(id);
function shuffled(a){return [...a].sort(()=>Math.random()-.5)}
function start(){quiz=shuffled(QUESTIONS).slice(0,QUIZ_SIZE).map(([question,choices])=>{const answer=choices[0];return{question,answer,choices:shuffled(choices)}});current=0;score=0;answered=false;$('result').classList.add('hidden');$('quiz').classList.remove('hidden');render()}
function render(){const q=quiz[current];$('progressText').textContent=`Question ${current+1} of ${QUIZ_SIZE}`;$('scoreText').textContent=`Score ${score}`;$('progressBar').style.width=`${((current+1)/QUIZ_SIZE)*100}%`;$('question').textContent=q.question;$('feedback').textContent='';$('feedback').className='feedback';$('nextBtn').disabled=true;$('nextBtn').textContent=current===QUIZ_SIZE-1?'See Results':'Next Question';answered=false;const box=$('answers');box.innerHTML='';q.choices.forEach((text,i)=>{const b=document.createElement('button');b.className='answer';b.textContent=`${String.fromCharCode(65+i)}. ${text}`;b.onclick=()=>choose(b,text);box.appendChild(b)})}
function choose(btn,text){if(answered)return;answered=true;const q=quiz[current];document.querySelectorAll('.answer').forEach(b=>{b.disabled=true;if(b.textContent.slice(3)===q.answer)b.classList.add('correct')});if(text===q.answer){score++;$('feedback').textContent='Correct!';$('feedback').classList.add('good')}else{btn.classList.add('wrong');$('feedback').textContent=`Not quite. The correct answer is: ${q.answer}`;$('feedback').classList.add('bad')}$('scoreText').textContent=`Score ${score}`;$('nextBtn').disabled=false}
$('nextBtn').onclick=()=>{if(current<QUIZ_SIZE-1){current++;render()}else finish()};
function finish(){$('quiz').classList.add('hidden');$('result').classList.remove('hidden');$('finalScore').textContent=`You scored ${score} out of ${QUIZ_SIZE}.`;const pct=score/QUIZ_SIZE;$('finalMessage').textContent=pct===1?'Perfect score! Excellent work!':pct>=.8?'Great job! You know this material well.':pct>=.6?'Nice work! Keep practising.':'Keep practising. A new quiz will give you a different mix of questions.'}
$('restartBtn').onclick=start;start();
