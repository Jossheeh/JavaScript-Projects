function my_Dictionary() {  /*Creating a dictionary*/
    Var = Food = {   /*creating a name for dictionary "food" */
        Type:"Potato", /*Creating Key and Value*/ 
        Carbs:"17g",
        Protein: "2g",
        Fat: "0.1g",
        Cals: "77g",
    };
    delete Food.Carbs; /*Deleting Value for Carbs*/
    document.getElementById("Dictionary").innerHTML = Food.Carbs; /*Displaying Key value by getElement by ID */
}