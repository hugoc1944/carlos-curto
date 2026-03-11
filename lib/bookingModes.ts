// bookingModes.ts

export type BookingMode = "presential" | "phone";

export const BOOKING_MODES: {
  id: BookingMode;
  label: string;
  description: string;
  available: boolean;
  note?: string;
}[] = [
  {
    id: "presential",
    label: "Consulta presencial",
    description: "Consulta no consultório em Lisboa ou no Porto",
    available: true,
    note: "Disponível apenas em Lisboa ou no Porto",
  },
  {
    id: "phone",
    label: "Consulta por telefone",
    description: "Troca confidencial realizada por chamada",
    available: true,
  },
];