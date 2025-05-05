"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
class Director {
    constructHero(builder) {
        builder
            .setName("Aurora")
            .setHeight(175)
            .setEyesColor("sapphire blue")
            .setMood("courageous")
            .setSuperPower("elemental control")
            .addInventoryItem("enchanted sword")
            .addInventoryItem("healing amulet")
            .addInventoryItem("magical cloak")
            .addGoodDeed("saved a village from flood")
            .addGoodDeed("protected orphans from monsters")
            .addGoodDeed("restored ancient forest");
    }
    constructEnemy(builder) {
        builder
            .setName("Shadowbane")
            .setHeight(190)
            .setEyesColor("blood red")
            .setMood("vengeful")
            .setDamage(85)
            .addWeapon("cursed dagger")
            .addWeapon("soul-stealing bow")
            .addEvilDeed("corrupted the sacred grove")
            .addEvilDeed("enslaved a peaceful town")
            .addEvilDeed("poisoned the kingdom's water supply");
    }
}
exports.Director = Director;
