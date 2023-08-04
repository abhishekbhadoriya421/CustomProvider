# UseContext and Costume Context

The Web Application is only for Learning purpose This application allow us to add and remove items and calculate the total according to items

## create context 
we can create context like this
```js
const ItemContext = createContext();
```
> here we have Create new ItemContext

## Provide Context
if we have created the context now its time to provide the values for that we can do like this
```js
<ItemContext.Provider value={item}>
```
> Here we are providing item as a value in our provider

### Note : we must import all the necessary things also

## consumer
now if we want to consume any of these items then it will be look something like below code:
```js
{
    <ItemContext.Consumer>{(value)=>{
        return (
            <>
                {console.log("Value",value)}
            </>
        )
    }}
    </ItemContext.Consumer>
}
                
```
> In above code we are getting the value from Provider and printing on console log
>there is also another way to get the value or consume the value which is used functional components by importing the useContext hook
```js
    import useContext from 'react';
    const value = useContext(ItemContext);
```
> Now we are using useContext hook to get the value


## custom Provider
Now If you want to make your own provider then use this code snippet
```js
import { createContext, useContext, useState } from "react";

const ItemContext = createContext();

function ItemProvider({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

    return(
        <ItemContext.Provider value={{total,setTotal,item,setItem}}>
            {children}
        </ItemContext.Provider>
    )
}

export {ItemContext,ItemProvider,useValue};
```
> the custom provider let as separate all the useContext or value passing logic which make code more readable and easy to debug