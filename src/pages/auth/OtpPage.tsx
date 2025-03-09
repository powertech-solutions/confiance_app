import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import ConfianceLogo from "../../assets/images/confiance/icon-confiance-blue-gradient.png";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "@/providers/AuthProvider";

export interface OtpType { 
    code: string;
}

export default function OtpPage() {

    const { handleSubmit, control, reset } = useForm<OtpType>({});

    const { OtpValidation } = useAuth();

    const onSubmitOtp = handleSubmit (async (data) => {
        // console.log(data);
        OtpValidation(data);
        reset();
    });

    return (
        <div className="h-full relative flex justify-center">
            <div>
                <div className="rounded-[8px] bg-white px-[2em] pt-[1.7em] pb-[2.5em] w-[25em]">
                    <div className="flex flex-col items-center mb-[2em]">
                        <img src={ConfianceLogo} alt="Confiance logo" className="w-[3.5em]" />
                        <h3 className="font-extrabold text-[1.1em]">Confiance</h3>
                    </div>
                    <form action="" onSubmit={onSubmitOtp}>
                        <div className="flex flex-col gap-[1em]">
                            <h3 className="text-center font-semibold text-[0.9em]">Entrer le numéro de confirmation</h3>
                            <div className="flex justify-center mb-[1em]">
                                <Controller 
                                    name="code"
                                    control={control}
                                    rules={{ 
                                        required: true 
                                    }}
                                    render={({ field }) => (
                                        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} {...field}>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    )}
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white font-medium rounded-[5px] py-[0.5em] mt-[1em]" style={{ background: "linear-gradient(90deg, #01A4F7 0%, #0A69FB 100%)" }}>
                            Confirmer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
