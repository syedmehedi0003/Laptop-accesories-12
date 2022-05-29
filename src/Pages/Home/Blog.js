import React from 'react';

const Blog = () => {
    return (
        <div className='justify-center'>
            <p className='text-xl font-bold'> Q-01:How will you improve the performance of react application?</p>
            <p>Ans: Internally react uses several clever techniques to minimize the number of costly DOM operation required to update the UI.
                While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways where you can still speed up your React application.
                Such like:
                1. Using Immutable Data Structures.
                2. Function/Stateless Components and React.PureComponent.
                3. Multiple Chunk Files.
                4.Using Production Mode Flag in Webpack.
                5.Avoid Inline Function Definition in the Render Function.
                6.Throttling and Debouncing Event Action in JavaScript.
                7.Avoid using Index as Key for map.
                8.Avoiding Props in Initial States.
                9.Use Reselect in Redux to Avoid Frequent Re-render.
                10.Using Web Workers for CPU Extensive Tasks.</p>


            <p className='text-xl font-bold mt-8'>Q-02:What are the different ways to manage a state in a react application?</p>
            <p>
                Ans:
                1. Communication State: Communication state forms the backbone of your React Native app.
                Communication plays a crucial role in storing information in different states. It covers essential
                aspects of an application such as loading spinners, error messages, pop-ups, and many others
                which showcases that a communication link has been formed.Communication state is the “loading phase”
                of the transactions between different states.

                2. Data State: Data state covers information that our React application stores temporarily for various
                business functions.Supposedly, we are building a project management app. The information stored in
                the data state will include the following things – project names, contacts, details about the clients
                etc.

                3. Control State:Contrary to the state mentioned above in a React app, the control state does not
                represent the application’s environment. Instead, it refers to the state which the user has input
                into the app. For example, form inputs, selected items, etc. Control state is known to be more diverse
                and versatile when it comes to storing information.</p>


            <p className='text-xl font-bold mt-8'>Q-03:How does prototypical inheritance work?</p>
            <p>
                Ans: Prototypal inheritance is the common way of handling object orientation in Javascript.'s important
                to note that there are no classes in JavaScript.Functions can be used to somewhat simulate classes,
                but in general JavaScript is a class-less language.Everything is an object. And when it comes to
                inheritance, objects inherit from objects, not classes from classes as in the "class"-ical languages.
                Everything in JS is an object and all objects have a prototype. Commonly what developers do is define
                a function which contains properties and methods and use these as classes.In such cases, every time we
                instantiate an object, the child methods get recreated - which is intrinsically a bad idea.Therefore,
                developers define properties inside the function and then attach methods to the prototype of the function.
                Now when they initialize instances of that function, the methods don't get recreated along with each object.</p>


            <p className='text-xl font-bold mt-8'> Q-04:Why you do not set the state directly in REACT. For example, if you const[products, setProducts] = useState([]).
                Why you do not set products = [...] instead, you use the setProducts.</p>

            <p>
                Ans: One should never update the state directly because of the following reasons:
                1. If we update it directly, calling the setState() afterward may just replace the update we made.
                2. When we directly update the state, it does not change this state immediately.
                Instead, it creates a pending state transition, and accessing it after calling this
                method will only return the present value.
                3.We will lose control of the state across all components.
                Actually if we will update products = [...] directly, its callign the setProducts() and does not change
                the state immediately. and finally we will lose control of this state across all of components. For the reason we
                don not use set products = [...].</p>


            <p className='text-xl font-bold mt-8'>Q-05:What is unit test? Why shoud write unit tests?</p>
            <p>
                Ans:
                Unit testing:
                Unit testing involves the testing of each unit or an individual component of the software application.
                It is the first level of functional testing. The aim behind unit testing is to validate unit components with its
                performance.The purpose of unit testing is to test the correctness of isolated code.A unit component is an
                individual function or code of the application. White box testing approach used for unit testing and usually done
                by the developers. Whenever the application is ready and given to the Test engineer, he/she will start checking
                every component of the module or module of the application independently or one by one, and this process is known
                as Unit testing.

                Why should write:
                1.Ensuring every system components benefits to achieving a quality products.
                2.Simplifying the debugging process.
                3.Allowing for code refactoring and design improvements.
                4.Validate correcting bugs early in the SDLC.
                5.Reducing bug fixing costs.</p>
        </div>
    );
};

export default Blog;