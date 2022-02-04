#!/usr/bin/env node

//  ________                  ________      
// /$$$$$$$$|                /$$$$$$$/   
// | $$___ $|     _____     / $$/        
// | $$    /     /$$$$$$   ||$ |         ______
// | $$$$$$     /$$__  $$  ||$ |        /$$$$$$\
// | $$__$/    | $$  \ $$  ||$ |       |$      $|
// | $$   |$   | $$  | $$  ||$ |       |$$$$$$$$|
// | $$     |$ |  $$$$$$/  ||$ |       |$$$$$$$$|    
// |__/     |$| \______/    \ $$\      |$$    $$|
// /*      |$                \ $$$$$$/ 
// */                        

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.neon(
    'Quieres probar tus conocimientos de JavaScript? \n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.blue('COMO JUGAR :>')} 
    En realidad soy un proceso en la compu.

    Es por eso y porque no me hicieron con un manejo de una excepcion en particular que ante 
    la primera falla voy a ser... ${chalk.bgRed('TERMINADO')}
    
    Yep... no do-overs, besides... ${chalk.bgBlack.red('San Google no se puede usar >:}')} 
  `);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Revisando respuestas...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Muy bien! ${playerName}. Tu respuesta es correcta` });
  } else {
    spinner.error({ text: `💀💀💀 Game over, acabas de perder ${playerName}!` });
    process.exit(1);
  }
}

async function handleEasterEgg(isClicked) {
const spinner = createSpinner('Revisando respuestas...').start();
  await sleep();

  if (isClicked) {
    spinner.error({ text: `${playerName} Seleccionaste la fecha de nacimiento de mi creador.
    Entonces...  💀💀💀 Game over, acabas de perder 💀💀💀` });
    process.exit(1);
  } else {
    spinner.error({ text: `${playerName} Seleccionaste la fecha de nacimiento de mi creador.
    Entonces...  💀💀💀 Game over, acabas de perder 💀💀💀` });
    process.exit(1);
  }
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'Cual es tu nombre?',
    default() {
      return '播放器 #1';
    },
  });

  playerName = answers.player_name;
}

function winner() {
  console.clear();
  figlet(`Felicidades , ${playerName} !\n COMPLETASTE EL JUEGO!!!`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `Programar es saber usar la fuerza sin necesidad de los midiclorianos :]`
      )
    );
    process.exit(0);
  });
}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'JavaScript fue creado en 10 dias y luego publicado en: \n',
    choices: [
      'Mayo 23, 1995',
      'Nov 24, 1995',
      'Dec 4, 1995',
      'Dec 17, 1996',
      'Dec 10, 2001'
    ],
  });

  if(answers.question_1 === 'Dec 10, 2001'){
    return handleEasterEgg();
  }else{
    return handleAnswer(answers.question_1 === 'Dec 4, 1995');
  }

}

async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'Cual es el resultado de x? var x = 1_1 + "1" + Number(1)\n',
    choices: ['4', '"4"', '"1111"', '69420'],
  });
  return handleAnswer(answers.question_2 === '"1111"');
}

async function question3() {
  const answers = await inquirer.prompt({
    name: 'question_3',
    type: 'list',
    message: `Cual es el primer elemento del array? ['🔥', '🌊', '🌱'].length = 0\n`,
    choices: ['0', '🔥', '🌱', 'undefined'],
  });

  return handleAnswer(answers.question_3 === 'undefined');
}

async function question4() {
  const answers = await inquirer.prompt({
    name: 'question_4',
    type: 'list',
    message: 'Cual NO es un tipo primitivo?\n',
    choices: [
      'boolean',
      'number',
      'null',
      'object', // Correcta xdxdxd
    ],
  });
  return handleAnswer(answers.question_4 === 'object');
}

async function question5() {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message:
      'JS es un lenguaje de alto nivel, single-threaded, garbage-collected,\n' +
      'interpretado(o compilado just-in-time), basado en prototipos,\n' +
      'multi-paradigma, dinamico con un ____ event loop\n',
    choices: ['multi-threaded', 'non-blocking', 'synchronous', 'promise-based'],
  });

  return handleAnswer(answers.question_5 === 'non-blocking');
}

// Hice uso de  top-level await para aprender algo nuevo y facilitarme la vida jaja
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
winner();