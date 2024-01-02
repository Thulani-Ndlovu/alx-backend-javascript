0x00. ES6 Basics Project By Thulani Ndlovu
==========================================

Task list

1. Const or Let?
- Modify the function taskFirst to instantiate variables using const
- Modify the function taskNext to instantiate variables using let

2. Block Scope
- Given what you’ve read about var and hoisting, modify the variables insid the function taskBlock so that the variables aren’t overwritten inside the conditional block.

3. Arrow functions
- Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

4. Parameter defaults
- Condense the internals of the following function to 1 line - without changing the name of each function/variable.
- Hint: The key here to define default parameter values for the function parameters.

5. Rest parameter syntax for functions
- Modify the following function to return the number of arguments passed to it using the rest parameter syntax

6. The wonders of spread syntax
- Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

7. Take advantage of template literals
- Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

8. Object property value shorthand syntax
- Notice how the keys and the variable names are the same?
- Modify the following function’s budget object to simply use the keyname instead.

9. No need to create empty objects before adding in properties
- Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object

10. ES6 method properties
- Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object

11. For...of Loops
- Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.

12. Iterator
- Write a function named createEmployeesObject that will receive two arguments:
- departmentName (String)
- employees (Array of Strings)

13. Let's create a report object
- Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.
- createReportObject should return an object containing the key allEmployees and a method property called getNumberOfDepartments.
- allEmployees is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.
- The method property receives employeesList and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.

14. Iterating through report objects
- Write a function named createIteratorObject, that will take into argument a report Object created with the previous function createReportObject.
- This function will return an iterator to go through every employee in every department.

15. Iterate through object
- Finally, write a function named iterateThroughObject. The function’s parameter reportWithIterator is the return value from createIteratorObject.
