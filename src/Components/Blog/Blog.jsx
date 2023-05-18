import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            <div className="w-10/12 mx-auto mt-8 text-oscuro mb-8">
                <div className="flex flex-col justify-center w-full ">
                    <div>
                        <section className="text-gray-700">
                            <div className="container mx-auto">
                                <div className="text-center mb-12">
                                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-orange-400">
                                        Frequently Asked Question
                                    </h1>
                                </div>
                                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-start">
                                    <div className="w-full lg:w-1/2 px-4 py-2">
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                What is an access token and refresh token? How do they work and where should we store them on the client-side?
                                            </summary>

                                            <span className="px-4 py-2">
                                                <li>
                                                    An access token is a credential that is used to access protected resources, such as an API or a web service, on behalf of a user or an application. It is usually a string of characters that represents the authorization granted to the client.
                                                </li>
                                                <li>
                                                    A refresh token is also issued by the authentication server along with the access token. Its purpose is to obtain a new access token when the current one expires without requiring the user to reauthenticate. Refresh tokens are long-lived compared to access tokens and typically have a longer expiration period.
                                                </li>
                                                <li>
                                                    Access tokens should be kept confidential and protected against unauthorized access. Storing them in browser storage mechanisms like localStorage or sessionStorage is generally not recommended due to potential security risks. Instead, consider using HTTP-only cookies for storing access tokens, as they provide some level of protection against cross-site scripting (XSS) attacks
                                                </li>
                                            </span>
                                        </details>
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                Compare SQL and NoSQL databases?
                                            </summary>

                                            <span className="px-4 py-2">
                                                SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems that serve different purposes and have distinct characteristics. Here's a comparison of SQL and NoSQL databases:
                                                <li>
                                                    SQL: SQL databases follow a tabular, relational data model, where data is organized into tables with predefined schemas. It relies on structured query language (SQL) for defining, manipulating, and querying data.
                                                    NoSQL: NoSQL databases use various data models, such as key-value, document, columnar, or graph. They offer flexible schemas, allowing for dynamic and unstructured data.
                                                </li>
                                                <li>
                                                    SQL: SQL databases enforce a rigid schema, requiring predefined table structures and data types. Any changes to the schema often require altering existing tables, which can be cumbersome.

                                                    NoSQL: NoSQL databases offer schema flexibility. They allow for dynamic and evolving data structures, enabling developers to store and modify data without strict adherence to a fixed schema.
                                                </li>
                                            </span>
                                        </details>
                                    </div>
                                    <div className="w-full lg:w-1/2 px-4 py-2">
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                What is express js? What is Nest js?
                                            </summary>

                                            <span className="px-4 py-2">
                                                <li>
                                                    Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features for building web servers and APIs. Express.js is known for its simplicity and unopinionated nature, allowing developers to have more control over the application's structure and implementation. It provides routing capabilities, middleware support, template engine integration, and easy handling of HTTP requests and responses. 
                                                </li>
                                                <li>
                                                    NestJS is a progressive, opinionated web framework for building efficient and scalable server-side applications. It is built on top of Express.js but adds several additional features and architectural patterns inspired by Angular, making it more structured and suitable for larger applications. NestJS leverages decorators, dependency injection, modules, and other concepts to enable developers to build modular and highly maintainable applications. 
                                                </li>
                                            </span>
                                        </details>
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                                What is MongoDB aggregate and how does it work?
                                            </summary>

                                            <span className="px-4 py-2">
                                                In MongoDB, the aggregate operation is a powerful and flexible tool for performing complex data analysis and transformations on the data stored in a collection. The aggregate operation allows you to process and combine multiple documents, apply various operations, and generate aggregated results.
                                                <li>
                                                    Pipeline Stages:
                                                    The aggregate operation in MongoDB uses a concept called the pipeline, which consists of multiple stages.
                                                </li>
                                                <li>
                                                    Execution Order:
                                                    The stages in the aggregate pipeline are executed in order, with each stage taking the output of the previous stage as input
                                                </li>
                                            </span>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;