const deck = `necromancer

spawn 1 walker
spawn 3 walker
spawn 2 runner
abomination

spawn 3 walker
spawn 1 fat
spawn 4 walker
spawn 6 walker

spawn 1 walker
spawn 2 runner
spawn 3 fat
spawn 6 walker

spawn 2 walker
spawn 1 runner
spawn 1 fat
spawn 3 fat

spawn 1 runner
spawn 4 walker
spawn 4 walker
spawn 3 fat

spawn 1 fat
spawn 2 walker
spawn 2 fat
spawn 5 walker

spawn 1 fat
spawn 1 runner
spawn 6 walker
spawn 2 runner

spawn 1 walker
spawn 1 runner
spawn 3 fat
spawn 3 fat

double

spawn 2 walker
spawn 1 fat
abomination
spawn 6 walker

nothing
activate fat
activate fat
activate fat

spawn 1 fat
spawn 2 walker
spawn 2 fat
spawn 7 walker

spawn 1 runner
spawn 3 walker
spawn 3 walker
spawn 5 walker

nothing
spawn 2 runner
spawn 5 walker
spawn 2 fat

spawn 1 walker
spawn 2 fat
spawn 2 runner
spawn 8 walker

necromancer

necromancer

spawn 1 walker
spawn 4 walker
spawn 2 runner
spawn 3 fat

necromancer

double

spawn 1 fat
spawn 3 walker
spawn 5 walker
spawn 3 runner

spawn 2 walker
abomination
spawn 1 fat
spawn 3 runner

spawn 1 runner
spawn 3 walker
spawn 3 walker
spawn 6 walker

spawn 1 fat
spawn 2 walker
spawn 2 runner
spawn 3 runner

double

spawn 1 walker
spawn 2 fat
spawn 2 runner
spawn 8 walker

double

double

double

spawn 1 runner
spawn 4 walker
spawn 4 walker
spawn 3 fat

spawn 1 fat
spawn 1 runner
spawn 6 walker
spawn 2 runner

spawn 2 walker
spawn 1 fat
abomination
spawn 6 walker

spawn 2 walker
abomination
spawn 1 fat
spawn 3 runner

spawn 1 fat
spawn 2 walker
spawn 2 fat
spawn 7 walker

spawn 1 walker
spawn 3 walker
spawn 2 runner
abomination

necromancer

double

necromancer

nothing
activate walker
activate walker
activate walker

nothing
spawn 4 walker
spawn 3 runner
spawn 2 runner

spawn 1 walker
spawn 2 runner
spawn 3 fat
spawn 6 walker

spawn 1 runner
spawn 1 fat
spawn 4 walker
spawn 5 walker

spawn 1 walker
spawn 1 fat
spawn 4 walker
spawn 5 walker

nothing
spawn 2 fat
spawn 5 walker
spawn 5 walker

spawn 1 fat
spawn 3 walker
spawn 5 walker
spawn 3 runner

abomination
spawn 1 runner
spawn 5 walker
spawn 2 fat

abomination
spawn 1 runner
spawn 5 walker
spawn 2 fat

spawn 1 runner
spawn 1 fat
spawn 4 walker
spawn 5 walker

spawn 1 walker
spawn 2 walker
spawn 1 runner
spawn 3 runner

nothing
activate runner
activate runner
activate runner

spawn 1 walker
spawn 4 walker
spawn 2 runner
spawn 3 fat

double

nothing
activate walker
activate walker
activate walker`;

export default function getDeck() {
  return deck.split('\n\n');
}
