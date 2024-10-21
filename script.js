const breakfastContent = document.querySelector("#breakfast-card .content");
const lunchContent = document.querySelector("#lunch-card .content");
const dinnerContent = document.querySelector("#dinner-card .content");
const snackContent = document.querySelector("#snack-card .content");

const meals = {
    anything: {
        breakfast: [
            { item: "Breakfast Burrito", calories: 350, recipe: "Scrambled eggs, black beans, cheese, and salsa wrapped in a flour tortilla." },
            { item: "Avocado Toast with Poached Egg", calories: 300, recipe: "Whole grain toast topped with smashed avocado, poached egg, salt, and pepper." }
        ],
        lunch: [
            { item: "Classic Cheeseburger", calories: 500, recipe: "1 beef patty, 1 slice cheddar cheese, lettuce, tomato, onion, pickles, and ketchup on a sesame seed bun." },
            { item: "Turkey Avocado Sandwich", calories: 400, recipe: "Sliced turkey, avocado, lettuce, tomato, and mayonnaise on whole grain bread." }
        ],
        dinner: [
            { item: "BBQ Chicken Sandwich", calories: 450, recipe: "Grilled chicken breast topped with BBQ sauce, coleslaw, and pickles on a brioche bun." },
            { item: "Veggie Burger", calories: 350, recipe: "Black bean patty with lettuce, tomato, onion, and avocado on a whole wheat bun." }
        ],
        snack: [
            { item: "Caprese Skewers", calories: 200, recipe: "Cherry tomatoes, fresh mozzarella balls, and basil drizzled with balsamic glaze on skewers." },
            { item: "Mini Grilled Cheese Sandwiches", calories: 300, recipe: "Mini sourdough bread slices with melted cheddar cheese, grilled until golden brown." }
        ],
        drinks: {
            breakfast: [
                { item: "Iced Coffee", calories: 100, recipe: "Brewed coffee served over ice with milk or cream and sweetener to taste." },
                { item: "Fresh Orange Juice", calories: 110, recipe: "Juice freshly squeezed oranges for a refreshing drink." }
            ],
            lunch: [
                { item: "Lemonade", calories: 150, recipe: "Mix fresh lemon juice, water, and sugar to taste." },
                { item: "Sparkling Water", calories: 0, recipe: "Chilled sparkling water, served plain or with a slice of lemon." }
            ],
            dinner: [
                { item: "Red Wine", calories: 125, recipe: "Glass of red wine, served chilled or at room temperature." },
                { item: "Herbal Tea", calories: 0, recipe: "Steep herbal tea bag in hot water." }
            ],
            snack: [
                { item: "Protein Shake", calories: 200, recipe: "Blend protein powder with water or milk." },
                { item: "Coconut Water", calories: 45, recipe: "Serve chilled coconut water." }
            ]
        }
    },
    Nonveg: {
        breakfast: [
            { item: "Egg and Sausage Muffin", calories: 400, recipe: "English muffin with fried egg, sausage patty, and cheese." },
            { item: "Bacon and Egg Hash", calories: 450, recipe: "Diced potatoes sautéed with bacon and topped with a fried egg." }
        ],
        lunch: [
            { item: "Chicken Caesar Salad", calories: 500, recipe: "Grilled chicken, romaine lettuce, parmesan cheese, croutons, and Caesar dressing." },
            { item: "Tuna Salad Sandwich", calories: 350, recipe: "Tuna mixed with mayonnaise, celery, and onion served on whole grain bread." }
        ],
        dinner: [
            { item: "Grilled Salmon", calories: 550, recipe: "Grilled salmon fillet served with lemon and herbs." },
            { item: "Steak Fajitas", calories: 600, recipe: "Sliced steak with bell peppers and onions, served with tortillas." }
        ],
        snack: [
            { item: "Buffalo Chicken Dip", calories: 250, recipe: "Shredded chicken, cream cheese, and buffalo sauce baked together." },
            { item: "Chicken Wings", calories: 400, recipe: "Deep-fried chicken wings tossed in your choice of sauce." }
        ],
        drinks: {
            breakfast: [
                { item: "Protein Coffee", calories: 150, recipe: "Coffee blended with protein powder and milk." },
                { item: "Smoothie with Yogurt", calories: 200, recipe: "Blend yogurt with fruits and a splash of juice." }
            ],
            lunch: [
                { item: "Iced Tea", calories: 100, recipe: "Brewed tea served chilled with lemon." },
                { item: "Soda", calories: 140, recipe: "Chilled soda served with ice." }
            ],
            dinner: [
                { item: "Craft Beer", calories: 180, recipe: "Cold craft beer, served chilled." },
                { item: "Red Wine", calories: 125, recipe: "Glass of red wine, served chilled or at room temperature." }
            ],
            snack: [
                { item: "Nachos with Cheese", calories: 300, recipe: "Tortilla chips topped with melted cheese and jalapeños." },
                { item: "Cheese and Crackers", calories: 200, recipe: "Assorted cheese served with crackers." }
            ]
        }
    },
    mediterranean: {
        breakfast: [
            { item: "Mediterranean Omelette", calories: 350, recipe: "Eggs, spinach, feta cheese, and olives." },
            { item: "Greek Yogurt with Honey", calories: 300, recipe: "Creamy Greek yogurt topped with honey and walnuts." }
        ],
        lunch: [
            { item: "Falafel Wrap", calories: 450, recipe: "Falafel balls with lettuce, tomato, and tahini sauce in a pita." },
            { item: "Chicken Shawarma Plate", calories: 500, recipe: "Spiced chicken served with rice and garlic sauce." }
        ],
        dinner: [
            { item: "Grilled Lamb Chops", calories: 600, recipe: "Lamb chops marinated in herbs and grilled to perfection." },
            { item: "Seafood Paella", calories: 700, recipe: "Saffron rice cooked with shrimp, mussels, and calamari." }
        ],
        snack: [
            { item: "Hummus and Pita", calories: 250, recipe: "Creamy hummus served with warm pita bread." },
            { item: "Stuffed Grape Leaves", calories: 200, recipe: "Grape leaves stuffed with rice, herbs, and spices." }
        ],
        drinks: {
            breakfast: [
                { item: "Mint Tea", calories: 50, recipe: "Hot tea infused with fresh mint leaves." },
                { item: "Fresh Fruit Smoothie", calories: 200, recipe: "Blend seasonal fruits with yogurt." }
            ],
            lunch: [
                { item: "Sparkling Water with Lemon", calories: 0, recipe: "Chilled sparkling water with a slice of lemon." },
                { item: "Iced Coffee with Almond Milk", calories: 100, recipe: "Brewed coffee served over ice with almond milk." }
            ],
            dinner: [
                { item: "Red Wine", calories: 125, recipe: "Glass of red wine, served chilled or at room temperature." },
                { item: "Olive Oil and Balsamic Vinegar Dip", calories: 200, recipe: "Dipping olive oil and balsamic vinegar with bread." }
            ],
            snack: [
                { item: "Olives and Cheese Platter", calories: 300, recipe: "Assorted olives served with feta cheese." },
                { item: "Pistachios", calories: 170, recipe: "Shelled pistachios for a healthy snack." }
            ]
        }
    },
    keto: {
        breakfast: [
            { item: "Egg and Cheese Muffin", calories: 400, recipe: "Egg baked with cheese in a muffin tin." },
            { item: "Keto Smoothie", calories: 300, recipe: "Blend avocado, spinach, and coconut milk." }
        ],
        lunch: [
            { item: "Zucchini Noodles with Pesto", calories: 450, recipe: "Zucchini spirals tossed with homemade pesto." },
            { item: "Grilled Chicken Salad", calories: 500, recipe: "Grilled chicken on a bed of leafy greens with olive oil dressing." }
        ],
        dinner: [
            { item: "Zucchini Lasagna", calories: 600, recipe: "Layers of zucchini, ground beef, and cheese." },
            { item: "Steak with Garlic Butter", calories: 700, recipe: "Grilled steak topped with garlic herb butter." }
        ],
        snack: [
            { item: "Cheese Crisps", calories: 200, recipe: "Baked cheese until crispy." },
            { item: "Celery with Cream Cheese", calories: 150, recipe: "Celery sticks filled with cream cheese." }
        ],
        drinks: {
            breakfast: [
                { item: "Bulletproof Coffee", calories: 200, recipe: "Coffee blended with butter and MCT oil." },
                { item: "Almond Milk Smoothie", calories: 150, recipe: "Blend almond milk with spinach and protein powder." }
            ],
            lunch: [
                { item: "Sparkling Water", calories: 0, recipe: "Chilled sparkling water, served plain or with lemon." },
                { item: "Iced Green Tea", calories: 50, recipe: "Chilled green tea served with mint." }
            ],
            dinner: [
                { item: "Red Wine", calories: 125, recipe: "Glass of red wine, served chilled or at room temperature." },
                { item: "Herbal Tea", calories: 0, recipe: "Steep herbal tea bag in hot water." }
            ],
            snack: [
                { item: "Guacamole with Veggies", calories: 200, recipe: "Creamy guacamole served with raw veggies." },
                { item: "Nut Butter Fat Bombs", calories: 250, recipe: "Nut butter mixed with coconut oil and cocoa." }
            ]
        }
    },
    vegan: {
        breakfast: [
            { item: "Vegan Pancakes", calories: 300, recipe: "Flour, almond milk, and baking powder pancakes served with maple syrup." },
            { item: "Tofu Scramble", calories: 350, recipe: "Scrambled tofu with vegetables and spices." }
        ],
        lunch: [
            { item: "Chickpea Salad", calories: 400, recipe: "Chickpeas, cucumbers, tomatoes, and tahini dressing." },
            { item: "Vegan Wrap", calories: 450, recipe: "Whole grain wrap filled with hummus, veggies, and avocado." }
        ],
        dinner: [
            { item: "Vegan Stir-Fry", calories: 500, recipe: "Mixed vegetables stir-fried with tofu in soy sauce." },
            { item: "Lentil Curry", calories: 600, recipe: "Lentils cooked with coconut milk and spices." }
        ],
        snack: [
            { item: "Fruit Salad", calories: 200, recipe: "Assorted fruits mixed together." },
            { item: "Veggie Chips", calories: 150, recipe: "Crispy baked vegetable chips." }
        ],
        drinks: {
            breakfast: [
                { item: "Almond Milk Latte", calories: 100, recipe: "Espresso with steamed almond milk." },
                { item: "Smoothie Bowl", calories: 250, recipe: "Smoothie topped with granola and fruits." }
            ],
            lunch: [
                { item: "Lemon Water", calories: 0, recipe: "Water infused with lemon slices." },
                { item: "Iced Herbal Tea", calories: 0, recipe: "Chilled herbal tea served with ice." }
            ],
            dinner: [
                { item: "Red Wine", calories: 125, recipe: "Glass of red wine, served chilled or at room temperature." },
                { item: "Coconut Water", calories: 45, recipe: "Serve chilled coconut water." }
            ],
            snack: [
                { item: "Guacamole with Tortilla Chips", calories: 300, recipe: "Creamy guacamole served with tortilla chips." },
                { item: "Roasted Chickpeas", calories: 200, recipe: "Chickpeas roasted with spices." }
            ]
        }
    },
    vegetarian: {
        breakfast: [
            { item: "Vegetable Omelette", calories: 350, recipe: "Omelette filled with spinach, mushrooms, and cheese." },
            { item: "Greek Yogurt with Fruits", calories: 300, recipe: "Greek yogurt topped with seasonal fruits and honey." }
        ],
        lunch: [
            { item: "Caprese Salad", calories: 400, recipe: "Tomatoes, mozzarella, basil, and balsamic glaze." },
            { item: "Vegetarian Burger", calories: 450, recipe: "Plant-based burger with lettuce, tomato, and avocado." }
        ],
        dinner: [
            { item: "Vegetable Stir-Fry", calories: 500, recipe: "Mixed vegetables stir-fried with soy sauce and garlic." },
            { item: "Pasta Primavera", calories: 600, recipe: "Pasta with seasonal vegetables and olive oil." }
        ],
        snack: [
            { item: "Cheese Platter", calories: 300, recipe: "Assorted cheeses served with crackers." },
            { item: "Veggie Sticks with Hummus", calories: 200, recipe: "Carrot and celery sticks served with hummus." }
        ],
        drinks: {
            breakfast: [
                { item: "Fruit Smoothie", calories: 200, recipe: "Blend fruits with yogurt and ice." },
                { item: "Chai Tea", calories: 50, recipe: "Hot tea with spices and milk." }
            ],
            lunch: [
                { item: "Iced Tea", calories: 100, recipe: "Brewed tea served chilled." },
                { item: "Sparkling Water", calories: 0, recipe: "Chilled sparkling water, served plain or with a slice of lemon." }
            ],
            dinner: [
                { item: "Red Wine", calories: 125, recipe: "Glass of red wine, served chilled or at room temperature." },
                { item: "Herbal Tea", calories: 0, recipe: "Steep herbal tea bag in hot water." }
            ],
            snack: [
                { item: "Dark Chocolate", calories: 200, recipe: "Rich dark chocolate pieces." },
                { item: "Rice Cakes with Nut Butter", calories: 150, recipe: "Rice cakes topped with almond or peanut butter." }
            ]
        }
    }
};

function attachClickListeners() {
    const mealContainers = document.querySelectorAll('.meal-container');

    mealContainers.forEach(container => {
        const tooltip = container.querySelector('.recipe-tooltip');

        container.addEventListener('click', (event) => {
            // Hide any currently visible tooltips
            document.querySelectorAll('.recipe-tooltip.visible').forEach(visibleTooltip => {
                if (visibleTooltip !== tooltip) {
                    visibleTooltip.classList.remove('visible');
                }
            });

            // Toggle the current tooltip's visibility
            tooltip.classList.toggle('visible');
            event.stopPropagation();
        });

        // Optional: Hide tooltip on mouseover
        container.addEventListener('mouseenter', () => {
            tooltip.classList.add('visible');
        });

        container.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });
    });

    // Hide all tooltips when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.recipe-tooltip.visible').forEach(visibleTooltip => {
            visibleTooltip.classList.remove('visible');
        });
    });
}


function generateMealPlan() {
    const selectedDiet = document.querySelector(".diet-btn.active")?.dataset.diet;
    const calories = parseInt(document.getElementById("calories").value, 10);
    const numOfMeals = parseInt(document.getElementById("meals").value, 10);

    if (!selectedDiet) {
        alert("Please select a diet type.");
        return;
    }

    if (!calories || calories <= 0) {
        alert("Please enter a valid calorie count.");
        return;
    }

    clearMealPlan();

    const mealPlan = meals[selectedDiet];
    if (!mealPlan) {
        alert("Meal plan not available for this diet type.");
        return;
    }

    if (numOfMeals >= 1) {
        displayMeal(breakfastContent, mealPlan.breakfast);
        displayDrinks(breakfastContent, mealPlan.drinks.breakfast); // Use specific drinks for breakfast
    }
    if (numOfMeals >= 2) {
        displayMeal(lunchContent, mealPlan.lunch);
        displayDrinks(lunchContent, mealPlan.drinks.lunch); // Use specific drinks for lunch
    }
    if (numOfMeals >= 3) {
        displayMeal(dinnerContent, mealPlan.dinner);
        displayDrinks(dinnerContent, mealPlan.drinks.dinner); // Use specific drinks for dinner
    }
    if (numOfMeals === 4) {
        displayMeal(snackContent, mealPlan.snack);
        displayDrinks(snackContent, mealPlan.drinks.snack); // Use specific drinks for snacks
    }
}


function displayMeal(contentElement, mealItems) {
    mealItems.forEach(meal => {
        const mealItem = document.createElement("div");
        mealItem.classList.add('meal-container');

        const mealName = document.createElement("span");
        mealName.classList.add('meal-name');
        mealName.textContent = meal.item;

        const tooltip = document.createElement("div");
        tooltip.classList.add('recipe-tooltip');
        tooltip.innerHTML = `
            <strong>${meal.item}</strong><br>
            Calories: ${meal.calories}<br>
            Recipe: ${meal.recipe}
        `;

        mealItem.appendChild(mealName);
        mealItem.appendChild(tooltip);
        contentElement.appendChild(mealItem);
    });

    attachClickListeners(); // Ensure tooltips are functional for meals
}

function displayDrinks(contentElement, drinks) {
    const drinksHeader = document.createElement("h4");
    drinksHeader.textContent = "Drinks:";
    contentElement.appendChild(drinksHeader);

    drinks.forEach(drink => {
        const drinkItem = document.createElement("div");
        drinkItem.classList.add('meal-container');

        const drinkName = document.createElement("span");
        drinkName.classList.add('meal-name');
        drinkName.textContent = drink.item;

        const tooltip = document.createElement("div");
        tooltip.classList.add('recipe-tooltip');
        tooltip.innerHTML = `
            <strong>${drink.item}</strong><br>
            Calories: ${drink.calories}<br>
            Recipe: ${drink.recipe}
        `;

        drinkItem.appendChild(drinkName);
        drinkItem.appendChild(tooltip);
        contentElement.appendChild(drinkItem);
    });
    attachClickListeners(); // Ensure tooltips are functional
}

function setActiveDiet(button) {
    document.querySelectorAll(".diet-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

function clearMealPlan() {
    // Clear meal content sections
    breakfastContent.innerHTML = "";
    lunchContent.innerHTML = "";
    dinnerContent.innerHTML = "";
    snackContent.innerHTML = "";

    // Clear the calorie input field
    const calorieInput = document.getElementById('calories'); // Ensure this ID matches your input field's ID
    if (calorieInput) {
        calorieInput.value = ""; // Set the value of the input to an empty string
    }

    
}

