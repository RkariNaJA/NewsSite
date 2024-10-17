"use client";

import { useRouter } from "next/navigation";

export default function ModalBackdrop() {
  // nested routes inside of dynamic route will have access to that dynamic route parameter ([slug] parameter)
  const router = useRouter(); // give acces to a router object

  return <div className="modal-backdrop" onClick={router.back} />; // navigate back to the current page
}
