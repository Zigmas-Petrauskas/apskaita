import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import userSchema from "../schemas/user.schema";
import { createUser } from "../services/users.service";

const useUserForm = ({ addUser, closeForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const newUser = await createUser(data);

      // Pridedame į vartotojų sąrašą

      addUser(newUser);
      reset();

      closeForm();
    } catch (error) {
      console.error(
        "Vartotojo sukūrimo klaida:",
        error.response?.data || error.message,
      );
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    loading: isSubmitting,
    reset,
  };
};

export default useUserForm;
