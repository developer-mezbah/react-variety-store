import ReuseableTitle from "../../component/ReuseableTitle";

import { Accordion } from "flowbite-react";
import { Helmet } from "react-helmet";

const faq = [
  {
    id: 1,
    title: "What is the MERN stack?",
    description:
      "The MERN stack is a collection of JavaScript-based technologies used to build web applications. It consists of four main components: MongoDB (a NoSQL database), Express.js (a web application framework for Node.js), React (a JavaScript library for building user interfaces), and Node.js (a JavaScript runtime environment).",
  },
  {
    id: 2,
    title: "What are the advantages of using the MERN stack?",
    description:
      "One of the main advantages of the MERN stack is its uniformity—all components are written in JavaScript, which streamlines development and makes it easier for developers to switch between frontend and backend tasks. Additionally, MERN offers a flexible and scalable architecture, real-time data updates, and a vibrant community with extensive documentation and resources.",
  },
  {
    id: 3,
    title: "What are the typical use cases for the MERN stack?",
    description:
      "The MERN stack is well-suited for building modern web applications, particularly those that require real-time updates, dynamic user interfaces, and scalability. It's commonly used for various types of applications, including social media platforms, e-commerce websites, content management systems, and single-page applications (SPAs).",
  },
  {
    id: 4,
    title: "What are the alternatives to the MERN stack?",
    description:
      "While the MERN stack is popular, there are several alternatives available for building web applications. One alternative is the MEAN stack, which replaces React with Angular for frontend development. Another option is the MEVN stack, which substitutes React with Vue.js. Additionally, there are stacks like LAMP (Linux, Apache, MySQL, PHP) and Django (Python-based) for different preferences and project requirements. Choosing the right stack depends on factors such as project complexity, developer expertise, and specific business needs.",
  },
];

const Blogs = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs || Variety Store</title>
      </Helmet>
      <ReuseableTitle text={"FAQ"} />
      <Accordion className="mt-14">
        {faq?.map((item) => (
          <Accordion.Panel key={item.id}>
            <Accordion.Title className="bg-cardBg text-textColor hover:bg-black focus:ring-0">
              {item.title}
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
};

export default Blogs;
