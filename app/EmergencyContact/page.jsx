"use client"

import React from "react";

const emergencyContacts = [
  {
    name: "Emergency",
    number: "112",
    description: "Unified Emergency",
    icon: "🚨",
    color: "red",
  },
  {
    name: "Ambulance",
    number: "102",
    description: "Medical Emergency",
    icon: "🚑",
    color: "red",
  },
  {
    name: "Police",
    number: "100",
    description: "Police Assistance",
    icon: "👮",
    color: "blue",
  },
  {
    name: "Fire",
    number: "101",
    description: "Fire Emergency",
    icon: "🔥",
    color: "orange",
  },
  {
    name: "Disaster Helpline",
    number: "1070",
    description: "Disaster Support",
    icon: "🏠",
    color: "green",
  },
  {
    name: "Women Helpline",
    number: "1091",
    description: "Women Safety",
    icon: "👩",
    color: "purple",
  },
];

const colors = {
  red: {
    icon: "bg-red-100 text-red-600",
    number: "text-red-600",
    button: "bg-red-600 hover:bg-red-700",
  },

  blue: {
    icon: "bg-blue-100 text-blue-600",
    number: "text-blue-600",
    button: "bg-blue-600 hover:bg-blue-700",
  },

  orange: {
    icon: "bg-orange-100 text-orange-600",
    number: "text-orange-600",
    button: "bg-orange-600 hover:bg-orange-700",
  },

  green: {
    icon: "bg-green-100 text-green-600",
    number: "text-green-600",
    button: "bg-green-600 hover:bg-green-700",
  },

  purple: {
    icon: "bg-purple-100 text-purple-600",
    number: "text-purple-600",
    button: "bg-purple-600 hover:bg-purple-700",
  },
};

function EmergencyContacts() {

  const callNumber = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10">

      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-6 shadow-xl sm:p-8">

        <div className="mb-8 text-center">

          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Emergency Contact Numbers
          </h1>

          <p className="mt-2 text-slate-500">
            Be Prepared. Stay Safe.{" "}
            <span className="font-bold text-red-600">
              Save Lives.
            </span>
          </p>

        </div>


        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {emergencyContacts.map((contact) => {

            const style = colors[contact.color];

            return (
              <div
                key={contact.number}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl ${style.icon}`}>
                    {contact.icon}
                  </div>
                  <div>

                    <h2 className="text-lg font-bold text-slate-800">
                      {contact.name}
                    </h2>

                    <p className="text-sm text-slate-500">
                      {contact.description}
                    </p>

                    <p
                      className={`text-3xl font-extrabold ${style.number}`}
                    >
                      {contact.number}
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => callNumber(contact.number)}
                  className={`w-full rounded-xl px-4 py-3 font-bold text-white transition ${style.button}`}
                >
                  ☎️ &nbsp; Call Now
                </button>

              </div>
            );
          })}

        </div>
        <div className="mt-6 flex items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">

          <div className="text-2xl">
            ⚠️
          </div>

          <div>

            <h3 className="font-bold text-slate-800">
              Save these numbers
            </h3>

            <p className="text-sm text-slate-600">
              You never know when you might need them.
              Stay alert and stay safe.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default EmergencyContacts;