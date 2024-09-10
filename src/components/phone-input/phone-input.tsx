import { Input } from "components/input/input";
import { IInputProps } from "components/input/types";
import { forwardRef } from "react";
import { toast } from "react-toastify";

export const PhoneInput = forwardRef<
  HTMLInputElement,
  Omit<IInputProps, "type" | "justNumber">
>((props, ref) => {
  const onChangePhone = (phone: string) => {
    if (phone.length === 2 && !phone.startsWith("09")) {
      toast.error("شماره موبایل باید با 09 شروع شود.");
      return;
    }
    if (phone.length !== 12) {
      props.onChange(phone);
    }
  };

  return (
    <Input
      {...props}
      ref={ref}
      type="number"
      onChange={(value) => onChangePhone(value)}
      justNumber
    />
  );
});
