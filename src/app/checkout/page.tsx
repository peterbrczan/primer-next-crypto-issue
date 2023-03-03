"use client"

import {useEffect} from "react";
import {PrimerPayments} from "@/gateway/primer-payments";

const primerPayments = new PrimerPayments('#checkout-container');

export default function Page() {
  useEffect(() => {
    const mount = async () => {
      try {
        await primerPayments.preload();
        await primerPayments.render();
      } catch (e) {
        console.error(e)
      }
    }

    mount();
  }, []);

  return (
    <div>
      <h1>checkout page</h1>
      <div id="checkout-container">
        {/* Place of Primer Payments' checkout form */}
      </div>
    </div>
  )
}
