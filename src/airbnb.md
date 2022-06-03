# Understanding the concept

passing additional information like attributes or parameters allows us to beef up the elements or functions. 

## useless 
function addTwoNumbersTogether() {
    return 1 + 2
}

## useful

function addTwoNumbersTogether(a, b) {
    return a + b
}

# reusable components

- anything outside of curly braces is JSX land and JS land in curly braces


function App() {
    const date = new Date()
    
    return (
        <h1>It is currently about {date.getHours() % 12}!</h1>
    )
}

# more readable 


function App() {
    const date = new Date()
    const hours = date.getHours() % 12
    
    
    return (
        <h1>It is currently about {hours} o'clock!</h1>
    )
}

# logic outside of function 

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    
    /**
     * Challenge: fix the h1 below to use the timeOfDay
     * string we determined in the code above
     */
    
    return (
        <h1>Good {timeOfDay}!</h1>
    )
}

# Props

a function like this is essentially useless. You continue to render the same information you need to pass props to allow for more flexibility and reusability.

export default function Contact() {
    return (
        <div className="contact-card">
            <img src="./images/mr-whiskerson.png"/>
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    )
}

# adding this is like passing in parameters but still having hardcoded numbers in the body of the function. 

# App.js

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}
export default App

# How do we make use of the props?
## Contact.js 

export default function Contact(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

# Quiz

1. What do props help us accomplish?
Make a component more reusable.


2. How do you pass a prop into a component?
<MyAwesomeHeader title="???" />
the same way that you pass attributes to an element 


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
An object!


# Destructuring
by destructing props youre essentially creating new variables 

export default function Contact(props) {
    
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

# conditional rendering 
export default function Joke(props) {
    return (
        <div>
            {props.setup ? <h3>Setup: {props.setup}</h3> : ""}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}

- if props.setup exists add the line otherwise nothing

# More concise 
{props.setup && <h3>Setup: {props.setup}</h3>}

# Pass in non string values 
 <Joke 
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                isPun={true}
                upvotes={10}
                downvotes={2}
                comments={[{by: }]}
            />


            <img src={`../images/${props.img}`} className="card--image" />


# array.map

# JSX just returns a regular JS object


# map quiz 

1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


3. Why is using `.map()` better than just creating the components
   manually by typing them out?
It makes our code more "self-sustaining" - not requiring
additional changes whenever the data changes.

# conditional rendering

{props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}

if the first statement is truthy the second statmemnt will render


# pass objects as props

# spread objects as props

<Card
                key={item.id}
                {...item}
                
            />

            vs.

   <Card
                key={item.id}
                item={item}
            />          