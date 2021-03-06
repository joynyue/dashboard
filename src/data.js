const claimData = {
  slas: [
    {
      status: "received",
      hours: 48,
    },
    {
      status: "awaiting_action",
      hours: 72,
    },
  ],
  claims: [
    {
      id: 1,
      claimant: "Skylar Dean",
      assignedTo: "John Smith",
      status: "received",
      createdAt: "2020-08-09T00:00:00.000Z",
      updatedAt: "2020-08-09T00:00:00.000Z",
    },
    {
      id: 2,
      claimant: "Amber Green",
      assignedTo: "John Smith",
      status: "awaiting_action",
      createdAt: "2020-08-12T00:00:00.000Z",
      updatedAt: "2020-08-13T00:00:00.000Z",
    },
    {
      id: 3,
      claimant: "Ross James",
      assignedTo: "John Smith",
      status: "received",
      createdAt: "2020-08-05T00:00:00.000Z",
      updatedAt: "2020-08-05T00:00:00.000Z",
    },
    {
      id: 4,
      claimant: "Kim Jones",
      assignedTo: "John Smith",
      status: "awaiting_action",
      createdAt: "2020-08-15T00:00:00.000Z",
      updatedAt: "2020-08-15T00:00:00.000Z",
    },
    {
      id: 5,
      claimant: "Henry Wong",
      assignedTo: "Michael Pool",
      status: "received",
      createdAt: "2020-08-18T00:00:00.000Z",
      updatedAt: "2020-08-18T00:00:00.000Z",
    },
    {
      id: 6,
      claimant: "James Lee",
      assignedTo: "Michael Pool",
      status: "awaiting_action",
      createdAt: "2020-08-10T00:00:00.000Z",
      updatedAt: "2020-08-13T00:00:00.000Z",
    },
    {
      id: 7,
      claimant: "Skylar Dean",
      assignedTo: "John Smith",
      status: "received",
      createdAt: "2020-08-01T00:00:00.000Z",
      updatedAt: "2020-08-03T00:00:00.000Z",
    },
    {
      id: 8,
      claimant: "Amber Green",
      assignedTo: "Michael Pool",
      status: "rejected",
      createdAt: "2020-08-02T00:00:00.000Z",
      updatedAt: "2020-08-02T00:00:00.000Z",
    },
  ],
};

export default claimData;
