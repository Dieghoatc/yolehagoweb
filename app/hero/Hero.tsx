import { Header } from "../header/Header";
import { Flex, Button, Grid } from "@radix-ui/themes";
import brush from "@/app/assets/brush2.png";
import { HeroBoxes } from "./heroBoxes/HeroBoxes";
import { useRouter } from "next/navigation";


export function Hero() {

  const router = useRouter()

  return (
    <section className="">
      <Header />
      <div className="flex justify-center items-center mx-4 mb: my-6">
        <div className="w-[1024px]">
          <Grid columns={{ initial: "1", md: "2" }} gap="3" rows="1" width="full">
            <div className="flex flex-col justify-center align-center">
              <div className="relative">
                <div className="absolute bottom-0 right-0 z-0">
                  <img src={brush.src} alt="brush" />
                </div>
                <div className="relative z-10">
                  <h1 className="text-6xl font-extrabold">
                    DALO POR <span className="text-[#4d52fe]">HECHO</span>
                  </h1>
                  <p className="text-xl my-4 text-medium">
                    Publica tus tareas, y elige a la persona adecuada.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Flex className="md:flex-row flex-col" gap="3" align="center">
                  <Button size="3" variant="soft" onClick={() => router.push("/create-task")}>
                    Publica tu tarea
                  </Button>
                  <Button size="3" variant="solid" >
                    Gana dinero como trabajador
                  </Button>
                </Flex>
              </div>
            </div>
            <HeroBoxes />
          </Grid>
        </div>
      </div>
    </section>
  );
}
