import React, { useState, useEffect, ChangeEvent } from 'react';
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface PaymentDrawerContentProps {
    step: number;
    nextStep: () => void;
    prevStep: () => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    isValid: boolean;
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
    isSmallScreen: boolean;
}

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    paymentMethod: string;
    amount: number;
}

export default function PaymentDrawerContent({
    step,
    nextStep,
    prevStep,
    formData,
    setFormData,
    isValid,
    setIsValid,
    isSmallScreen,
}: PaymentDrawerContentProps) {
    useEffect(() => {
        if (step === 1) {
            const isFormValid = !!(formData.firstName && formData.lastName && formData.email && formData.phone);
            setIsValid(isFormValid);
        } else if (step === 2) {
            const isPaymentMethodValid = !!formData.paymentMethod;
            setIsValid(isPaymentMethodValid);
        }
    }, [step, formData, setIsValid]);

    switch (step) {
        case 1:
            return <PaymentForm nextStep={nextStep} formData={formData} setFormData={setFormData} isValid={isValid} setIsValid={setIsValid} />;
        case 2:
            return <PaymentMethodChoice nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} isValid={isValid} setIsValid={setIsValid} />;
        case 3:
            return <AmountChoice formData={formData} setFormData={setFormData} isValid={isValid} setIsValid={setIsValid} isSmallScreen={isSmallScreen} />;
        default:
            return <PaymentForm nextStep={nextStep} formData={formData} setFormData={setFormData} isValid={isValid} setIsValid={setIsValid} />;
    }
}

interface PaymentFormProps {
    nextStep: () => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    isValid: boolean;
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

function PaymentForm({
    nextStep,
    formData,
    setFormData,
    isValid,
    setIsValid,
}: PaymentFormProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    useEffect(() => {
        const isFormValid = !!(formData.firstName && formData.lastName && formData.email && formData.phone);
        setIsValid(isFormValid);
    }, [formData, setIsValid]);

    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            <div>
                <Label className="text-white" htmlFor="lastName">Nom</Label>
                <Input type="text" placeholder="Doe" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
            <div>
                <Label className="text-white" htmlFor="firstName">Prénom</Label>
                <Input type="text" placeholder="John" name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
            <div>
                <Label className="text-white" htmlFor="email">Email</Label>
                <Input type="email" placeholder="johnDoe@gmail.com" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <Label className="text-white" htmlFor="phone">Tél</Label>
                <Input type="tel" placeholder="+1 XXXXXXXXXX" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
        </div>
    );
}

interface PaymentMethodChoiceProps {
    nextStep: () => void;
    prevStep: () => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    isValid: boolean;
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

function PaymentMethodChoice({
    nextStep,
    prevStep,
    formData,
    setFormData,
    isValid,
    setIsValid,
}: PaymentMethodChoiceProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, paymentMethod: e.target.value });
        setIsValid(true);
    };

    useEffect(() => {
        const isPaymentMethodValid = !!formData.paymentMethod;
        setIsValid(isPaymentMethodValid);
    }, [formData.paymentMethod, setIsValid]);

    return (
        <div className="p-4">
            <h1 className="text-lg text-white font-semibold">Sélectionnez un moyen de paiement</h1>
            <div className="mt-4">
                <label className="inline-flex items-center">
                    <input type="radio" name="paymentMethod" value="CinetPay" checked={formData.paymentMethod === "CinetPay"} onChange={handleChange} />
                    <span className="ml-2 text-white">CinetPay</span>
                </label>
            </div>
            <div className="mt-4">
                <label className="inline-flex items-center">
                    <input type="radio" name="paymentMethod" value="PayPal" checked={formData.paymentMethod === "PayPal"} onChange={handleChange} />
                    <span className="ml-2 text-white">PayPal</span>
                </label>
            </div>
        </div>
    );
}

interface AmountChoiceProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    isValid: boolean;
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
    isSmallScreen: boolean;
}

function AmountChoice({
    formData,
    setFormData,
    isValid,
    setIsValid,
    isSmallScreen,
}: AmountChoiceProps) {
    const [goal, setGoal] = useState<number>(formData.amount);

    console.log(isSmallScreen);

    const onClick = (adjustment: number) => {
        const newAmount = Math.max(1000, Math.min(1000000000, goal + adjustment));
        setGoal(newAmount);
        setFormData({ ...formData, amount: newAmount });
        setIsValid(newAmount > 0);
    };

    const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedAmount = parseInt(e.target.value, 10);
        setGoal(selectedAmount);
        setFormData({ ...formData, amount: selectedAmount });
        setIsValid(selectedAmount > 0);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputAmount = parseInt(e.target.value, 10) || 0;
        setGoal(inputAmount);
        setFormData({ ...formData, amount: inputAmount });
        setIsValid(inputAmount > 0);
    };

    return (
        <div className={isSmallScreen ? "flex flex-col" : "p-4 flex justify-between space-x-4"}>
            <div className="items-center justify-center w-full">
                <div className={isSmallScreen ? 'pl-5' : ''}>
                    <p className='text-white text-sm'>Suggestions de montant</p>
                    <div className="flex flex-col pt-3 space-y-1">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="amountChoice"
                                value="5000"
                                checked={goal === 5000}
                                onChange={handleRadioChange}
                            />
                            <span className="ml-2 text-white">5000 FCFA</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="amountChoice"
                                value="10000"
                                checked={goal === 10000}
                                onChange={handleRadioChange}
                            />
                            <span className="ml-2 text-white">10000 FCFA</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="amountChoice"
                                value="20000"
                                checked={goal === 20000}
                                onChange={handleRadioChange}
                            />
                            <span className="ml-2 text-white">20000 FCFA</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className={isSmallScreen ? "h-[1px] w-full bg-white m-2" : 'shrink-0 w-[1px] h-[150px] bg-white'}></div>

            <div className="flex flex-col space-y-2 w-full">
                <div>
                    <p className={isSmallScreen ? 'pl-5 text-white text-sm' : 'text-white text-sm'}>Choisir mon propre montant</p>
                </div>
                <div className='flex items-center justify-center space-x-2 p-4 w-full'>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 text-white shrink-0 rounded-full"
                        onClick={() => onClick(-500)}
                        disabled={goal <= 5000}
                    >
                        <MinusIcon className="h-4 w-4" />
                    </Button>
                    <div className="flex-1 text-center">
                        <Input
                            type="number"
                            value={goal}
                            onChange={handleInputChange}
                            className="text-center text-5xl p-5 text-white bg-transparent border-none"
                            min={0}
                            max={1000000000}
                        />
                        <div className="text-[0.70rem] uppercase text-white font-bold">
                            FCFA
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 text-white shrink-0 rounded-full"
                        onClick={() => onClick(1000)}
                    >
                        <PlusIcon className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
