"use client";
import React, { useState } from "react";
import LogoTitle from "./_components/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();
  const onHandleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <div className="mt-28 p-10 border rounded-xl">
      {step == 1 ? (
        <LogoTitle onHandleChange={(v) => onHandleChange("title", v)} />
      ) : null}
      <div className="flex items-center justify-between mt-10">
        {step != 1 && (
          <Button variant="outline">
            <ArrowLeft />
            Previous
          </Button>
        )}
        <Button>
          <ArrowRight />
          Continue
        </Button>
      </div>
    </div>
  );
}

export default CreateLogo;
