import React, { useState, Dispatch, SetStateAction } from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PaymentDrawerContent from "./PaymentDrawerContent";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface PaymentDrawerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  paymentMethod: string;
  amount: number;
}

export function PaymentDrawer({ open, setOpen }: PaymentDrawerProps) {
  const [step, setStep] = useState<number>(1);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    paymentMethod: '',
    amount: 5000,
  });

  const nextStep = () => {
    if (isValid) {
      setStep(prevStep => prevStep + 1);
      // setIsValid(false);  // Reset isValid for the next step
    }
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
    // setIsValid(true);  // Assume previous steps are always valid
  };

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Appel initial pour définir correctement l'état
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <div className="w-full container">
          <DrawerHeader>
            <DrawerTitle>
              <p className="text-lg text-white font-semibold">Contribuez ici ! <br />Validez les étapes suivantes {step}/3</p>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 text-white shrink-0 rounded-full"
                onClick={prevStep}
                disabled={step === 1}
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Go back</span>
              </Button>
            </DrawerTitle>
            {/* <p className="text-sm text-white"></p> */}
          </DrawerHeader>
          <PaymentDrawerContent
            step={step}
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            isValid={isValid}
            isSmallScreen={isSmallScreen}
            setIsValid={setIsValid}
            setFormData={setFormData}
          />
          <DrawerFooter className="flex flex-col space-y-2">
            {step === 1 && (
              <Button className="w-full flex flex-row space-x-10 bg-white text-black rounded-xl" onClick={nextStep} disabled={!isValid}>
                Suivant <ArrowRight />
              </Button>
            )}
            {step === 2 && (
              <div className="flex flex-row space-x-2">
                <Button variant="outline" className="w-full flex flex-row space-x-10 bg-white text-black rounded-xl" onClick={prevStep}>
                  <ArrowLeft /> Retour
                </Button>
                <Button className="w-full flex flex-row space-x-10 bg-white text-black rounded-xl" disabled={!isValid} onClick={nextStep}>
                  Suivant <ArrowRight />
                </Button>
              </div>
            )}
            {step === 3 && (
              <Button className="w-full bg-white text-black rounded-xl" disabled={!isValid}>
                Participez
              </Button>
            )}
            <DrawerClose asChild>
              <Button variant="outline" className="w-full text-white rounded-xl">Fermer</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
