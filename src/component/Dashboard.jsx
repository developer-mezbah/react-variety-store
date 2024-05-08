import React from "react";
import { Card, Dropdown } from "flowbite-react";
import partners from '../assets/images/partners.png'
import customer from '../assets/images/customer-service.png'
import pen from '../assets/images/pen.png'
import mixer from '../assets/images/mixer.png'
import Chart from "./Chart";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  return (
    <div>
            <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard || Variety Store</title>
      </Helmet>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl text-textColor">Hello World!</h1>
          <p className="text-gray-400">This is what we've got for your today.</p>
        </div>
        <div className="flex justify-between items-center text-2xl bg-themeColor p-3 rounded-2xl text-textColor">
          <Link to="/dashboard/my-products"><span>+</span> Add Products</Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
        <div className="bg-cardBg p-6 rounded-3xl"
        style={{background: `url(${partners}) bottom right / 70px 70px no-repeat #393e46`}}
        >
          <h4 className={"text-2xl text-textColor"}>Members onsite</h4>
          <span className="text-xl text-themeColor mt-5">100</span>
        </div>
        <div className="bg-cardBg p-6 rounded-3xl"
        style={{background: `url(${customer}) bottom right / 70px 70px no-repeat #393e46`}}
        >
          <h4 className={"text-2xl text-textColor"}>Members onsite</h4>
          <span className="text-xl text-themeColor mt-5">100</span>
        </div>
        <div className="bg-cardBg p-6 rounded-3xl"
        style={{background: `url(${pen}) bottom right / 70px 70px no-repeat #393e46`}}
        >
          <h4 className={"text-2xl text-textColor"}>Members onsite</h4>
          <span className="text-xl text-themeColor mt-5">100</span>
        </div>
        <div className="bg-cardBg p-6 rounded-3xl"
        style={{background: `url(${mixer}) bottom right / 70px 70px no-repeat #393e46`}}
        >
          <h4 className={"text-2xl text-textColor"}>Members onsite</h4>
          <span className="text-xl text-themeColor mt-5">100</span>
        </div>
      </div>
      <Chart/>
    </div>
  );
};

export default Dashboard;
