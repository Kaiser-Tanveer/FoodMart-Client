import React from 'react';
import sql from '../../../Assets/images/mySql.png';
import noSql from '../../../Assets/images/noSql.png';
import jwt from '../../../Assets/images/jwt.png';
import js from '../../../Assets/images/js.png';
import nodeJs from '../../../Assets/images/nodeJs.png';
import nodeJsReq from '../../../Assets/images/nodejsReq.png';
import useTitle from '../../../DynamicTitle/DynamicTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <>
            <h1 className='text-5xl font-bold pt-12 pb-4 bg-light'><span className='text-primary'>Blog</span> Section</h1>
            <div className="hero min-h-screen bg-base-200 border border-2-bottom py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={sql} className="max-w-sm rounded-lg shadow-2xl" alt='sql' />
                        <img src={noSql} className="max-w-sm rounded-lg shadow-2xl" alt='noSql' />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Difference Between SQL and NoSQL</h1>
                        <p className="py-6">
                            <strong>SQL:</strong>
                            SQL is the easiest language used to communicate with the RDBMS,
                            Analyzing behavioral related and customized sessions,
                            Building custom dashboards,
                            It allows you to store and gets data from the database quickly,
                            Preferred when you want to use joins and execute complex queries.
                        </p>
                        <p className="py-6">
                            <strong>NoSQL:</strong>
                            When ACID support is not needed,
                            When Traditional RDBMS model is not enough,
                            Data which need a flexible schema,
                            Constraints and validations logic not required to be implemented in database,
                            Logging data from distributed sources,
                            It should be used to store temporary data like shopping carts, wish list and session data.
                        </p>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-200 border border-2-bottom">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={jwt} className="max-w-sm w-80 rounded-lg shadow-2xl" alt='jwt' />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">What's JWT? How does it works?</h1>
                        <p className="py-6">
                            <strong>JWT:</strong>
                            JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        </p>
                        <p className="py-6">
                            <strong>Way it works:</strong>
                            JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        </p>
                    </div>
                </div>
            </div>


            <div className="hero min-h-screen bg-base-200 border border-2-bottom py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={js} className="max-w-sm rounded-lg shadow-2xl" alt='js' />
                        <img src={nodeJs} className="max-w-sm rounded-lg shadow-2xl" alt='nodeJs' />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Difference between JavaScript and NodeJs</h1>
                        <p className="py-6">
                            <strong>JavaScript:</strong>
                            Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                        </p>
                        <p className="py-6">
                            <strong>NodeJs:</strong>
                            NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                        </p>
                    </div>
                </div>
            </div>


            <div className="hero min-h-screen bg-base-200 border border-2-bottom pb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={nodeJsReq} className="max-w-sm w-80 rounded-lg shadow-2xl" alt='nodeJsReq' />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">How does NodeJs Handle multiple requests at the same time?</h1>
                        <p className="py-6">
                            <strong>Way nodeJs handles requests:</strong>
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;