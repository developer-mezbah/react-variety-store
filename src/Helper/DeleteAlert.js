import Swal from "sweetalert2";
import { toast } from 'react-hot-toast';

export const DeleteAlert = (api, refetch) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await (
        await fetch(api, {
          method: "DELETE",
        })
      ).json();
      if (res.acknowledged) {
        refetch()
        toast.success("Deleted Successfull.")
      }
    }
  });
};
