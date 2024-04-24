import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import { useContext } from "react";
import { SelectedDateContext } from "../../context/SelectedDateContextProvider";
import { addNewEvent } from "../../services/event-services";
import { AllEventsContext } from "../../context/AllEventsContextProvider";

const Form = ({ handleCloseModal }) => {
  const { selectedDate } = useContext(SelectedDateContext);
  const { createdEvents, setCreatedEvents } = useContext(AllEventsContext);
  const defaultStartDate = selectedDate?.toISOString().substring(0, 10); //selectedDate?.toLocaleDateString();
  const defaultStartDate2 = selectedDate
    ?.toLocaleDateString()
    .substring(0, 10)
    .replace(/\//g, "-");

  const defaultValuesObj = {
    event: "",
    startDate: defaultStartDate2, //defaultStartDate2, //defaultStartDate,
    endDate: "",
    //location: "",
    //label: "",
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      event: "",
      startDate: "", //defaultStartDate2, //defaultStartDate,
      endDate: "",
      //location: "",
      //label: "",
    },
    //defaultValues: defaultValuesObj,
  });

  const submitForm = (data) => {
    console.log(data);
    console.log(defaultValuesObj);
    addNewEvent(data);
    //close modal
    handleCloseModal();
    //refresh and refetch all events
    setCreatedEvents(createdEvents + 1);
    console.log(createdEvents, "from Form");
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
      <h2>New Event</h2>
      {/* <p>Starting: {selectedDate?.toLocaleDateString()}</p> */}
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
          //defaultValue={defaultStartDate}
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
