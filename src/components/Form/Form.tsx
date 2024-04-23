import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      eventName: "",
      startDate: "",
      endDate: "",
      location: "",
      label: "",
    },
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
      <h2>New Event</h2>
      <div>
        <label htmlFor="eventNameInput">Event name: </label>
        <input type="text" id="eventNameInput" {...register("eventName")} />
        {errors.eventName && (
          <small className={styles.error}>{errors.eventName.message}</small>
        )}
      </div>
      <div>
        <label htmlFor="startDate">Start date:</label>{" "}
        <input type="date" {...register("startDate")} />
        {errors.startDate && (
          <small className={styles.error}>{errors.startDate.message}</small>
        )}
      </div>
      <div>
        <label htmlFor="endDate">End date:</label>{" "}
        <input type="date" {...register("endDate")} />
        {errors.endDate && (
          <small className={styles.error}>{errors.endDate.message}</small>
        )}
      </div>
      <div>
        <label htmlFor="locationInput">Location: </label>
        <input type="text" id="locationInput" {...register("location")} />
        {errors.location && (
          <small className={styles.error}>{errors.location.message}</small>
        )}
      </div>
      <div>
        <label htmlFor="labelInput">Label: </label>
        <input type="text" id="labelInput" {...register("label")} />
        {errors.label && (
          <small className={styles.error}>{errors.label.message}</small>
        )}
      </div>
      <button>Submit Form</button>
    </form>
  );
};

export default Form;
