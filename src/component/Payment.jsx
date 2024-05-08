import { loadStripe } from "@stripe/stripe-js";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { HiOutlineAdjustments } from "react-icons/hi";
import AddIcon from "../assets/svg/AddIcon";
import { UserContext } from "../context/UserContext";

const Payment = ({ product }) => {
  const { user } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);
  const [loaction, setLocation] = useState("");
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51O1lA2BfUlNQdtMRNdmCm0NFVPNHlVzEut5MWOUIEs6mCq81zb1TJVRzlcJMyd8VaaTDRhiopon6fHtm8eCDiOLA00Z0nxsBN3"
    );
    const body = {
      name: product.name,
      productId: product.img,
      image: product.img,
      buyerEmail: user.email,
      quantity: product.quantity,
      price: product.price * product.quantity,
      location: loaction
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      `${import.meta.env.VITE_HOST}/api/create-checkout-session`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
    if (result) {
      const response = await fetch(`${import.meta.env.VITE_HOST}/orders`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
    }
  };
  return (
    <>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header className="bg-cardBg" />
        <Modal.Body className="bg-cardBg">
          <div className="text-left space-y-3">
            <HiOutlineAdjustments className="text-themeColor mx-auto mb-4 h-14 w-14" />
            <div className="w-full">
              <div className="mb-2 block">
                <Label
                  className="text-textColor"
                  htmlFor="full-name"
                  value="Product name"
                />
              </div>
              <TextInput
                id="full-name"
                type="text"
                placeholder="Put your full-name"
                required
                className="custom-input"
                name="username"
                readOnly
                defaultValue={product.name}
              />
            </div>
            <div className="w-full">
              <div className="mb-2 block">
                <Label
                  className="text-textColor"
                  htmlFor="full-name"
                  value="Your Email"
                />
              </div>
              <TextInput
                id="full-name"
                type="text"
                placeholder="Put your full-name"
                required
                className="custom-input"
                name="username"
                readOnly
                defaultValue={user.email}
              />
            </div>
            <div className="w-full">
              <div className="mb-2 block">
                <Label
                  className="text-textColor"
                  htmlFor="full-name"
                  value="Quantity"
                />
              </div>
              <TextInput
                id="full-name"
                type="text"
                placeholder="Put your full-name"
                required
                className="custom-input"
                name="username"
                readOnly
                defaultValue={product.quantity}
              />
            </div>
            <div className="w-full">
              <div className="mb-2 block">
                <Label
                  className="text-textColor"
                  htmlFor="full-name"
                  value="Price"
                />
              </div>
              <TextInput
                id="full-name"
                type="text"
                placeholder="Put your full-name"
                required
                className="custom-input"
                name="username"
                readOnly
                defaultValue={product.price}
              />
            </div>
            <div className="w-full">
              <div className="mb-2 block">
                <Label
                  className="text-textColor"
                  htmlFor="full-name"
                  value="Write your Location"
                />
              </div>
              <TextInput
                id="full-name"
                type="text"
                placeholder="Dhaka, Bangladesh"
                required
                className="custom-input"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
              <Button
                className="flex gap-5"
                color="success"
                onClick={makePayment}
              >
                Checkout <AddIcon />
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <button
        onClick={() => setOpenModal(true)}
        className="flex gap-2 bg-themeColor items-center justify-center cursor-pointer p-3 rounded-lg text-textColor hover:bg-orange-500"
      >
        Order Now
        <AddIcon />
      </button>
    </>
  );
};

export default Payment;
