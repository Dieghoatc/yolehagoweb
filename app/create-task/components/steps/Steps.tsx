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
          <StepItem color={currentStep >= 1 ? "blue" : "gray"}>
            <CalendarDays color={currentStep >= 1 ? "blue" : "gray"} />
          </StepItem>
          <div
            className={`${
              currentStep >= 2 ? "border-blue-400" : "border-gray-400"
            } border-t-1 w-full mt-[3px]`}
          ></div>
          <StepItem color={currentStep >= 2 ? "blue" : "gray"}>
            <MapPinPlusIcon color={currentStep >= 2 ? "blue" : "gray"} />
          </StepItem>
          <div
            className={`${
              currentStep >= 3 ? "border-blue-400" : "border-gray-400"
            } border-t-1 w-full mt-[3px]`}
          ></div>
          <StepItem color={currentStep >= 3 ? "blue" : "gray"}>
            <ListCollapseIcon color={currentStep >= 3 ? "blue" : "gray"} />
          </StepItem>
          <div
            className={`${
              currentStep >= 4 ? "border-blue-400" : "border-gray-400"
            } border-t-1 w-full mt-[3px]`}
          ></div>
          <StepItem color={currentStep >= 4 ? "blue" : "gray"}>
            <BanknoteArrowUpIcon color={currentStep >= 4 ? "blue" : "gray"} />
          </StepItem>
        </div>
        <div className="my-9 text-center">
          <h2 className="text-xl font-bold">{currentStep === 1 ? "Título y Fecha" : currentStep === 2 ? "Localización" : currentStep === 3 ? "Descripción" : "Precio"}</h2>
        </div>
      </div>
    </aside>
  );
}
