export interface EventData {
  id: number;
  event: string;
  startDate: string;
  endDate: string;
}

export const addNewEvent = async (
  data: Partial<EventData>
): Promise<EventData> => {
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to create event");
  }
  return response.json();
};

export const getAllEvents = async (): Promise<EventData[]> => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Error("Failed to get events");
  }

  const data = await response.json();
  return data;
};

export const getEventById = async (eventId: string): Promise<EventData> => {
  const response = await fetch(`http://localhost:8080/events/${eventId}`);

  if (!response.ok) {
    throw new Error(`Failed to get event with id ${eventId}`);
  }

  const data = await response.json();
  return data;
};

export const deleteEventById = async (eventId: string): Promise<number> => {
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete event");
  }
  return response.status;
};

export const updateEvent = async (
  data: Partial<EventData>
): Promise<EventData> => {
  const eventId = data.id;
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to update event");
  }
  return response.json();
};
