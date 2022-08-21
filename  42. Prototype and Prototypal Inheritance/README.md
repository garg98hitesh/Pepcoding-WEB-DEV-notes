1. We know that there are a lot of inbuilt methods in data types like in arrays we have map, filter, reduce and a lot of other functions in other data types also. We can even access the properties of array like length of an array or index of an array. Even on objects we get a lot of functions like JSON.stringify(). So in this video we will see from where do we get the functions from 

2. Then we will try to understand prototypal inheritance in deep. Till now you must have studied JAVA or C++, in that you have studied classical inheritance i.e. class based inheritance in which you used to make classes and child classes and those child classes had access to the methods or data members of the parent class depending upon the type of inheritance i.e. Hierarchial or Multiple or Multilevel etc. whereas this prototypal inheritance is very different as compared to class based inheritance

3. If we type "arr.__proto__" in console of the browser, then we will see that an array is being returned to use which contains all of the functions which can be performed on an array, so this is what a prototype is, basically a prototype is an array containing all the functions which can be performed, we must know that "arr.__proto__" is same as "Array.prototype".

4. But one very important thing to note is that 'arr.__proto__' returns an array whereas 'arr.__proto__.__proto__' returns an object. So from this observation can we not conclude that an array is also nothing but an object. If we type 'Object.prototype' then we will see that it gives us the same result i.e. an object which we obtained in 'arr.__proto__.__proto__'

5. Now we made a person object in prototype.js file, so now if we go to console of browser then on typing 'person.__proto__' we will get all the functions available on that object but on typing 'person.__proto__.__proto__', we will get null

6. Now we will study abuot prototypal inheritance. So in above cases what we did was chaining of __proto__ until we got null, but now we will study about prototypal inheritance, for that we will refer to protoype.js file