import { Header } from "../header/Header";
import { Flex, Button, Grid } from "@radix-ui/themes";
import brush from "@/app/assets/brush2.png";
import { HeroBoxes } from "./heroBoxes/HeroBoxes";

export function Hero() {
  return (
    <section className="h-dvh ">
      <Header />
      <div className="h-dvh flex justify-center items-center">
        <div className="w-[1024px]">
          <Grid columns="2" gap="3" rows="1" width="full">
            <div className="flex flex-col justify-center align-center">
              <div className="relative">
                <div className="absolute bottom-0 right-0 z-0">
                  <img src={brush.src} alt="brush" />
                </div>
                <div className="relative z-10">
                  <h1 className="text-6xl font-extrabold">
                    DALO POR <span className="text-[#4d52fe]">HECHO</span>
                  </h1>
                  <p className="text-xl my-4">
                    Publica tus tareas, y elige a la persona adecuada.
                  </p>
                </div>
              </div>
              <div className="flex mt-4">
                <Flex gap="3" align="center">
                  <Button size="3" variant="soft">
                    Publica tu tarea
                  </Button>
                  <Button size="3" variant="solid">
                    Gana dinero como trabajador
                  </Button>
                </Flex>
              </div>
            </div>
            <div className="flex flex-col justify-center align-center">
            <HeroBoxes />
            </div>
          </Grid>
        </div>
      </div>
    </section>
  );
}
