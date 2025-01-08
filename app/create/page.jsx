import React from "react";
import LogoTitle from "./_components/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

function CreateLogo() {
  return (
    <div className="mt-28 p-10 border rounded-xl">
      <LogoTitle />
      <div className="flex items-center justify-between mt-10">
        <Button variant="outline">
          <ArrowLeft />
          Previous
        </Button>
        <Button>
          <ArrowRight />
          Continue
        </Button>
      </div>
    </div>
  );
}

export default CreateLogo;
