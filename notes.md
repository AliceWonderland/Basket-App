Task create a to buy list mini app -

groceries
fruits
veg
meat
dairy
grain

states
in basket, not in basket, checked off in basket.

no user management or login

features - User Experience and Functionality Features

adding custom items (not pre-populated) functional
emailing a list? sharing a list? functional
adding users to the list? functional
checking off an item when it's been put into your physical shopping cart? functional
moving unbought items to a new list? functional (say an item is unavailable at the store) allowing substitutions?
a history of lists? you can go back to reference and add to basket. or add all items. functional
search functionality that lets you type and refine items - functional

how do i design a ui that best fits these functions. instant satisfying and ergonomic

this is a utility/task oriented mini-app so functional (less flashy) features are what's key for this

sub-categories for easy searching e.g. Dairy > Cheese > Hard or Soft > Item
Berries
Citrus
etc

how does this relate to a programming paradigm?
i would be building this feature under a certain framework that already implies a paradigm.

for this 2-hr time frame

database tables
grocery categories - category name, id, parent
grocery items - item name, category id
lists - date, author, users, grocery item


Basic UI
Market
category
>item
keep hitting plus to add more than 1 strawberry etc

List
category
> item quantity by alphabetical
total num items
cross out to display items as in shopping cart physically
