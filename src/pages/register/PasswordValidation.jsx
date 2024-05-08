
import CheckClose from "../../assets/svg/CheckClose";
import CheckRight from "../../assets/svg/CheckRight";

const PasswordValidation = ({ validation }) => {
    return (
        <div className="w-full mt-5">
            <h2 className="text-2xl font-bold mb-5 text-textColor">
                Password Must contain the following:
            </h2>
            <ul>
                <li
                    className={`${
                        validation.lowercase ? "text-green-500" : "text-red-500"
                    } flex items-center gap-4`}
                >
                    {validation.lowercase ? <CheckRight /> : <CheckClose />} A Lowercase
                    letter
                </li>
                <li
                    className={`${
                        validation.uppercase ? "text-green-500" : "text-red-500"
                    } flex items-center gap-4`}
                >
                    {validation.uppercase ? <CheckRight /> : <CheckClose />} A capital
                    (uppercase) letter
                </li>
                <li
                    className={`${
                        validation.number ? "text-green-500" : "text-red-500"
                    } flex items-center gap-4`}
                >
                    {validation.number ? <CheckRight /> : <CheckClose />} At least one
                    digit Number
                </li>
                <li
                    className={`${
                        validation.specialChar ? "text-green-500" : "text-red-500"
                    } flex items-center gap-4`}
                >
                    {validation.specialChar ? <CheckRight /> : <CheckClose />} At least
                    one special character
                </li>
                <li
                    className={`${
                        validation.minLength ? "text-green-500" : "text-red-500"
                    } flex items-center gap-4`}
                >
                    {validation.minLength ? <CheckRight /> : <CheckClose />} Minimum Six
                    in length
                </li>
            </ul>
        </div>
    );
};

export default PasswordValidation;




