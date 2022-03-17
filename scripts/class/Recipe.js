export class Recipe {
    constructor(
      id,
      name,
      altTxt,
      servings,
      ingredients,
      time,
      description,
      appliance,
      ustensils
    ) {
      this.id = id;
      this.name = name;
      this.altTxt = altTxt;
      this.servings = servings;
      this.ingredients = ingredients;
      this.time = time;
      this.description = description;
      this.appliance = appliance;
      this.ustensils = ustensils;
    }
}