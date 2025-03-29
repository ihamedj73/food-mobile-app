// import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  // const route = useRoute()
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === catId
  ).title;

  useLayoutEffect(
    function () {
      navigation.setOptions({
        title: categoryTitle,
      });
    },
    [catId, navigation]
  );

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
