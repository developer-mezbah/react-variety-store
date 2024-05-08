import React from "react";
import ReuseableTitle from "../../component/ReuseableTitle";
import { Label, TextInput, Textarea, Select } from "flowbite-react";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const DashboardAddProduct = ({
  updateFormData,
  setShowUpdateForm,
  refetch,
}) => {
  const [categories, setCategories] = React.useState([]);
  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    fetch(`${import.meta.env.VITE_HOST}/category`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const number = form.number.value;
    const address = form.address.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const img = form.image.value;
    const categoryId = form.categoryId.value;
     const categoryFilter = categories.find((item) => item._id == categoryId);
     if (!categoryFilter) {
      return toast.error("Choose Products Category.")
     }
    const options = {
      method: updateFormData ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        number,
        address,
        quantity,
        description,
        img,
        categoryId,
        category: categoryFilter.name,
      }),
    };
    if (updateFormData) {
      const res = await (
        await fetch(
          `${import.meta.env.VITE_HOST}/products/${updateFormData._id}`,
          options
        )
      ).json();
      if (res.acknowledged) {
        e.target.reset();
        toast.success("Product Updated.");
        navigate("/dashboard/my-products");
        refetch();
        setShowUpdateForm(false);
      }
    } else {
      const res = await (
        await fetch(
          `${import.meta.env.VITE_HOST}/products?email=${user.email}`,
          options
        )
      ).json();
      if (res.acknowledged) {
        e.target.reset();
        toast.success("Product Added.");
        navigate("/dashboard/my-products");
      }
    }
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Products || Variety Store</title>
      </Helmet>
      <div className="flex justify-between items-center">
        <ReuseableTitle text="Add Product" />
        {updateFormData ? (
          <div
            onClick={() => setShowUpdateForm(false)}
            className="text-white flex gap-2 text-xl items-center bg-red-500 p-2 rounded-xl cursor-pointer"
          >
            Close Form{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-14 add-product grid grid-cols-2 gap-5"
      >
        <div>
          <Label htmlFor="productName">Product Name</Label>
          <TextInput
            type="text"
            id="productName"
            placeholder="Write product name."
            name="name"
            defaultValue={updateFormData?.name}
            required
          />
        </div>
        <div>
          <Label htmlFor="price">Price</Label>
          <TextInput
            type="text"
            id="price"
            placeholder="Write product price"
            defaultValue={updateFormData?.price}
            required
          />
        </div>
        <div>
          <Label htmlFor="mobile">Mobile Number</Label>
          <TextInput
            type="number"
            id="mobile"
            placeholder="Input your number"
            name="number"
            defaultValue={updateFormData?.number}
            required
          />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <TextInput
            name="address"
            type="text"
            id="address"
            placeholder="Write address"
            defaultValue={updateFormData?.address}
            required
          />
        </div>
        <div>
          <Label htmlFor="category" value="Select your Product Category" />
          <Select id="category" required name="categoryId" defaultValue="">
            {updateFormData ? (
              <option selected value={updateFormData?.categoryId}>
                {updateFormData?.category}
              </option>
            ) : (
              <option selected disabled>
                Product Categories
              </option>
            )}
            {categories?.map((item) => (
              <option key={item?._id} value={item?._id}>
                {item?.name}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="quantity">quantity</Label>
          <TextInput
            name="quantity"
            type="number"
            id="quantity"
            placeholder="Write quantity"
            defaultValue={updateFormData?.quantity}
            required
          />
        </div>
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <Textarea
            id="description"
            placeholder="Product description."
            required
            rows={4}
            name="description"
            defaultValue={updateFormData?.description}
          />
        </div>
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="img" value="product Image" />
          </div>
          <Textarea
            id="img"
            placeholder="Input your image cdn."
            required
            rows={3}
            name="image"
            defaultValue={updateFormData?.img}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 w-1/3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DashboardAddProduct;
