const number = 100;

!!(number);

const foo = 'string';

foo.split(' ');
console.log(foo);

const hello = 'prateek#100#hi'

const emoji = 'cake💔';

const zoo = {
    lion : '🦁',
    panda : '🐼'
};

console.log(Object.keys(zoo));
console.log(Object.values(zoo));
console.log(Object.entries(zoo));

const bar = ['🍫' ,'🍬' ,'🎂 '];
console.log(bar.includes('🐟'));

const barReverse = bar.reverse();
console.log(barReverse);

const flags = ['🇮🇳','🇩🇪','🇷🇺'];
const newflags = flags.slice().reverse();

console.log(flags);
console.log(newflags);

const workout = '🏋 🚬 💪';
console.log(workout.endsWith('💪'));

