document.getElementById('search-input').addEventListener('input', function() {
    let input = this.value.toLowerCase();
    let resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';

    let words = [
        "avoid possible collisions": "избягвам възможни сблъсъци",
  "beforehand, in advance - предварително",
  "board - качвам се на самолет/кораб",
  "bold - смел, дързък, предприемчив",
  "bring about - причинявам, довеждам до",
  "capsule - капсула",
  "catastrophic impact - катастрофално влияние",
  "collision - сблъсък",
  "convenient alternative - удобна алтернатива",
  "a cross between - кръстоска между",
  "currently - понастоящем, за сега",
  "exhaust fumes - изгорели газове",
  "food miles - the distance travelled by food",
  "friction - триене, търкане",
  "from field to fork - from production to consumption of sth",
  "get ahead - напредвам",
  "get away - измъквам се, избягвам",
  "get in - влизам в превозно средство",
  "get off - слизам от превозно средство",
  "get on - качвам се",
  "get out - излизам, измъквам се",
  "high-speed train - високо скорстен влак",
  "impact - влияние, въздействие",
  "land - кацам, приземявм се",
  "landing - площадка (на стълбище)",
  "launch - стартирам, изстрелвам",
  "manned - с екипаж",
  "miscalculate - обърквам сметките",
  "misunderstand - погрешно разбирам",
  "myth - мит",
  "nevertheless - въпреки това, въпреки всичко",
  "noise pollution - шумово замърсяване",
  "norm - норма",
  "on the move - в движение",
  "orbit - обиколка, обикалям около планета",
  "overbook - презаето",
  "overpopulated - пренаселено",
  "parcel - пакет, колет",
  "pick up - вдигам/взимам",
  "postgraduate - следдипломен",
  "public transport inconveniences - неудобства на градския транспорт",
  "reduce traffic problems - намалявам проблемите с трафика",
  "reinvent - преоткривам",
  "roughly - грубо, приблизително",
  "save up - спестявам",
  "scandalous - скандално",
  "schedule - график, разписание",
  "see off - изпращам",
  "set off/out - потеглям, заминавам",
  "a sharp increase - силен ръст на",
  "spacecraft - космически кораб",
  "space station - космическа станция",
  "stop off at - спирам пътувне, отбивам се",
  "supersonic - свръхзвуков",
  "take into account - вземам под внимание",
  "take off - излитане",
  "underestimate - недооценявам, подценявам",
  "underpaid - зле платен",
  "unlikely - малко вероятно",
  "widespread use - широко разпространена употреба",
  "accelerate - to speed up, move faster",
  "appear to be - seem to be; изглежда, струва ми се",
  "banger - an old, in poor condition car; таратайка",
  "board - bus/train/plane/spacecraft",
  "boy racer - a young man who drives fast and dangerously",
  "breadth - width; extent; широчина, шир",
  "broaden - enlarge,expand,develop, разширявам",
  "a burst of speed - a sharp increase in pace; внезапно ускорява",
  "catch up with somebody - reach the same point; настигам",
  "check in - arrive and register at a hotel or airport",
  "check out - to leave a hotel after paying your bill",
  "chock-a-block - completely full of people or things; претъпкан",
  "differ from sth - to be unlike; различавам се, отличавам се",
  "do sth by accident - do sth in a way that is not planned or intended",
  "drive like the clappers - drive very fast",
  "drive sb round the bend - drive sb crazy by annoying them",
  "drop off - to stop a vehicle and let someone get out; закарвам нкг",
  "get back - to return from a place",
  "get in/out of - car/spacecraft",
  "get on/get off - bus/train/plane",
  "get stuck in traffic - be held up by a traffic jam",
  "go away on holiday - go somewhere for a holiday",
  "go sightseeing - to look around the tourist sites",
  "go straight ahead - continuing in one direction without bending",
  "gridlock - безизходица, задръстване",
  "indicate - to show or point out; показвам, посочвам",
  "in the direction of - towards",
  "jam on the break - slow down a car suddenly by putting your foot down hard on the brake",
  "joyrider - a person who drives fast and dangerously for pleasure, especially in a stolen vehicle",
  "junction - the meeting point of two roads, or railroads",
  "keep up with sb/sth - to move at the same speed as sb; в крак съм, не изоставам",
  "make for - go in the direction of; отправям се към",
  "pedestrian crossing - a place on a road where traffic must stop if people want to cross; пешеходна пътека",
  "pedestrians - people who walk, travel on foot",
  "pick sb up - to collect, or to go and get, sb or sth; вземам нкг/нщ от някъде",
  "pile up - crash between several or many cars; верижна катастрофа",
  "pull away - a vehicle moves from a place; потеглям, отдръпвам се",
  "pull in - stop by the side of the road in a car",
  "pull over - stop a car on the side of the road",
  "put your foot down - натискам газта",
  "recognisable - easy to know or identify; узнаваем",
  "recognition- the ability to match a piece of information or a stimulus to a stored image or fact; признание, разпознаване",
  "regret doing sth - feel sorry that you did sth",
  "reverse - turning in the opposite direction; обръщам",
  "road hog - drives badly or too fast without thinking about other people's safety",
  "road rage - a violent attack by a driver on another car or its driver",
  "roadworks - repairs that are being done to the road",
  "roundabout - a raised circular area where three or more roads join together and which cars must drive around; кръгово",
  "run over - hit with a car",
  "see off - go to the station or airport to say goodbye to sb",
  "set out / off - to start a journey",
  "skid - slide without control on a slippery surface like ice; занасям, плъзгам",
  "stick to sth/sb - stay together; придържам се, залепен съм, не се отделям",
  "swerve - to turn aside sharply; a sharp or sudden turn; отклонявам се, завивам внезапно",
  "tailgating - following another vehicle too closely.",
  "take a route - follow a route",
  "take off/land - plane/ spacecraft",
  "thumb a lift - to hitchhike",
  "to give sb a lift / a ride - take sb somewhere in your car",
  "to release the handbreak - отпускам ръчната спирачка",
  "to stall - lose speed and stop; блокирам, бавя",
  "to start up - start a car; запалвам колата",
  "to stop off (at a place) - make a short visit to a place during a journey, especially to see sb",
  "to write (a car) off - damage a vehicle so badly that it can never be used again",
  "turn round - go back in the opposite direction"
    ];

    words.forEach(function(word) {
        if (word.toLowerCase().includes(input)) {
            let listItem = document.createElement('li');
            listItem.textContent = word;
            resultsList.appendChild(listItem);
        }
    });

    if (resultsList.children.length > 0) {
        resultsList.style.display = 'block';
    } else {
        resultsList.style.display = 'none';
    }
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-container')) {
        document.getElementById('results-list').style.display = 'none';
    }
});
