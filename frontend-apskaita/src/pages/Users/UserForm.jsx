import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import userSchema from "../../schemas/user.schema";

import Button from "../../components/ui/Button/Button";

import "./UserForm.scss";

const UserForm = ({ closeForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data) => {
    console.log(data);

    closeForm();
  };

  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Naujas vartotojas</h2>

      <input placeholder="Vardas" {...register("firstName")} />

      <p>{errors.firstName?.message}</p>

      <input placeholder="Pavardė" {...register("lastName")} />

      <input placeholder="Username" {...register("username")} />

      <input placeholder="El. paštas" {...register("email")} />

      <input
        type="password"
        placeholder="Slaptažodis"
        {...register("password")}
      />

      <Button type="submit">Išsaugoti</Button>

      <Button type="button" onClick={closeForm}>
        Atšaukti
      </Button>
    </form>
  );
};

export default UserForm;
