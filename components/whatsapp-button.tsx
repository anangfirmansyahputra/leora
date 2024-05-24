"use client";

import Image from "next/image";

export default function WhatsappButton() {
  function redirectToWhatsApp() {
    const phoneNumber = "+6281292499946";
    const message =
      "Halo, saya tertarik dengan layanan Leora. Bisa saya dapatkan informasi lebih lanjut?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <div className="fixed bottom-5 right-5 flex items-center space-x-3 z-[10]">
      <div
        role="button"
        onClick={redirectToWhatsApp}
        className="bg-[#fafafa] px-5 py-2 rounded-lg font-semibold shadow-xl"
      >
        Need a help?
      </div>
      <Image
        src={"/WhatsApp.svg"}
        onClick={redirectToWhatsApp}
        alt="Whatsapp"
        width={50}
        height={50}
      />
    </div>
  );
}
