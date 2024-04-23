import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import { useContext } from "react";
import { SelectedDateContext } from "../../context/SelectedDateContextProvider";
import { addNewEvent } from "../../services/event-services";

const Form = () => {
  const { selectedDate } = useContext(SelectedDateContext);
  const defaultStartDate = selectedDate?.toISOString().substring(0, 10); //selectedDate?.toLocaleDateString();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      event: "",
      startDate: defaultStartDate,
      endDate: "",
      //location: "",
      //label: "",
    },
  });

  const submitForm = (data) => {
    console.log(data);
    addNewEvent(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
      <h2>New Event</h2>
      <div>
        <label htmlFor="eventInput">Event: </label>
        <input type="text" id="eventInput" {...register("event")} />
        {errors.event && (
          <small className={styles.error}>{errors.event.message}</small>
        )}
      </div>
      <div>
        <label htmlFor="startDate">Start date:</label>{" "}
        <input
          //disabled
          defaultValue={defaultStartDate}
          type="date"
          {...register("startDate")}
        />
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
      {/* <div>
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
      </div> */}
      <button>Submit Form</button>
    </form>
  );
};

export default Form;
