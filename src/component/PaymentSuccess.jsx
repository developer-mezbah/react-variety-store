import React from 'react'
import paymentSuccess from '../assets/images/successfull-payment.jpg'
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div>
        <img className="h-[400px] mx-auto" src={paymentSuccess} alt="" />
        <div className="flex justify-center my-10 gap-10">
            <Link to="/" className="p-5 rounded-lg bg-cardBg text-textColor hover:bg-orange-500">Go-Home</Link>
            <Link to="/dashboard/orders" className="p-5 rounded-lg bg-themeColor text-textColor hover:bg-orange-500">Go Your Orders</Link>
        </div>
    </div>
  )
}

export default PaymentSuccess