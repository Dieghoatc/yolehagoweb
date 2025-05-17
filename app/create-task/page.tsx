"use client";

import { useTaskCreationStore } from "./store";
import { useState } from "react";
import { HeaderTask } from "./components/HeaderTask";
import { Steps } from "./components/steps/Steps";
import { useRouter } from "next/navigation";

const timeSlotList = ["Mañana", "Medio día", "Tarde", "Noche"];

import { tasks } from "@/app/db/task";

export default function CreateTask() {
  const route = useRouter();
  const {
    currentStep,
    title,
    date,
    timeSlot,
    location,
    description,
    price,
    category,
    setCurrentStep,
    setTitle,
    setDate,
    setTimeSlot,
    setLocation,
    setDescription,
    setPrice,
    setCategory,
  } = useTaskCreationStore();

  const [showError, setShowError] = useState(false);

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return title && date && timeSlot;
      case 2:
        return location;
      case 3:
        return description;
      case 4:
        return price;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (!validateStep()) {
      setShowError(true);
      return;
    }
    setCurrentStep(currentStep + 1);
    setShowError(false);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    setShowError(false);
  };

  const handleSubmit = () => {
    switch (timeSlot) {
      case "Mañana":
        setTimeSlot("morning");
        break;
      case "Medio día":
        setTimeSlot("midday");
        break;
      case "Tarde":
        setTimeSlot("afternoon");
        break;
      case "Noche":
        setTimeSlot("night");
        break;
      default:
        setTimeSlot("anytime");
        break;
    }

    switch (category) {
      case "Tecnología":
        setCategory("tech");
        break;
      case "Salud":
        setCategory("health");
        break;
      case "Belleza":
        setCategory("beauty");
        break;
      case "Fitness":
        setCategory("fitness");
        break;
      case "Educación":
        setCategory("education");
        break;
      default:
        setCategory("other");
        break;
    }

    console.log(tasks);

    const storedTasks = localStorage.getItem("tasks") || null;
    const currentTasks = storedTasks ? JSON.parse(storedTasks) : [];

    const newTask = {
      id: (currentTasks.length + 1).toString(),
      title,
      description,
      price: Number(price),
      date,
      timeSlot: timeSlot as
        | "morning"
        | "afternoon"
        | "evening"
        | "night"
        | "midday"
        | "anytime",
      location,
      status: "pending",
      category: category as
        | "tech"
        | "health"
        | "beauty"
        | "fitness"
        | "education"
        | "other",
    };

    localStorage.setItem("tasks", JSON.stringify([...currentTasks, newTask]));

    route.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderTask />
      <main className="w-full md:max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-4">
          <Steps currentStep={currentStep} />
          <div className="bg-white rounded-lg shadow-md p-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6 text-blue-700">
                  Empecemos con lo básico
                </h3>
                <p>Escribe en pocas palabras lo que necesitas hacer</p>
                <div>
                  <label className="text-md font-bold text-blue-600">
                    Titulo de la tarea
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-3 h-10 w-full rounded-md border-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Selecciona una categoría</option>
                    <option value="tech">Tecnología</option>
                    <option value="health">Salud</option>
                    <option value="beauty"> Belleza</option>
                    <option value="fitness">Fitness</option>
                    <option value="education">Educación</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="text-md font-bold text-blue-600">
                    Fecha
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-1 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="h-10 text-md font-bold text-blue-600">
                    Jornada
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="mt-1 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Selecciona una jornada</option>
                    {timeSlotList.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
                {showError && !title && (
                  <p className="text-red-500 text-sm">
                    Por favor, completa el título
                  </p>
                )}
                {showError && !date && (
                  <p className="text-red-500 text-sm">
                    Por favor, selecciona una fecha
                  </p>
                )}
                {showError && !timeSlot && (
                  <p className="text-red-500 text-sm">
                    Por favor, selecciona una jornada
                  </p>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="text-md font-bold text-blue-600">
                    Localización
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                {showError && !location && (
                  <p className="text-red-500 text-sm">
                    Por favor, completa la localización
                  </p>
                )}
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="text-md font-bold text-blue-600">
                    Descripción
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows={4}
                  ></textarea>
                </div>
                {showError && !description && (
                  <p className="text-red-500 text-sm">
                    Por favor, completa la descripción
                  </p>
                )}
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <div>
                  <label className="text-md font-bold text-blue-600">
                    Precio
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="mt-1 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="$"
                  />
                </div>
                {showError && !price && (
                  <p className="text-red-500 text-sm">
                    Por favor, completa el precio
                  </p>
                )}
              </div>
            )}

            <div className="flex justify-between mt-6">
              {currentStep > 1 && (
                <button
                  onClick={handlePrevious}
                  className="px-2 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Anterior
                </button>
              )}
              {currentStep < 4 ? (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Siguiente
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Publicar tarea
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
