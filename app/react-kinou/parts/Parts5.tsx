"use client";

import { Activity, Suspense, useState, use } from "react";

const ProfileForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="form">
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <input onChange={(e) => setAddress(e.target.value)} value={address} />
      <input onChange={(e) => setPhone(e.target.value)} value={phone} />
    </div>
  );
};

type Country = {
  id: string;
  label: string;
};

interface QuestionnaireFormProps {
  resource: Promise<Country[]>;
}

const QuestionnaireForm = ({ resource }: QuestionnaireFormProps) => {
  const countries = use(resource);
  const [animals, setAnimals] = useState("");

  return (
    <div className="form">
      <div>{JSON.stringify(countries)}</div>
      <input onChange={(e) => setAnimals(e.target.value)} value={animals} />
    </div>
  );
};

const fetchCountries = () => {
  const promise = new Promise<Country[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "001",
          label: "日本",
        },
      ]);
    }, 2000);
  });
  return promise;
};

export const Parts = () => {
  const [tab, setTab] = useState("profile");
  const [countries] = useState(() => fetchCountries());

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Activity mode={tab === "profile" ? "visible" : "hidden"}>
          <ProfileForm />
        </Activity>
        <Activity mode={tab === "questionnaire" ? "visible" : "hidden"}>
          <QuestionnaireForm resource={countries} />
        </Activity>

        <div className="preservation_buttons">
          <button
            className="button-secondary"
            disabled={tab === "profile"}
            onClick={() => setTab("profile")}
            type="button"
          >
            Prev
          </button>
          <button
            disabled={tab === "questionnaire"}
            onClick={() => setTab("questionnaire")}
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </Suspense>
  );
};
