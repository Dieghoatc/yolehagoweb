"use client";

import { StepItem } from "./components/StepItem";
import {
  CalendarDays,
  MapPinPlusIcon,
  ListCollapseIcon,
  BanknoteArrowUpIcon,
} from "lucide-react";

interface StepsProps {
  currentStep: number;
}

export function Steps({ currentStep }: StepsProps) {
  return (
    <aside>
      <div className="mx-3 md:mx-0">
        <div className="flex gap-2 justify-between align-center w-full">
          <StepItem color={currentStep >= 1 ? "emerald" : "gray"}>
            <CalendarDays color={currentStep >= 1 ? "green" : "gray"} />
          </StepItem>
          <div
            className={`${
              currentStep >= 2 ? "border-emerald-700" : "border-gray-400"
            } border-t-1 w-full mt-[3px]`}
          ></div>
          <StepItem color={currentStep >= 2 ? "emerald" : "gray"}>
            <MapPinPlusIcon color={currentStep >= 2 ? "green" : "gray"} />
          </StepItem>
          <div
            className={`${
              currentStep >= 3 ? "border-emerald-700" : "border-gray-400"
            } border-t-1 w-full mt-[3px]`}
          ></div>
          <StepItem color={currentStep >= 3 ? "emerald" : "gray"}>
            <ListCollapseIcon color={currentStep >= 3 ? "green" : "gray"} />
          </StepItem>
          <div
            className={`${
              currentStep >= 4 ? "border-emerald-700" : "border-gray-400"
            } border-t-1 w-full mt-[3px]`}
          ></div>
          <StepItem color={currentStep >= 4 ? "emerald" : "gray"}>
            <BanknoteArrowUpIcon color={currentStep >= 4 ? "green" : "gray"} />
          </StepItem>
        </div>
        <div className="my-9 text-center">
          <h2 className="text-xl font-bold">{currentStep === 1 ? "Título y Fecha" : currentStep === 2 ? "Localización" : currentStep === 3 ? "Descripción" : "Precio"}</h2>
        </div>
      </div>
    </aside>
  );
}
