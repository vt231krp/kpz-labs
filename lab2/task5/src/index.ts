import { Director } from "./Director";
import { HeroBuilder } from "./HeroBuilder";
import { EnemyBuilder } from "./EnemyBuilder";

const director = new Director();

console.log("Creating hero through director:");
const heroBuilder = new HeroBuilder();
director.constructHero(heroBuilder);
const dreamHero = heroBuilder.build();

console.log("\nHero details:");
console.log(`Name: ${dreamHero.getName()}`);
console.log(`Height: ${dreamHero.getHeight()} cm`);
console.log(`Eyes: ${dreamHero.getEyesColor()}`);
console.log(`Mood: ${dreamHero.getMood()}`);
console.log(`Superpower: ${dreamHero.getSuperPower()}`);

console.log("\nCreating enemy through director:");
const enemyBuilder = new EnemyBuilder();
director.constructEnemy(enemyBuilder);
const archEnemy = enemyBuilder.build();

console.log("\nEnemy details:");
console.log(`Name: ${archEnemy.getName()}`);
console.log(`Height: ${archEnemy.getHeight()} cm`);
console.log(`Eyes: ${archEnemy.getEyesColor()}`);
console.log(`Mood: ${archEnemy.getMood()}`);

console.log("\nCreating custom hero using fluent interface:");
const customHero = new HeroBuilder()
  .setName("Zephyr")
  .setHeight(182)
  .setEyesColor("emerald green")
  .setMood("determined")
  .setSuperPower("time manipulation")
  .addInventoryItem("chronometer watch")
  .addInventoryItem("energy staff")
  .addGoodDeed("prevented catastrophic explosion")
  .build();

console.log("\nCreating custom enemy using fluent interface:");
const customEnemy = new EnemyBuilder()
  .setName("Vexus")
  .setHeight(200)
  .setEyesColor("obsidian black")
  .setMood("calculating")
  .setDamage(75)
  .addWeapon("mind-control scepter")
  .addEvilDeed("created an army of mind-controlled citizens")
  .build();

console.log("\nCharacter Interaction:");
archEnemy.attack(dreamHero);
customEnemy.attack(customHero);
