import { useMemo, useState } from "react";
import type { FormEvent } from "react";

type ProfileData = {
  name: string;
  dob: string;
  gender: string;
};

type Props = {
  onComplete: (data: ProfileData) => void;
  onCancel?: () => void;
};

export function MultiStepProfileForm({
  onComplete,
  onCancel = () => {},
}: Props) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ProfileData>({
    name: "",
    dob: "2010-01-01",
    gender: "",
  });
  const [otherGender, setOtherGender] = useState("");
  const [error, setError] = useState("");

  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], []);

  const validateStep = (): boolean => {
    if (step === 0) {
      if (!data.name.trim())
        return (setError("Please enter your name."), false);
      if (data.name.trim().length < 2)
        return (setError("Name should be at least 2 characters."), false);
    }
    if (step === 1) {
      if (!data.dob)
        return (setError("Please select your date of birth."), false);
      if (data.dob > todayStr)
        return (setError("Date of birth cannot be in the future."), false);
    }
    if (step === 2) {
      const val = data.gender.trim() || otherGender.trim();
      if (!val) return (setError("Please choose a gender option."), false);
    }
    setError("");
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (step < 2) {
      setStep((s) => s + 1);
    } else {
      const final: ProfileData = {
        ...data,
        gender: data.gender === "Other" ? otherGender || "Other" : data.gender,
      };
      onComplete(final);
    }
  };

  const handleBack = () => {
    setError("");
    if (step > 0) setStep((s) => s - 1);
    else onCancel?.();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNext();
  };

  const progressPct = ((step + 1) / 3) * 100;

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto px-6 py-8">
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div
          className="bg-[#FF9C25] h-2"
          style={{ width: `${progressPct}%` }}
        />
      </div>
      <h2 className="text-2xl font-bold tracking-[-0.6px] mb-2 text-[#FF9C25]">
        Tell us about you
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        3 quick questions to personalise your experience.
      </p>
      {step === 0 && (
        <fieldset className="mb-6">
          <label htmlFor="name" className="block text-sm mb-2">
            What should we call you?
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoFocus
            value={data.name}
            onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
            className="border border-gray-200 rounded-2xl py-3 px-4 w-full text-sm"
            placeholder="e.g., Alex"
          />
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className="mb-6">
          <label htmlFor="dob" className="block text-sm mb-2">
            Hi {data.name}, when is your birthday?
          </label>
          <input
            id="dob"
            name="dob"
            type="date"
            max={todayStr}
            value={data.dob}
            onChange={(e) => setData((d) => ({ ...d, dob: e.target.value }))}
            className="border border-gray-200 rounded-2xl py-3 px-4 w-full text-sm"
          />
          <p className="text-[11px] text-gray-400 mt-2">
            We only use this to personalise your experience.
          </p>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="mb-6">
          <legend className="block text-sm mb-2">What is your gender?</legend>
          <div className={`rounded-2xl p-3 flex flex-col gap-2`}>
            {["Female", "Male", "Non-binary", "Prefer not to say", "Other"].map(
              (opt) => (
                <label
                  key={opt}
                  className="inline-flex items-center gap-2 text-sm"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={opt}
                    checked={data.gender === opt}
                    onChange={(e) => {
                      setData((d) => ({ ...d, gender: e.target.value }));
                      if (e.target.value !== "Other") setOtherGender("");
                    }}
                  />
                  <span>{opt}</span>
                </label>
              ),
            )}
          </div>

          {data.gender === "Other" && (
            <input
              type="text"
              value={otherGender}
              onChange={(e) => setOtherGender(e.target.value)}
              placeholder="Type how you identify"
              className="mt-3 border border-gray-200 rounded-2xl py-3 px-4 w-full text-sm"
            />
          )}
        </fieldset>
      )}

      {error && (
        <div className="text-red-600 text-sm mb-4" role="alert">
          {error}
        </div>
      )}

      <div className="flex items-center justify-between mt-4">
        <button
          type="button"
          onClick={handleBack}
          className="px-4 py-2 text-sm rounded-xl border border-gray-200 hover:bg-gray-50"
        >
          {step === 0 ? "Cancel" : "Back"}
        </button>

        <button
          type="submit"
          className="bg-[#FF9C25] text-white px-4 py-2 text-sm rounded-xl shadow hover:opacity-90"
        >
          {step < 2 ? "Next" : "Finish"}
        </button>
      </div>
    </form>
  );
}
