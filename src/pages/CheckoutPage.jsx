import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../index.css'; // Make sure to import the CSS file
import { IoArrowBack } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';


const CheckoutPage = () => {
 const navigate = useNavigate()

 const backButton = () => {
navigate("/SelectClothes")
 }


  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const [isNoteVisible, setIsNoteVisible] = useState(false);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(true); // Initially true, assuming it's expanded


  const handlePaymentOptionChange = (option) => {
    setSelectedPaymentOption(option);
  };

  const handleNoteChange = () => {
    setIsNoteVisible(!isNoteVisible);
  };
  const toggleSummaryVisibility = () => {
    setIsSummaryExpanded(!isSummaryExpanded);
  };

  return (
    <div>
      <div className="container ">
        <h1 className="text-gray-600">Home - CheckOut</h1>
        <h1 className="text-6xl py-8">Checkout</h1>
        <div className="lg:flex gap-24 ">
          <div>
            <div className="flex gap-6 mt-8 ">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <p className="text-2xl mb-3">1.</p>
                <div className="border border-gray-160 w-0.4 h-28"></div>
              </div>
              <div>
                <p className="text-2xl">Contact information</p>
                <p className="text-gray-500">
                  We'll use this email to send you details and updates about your order.
                </p>
                <input
                  className="px-4 py-3 my-4 mb-8 lg:w-[50rem] md:w-[40rem] w-64  border rounded-sm border-black hover:border-2 hover:border-black focus:outline-none"
                  placeholder="Email Address"
                  type="email"
                />
              </div>
            </div>
            <div className="flex gap-6 mt-8">
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="">
                  <p className="text-2xl">2.</p>
                </div>
              </div>
              <div>
                <p className="text-2xl">Billing information</p>
                <p className="text-gray-500">Enter the billing address that matches your payment method.</p>
                <div className="lg:flex gap-4">
                  <div>
                  <input
                    className="px-4 py-3 my-4 lg:w-[24.5rem] md:w-[40rem] w-64 border rounded-sm border-black hover:border-2 hover:border-black focus:outline-none"
                    placeholder="First Name"
                    type="text"
                  /></div>
                  <input
                    className="px-4 py-3 my-4 lg:w-[24rem] w-64 md:w-[40rem] border rounded-sm border-black hover:border-2 hover:border-black focus:outline-none"
                    placeholder="Second Name"  
                    type="text"
                  />
                </div>
                <div>

                <input
                  className="px-4 py-3 my-4 mb-4 lg:w-[50rem] md:w-[40rem] w-64  border rounded-sm border-black hover:border-2 hover:border-black focus:outline-none"
                  placeholder="Address"
                  type="text"
                />                </div>
                                <div>


                <input
                  className="px-4 py-3 my-4 mb-4 lg:w-[50rem] md:w-[40rem] w-64  border rounded-sm border-black hover:border-2 hover:border-black focus:outline-none"
                  placeholder="Apartment, suite, etc. (optional)"
                  type="text"
                />                          </div>

                <input
                  className="px-4 py-3 my-4 mb-4 lg:w-[50rem] md:w-[40rem] w-64  border rounded-sm border-black hover:border-2 hover:border-black focus:outline-none"
                  placeholder="Country"
                  type="text"
                />
                
                <div className="lg:flex gap-4">
                <div>

                  <input
                    className="px-4 py-3 my-4 lg:w-[24.5rem] md:w-[40rem] w-64  border rounded-sm border-black hover:border-2 hover:border-black focus:outline-none"
                    placeholder="City"
                    type="text"
                  />                                        </div>

                  <input
                    className="px-4 py-3 my-4 lg:w-[24rem] w-64  md:w-[40rem] border rounded-sm border-black hover:border-2 hover:border-black focus:outline-none"
                    placeholder="State/Zone"
                    type="text"
                  />
                </div>
                <div className="lg:flex gap-4">
                <div>

                  <input
                    className="px-4 py-3 my-4 lg:w-[24rem] w-64 md:w-[40rem] border rounded-sm border-black hover:border-2 hover:border-black focus:outline-none"
                    placeholder="Postal code (optional)"
                    type="text"
                  />                </div>

                  <input
                    className="px-4 py-3 my-4 lg:w-[24rem] w-64 md:w-[40rem] border rounded-sm border-black hover:border-2 hover:border-black focus:outline-none"
                    placeholder="Phone (optional)"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-6 mt-8">
              <div className="">
                <p className="text-2xl">3.</p>
              </div>
              <div>
                <p className="text-2xl">Payment options</p>
                <p className="text-gray-500 mb-4">Enter the billing address that matches your payment method.</p>
                <div className="lg:w-[50rem] md:w-[40rem] w-64  border border-gray-200 p-4">
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      className="custom-radio"
                      onChange={() => handlePaymentOptionChange('bankTransfer')}
                      checked={selectedPaymentOption === 'bankTransfer'}
                    />
                    <p className="text-xl text-gray-500">Direct bank transfer</p>
                  </div>
                  {selectedPaymentOption === 'bankTransfer' && (
                    <div className="mt-4 text-gray-500">
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </div>
                  )}
                </div>
                <div className="lg:w-[50rem] md:w-[40rem] w-64  border border-gray-200 border-t-0 p-4">
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      className="custom-radio"
                      onChange={() => handlePaymentOptionChange('cashOnDelivery')}
                      checked={selectedPaymentOption === 'cashOnDelivery'}
                    />
                    <p className="text-xl text-gray-500">Cash on Delivery</p>
                  </div>
                  {selectedPaymentOption === 'cashOnDelivery' && (
                    <div className="mt-4 text-gray-500">
                      Pay with cash upon delivery.
                    </div>
                  )}
                </div>
                <div className="lg:w-[50rem] md:w-[40rem] w-64  border border-gray-200 border-t-0 p-4">
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      className="custom-radio"
                      onChange={() => handlePaymentOptionChange('mobilePayment')}
                      checked={selectedPaymentOption === 'mobilePayment'}
                    />
                    <p className="text-xl text-gray-500">Mobile Payment</p>
                  </div>
                  {selectedPaymentOption === 'mobilePayment' && (
                    <div className="mt-4 text-gray-500">
                      Clicking Mobile Payment will direct you to Esewa Page.
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8 gap-8">
              <input
                type="checkbox"
                id="vehicle1"
                className="mr-8 z"
                onChange={handleNoteChange}
                checked={isNoteVisible}
              />
              <label className="text-gray-500"> Add a note to your order</label>
              {isNoteVisible && (
                <div>
                <br/>
                <input
                  className="px-4 py-3 my-4 lg:w-[50rem] md:w-[40rem] w-64  ml-[3rem] border rounded-sm border-black hover:border-2 hover:border-black focus:outline-none"
                  placeholder="Add your note here"
                  type="text"
                />
                </div>
              )}
            </div>
            <p className="ml-12 py-8 text-gray-500">
              By proceeding with your purchase you agree to our Terms and Conditions and Privacy Policy.
            </p>
            <hr className="border border-gray-200 my-4" />
            <div className="flex justify-between">
              <div className="flex gap-6" onClick={backButton}>
                <IoArrowBack className="mt-1"  />
                <p className="text-lg">Back</p>
              </div>
              <button className="lg:px-24 lg:py-2  px-5 py-0 h-12  bg-black text-white lg:mb-[6rem]">Place Order</button>
            </div>
          </div>
          <div>
            <hr className="border border-gray-200 lg:w-[30rem] my-8" />
            <div className="flex justify-between cursor-pointer" onClick={toggleSummaryVisibility}>
              <p className="text-gray-500">Order Summary</p>
              <IoIosArrowDown className={`transform transition-transform duration-300 ${isSummaryExpanded ? 'rotate-0' : 'rotate-180'}`} />
            </div>
            {isSummaryExpanded && (
            <div className="flex my-8 justify-between">
              <div className="flex gap-8">
                <img src="/images/uniformdemo4.jpg" className="w-16 h-16" />
                <div className="text-gray-500">
                  <p className="py-1">Printed graphic hoodie</p>
                  <p className="py-1">RS 4500</p>
                  <p className="py-1">Color: Red</p>
                  <p className="py-1">Size:XL</p>
                </div>
              <div className="">Rs 4500</div>
            </div>
              </div> )}
            <hr className="border border-gray-200 lg:w-[30rem] my-4" />
            <div className="flex gap-2">
              <input
                className="px-4 py-3 my-4 w-[25rem] border rounded-sm border-black hover:border-2 hover:border-black focus:outline-none"
                placeholder="Enter Coupon Code"
                type="text"
              />
              <button className="px-5 py-0 bg-black h-12 mt-[1.08rem] text-white">Apply</button>
            </div>
            <hr className="border border-gray-200 my-4" />
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>Rs 4500</p>
            </div>
            <hr className="border border-gray-200 my-4" />
            <div className="flex justify-between mb-[4rem] lg:mb-0">
              <p className="text-2xl">Total</p>
              <p className="text-2xl">Rs 4500</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CheckoutPage;
