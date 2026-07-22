import { FaSave, FaTimes } from "react-icons/fa";
import useUserForm from "../../hooks/useUserForm";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import "./UserForm.scss";

const UserForm = ({ closeForm, addUser }) => {
  const { register, handleSubmit, onSubmit, errors, loading } = useUserForm({
    addUser,
    closeForm,
  });

  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Naujas vartotojas</h2>

      <Input
        id="firstName"
        label="Vardas"
        error={errors.firstName?.message}
        {...register("firstName")}
      />

      <Input
        id="lastName"
        label="Pavardė"
        error={errors.lastName?.message}
        {...register("lastName")}
      />

      <Input
        id="username"
        label="Vartotojo vardas"
        error={errors.username?.message}
        {...register("username")}
      />

      <Input
        id="email"
        label="El. paštas"
        type="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        id="password"
        label="Slaptažodis"
        type="password"
        error={errors.password?.message}
        {...register("password")}
      />

      <div className="user-form-actions">
        <Button type="submit" loading={loading} ariaLabel="Išsaugoti vartotoją">
          <FaSave />
          Išsaugoti
        </Button>

        <Button
          type="button"
          onClick={closeForm}
          ariaLabel="Atšaukti vartotojo kūrimą"
        >
          <FaTimes />
          Atšaukti
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
